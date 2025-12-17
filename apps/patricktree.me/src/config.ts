/* eslint-disable n/no-process-env -- configs are the only place where reading from process.env is allowed */

import type { GiscusProps } from '@giscus/react';

import { config as MDXBlogConfig } from '@patricktree-homepage/mdx-blog/config';

const isDevEnvironment = process.env.NODE_ENV === 'development';
export const config = {
  isDevEnvironment,
  isServer: typeof window === 'undefined',
  nextRuntime: process.env['NEXT_RUNTIME'],
  deploymentOrigin: MDXBlogConfig.deploymentOrigin,
  socialMedia: {
    handles: {
      gitHub: 'patricktree',
      linkedIn: 'pkerschbaum',
      bsky: 'patricktree.me',
      x: 'patricktree_',
    },
  },
  canonicalTLDPlus1: 'patricktree.me',
  giscus: {
    repo: 'patricktree/patricktree-homepage',
    repoId: 'R_kgDOGcdVfw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOGcdVf84CzgeN',
    mapping: 'specific',
    strict: '1',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    lang: 'en',
    termPrefix: 'patricktree.me',
  } satisfies GiscusProps & { termPrefix: string },
} as const;
