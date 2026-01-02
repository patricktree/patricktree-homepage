// @ts-check

module.exports = {
  extends: ['@patricktree-homepage/eslint-config/eslint-next-app.cjs'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['next-sitemap.cjs', 'stylelint.config.cjs'],
  settings: {
    next: {
      rootDir: 'apps/patricktree.me/',
    },
  },
};
