import { styled } from '@pigment-css/react';
import type React from 'react';

import { Nav } from '#pkg/components/nav/index.js';
import { RssFeedAnchor } from '#pkg/components/rss-feed-anchor/index.js';
import { ToggleThemeButton } from '#pkg/components/toggle-theme-button/index.js';

type HeaderProps = {
  showHome: boolean;
};

export const Header: React.FC<HeaderProps> = ({ showHome }) => {
  return (
    <header>
      <HeaderContent>
        <Nav showHome={showHome} />

        <AnchorAndButtonsArea>
          <RssFeedAnchor />

          <ToggleThemeButton />
        </AnchorAndButtonsArea>
      </HeaderContent>
    </header>
  );
};

const HeaderContent = styled.div`
  display: flex;
  gap: calc(4 * var(--spacing-base));
  align-items: flex-start;
  justify-content: space-between;

  & > *:nth-child(1) {
    padding-block-start: calc(1 * var(--spacing-base));
    padding-block-end: calc(2 * var(--spacing-base));
  }
  & > *:nth-child(2) {
    padding-block-start: calc(1.5 * var(--spacing-base));
    padding-block-end: calc(3 * var(--spacing-base));
  }
`;

const AnchorAndButtonsArea = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: calc(3 * var(--spacing-base));
`;
