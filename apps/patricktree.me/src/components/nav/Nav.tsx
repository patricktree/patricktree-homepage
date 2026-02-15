import { styled } from '@pigment-css/react';
import type React from 'react';
import { Home, PenTool } from 'react-feather';

import { headingIds } from '#pkg/app/heading-ids.js';
import { Anchor } from '#pkg/elements/index.js';

export const Nav: React.FC = () => {
  return (
    <NavContainer>
      <NavList>
        <NavListItem>
          <NavAnchor href="/">
            <Home size="1em" />
            home
          </NavAnchor>
        </NavListItem>

        <NavListItem>
          <NavAnchor href={`/#${headingIds.writing}`}>
            <PenTool size="1em" />
            writing
          </NavAnchor>
        </NavListItem>
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  --nav-column-gap: calc(3 * var(--spacing-base));

  display: block;
  padding-inline-end: calc(1 * var(--spacing-base));
`;

const NavList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  row-gap: calc(1 * var(--spacing-base));
  column-gap: var(--nav-column-gap);
  align-items: center;
  list-style: none;
`;

const NavListItem = styled.li``;

const NavAnchor = styled(Anchor)`
  display: flex;
  flex-shrink: 0;
  gap: calc(1 * var(--spacing-base));
  align-items: center;

  font-size: var(--font-size-md);
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: revert;
  }

  & > *:nth-child(1) {
    flex-shrink: 0;
  }
`;
