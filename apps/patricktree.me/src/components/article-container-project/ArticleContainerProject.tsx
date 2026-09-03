import { styled } from "@pigment-css/react";
import type { StaticImageData } from "next/image.js";

import profilePic from "#pkg/app/icon.png";
import {
  Article,
  ArticleContainer,
  ArticleContent,
  ArticleHeading,
  AuthorAvatar,
  AuthorLine,
  FrontMatter,
  TocAndArticleReadingTarget,
  TocAside,
} from "#pkg/components/article-components/index.jsx";
import { Main } from "#pkg/components/main/index.js";
import {
  ReadingProgressBar,
  ReadingProgressProvider,
  ReadingProgressSentinel,
} from "#pkg/components/reading-progress-bar/index.js";
import { TableOfContents } from "#pkg/components/table-of-contents/index.js";
import { Anchor, Image } from "#pkg/elements/index.js";
import type { ProjectMDXParseResult } from "#pkg/mdx/index.js";

type ArticleContainerProjectProps = {
  mdxContent: React.ReactNode;
  mdxParseResult: ProjectMDXParseResult;
  faviconsClassName: string;
  image: StaticImageData;
  imageAlt: string;
};

export const ArticleContainerProject: React.FC<ArticleContainerProjectProps> = ({
  mdxContent,
  mdxParseResult,
  faviconsClassName,
  image,
  imageAlt,
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
                <AuthorLine>
                  <AuthorAvatar
                    src={profilePic}
                    alt="Picture of Patrick Kerschbaum"
                    width={40}
                    height={40}
                  />
                  <span>
                    By <Anchor href="/">patricktree</Anchor>
                  </span>
                </AuthorLine>
                <ProjectImage src={image} alt={imageAlt} quality={100} sizes="407px" />
              </FrontMatter>

              <ArticleContent>{mdxContent}</ArticleContent>
              <ReadingProgressSentinel />
            </Article>
          </TocAndArticleReadingTarget>
        </ArticleContainer>
      </ReadingProgressProvider>
    </Main>
  );
};

const ProjectImage = styled(Image)`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  margin-block-start: calc(1.5 * var(--spacing-base));
  margin-inline: auto;
  border: var(--border-tile);
  border-radius: var(--border-radius-tile);
  box-shadow: var(--shadow-style);
`;
