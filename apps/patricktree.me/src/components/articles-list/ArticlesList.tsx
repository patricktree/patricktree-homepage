import { styled } from "@pigment-css/react";
import dayjs from "dayjs";
import type React from "react";

import type { ListingFrontmatterData, MDXFile } from "@patricktree-homepage/mdx/schema";

import { ArticleTile } from "#pkg/components/article-tile/index.js";
import { QUERIES } from "#pkg/constants-browser.js";

type ArticlesListEntry = {
  pathPrefix: string;
  article: MDXFile<ListingFrontmatterData>;
  sortDateISO?: string;
};

type ArticlesListProps = {
  entries: ArticlesListEntry[];
};

export const ArticlesList: React.FC<ArticlesListProps> = ({ entries }) => {
  const sortedEntries = [...entries].sort((a, b) => {
    if (!a.sortDateISO || !b.sortDateISO) {
      return 0;
    }

    return dayjs(b.sortDateISO).diff(a.sortDateISO);
  });

  return (
    <ArticlesListContainer>
      {sortedEntries.map((entry) => (
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
