'use client';

import { styled } from '@pigment-css/react';

import Image01PNG from '#pkg/app/tidbits/my-macos-setup-february-2026/my-macos-setup-february-2026-image01.png';
import Image02PNG from '#pkg/app/tidbits/my-macos-setup-february-2026/my-macos-setup-february-2026-image02.png';
import Image03PNG from '#pkg/app/tidbits/my-macos-setup-february-2026/my-macos-setup-february-2026-image03.png';
import { Image } from '#pkg/elements/Image.jsx';
import MDXContent from '#pkg/writing/tidbits/my-macos-setup-february-2026.mdx';

export function MDXContentClientComponent() {
  return (
    <MDXContent
      components={{
        Image01: () => (
          <figure>
            <StyledImage01
              src={Image01PNG}
              quality={100}
              alt='VS Code terminal tabs: "π - web-mode", "npm run dev", and an idle tab titled "<idle>".'
            />
            <figcaption>
              The idle terminal tab is titled {'"<idle>"'}, making it easy to spot at a glance.
            </figcaption>
          </figure>
        ),
        Image02: () => (
          <figure>
            <StyledImage02
              src={Image02PNG}
              quality={100}
              alt="AltTab window switcher showing 3 window thumbnails of the current macOS space."
            />
            <figcaption>
              Option+Tab: window thumbnails of the current space only, sorted by last-recently-used.
            </figcaption>
          </figure>
        ),
        Image03: () => (
          <figure>
            <StyledImage03
              src={Image03PNG}
              quality={100}
              alt="AltTab window switcher showing 8 window thumbnails across all macOS spaces."
            />
            <figcaption>
              Cmd+Tab: window thumbnails of all spaces, sorted by space index ascending.
            </figcaption>
          </figure>
        ),
      }}
    />
  );
}

const StyledImage01 = styled(Image)`
  height: 100px;

  object-fit: contain;
`;

const StyledImage02 = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 300px;

  object-fit: contain;
`;

const StyledImage03 = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 300px;

  object-fit: contain;
`;
