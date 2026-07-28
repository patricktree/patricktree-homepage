import type { KnipConfig } from "knip";

const config: KnipConfig = {
  $schema: "./node_modules/knip/schema.json",
  ignore: [
    /* ignore the patricktree-stack packages themselves, since they are not part of this monorepo */
    ".patricktree-stack/**",
  ],
  workspaces: {
    ".": {
      ignoreDependencies: [
        "husky",
        /* the TypeScript 7 binary is invoked by oxlint-tsgolint, not imported anywhere */
        "@typescript/native",
        /* oxlint doesn't resolve its JS plugins correctly, we need it in the root node_modules */
        "eslint-plugin-react-you-might-not-need-an-effect",
      ],
    },
  },
};

export default config;
