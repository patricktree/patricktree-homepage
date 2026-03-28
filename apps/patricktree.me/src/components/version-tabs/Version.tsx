'use client';

import type React from 'react';

import { useVersionTabs } from '#pkg/components/version-tabs/VersionTabsContext.jsx';

type VersionProps = {
  values: readonly string[];
  children: React.ReactNode;
};

export const Version: React.FC<VersionProps> = ({ values, children }) => {
  const { activeVersion } = useVersionTabs();

  if (!values.includes(activeVersion)) {
    return null;
  }

  return <>{children}</>;
};
