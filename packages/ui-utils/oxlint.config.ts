import { defineConfig } from "oxlint";

import { config as repoConfig } from "@patricktree-homepage/config-oxlint/oxlint-base.js";

export default defineConfig({ extends: [repoConfig] });
