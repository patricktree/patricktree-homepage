module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: true,
    sourceType: 'module',
  },
  plugins: [
    /**
     * add "only-warn" plugin to change all errors to warnings.
     * ESLint is executed via Git hooks with --max-warnings 0 anyways. Transforming all errors to warnings
     * allows to distinguish ESLint warnings from other errors (e.g. TypeScript compile errors) in the
     * code editor (e.g. VS Code).
     */
    'only-warn',
    '@typescript-eslint/eslint-plugin',
    'n',
    'regexp',
    'code-import-patterns',
    'jsdoc',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:regexp/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:n/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.cjs', 'babel.config.mjs', 'dist/**/*'],
  rules: {
    curly: 'error',
    'multiline-comment-style': ['error', 'starred-block'],
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty-pattern': 'off',
    'no-promise-executor-return': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "MemberExpression[object.name='it'][property.name='only'], MemberExpression[object.name='test'][property.name='only'], MemberExpression[object.name='apiTest'][property.name='only']",
        message:
          'Do not check in spec files with tests using ".only" - the other tests of that spec file would be skipped!',
      },
      {
        selector:
          "MemberExpression[object.name='it'][property.name='skip'], MemberExpression[object.name='test'][property.name='skip'], MemberExpression[object.name='apiTest'][property.name='skip']",
        message: 'Do not check in dead tests. Either fix or delete them.',
      },
      {
        selector: "[property.name='toBe']",
        message:
          'Prefer `expect(...).toEqual()` over `expect(...).toBe()`. This does not make any difference ' +
          'for primitive types, but in case of objects/arrays `toEqual()` will perform a deep comparison ' +
          '(compared to `toBe()` which checks for referential equality).',
      },
    ],
    'no-undef': 'off',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'object-shorthand': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'require-atomic-updates': 'error',
    'code-import-patterns/patterns': [
      'error',
      {
        zones: [
          {
            target: /.+/,
            forbiddenPatterns: [
              {
                // forbid relative imports except for .png, .jpg, .svg, .css
                pattern: /^\.(?!.+png$|.+jpg$|.+svg$|.+css$)/,
                errorMessage:
                  'Use absolute paths (beginning with "#pkg/") instead of relative paths.',
              },
            ],
          },
        ],
      },
    ],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
    // disable "import/no-unresolved" --> covered by TypeScript
    'import/no-unresolved': 'off',
    'import/no-useless-path-segments': 'error',
    // "import/order": external dependencies first, workspace dependencies second, internal stuff third
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [['builtin', 'external'], ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: '@patricktree-homepage/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '#pkg/**',
            group: 'parent',
          },
        ],
      },
    ],
    'n/handle-callback-err': 'error',
    /* n/hashbang has false positives */
    'n/hashbang': 'off',
    'n/no-callback-literal': 'error',
    // disable "n/no-extraneous-import" --> thanks to "isolated mode" of node_modules of pnpm and "public-hoist-pattern" being disabled of this monorepo, there is no possibilty for extraneous imports
    'n/no-extraneous-import': 'off',
    // disable "n/no-missing-import" and "n/no-missing-require" --> covered by TypeScript
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-process-env': 'error',
    'n/no-sync': 'error',
    // disable "n/no-unpublished-import" and "n/no-unpublished-require" --> wrong positive for "@vercel/analytics" for whatever reason
    'n/no-unpublished-import': ['error', { ignoreTypeImport: true }],
    'n/no-unpublished-require': 'off',
    // disable "n/no-unsupported-features/es-builtins" --> covered by TypeScript
    'n/no-unsupported-features/es-builtins': 'off',
    // disable "n/no-unsupported-features/es-syntax" --> covered by TypeScript
    'n/no-unsupported-features/es-syntax': 'off',
    // disable "n/no-unsupported-features/node-builtins" --> covered by TypeScript
    'n/no-unsupported-features/node-builtins': 'off',
    'regexp/no-unused-capturing-group': ['error', { allowNamed: true }],
    'unicorn/better-regex': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/no-negated-condition': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: { constructors: 'off' },
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: ['Error', 'Moment'] }],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: ['RegExp'] }],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        // namespace can be useful to group related typings
        allowDeclarations: true,
      },
    ],
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        allow: ['private readonly', 'protected readonly', 'public readonly'],
        prefer: 'parameter-property',
      },
    ],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowBoolean: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx', '**/*.ctsx', '**/*.mtsx'],
      extends: ['plugin:jsdoc/recommended-typescript-error'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-description': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.cjsx', '**/*.mjsx'],
      extends: ['plugin:jsdoc/recommended-typescript-flavor-error'],
      rules: {
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-description': 'off',
      },
    },
  ],
};
