import { createBaseConfig } from "@patricktree-stack/config-oxfmt/oxfmt-base.js";
import { defineConfig } from "oxfmt";

const baseConfig = createBaseConfig({
  patricktreeStackGitSubmoduleRelativePath: ".patricktree-stack",
});

export default defineConfig({
  ...baseConfig,
  sortImports: {
    customGroups: [
      /* create a group for patricktree-homepage packages to separate them from other external dependencies */
      {
        groupName: "patricktree-homepage-packages",
        elementNamePattern: ["@patricktree-homepage/**"],
      },
      /* create a group for subpath imports = internal dependencies */
      {
        groupName: "subpath-imports",
        elementNamePattern: ["#pkg/**"],
      },
    ],
    groups: [
      ["value-builtin", "type-builtin", "value-external", "type-external"],
      ["value-external", "type-external"],
      ["value-internal", "type-internal"],
      "patricktree-homepage-packages",
      "subpath-imports",
      ["value-parent", "type-parent", "value-sibling", "type-sibling", "value-index", "type-index"],
      "unknown",
    ],
  },
});
