import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

import {
  type ListingFrontmatterData,
  type MDXFile,
  type MDXParseResult,
  schema_frontmatterData,
} from "@patricktree-homepage/mdx/schema";

export { parseMDXFileAndCollectHrefs } from "@patricktree-homepage/mdx/mdx";
export type { MDXParseResult } from "@patricktree-homepage/mdx/schema";

export async function getAllMarkdownFiles(absolutePathToDirectory: string): Promise<MDXFile[]> {
  const markdownFiles = await getAllMarkdownFilesMatchingSchema(
    absolutePathToDirectory,
    schema_frontmatterData,
  );

  return markdownFiles.filter((file) => file.frontmatter.published);
}

export async function getAllMarkdownFilesMatchingSchema<TFrontmatterData>(
  absolutePathToDirectory: string,
  frontmatterSchema: { parse: (data: unknown) => TFrontmatterData },
): Promise<MDXFile<TFrontmatterData>[]> {
  let files = await fs.promises.readdir(absolutePathToDirectory);
  files = files.filter((fileName) => fileName.endsWith(".mdx"));

  const markdownFiles = await Promise.all(
    files.map(async (fileName) => {
      const source = await fs.promises.readFile(
        path.join(absolutePathToDirectory, fileName),
        "utf8",
      );

      const segment = fileName.replace(/\.mdx$/, "");
      const frontmatter = frontmatterSchema.parse(matter(source).data);
      const markdownFile: MDXFile<TFrontmatterData> = {
        frontmatter,
        segment,
      };

      return markdownFile;
    }),
  );

  return markdownFiles;
}

export function mapMDXParseResultToMetadata(
  mdxParseResult: MDXParseResult<ListingFrontmatterData>,
) {
  return {
    title: mdxParseResult.frontmatter.title,
    description: mdxParseResult.frontmatter.description,
    openGraph: {
      title: mdxParseResult.frontmatter.title,
      description: mdxParseResult.frontmatter.description,
    },
  } as const;
}
