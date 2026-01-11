'use client';

import { styled } from '@pigment-css/react';

import Image01PNG from '#pkg/assets/consistent-visual-assertions-via-playwright-server-in-docker-image01.png';
import Image02PNG from '#pkg/assets/consistent-visual-assertions-via-playwright-server-in-docker-image02.png';
import { Image } from '#pkg/elements/Image.jsx';
import MDXContent from '#pkg/writing/posts/consistent-visual-assertions-via-playwright-server-in-docker.mdx';

export function MDXContentClientComponent() {
  return (
    <MDXContent
      components={{
        Image01: () => (
          <Image01
            src={Image01PNG}
            alt="images showing rendering results of MacOS and Ubuntu, and their difference because of font rendering differences and different emojis"
            quality={100}
          />
        ),
        Image02: () => <Image02 src={Image02PNG} alt="" quality={100} />,
      }}
    />
  );
}

const Image01 = styled(Image)`
  height: 250px;

  object-fit: contain;
`;

const Image02 = styled(Image)`
  height: 250px;

  object-fit: contain;
  background-color: var(--color-bg-light-mode);
`;
