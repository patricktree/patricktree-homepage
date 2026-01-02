export const DataAttribute = {
  THEME: 'data-theme',
} as const;
export type DataAttribute = (typeof DataAttribute)[keyof typeof DataAttribute];

export const ColorTheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;
export type ColorTheme = (typeof ColorTheme)[keyof typeof ColorTheme];

export const Classes = {
  STYLED_ANCHOR: 'styled-anchor',
  FANCY_ANCHOR_ICON: 'fancy-anchor-icon',
} as const;
export type Classes = (typeof Classes)[keyof typeof Classes];

export const ClassesAliases = {
  FAVICONS: 'favicons',
} as const;
export type ClassesAliases = (typeof ClassesAliases)[keyof typeof ClassesAliases];
