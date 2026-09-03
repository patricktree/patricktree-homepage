import { styled } from "@pigment-css/react";
import type { Metadata } from "next";
import { Folder, PenTool } from "react-feather";
import invariant from "tiny-invariant";

import { schema_listingFrontmatterData } from "@patricktree-homepage/mdx/schema";

import { headingIds } from "#pkg/app/heading-ids.js";
import { ArticlesList } from "#pkg/components/articles-list/index.js";
import { Introduction } from "#pkg/components/introduction/index.js";
import { Main } from "#pkg/components/main/index.js";
import { ProjectTile } from "#pkg/components/project-tile/index.js";
import { PATHS } from "#pkg/constants-server.js";
import { getAllMarkdownFiles, getAllMarkdownFilesMatchingSchema } from "#pkg/mdx/index.js";
import { PROJECT_ASSETS } from "#pkg/project-assets.js";

async function HomePage() {
  const [projects, posts, tidbits] = await Promise.all([
    getAllMarkdownFilesMatchingSchema(PATHS.PROJECTS, schema_listingFrontmatterData),
    getAllMarkdownFiles(PATHS.POSTS),
    getAllMarkdownFiles(PATHS.TIDBITS),
  ]);

  const writingEntries = [
    ...posts.map((article) => ({
      pathPrefix: "/blog",
      article,
      sortDateISO: article.frontmatter.publishedAtISO,
    })),
    ...tidbits.map((article) => ({
      pathPrefix: "/tidbits",
      article,
      // Use lastUpdatedAtISO so that tidbits with content updates get surfaced to the top
      sortDateISO: article.frontmatter.lastUpdatedAtISO ?? article.frontmatter.publishedAtISO,
    })),
  ];

  const createAudiobookFromURLProject = projects.find(
    (project) => project.segment === "cup-create-an-audiobook-from-a-url",
  );
  invariant(
    createAudiobookFromURLProject,
    "Cup - Create an Audiobook from a URL project must exist",
  );

  return (
    <HomepageContainer>
      <Introduction />

      <HomepageSection>
        <SectionHeading id={headingIds.projects}>
          <Folder size="1em" />
          Projects
        </SectionHeading>
        <ProjectTile
          project={createAudiobookFromURLProject}
          href="/projects/cup-create-an-audiobook-from-a-url"
          {...PROJECT_ASSETS.CREATE_AUDIOBOOK_FROM_URL}
        />
      </HomepageSection>

      <HomepageSection>
        <SectionHeading id={headingIds.writing}>
          <PenTool size="1em" />
          Writing
        </SectionHeading>
        <ArticlesList entries={writingEntries} />
      </HomepageSection>
    </HomepageContainer>
  );
}

export const metadata: Metadata = {
  title: "Patrick Kerschbaum",
  description: "Homepage of Patrick Kerschbaum",
  openGraph: {
    title: "Patrick Kerschbaum",
    description: "Homepage of Patrick Kerschbaum",
  },
};

const HomepageContainer = styled(Main)`
  display: flex;
  flex-direction: column;
  gap: calc(8 * var(--spacing-base));
  align-items: stretch;
`;

const HomepageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(1.5 * var(--spacing-base));
  align-items: center;
`;

const SectionHeading = styled.h2`
  display: flex;
  gap: calc(1 * var(--spacing-base));
  align-items: center;

  margin-block: 0;
  font-size: var(--font-size-xxl);
`;

export default HomePage;
