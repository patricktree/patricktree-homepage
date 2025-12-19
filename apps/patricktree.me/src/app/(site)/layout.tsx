import type React from 'react';

import { Header } from '#pkg/components/header/index.js';

type LayoutProps = {
  children: React.ReactNode;
};

const SiteLayout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Header showHome={true} />

      {children}
    </>
  );
};

export default SiteLayout;
