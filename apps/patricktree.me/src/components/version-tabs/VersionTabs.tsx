'use client';

import { styled } from '@pigment-css/react';
import React from 'react';

import { VersionTabsContext } from '#pkg/components/version-tabs/VersionTabsContext.jsx';
import { Button } from '#pkg/elements/Button.jsx';

type NonEmptyArray<T> = [T, ...T[]];

type VersionTabsProps = {
  versions: NonEmptyArray<string>;
  defaultVersion?: string;
  children: React.ReactNode;
};

export const VersionTabs: React.FC<VersionTabsProps> = ({ versions, defaultVersion, children }) => {
  const [activeVersion, setActiveVersion] = React.useState(defaultVersion ?? versions[0]);

  return (
    <VersionTabsContext.Provider value={{ activeVersion, setActiveVersion }}>
      <TabBar role="tablist" aria-label="Version">
        {versions.map((version) => (
          <TabButton
            key={version}
            role="tab"
            aria-selected={activeVersion === version}
            onClick={() => setActiveVersion(version)}
          >
            {version}
          </TabButton>
        ))}
      </TabBar>
      {children}
    </VersionTabsContext.Provider>
  );
};

const TabBar = styled.div`
  display: flex;
  gap: calc(0.5 * var(--spacing-base));
  margin-block-start: calc(2 * var(--spacing-base));
  margin-block-end: calc(1 * var(--spacing-base));
  border-bottom: 1px solid var(--color-bg-emphasized);
`;

const TabButton = styled(Button)`
  padding: calc(1 * var(--spacing-base)) calc(2 * var(--spacing-base));

  font-size: var(--font-size-sm);
  color: var(--color-fg-less-emphasized);
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;

  transition:
    color 150ms,
    border-color 150ms;

  &:hover {
    color: var(--color-fg);
  }

  &[aria-selected='true'] {
    font-weight: 600;
    color: var(--color-fg);
    border-bottom-color: var(--color-fg-interactive);
  }
`;
