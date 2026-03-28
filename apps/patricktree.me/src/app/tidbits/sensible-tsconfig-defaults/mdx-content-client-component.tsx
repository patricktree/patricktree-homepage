'use client';

import { VersionUrlContext } from '#pkg/components/version-tabs/index.js';
import MDXContent from '#pkg/writing/tidbits/sensible-tsconfig-defaults.mdx';

type MDXContentClientComponentProps = {
  versionFromUrl: string | undefined;
};

export function MDXContentClientComponent({ versionFromUrl }: MDXContentClientComponentProps) {
  return (
    <VersionUrlContext.Provider value={{ versionFromUrl, syncWithUrl: true }}>
      <MDXContent />
    </VersionUrlContext.Provider>
  );
}
