import { styled } from '@pigment-css/react';

import { TOC_QUERY } from '#pkg/constants-browser.js';
import { Image } from '#pkg/elements/Image.jsx';
import { CodeBlockContainer } from '#pkg/mdx-components.jsx';

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(4 * var(--spacing-base));
  align-self: center;

  width: 100%;
`;

export const TocAside = styled.aside`
  position: sticky;
  /* some "top" spacing because of the fixed positioned header and so that it doesn't stick to the very top of the viewport */
  top: calc(var(--header-height));

  display: none;
  grid-area: toc;
  height: max-content;
  margin-block-start: var(--main-container-children-margin-block-start);

  /* stylelint-disable-next-line media-query-no-invalid -- works */
  @media ${TOC_QUERY} {
    display: block;
  }
`;

export const Article = styled.article`
  grid-area: article;
  min-width: 0;
`;

export const FrontMatter = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(1.5 * var(--spacing-base));

  margin-block-start: var(--main-container-children-margin-block-start);
  margin-block-end: calc(3 * var(--spacing-base));
`;

export const ArticleHeading = styled.h1`
  margin-block-start: 0;
  text-align: left;
`;

export const Timestamps = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.time`
  font-size: var(--font-size-sm);
  color: var(--color-fg-less-emphasized);
  text-transform: uppercase;
`;

export const ArticleContent = styled.div`
  & p {
    margin-block: 1em;
  }

  & h2 {
    /* position: relative to be able to position the underline absolutely */
    position: relative;
    margin-block-end: calc(4 * var(--spacing-base));
  }
  /* underline for h2 headings */
  & h2::after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 140px;
    height: 3px;
    content: '';
    background-image: linear-gradient(to right, var(--color-fg-interactive), rgb(0 0 0 / 0%));
  }

  & ul,
  & ol {
    --ul-padding-inline-start: 20px;

    padding-inline-start: var(--ul-padding-inline-start);
    margin-block: 0.5em;
  }
  & li {
    margin-block: 0.25em;
  }
  & ul > li {
    list-style-type: initial;
  }
  & li:first-of-type {
    margin-block-start: 0;
  }

  & blockquote {
    padding-inline-start: calc(1.5 * var(--spacing-base));

    font-style: italic;
    color: var(--color-fg-less-emphasized);
    border-left: 0.25em solid var(--color-fg-less-emphasized);
  }

  /* 
    Code blocks should span entire width.
    We have to undo the app padding and margin-inline-start of ul/ol list elements (if a code block is inside such an element).
   */
  &
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    } {
    /* add some margin-block-start so that there is some space between the copy button and any text before the code block. */
    margin-block-start: calc(3 * var(--spacing-base));
    margin-inline-start: calc(-1 * var(--app-padding-inline));
    margin-inline-end: calc(-1 * var(--app-padding-inline));
  }
  &
    ul
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    },
    &
    ol
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    } {
    width: calc(100% + 2 * var(--app-padding-inline) + var(--ul-padding-inline-start));
    margin-inline-start: calc(-1 * (var(--app-padding-inline) + var(--ul-padding-inline-start)));
  }
  &
    ul
    ul
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    },
    &
    ol
    ol
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    },
    &
    ul
    ol
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    },
    &
    ol
    ul
    > li
    > ${
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      CodeBlockContainer as any
    } {
    width: calc(100% + 2 * var(--app-padding-inline) + 2 * var(--ul-padding-inline-start));
    margin-inline-start: calc(
      -1 * (var(--app-padding-inline) + 2 * var(--ul-padding-inline-start))
    );
  }
`;

export const AuthorLine = styled.div`
  display: inline-flex;
  gap: calc(0.75 * var(--spacing-base));
  align-items: center;
  color: var(--color-fg-less-emphasized);
`;

export const AuthorAvatar = styled(Image)`
  object-fit: cover;
  border-radius: 999px;
`;
