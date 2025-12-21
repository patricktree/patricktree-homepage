import { styled } from '@pigment-css/react';
import type React from 'react';

type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export const Main: React.FC<MainProps> = ({ children, ...delegated }) => {
  return <MainContainer {...delegated}>{children}</MainContainer>;
};

export const MainContainer = styled.main`
  --main-container-children-margin-block-start: calc(2 * var(--spacing-base));

  flex: 1;
  padding-block-start: calc(var(--header-height));
`;
