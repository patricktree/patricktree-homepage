import { styled } from '@pigment-css/react';
import type React from 'react';

export const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <header>
      <HeaderContent>{children}</HeaderContent>
    </header>
  );
};

export const HeaderContent = styled.div`
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
