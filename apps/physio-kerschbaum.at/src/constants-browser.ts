export const DataAttribute = {
  IS_ANIMATION_ENABLED: "data-is-animation-enabled",
} as const;
export type DataAttribute = (typeof DataAttribute)[keyof typeof DataAttribute];

export const IsAnimationEnabled = {
  YES: "yes",
  NO: "no",
} as const;
export type IsAnimationEnabled = (typeof IsAnimationEnabled)[keyof typeof IsAnimationEnabled];

export const Classes = {
  JS_REQUIRED: "js-required",
} as const;
export type Classes = (typeof Classes)[keyof typeof Classes];

export const Animations = {
  HIDE: "hide",
  SLIDE_LEFT: "slide-left",
  SLIDE_RIGHT: "slide-right",
} as const;
export type Animations = (typeof Animations)[keyof typeof Animations];
