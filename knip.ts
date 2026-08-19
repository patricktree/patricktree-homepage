import type { KnipConfig } from "knip";

const config: KnipConfig = {
  $schema: "./node_modules/knip/schema.json",
  ignore: [
    /* ignore the patricktree-stack packages themselves, since they are not part of this monorepo */
    ".patricktree-stack/**",
  ],
  workspaces: {
    ".": {
      /* Zizmor is an external validation tool installed through uvx, not a Node dependency */
      ignoreBinaries: ["uvx"],
      ignoreDependencies: [
        "husky",
        /* the TypeScript 7 binary is invoked by oxlint-tsgolint, not imported anywhere */
        "@typescript/native",
        /* oxlint doesn't resolve its JS plugins correctly, we need it in the root node_modules */
        "eslint-plugin-react-you-might-not-need-an-effect",
      ],
    },
    "apps/patricktree.me": {
      entry: [
        /* ambient module augmentations, never imported */
        "src/types.ts",
        /* consumed by the `next-sitemap` CLI */
        "next-sitemap.cjs",
      ],
      ignoreDependencies: [
        /* supplied directly because @mdx-js/loader declares acorn as a transitive peer */
        "acorn",
        /* resolved by the shared Stylelint config re-exported from this app */
        "postcss-styled-syntax",
        "stylelint-config-recess-order",
        "stylelint-config-standard",
        /* used by Next.js at build time for image optimization, never imported */
        "sharp",
        /* runtime helpers injected by the @pigment-css/wyw-in-js babel transform */
        "@babel/runtime",
      ],
    },
    "packages/mdx": {
      ignoreDependencies: [
        /* supplied directly because @mdx-js/mdx reaches acorn through a transitive peer */
        "acorn",
      ],
    },
  },
};

export default config;
