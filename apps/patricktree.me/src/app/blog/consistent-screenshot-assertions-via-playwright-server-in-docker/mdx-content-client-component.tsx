'use client';

import { styled } from '@pigment-css/react';

import PlaywrightServerInDockerArchitectureImagePng from '#pkg/assets/consistent-screenshot-assertions-via-playwright-server-in-docker-image01.png';
import { Image } from '#pkg/elements/Image.jsx';
import MDXContent from '#pkg/writing/posts/consistent-screenshot-assertions-via-playwright-server-in-docker.mdx';

export function MDXContentClientComponent() {
  return (
    <MDXContent
      components={{
        PlaywrightServerInDockerArchitectureImage: () => (
          <PlaywrightServerInDockerArchitectureImageC
            src={PlaywrightServerInDockerArchitectureImagePng}
            alt=""
            quality={100}
          />
        ),
      }}
    />
  );
}

const PlaywrightServerInDockerArchitectureImageC = styled(Image)`
  height: 250px;

  object-fit: contain;
`;
