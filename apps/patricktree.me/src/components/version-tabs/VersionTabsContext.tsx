import React from 'react';

type VersionTabsContextValue = {
  activeVersion: string;
  setActiveVersion: (version: string) => void;
};

export const VersionTabsContext = React.createContext<VersionTabsContextValue | undefined>(
  undefined,
);

export function useVersionTabs(): VersionTabsContextValue {
  const context = React.useContext(VersionTabsContext);
  if (context === undefined) {
    throw new Error('useVersionTabs must be used within a <VersionTabs>');
  }
  return context;
}
