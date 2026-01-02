module.exports = {
  extends: ['@patricktree-homepage/eslint-config/eslint-ecma.cjs'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['bin/**'],
};
