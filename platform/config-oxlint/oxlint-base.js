// @ts-check

import { config as baseConfig } from "@patricktree-stack/config-oxlint/oxlint-base.js";
import { defineConfig } from "oxlint";

/* a rule setting here replaces the shared config's setting for that rule, so its restrictions are carried over */
const noRestrictedImports = baseConfig.rules?.["no-restricted-imports"];

export const config = defineConfig({
  extends: [baseConfig],
  rules: {
    "no-restricted-imports": [
      ...(noRestrictedImports ?? ["error"]),
      {
        patterns: [
          {
            group: ["./**", "../**"],
            message: "Use subpath imports (`#src/*`, `#test/*`, ...) instead of relative imports.",
          },
        ],
      },
    ],
  },
});
