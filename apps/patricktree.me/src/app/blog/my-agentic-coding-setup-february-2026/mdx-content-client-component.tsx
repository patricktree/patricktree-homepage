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
          <Image01
            src={Image01PNG}
            quality={100}
            alt="VS Code window showing 3 terminal tabs. The file explorer in the side bar on the right shows a monorepo structure."
          />
        ),
        Image02: () => (
          <Image02
            src={Image02PNG}
            quality={100}
            alt="VS Code window showing the pi coding agent in action, in the first terminal tab."
          />
        ),
      }}
    />
  );
}

const Image01 = styled(Image)`
  height: 550px;

  object-fit: contain;
`;

const Image02 = styled(Image)`
  height: 550px;

  object-fit: contain;
`;
