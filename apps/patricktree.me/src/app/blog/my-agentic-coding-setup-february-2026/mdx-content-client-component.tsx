'use client';

import { styled } from '@pigment-css/react';

import Image01PNG from '#pkg/app/blog/my-agentic-coding-setup-february-2026/my-agentic-coding-setup-february-2026-image01.png';
import Image02PNG from '#pkg/app/blog/my-agentic-coding-setup-february-2026/my-agentic-coding-setup-february-2026-image02.png';
import { Image } from '#pkg/elements/Image.jsx';
import MDXContent from '#pkg/writing/posts/my-agentic-coding-setup-february-2026.mdx';

export function MDXContentClientComponent() {
  return (
    <MDXContent
      components={{
        Image01: () => (
          <figure>
            <StyledImage01
              src={Image01PNG}
              quality={100}
              alt="VS Code window with 3 terminal tabs in the editor area and a monorepo file explorer in the sidebar."
            />
            <figcaption>
              VS Code with terminal tabs in the editor area and the file explorer in the sidebar.
            </figcaption>
          </figure>
        ),
        Image02: () => (
          <figure>
            <StyledImage02
              src={Image02PNG}
              quality={100}
              alt="Pi Coding Agent running in VS Code, exploring a git diff with successful tool calls highlighted in green."
            />
            <figcaption>
              Pi Coding Agent reviewing a git diff. Green backgrounds indicate successful tool
              calls.
            </figcaption>
          </figure>
        ),
      }}
    />
  );
}

const StyledImage01 = styled(Image)`
  height: auto;
  max-height: 550px;

  object-fit: contain;
`;

const StyledImage02 = styled(Image)`
  height: auto;
  max-height: 550px;

  object-fit: contain;
`;
