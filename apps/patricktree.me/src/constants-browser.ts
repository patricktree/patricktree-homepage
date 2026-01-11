import {
  DataAttribute as MDXBlogDataAttribute,
  Classes as MDXBlogClasses,
} from '@patricktree-homepage/mdx-blog/constants-browser';

export { ClassesAliases, ColorTheme } from '@patricktree-homepage/mdx-blog/constants-browser';

const BREAKPOINTS = {
  tabletMin: 600,
  laptopMin: 900,
  desktopMin: 1150,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const TOC_QUERY = QUERIES.desktopAndUp;

export const DataAttribute = {
  THEME: MDXBlogDataAttribute.THEME,
  IS_ANIMATION_ENABLED: 'data-is-animation-enabled',
  SECTION_HEADING_ID: 'data-section-heading-id',
} as const;
export type DataAttribute = (typeof DataAttribute)[keyof typeof DataAttribute];

export const CookieName = {
  THEME: 'theme',
} as const;
export type CookieName = (typeof CookieName)[keyof typeof CookieName];

export const IsScrolled = {
  YES: 'yes',
  NO: 'no',
} as const;
export type IsScrolled = (typeof IsScrolled)[keyof typeof IsScrolled];

export const IsAnimationEnabled = {
  YES: 'yes',
  NO: 'no',
} as const;
export type IsAnimationEnabled = (typeof IsAnimationEnabled)[keyof typeof IsAnimationEnabled];

export const Classes = {
  JS_REQUIRED: 'js-required',
  STYLED_ANCHOR: MDXBlogClasses.STYLED_ANCHOR,
  FANCY_ANCHOR_ICON: MDXBlogClasses.FANCY_ANCHOR_ICON,
} as const;
export type Classes = (typeof Classes)[keyof typeof Classes];

export const Animations = {
  HIDE: 'hide',
  SLIDE_LEFT: 'slide-left',
  SLIDE_RIGHT: 'slide-right',
} as const;
export type Animations = (typeof Animations)[keyof typeof Animations];
