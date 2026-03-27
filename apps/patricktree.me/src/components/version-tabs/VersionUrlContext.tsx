import React from 'react';

const SEARCH_PARAM_KEY = 'v';

type VersionUrlContextValue = {
  versionFromUrl: string | undefined;
  syncWithUrl: boolean;
};

export const VersionUrlContext = React.createContext<VersionUrlContextValue>({
  versionFromUrl: undefined,
  syncWithUrl: false,
});

export { SEARCH_PARAM_KEY };
