/**
 * The oxlint VS Code extension allows to specify `maxWarnings` and `typeAware` options only in the
 * "root configuration file", which is `oxlint.config.ts` in the folder opened in VS Code (i.e. the
 * root of the monorepo). That's the reason why we have this file here - for the VS Code extension
 * to work.
 *
 * Also note: when linting workspace projects via CLI, we pass `--type-aware` and `--max-warnings`
 * as CLI options (`oxlint --type-aware --max-warnings 0 ...`). The reason is that setting it in the
 * `oxlint.config.ts` of a workspace project is NOT possible because then the oxlint VS Code
 * extension breaks down again...
 *
 * Example error:
 *
 * ```log
 * Skipping config file [...] The `options.typeAware` option is only supported in the root config, but it was found in /tmp/packages/oxlint.config.ts
 * ```
 */

import { defineConfig } from "oxlint";

export default defineConfig({
  options: {
    maxWarnings: 0,
    typeAware: true,
  },
});
