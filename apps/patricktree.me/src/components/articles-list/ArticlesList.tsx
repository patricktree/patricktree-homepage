import { styled } from '@pigment-css/react';
import dayjs from 'dayjs';
import type React from 'react';

import type { MDXFile } from '@patricktree-homepage/mdx/schema';

import { ArticleTile } from '#pkg/components/article-tile/index.js';
import { QUERIES } from '#pkg/constants-browser.js';

type ArticlesListEntry = {
  pathPrefix: string;
  article: MDXFile;
};

type ArticlesListProps = {
  entries: ArticlesListEntry[];
};

export const ArticlesList: React.FC<ArticlesListProps> = ({ entries }) => {
  return (
    <ArticlesListContainer>
      {entries
        .sort((a, b) =>
          dayjs(b.article.frontmatter.publishedAtISO).diff(a.article.frontmatter.publishedAtISO),
        )
        .map((entry) => (
          <ArticleTile
            key={entry.article.segment}
            article={entry.article}
            href={`${entry.pathPrefix}/${encodeURIComponent(entry.article.segment)}`}
          />
        ))}
    </ArticlesListContainer>
  );
};

const ArticlesListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: calc(3 * var(--spacing-base));
  grid-column-gap: calc(3 * var(--spacing-base));
  align-items: stretch;

  /* stylelint-disable-next-line media-query-no-invalid -- works */
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;
