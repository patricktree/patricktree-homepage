'use client';

import { styled } from '@pigment-css/react';

import { Image } from '#pkg/elements/Image.jsx';
import PlaywrightServerInDockerArchitectureImagePng from '#pkg/writing/posts/consistent-screenshot-assertions-via-playwright-server-in-docker-image01.png';
import MDXContent from '#pkg/writing/posts/consistent-screenshot-assertions-via-playwright-server-in-docker.mdx';

export function MDXContentClientComponent() {
  return (
    <MDXContent
      components={{
        PlaywrightServerInDockerArchitectureImage: () => (
          <PlaywrightServerInDockerArchitectureImageC
            src={PlaywrightServerInDockerArchitectureImagePng}
            alt=""
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
