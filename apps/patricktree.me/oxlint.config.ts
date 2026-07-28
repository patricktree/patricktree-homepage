import { config as baseConfig } from "@patricktree-stack/config-oxlint/oxlint-base.js";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [baseConfig],
  /* `plugins` overwrites the base set instead of merging, so the base plugins are repeated here */
  plugins: [
    ...(baseConfig.plugins ?? []),
    /* oxlint implements all 21 rules of `@next/eslint-plugin-next` natively */
    "nextjs",
  ],
});
