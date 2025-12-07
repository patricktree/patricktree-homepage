import { styled } from '@pigment-css/react';
import dayjs from 'dayjs';

import {
  ArticleHeading,
  Article,
  ArticleContainer,
  ArticleContent,
  FrontMatter,
  Time,
  TocAndArticleReadingTarget,
  TocAside,
  Timestamps,
} from '#pkg/components/article-components/index.jsx';
import { BskyInteractionSection } from '#pkg/components/article-container-blog-post/BskyInteractionSection.jsx';
import { Main } from '#pkg/components/main/index.js';
import {
  ReadingProgressBar,
  ReadingProgressProvider,
  ReadingProgressSentinel,
} from '#pkg/components/reading-progress-bar/index.js';
import { TableOfContents } from '#pkg/components/table-of-contents/index.js';
import { Anchor, FullBleedWrapper } from '#pkg/elements/index.js';
import type { MDXParseResult } from '#pkg/mdx/index.js';

export type ArticleContainerBlogPostPropsBase = {
  mdxContent: React.ReactNode;
  mdxParseResult: MDXParseResult;
};
export type ArticleContainerBlogPostProps = ArticleContainerBlogPostPropsBase & {
  faviconsClassName: string;
};

export const ArticleContainerBlogPost: React.FC<ArticleContainerBlogPostProps> = ({
  mdxContent,
  mdxParseResult,
  faviconsClassName,
}) => {
  return (
    <Main className={faviconsClassName}>
      <ReadingProgressProvider>
        <ReadingProgressBar />
        <ArticleContainer>
          <TocAndArticleReadingTarget>
            <TocAside>
              <TableOfContents headings={mdxParseResult.collectedHeadings} />
            </TocAside>

            <Article>
              <FrontMatter>
                <ArticleHeading>{mdxParseResult.frontmatter.title}</ArticleHeading>
                <Timestamps>
                  <Time dateTime={mdxParseResult.frontmatter.publishedAtISO}>
                    Published on{' '}
                    {dayjs(mdxParseResult.frontmatter.publishedAtISO).format('DD MMMM, YYYY')}
                  </Time>
                  {mdxParseResult.frontmatter.lastUpdatedAtISO && (
                    <Time dateTime={mdxParseResult.frontmatter.lastUpdatedAtISO}>
                      Last updated on{' '}
                      {dayjs(mdxParseResult.frontmatter.lastUpdatedAtISO).format('DD MMMM, YYYY')}
                    </Time>
                  )}
                </Timestamps>
              </FrontMatter>

              <ArticleContent>{mdxContent}</ArticleContent>
              <ReadingProgressSentinel />
            </Article>
          </TocAndArticleReadingTarget>

          <BskyInteractionSection mdxParseResult={mdxParseResult} />

          <ContactTeaserWrapper>
            <ContactTeaser>
              <ContactTeaserHeadline>Did you like this blog post?</ContactTeaserHeadline>

              <p>
                Great, then let&apos;s keep in touch!{' '}
                <Anchor
                  href="https://bsky.app/profile/patricktree.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Bluesky
                </Anchor>
                , I post about TypeScript, testing and web development in general - and of course
                about updates on my own blog posts.
              </p>
            </ContactTeaser>
          </ContactTeaserWrapper>
        </ArticleContainer>
      </ReadingProgressProvider>
    </Main>
  );
};

const ContactTeaserWrapper = styled(FullBleedWrapper)`
  padding-block: calc(2 * var(--spacing-base));
  padding-inline: var(--app-padding-inline);
  background-color: var(--color-bg-interactive);
`;

const ContactTeaser = styled.div`
  max-width: var(--app-box-width);
  margin-inline: auto;
`;

const ContactTeaserHeadline = styled.h2`
  margin-block-start: 0;
`;
