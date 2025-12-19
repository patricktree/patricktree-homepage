import type React from 'react';

import { Header } from '#pkg/components/header/index.js';

type LayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: LayoutProps) {
  return (
    <>
      <Header showHome={false} />

      {children}
    </>
  );
}
