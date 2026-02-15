import { styled } from '@pigment-css/react';
import React from 'react';

import type { Heading } from '@patricktree-homepage/mdx/schema';

import { TableOfContentsAnchors } from '#pkg/components/table-of-contents/TableOfContentsAnchors.jsx';

export type TableOfContentsProps = {
  headings: Heading[];
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (headings.length === 0) {
    return null;
  }

  return (
    <TocNav aria-labelledby="table-of-contents-label">
      <TocHeading id="table-of-contents-label">Table of Contents</TocHeading>
      <TableOfContentsAnchors headings={headings} />
    </TocNav>
  );
};

const TocNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--spacing-base));
  align-items: start;
`;

const TocHeading = styled.span`
  margin-block-start: 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
`;
