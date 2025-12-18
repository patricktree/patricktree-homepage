'use client';
import { styled } from '@pigment-css/react';
import type React from 'react';

import { Bsky, X as XIcon } from '#pkg/components/icon-library/index.js';
import { config } from '#pkg/config.js';
import { Anchor } from '#pkg/elements/index.js';
import type { MDXParseResult } from '#pkg/mdx/index.js';
import { usePageUrl } from '#pkg/utils/next.utils.js';

export type SocialShareSectionProps = { mdxParseResult: MDXParseResult };

export const SocialShareSection: React.FC<SocialShareSectionProps> = ({ mdxParseResult }) => {
  const blogPostUrl = usePageUrl();
  const blogPostHref = blogPostUrl.href;
  const formattedTags = mdxParseResult.frontmatter.tags.map((tag) => `#${tag}`).join(' ');
  const shareTextSegments = (handle: string) => [
    `${mdxParseResult.frontmatter.title} (by @${handle})`,
    '',
    blogPostHref,
    '',
    formattedTags,
  ];

  // compose link, see https://docs.bsky.app/docs/advanced-guides/intent-links
  const bskyShareUrl = new URL(`https://bsky.app/intent/compose`);
  bskyShareUrl.searchParams.set(
    'text',
    shareTextSegments(config.socialMedia.handles.bsky).join('<br>'),
  );
  const bskyShareHref = bskyShareUrl.href;

  const xShareUrl = new URL('https://x.com/intent/post');
  xShareUrl.searchParams.set('text', shareTextSegments(config.socialMedia.handles.x).join('\n'));
  const xShareHref = xShareUrl.href;

  return (
    <InteractionSection>
      <InteractionAnchor href={bskyShareHref} target="_blank" rel="noopener noreferrer">
        <Bsky />
        Share on Bluesky
      </InteractionAnchor>
      <InteractionAnchor href={xShareHref} target="_blank" rel="noopener noreferrer">
        <XIcon />
        Share on X
      </InteractionAnchor>
    </InteractionSection>
  );
};

const InteractionSection = styled.div`
  display: flex;
  gap: calc(4 * var(--spacing-base));
`;

const InteractionAnchor = styled(Anchor)`
  display: inline-flex;
  gap: calc(1 * var(--spacing-base));
  align-items: center;

  font-size: var(--font-size-sm);
`;
