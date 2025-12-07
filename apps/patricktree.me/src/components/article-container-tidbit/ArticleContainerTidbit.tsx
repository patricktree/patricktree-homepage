import dayjs from 'dayjs';

import {
  Article,
  ArticleContainer,
  ArticleContent,
  ArticleHeading,
  FrontMatter,
  Time,
  TocAndArticleReadingTarget,
  TocAside,
} from '#pkg/components/article-components/index.jsx';
import { GiscusComments } from '#pkg/components/giscus-comments/GiscusComments.jsx';
import { Main } from '#pkg/components/main/index.js';
import {
  ReadingProgressBar,
  ReadingProgressProvider,
  ReadingProgressSentinel,
} from '#pkg/components/reading-progress-bar/index.js';
import { TableOfContents } from '#pkg/components/table-of-contents/index.js';
import type { MDXParseResult } from '#pkg/mdx/index.js';

export type ArticleContainerTidbitPropsBase = {
  mdxContent: React.ReactNode;
  mdxParseResult: MDXParseResult;
};
export type ArticleContainerTidbitProps = ArticleContainerTidbitPropsBase & {
  faviconsClassName: string;
};

export const ArticleContainerTidbit: React.FC<ArticleContainerTidbitProps> = ({
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
                <Time dateTime={mdxParseResult.frontmatter.lastUpdatedAtISO}>
                  Last updated on{' '}
                  {dayjs(mdxParseResult.frontmatter.lastUpdatedAtISO).format('DD MMMM, YYYY')}
                </Time>
              </FrontMatter>

              <ArticleContent>{mdxContent}</ArticleContent>
              <ReadingProgressSentinel />
            </Article>
          </TocAndArticleReadingTarget>

          <GiscusComments giscusTerm={mdxParseResult.frontmatter.giscusTerm} />
        </ArticleContainer>
      </ReadingProgressProvider>
    </Main>
  );
};
