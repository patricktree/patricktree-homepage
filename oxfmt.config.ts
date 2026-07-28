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
      ["value-builtin", "value-external"],
      "value-external",
      "value-internal",
      "patricktree-homepage-packages",
      "subpath-imports",
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
});
