module.exports = {
  extends: ['@patricktree-homepage/eslint-config/eslint-ecma.cjs'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  rules: {
    'n/no-process-env': 'off',
  },
};
