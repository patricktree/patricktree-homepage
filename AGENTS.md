# Repository Guidelines

## Project Structure & Module Organization

This monorepo is rooted around `pnpm`. `apps/patricktree.me` is the flagship Next.js app; `apps/physio-kerschbaum.at` is a smaller marketing site that reuses the same primitives. Shared UI, MDX, and utility code sits under `packages/*`, and repo-wide configuration (TypeScript, ESLint, Stylelint, Turbo) lives in `platform/*`. End-to-end automation runs from `test/e2e-test`, keeping Playwright specs and snapshots separate from runtime bundles.

## Build, Test, and Development Commands

- `pnpm install`: install and link dependencies for every workspace.
- `pnpm dev`: run watch builds for packages so apps load changes of them immediately.
- `pnpm --filter @patricktree-homepage/patricktree.me run dev`: start the local Next.js server at `apps/patricktree.me`.
- `pnpm build`: run the two-phase `superturbo` build (first tooling, then apps).
- `pnpm lint` / `pnpm lint:fix`: execute the shared ESLint/Turbo lint tasks.
- `pnpm --filter @patricktree-homepage/e2e-test run e2e-test`: launch Playwright specs against the dev server.

## Coding Style & Naming Conventions

Just run `pnpm lint` in the monorepo root to see coding style or naming convention issues.

- Use React hooks via the `React` namespace (e.g., `React.useState` instead of `useState`).

## Testing Guidelines

Playwright (`@playwright/test`) provides regression coverage from `test/e2e-test/src`. Specs follow the `*.spec.ts` suffix and write snapshots into sibling `*-snapshots` folders. Before committing, compile with `pnpm --filter @patricktree-homepage/e2e-test run build`, keep `pnpm dev` running for the target app, then launch `… run e2e-test`. Rebaseline snapshots only when UI changes are intentional and call it out in the PR.

## Commit & Pull Request Guidelines

Commit messages follow Conventional Commits (`feat(patricktree.me): add progress bar`, `chore(deps): bump next`). Keep each change focused, describe breaking behavior in the footer, and avoid mixing refactors with feature work. Pull requests should mention the problem statement, link issues, list local verification steps (`pnpm build`, `pnpm lint`, relevant Playwright suites), and attach screenshots or GIFs for UI changes.

## Security & Configuration Tips

Match the Node version in `.nvmrc` (`nvm use`) and enable Corepack so `pnpm@10.24.0` is locked. Never commit `.env*`; keep secrets in `.env.local` or platform settings. When scripts generate artifacts (favicons, CSS modules, RSS), run them as defined in the package scripts so committed assets align with production expectations.
