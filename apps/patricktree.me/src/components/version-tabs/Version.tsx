'use client';

import type React from 'react';

import { useVersionTabs } from '#pkg/components/version-tabs/VersionTabsContext.jsx';

type VersionProps = {
  value: string | string[];
  children: React.ReactNode;
};

export const Version: React.FC<VersionProps> = ({ value, children }) => {
  const { activeVersion } = useVersionTabs();
  const values = Array.isArray(value) ? value : [value];

  if (!values.includes(activeVersion)) {
    return null;
  }

  return <>{children}</>;
};
