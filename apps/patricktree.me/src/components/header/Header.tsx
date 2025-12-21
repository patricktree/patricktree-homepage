import { styled } from '@pigment-css/react';
import type React from 'react';

import { Nav } from '#pkg/components/nav/index.js';
import { RssFeedAnchor } from '#pkg/components/rss-feed-anchor/index.js';
import { ToggleThemeButton } from '#pkg/components/toggle-theme-button/index.js';

export const Header: React.FC = () => {
  return (
    <FullBleedHeader>
      <HeaderContent>
        <Nav />

        <AnchorAndButtonsArea>
          <RssFeedAnchor />

          <ToggleThemeButton />
        </AnchorAndButtonsArea>
      </HeaderContent>
    </FullBleedHeader>
  );
};

const FullBleedHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  flex-shrink: 0;
  align-self: stretch;

  background-color: var(--color-bg);
`;

const HeaderContent = styled.div`
  --header-content-padding-block-start: calc(1.5 * var(--spacing-base));
  --header-content-padding-block-end: calc(2 * var(--spacing-base));

  display: flex;
  gap: calc(2 * var(--spacing-base));
  align-items: flex-start;
  justify-content: space-between;

  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin: 0 auto;

  overflow: hidden;

  & > *:nth-child(1) {
    padding-block-start: calc(
      var(--header-content-padding-block-start) + 0.25 * var(--spacing-base)
    );
    padding-block-end: calc(var(--header-content-padding-block-end));
  }
`;

const AnchorAndButtonsArea = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: calc(0.5 * var(--spacing-base));
`;
