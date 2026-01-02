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

export const DataAttribute = {
  IS_ANIMATION_ENABLED: 'data-is-animation-enabled',
} as const;
export type DataAttribute = (typeof DataAttribute)[keyof typeof DataAttribute];

export const LocalStorageKey = {
  THEME: 'theme',
} as const;
export type LocalStorageKey = (typeof LocalStorageKey)[keyof typeof LocalStorageKey];

export const IsAnimationEnabled = {
  YES: 'yes',
  NO: 'no',
} as const;
export type IsAnimationEnabled = (typeof IsAnimationEnabled)[keyof typeof IsAnimationEnabled];

export const Classes = {
  JS_REQUIRED: 'js-required',
} as const;
export type Classes = (typeof Classes)[keyof typeof Classes];

export const Animations = {
  HIDE: 'hide',
  SLIDE_LEFT: 'slide-left',
  SLIDE_RIGHT: 'slide-right',
} as const;
export type Animations = (typeof Animations)[keyof typeof Animations];
