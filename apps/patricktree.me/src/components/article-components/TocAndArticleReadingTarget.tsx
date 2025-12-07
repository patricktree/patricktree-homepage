'use client';

import { styled } from '@pigment-css/react';

import { useReadingProgressContext } from '#pkg/components/reading-progress-bar/ReadingProgressContext.jsx';
import { TOC_QUERY } from '#pkg/constants-browser.js';

export const TocAndArticleReadingTarget: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setReadingTarget } = useReadingProgressContext();

  return <TocAndArticleDiv ref={setReadingTarget}>{children}</TocAndArticleDiv>;
};

const TocAndArticleDiv = styled.div`
  /* stylelint-disable-next-line media-query-no-invalid -- works */
  @media ${TOC_QUERY} {
    grid-template-areas: 'article toc';
    grid-template-columns: 1fr 250px;
    column-gap: calc(6 * var(--spacing-base));
  }
  display: grid;
  grid-template-areas: 'article';
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

  margin-block-start: 85px;
`;
