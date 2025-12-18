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
  align-items: center;
  justify-content: space-between;

  & > * {
    padding-block-start: calc(1 * var(--spacing-base));
    padding-block-end: calc(2 * var(--spacing-base));
  }
`;
