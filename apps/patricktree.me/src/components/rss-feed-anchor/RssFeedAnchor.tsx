import { styled } from '@pigment-css/react';
import type React from 'react';
import { Rss } from 'react-feather';

import { Anchor } from '#pkg/elements/index.js';

export const RssFeedAnchor: React.FC = () => {
  return (
    <StyledAnchor href="/rss.xml" target="_blank">
      <Rss width={20} height={20} />
    </StyledAnchor>
  );
};

const StyledAnchor = styled(Anchor)`
  display: grid;
  flex-shrink: 0;
  place-items: center;
  padding-block-start: calc(var(--header-content-padding-block-start) + 4px);
  padding-block-end: var(--header-content-padding-block-end);

  padding-inline: calc(1 * var(--spacing-base));
`;
