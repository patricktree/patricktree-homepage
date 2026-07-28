# Repository Guidelines

## Project Structure & Module Organization

This monorepo is rooted around `pnpm`. `apps/patricktree.me` is the flagship Next.js app; `apps/physio-kerschbaum.at` is a smaller marketing site that reuses the same primitives. Shared UI, MDX, and utility code sits under `packages/*`, and repo-local configuration (TypeScript, Stylelint) lives in `platform/*`. `.patricktree-stack/` is a git submodule holding the shared baseline (oxfmt, oxlint and turbo configs) used by all patricktree monorepos - do not edit it from here, change it in its own repository. End-to-end automation runs from `test/e2e-test`, keeping Playwright specs and snapshots separate from runtime bundles.

## Build, Test, and Development Commands

- `pnpm install`: install and link dependencies for every workspace; Node.js comes from `package.json#devEngines.runtime`.
- `pnpm dev`: run watch builds for packages so apps load changes of them immediately.
- `pnpm --filter @patricktree-homepage/patricktree.me run dev`: start the local Next.js server at `apps/patricktree.me`.
- `pnpm build`: type-check every workspace project via `turbo run turbo:build`.
- `pnpm --filter <app> run build:next`: produce the real Next.js production build of an app.
- `pnpm lint` / `pnpm lint:fix`: run oxlint (and stylelint for the apps) across the workspace.
- `pnpm format` / `pnpm format:check`: apply/check oxfmt across the workspace.
- `pnpm fix`: `format` followed by `lint:fix`.
- `pnpm declutter`: run knip to find unused files, exports and dependencies.
- `pnpm validate`: build, lint, test and `declutter` in one go.
- `pnpm --filter @patricktree-homepage/e2e-test run e2e-test`: launch Playwright specs against the dev server.
- Validation when you think you are finished: `pnpm install && pnpm run fix && pnpm run validate && pnpm run format:check`.

## Coding Style & Naming Conventions

Just run `pnpm lint` in the monorepo root to see coding style or naming convention issues.

- Use React hooks via the `React` namespace (e.g., `React.useState` instead of `useState`).
- Format with oxfmt; lint with oxlint (`--type-aware`). The two Next.js apps additionally enable oxlint's built-in `nextjs` plugin, which covers the `@next/eslint-plugin-next` rules natively.
- CSS is linted by stylelint via `@patricktree-homepage/config-stylelint`.
- `typescript` resolves to `@typescript/typescript6` and `@typescript/native` to TypeScript 7, both via the pnpm catalog in `pnpm-workspace.yaml`. Add them as `catalog:` entries, never as literal versions.
- Only disable oxlint rules when there is truly no other viable option; prefer code or config fixes instead, and always state the reason in a comment.

## Testing Guidelines

Playwright (`@playwright/test`) provides regression coverage from `test/e2e-test/src`. Specs follow the `*.spec.ts` suffix and write snapshots into sibling `*-snapshots` folders. Before committing, compile with `pnpm --filter @patricktree-homepage/e2e-test run build`, keep `pnpm dev` running for the target app, then launch `… run e2e-test`. Rebaseline snapshots only when UI changes are intentional and call it out in the PR.

## Commit & Pull Request Guidelines

Commit messages follow Conventional Commits (`feat(patricktree.me): add progress bar`, `chore(deps): bump next`). Keep each change focused, describe breaking behavior in the footer, and avoid mixing refactors with feature work. Pull requests should mention the problem statement, link issues, list local verification steps (`pnpm build`, `pnpm lint`, relevant Playwright suites), and attach screenshots or GIFs for UI changes.

## Security & Configuration Tips

The Node.js version comes from `package.json#devEngines.runtime`; enable Corepack so `pnpm@11.1.0` is locked. Never commit `.env*`; keep secrets in `.env.local` or platform settings. When scripts generate artifacts (favicons, CSS modules, RSS), run them as defined in the package scripts so committed assets align with production expectations.
