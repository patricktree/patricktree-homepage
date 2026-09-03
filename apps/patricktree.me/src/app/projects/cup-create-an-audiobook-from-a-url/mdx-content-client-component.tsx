"use client";

import { ExternalLink } from "react-feather";

import MDXContent from "#pkg/writing/projects/cup-create-an-audiobook-from-a-url.mdx";

export function MDXContentClientComponent() {
  return <MDXContent components={mdxComponents} />;
}

/* the components map is defined at module scope so that MDX does not get a new set of
   component identities on every render */
const mdxComponents = {
  ExternalLink: () => (
    <ExternalLink size="1em" style={{ display: "inline", position: "relative", top: "1px" }} />
  ),
};
