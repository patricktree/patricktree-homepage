import { fetchFavicons } from "@patricktree-stack/fetch-favicon";
import { arrays } from "@patricktree-stack/utils-ecma/array.utils";
import { jsonUtil } from "@patricktree-stack/utils-ecma/json.utils";
import fs from "node:fs";
import path from "node:path";

import { parseMDXFileAndCollectHrefs } from "@patricktree-homepage/mdx/mdx";
import {
  schema_frontmatterData,
  schema_listingFrontmatterData,
} from "@patricktree-homepage/mdx/schema";

import { PATHS } from "#pkg/constants-server.js";

async function fetchFaviconsForAllHrefsAndWriteToFile() {
  const articleDirectories = [
    { content: PATHS.POSTS, frontmatterSchema: schema_frontmatterData },
    { content: PATHS.PROJECTS, frontmatterSchema: schema_listingFrontmatterData },
    { content: PATHS.TIDBITS, frontmatterSchema: schema_frontmatterData },
  ];
  const filesByDirectory = await Promise.all(
    articleDirectories.map(async ({ content, frontmatterSchema }) => {
      const basenames = await fs.promises.readdir(content);

      return basenames
        .filter((basename) => basename.endsWith(".mdx"))
        .map((basename) => ({
          fileAbsolutePath: path.join(content, basename),
          frontmatterSchema,
        }));
    }),
  );
  const files = filesByDirectory.flat();

  // Collect all hrefs of all articles (with duplicates removed)
  let hrefsOfAllArticles: string[] = [];
  await Promise.all(
    files.map(async ({ fileAbsolutePath, frontmatterSchema }) => {
      const { collectedHrefs } = await parseMDXFileAndCollectHrefs(
        fileAbsolutePath,
        frontmatterSchema,
      );
      hrefsOfAllArticles.push(...collectedHrefs);
    }),
  );
  hrefsOfAllArticles = arrays.uniqueValues(hrefsOfAllArticles);

  const finalResult = await fetchFavicons(hrefsOfAllArticles);
  await fs.promises.writeFile(
    PATHS.FAVICONS_FOR_WEBSITES,
    jsonUtil.safeStringify(finalResult, undefined, 2),
    { encoding: "utf8" },
  );
}

void fetchFaviconsForAllHrefsAndWriteToFile();
