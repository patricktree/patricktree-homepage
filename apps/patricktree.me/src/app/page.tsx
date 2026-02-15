import { styled } from '@pigment-css/react';
import type { Metadata } from 'next';
import { PenTool } from 'react-feather';

import { headingIds } from '#pkg/app/heading-ids.js';
import { ArticlesList } from '#pkg/components/articles-list/index.js';
import { Introduction } from '#pkg/components/introduction/index.js';
import { Main } from '#pkg/components/main/index.js';
import { PATHS } from '#pkg/constants-server.js';
import { getAllMarkdownFiles } from '#pkg/mdx/index.js';

async function HomePage() {
  const [posts, tidbits] = await Promise.all([
    getAllMarkdownFiles(PATHS.POSTS),
    getAllMarkdownFiles(PATHS.TIDBITS),
  ]);

  const writingEntries = [
    ...posts.map((article) => ({ pathPrefix: '/blog', article })),
    ...tidbits.map((article) => ({ pathPrefix: '/tidbits', article })),
  ];

  return (
    <HomepageContainer>
      <Introduction />

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
  title: 'Patrick Kerschbaum',
  description: 'Homepage of Patrick Kerschbaum',
  openGraph: {
    title: 'Patrick Kerschbaum',
    description: 'Homepage of Patrick Kerschbaum',
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
