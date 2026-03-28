import React from 'react';

type VersionUrlContextValue = {
  versionFromUrl: string | undefined;
  syncWithUrl: boolean;
};

export const VersionUrlContext = React.createContext<VersionUrlContextValue>({
  versionFromUrl: undefined,
  syncWithUrl: false,
});
