import type { Metadata } from "next";
import path from "node:path";
import invariant from "tiny-invariant";

import { schema_listingFrontmatterData } from "@patricktree-homepage/mdx/schema";

import { MDXContentClientComponent } from "#pkg/app/projects/cup-create-an-audiobook-from-a-url/mdx-content-client-component.jsx";
import styles from "#pkg/app/projects/cup-create-an-audiobook-from-a-url/styles.module.css";
import { ArticleContainerProject } from "#pkg/components/article-container-project/index.js";
import { ClassesAliases } from "#pkg/constants-browser.js";
import { PATHS } from "#pkg/constants-server.js";
import { mapMDXParseResultToMetadata, parseMDXFileAndCollectHrefs } from "#pkg/mdx/index.js";
import { PROJECT_ASSETS } from "#pkg/project-assets.js";

const faviconsClassName = styles[ClassesAliases.FAVICONS];

const SEGMENT = path.parse(__dirname).name;

async function ProjectPage() {
  invariant(faviconsClassName);

  const mdxParseResult = await parseProjectMDXFile();

  return (
    <ArticleContainerProject
      mdxContent={<MDXContentClientComponent />}
      mdxParseResult={mdxParseResult}
      faviconsClassName={faviconsClassName}
      {...PROJECT_ASSETS.CREATE_AUDIOBOOK_FROM_URL}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const mdxParseResult = await parseProjectMDXFile();

  return mapMDXParseResultToMetadata(mdxParseResult);
}

async function parseProjectMDXFile() {
  return parseMDXFileAndCollectHrefs(
    path.join(PATHS.PROJECTS, `${SEGMENT}.mdx`),
    schema_listingFrontmatterData,
  );
}

export default ProjectPage;
