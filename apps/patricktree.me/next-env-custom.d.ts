/// <reference types="next/image-types/global.js" />

/**
 * TypeScript 6 reports TS2882 for side-effect imports of modules without type declarations. Plain
 * (non-module) CSS is handled by the Next.js build, so declaring it as an untyped side-effect
 * module is enough. `*.module.css` keeps Next.js' more specific declaration, because TypeScript
 * resolves wildcard modules by longest matching prefix.
 */
declare module "*.css";

/** `@fontsource-variable/*` packages resolve to a bare `index.css` and ship no type declarations. */
declare module "@fontsource-variable/rubik";
