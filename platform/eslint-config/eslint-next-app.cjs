// @ts-check

const baseEslintConfig = require('./eslint-ecma.cjs');
const reactEslintConfig = require('./eslint-react.cjs');
const nextEslintConfig = require('./eslint-next.cjs');

const noRestrictedSyntax_preferNextJsImage = [
  {
    selector: "MemberExpression[object.name='styled'][property.name='img']",
    message: 'Do not use the native <img> HTML element; use <Image> from "#pkg/elements" instead.',
  },
];
const noRestrictedSyntax_preferElements = [
  {
    selector: "MemberExpression[object.name='styled'][property.name='img']",
    message: 'Do not use the native <img> HTML element; use <Image> from "#pkg/elements" instead.',
  },
  {
    selector: "MemberExpression[object.name='styled'][property.name='a']",
    message: 'Do not use the native <a> HTML element; use <Anchor> from "#pkg/elements" instead.',
  },
  {
    selector: "MemberExpression[object.name='styled'][property.name='button']",
    message:
      'Do not use the native <button> HTML element; use <Button> from "#pkg/elements" instead.',
  },
];

const baseNoRestrictedSyntax = baseEslintConfig.rules?.['no-restricted-syntax']?.slice(1) ?? [];
const reactNoRestrictedSyntax = reactEslintConfig.rules?.['no-restricted-syntax']?.slice(1) ?? [];
const nextNoRestrictedSyntax = nextEslintConfig.rules?.['no-restricted-syntax']?.slice(1) ?? [];
const baseCodeImportPatternsZones =
  baseEslintConfig.rules?.['code-import-patterns/patterns']?.slice(1)?.zones ?? [];
const reactCodeImportPatternsZones =
  reactEslintConfig.rules?.['code-import-patterns/patterns']?.slice(1)?.zones ?? [];
const nextCodeImportPatternsZones =
  nextEslintConfig.rules?.['code-import-patterns/patterns']?.slice(1)?.zones ?? [];

module.exports = {
  ...baseEslintConfig,
  ...reactEslintConfig,
  ...nextEslintConfig,
  parserOptions: {
    ...baseEslintConfig.parserOptions,
    ...reactEslintConfig.parserOptions,
    ...nextEslintConfig.parserOptions,
  },
  plugins: [
    ...(baseEslintConfig.plugins ?? []),
    ...(reactEslintConfig.plugins ?? []),
    ...(nextEslintConfig.plugins ?? []),
  ],
  extends: [
    ...(baseEslintConfig.extends ?? []),
    ...(reactEslintConfig.extends ?? []),
    ...(nextEslintConfig.extends ?? []),
    './eslint-config-next-core-web-vitals-fixed.cjs',
  ],
  ignorePatterns: [
    ...(baseEslintConfig.ignorePatterns ?? []),
    ...(reactEslintConfig.ignorePatterns ?? []),
    ...(nextEslintConfig.ignorePatterns ?? []),
  ],
  rules: {
    ...baseEslintConfig.rules,
    ...reactEslintConfig.rules,
    ...nextEslintConfig.rules,
    'no-restricted-syntax': [
      'error',
      ...baseNoRestrictedSyntax,
      ...reactNoRestrictedSyntax,
      ...nextNoRestrictedSyntax,
      ...noRestrictedSyntax_preferElements,
    ],
    'code-import-patterns/patterns': [
      'error',
      {
        zones: [
          ...baseCodeImportPatternsZones,
          ...reactCodeImportPatternsZones,
          ...nextCodeImportPatternsZones,
          {
            target: /.+/,
            forbiddenPatterns: [
              {
                // forbid importing from next/image (should only be allowed in #pkg/elements/Image.tsx)
                pattern: /next\/image/,
                errorMessage:
                  'Don\'t use "Image" from "next/image"; use from "#pkg/elements" instead.',
              },
            ],
          },
        ],
      },
    ],
    'unicorn/prefer-global-this': 'off',
  },
  overrides: [
    ...(baseEslintConfig.overrides ?? []),
    ...(reactEslintConfig.overrides ?? []),
    ...(nextEslintConfig.overrides ?? []),
    {
      files: ['src/elements/**/*'],
      rules: {
        'no-restricted-syntax': ['error', ...noRestrictedSyntax_preferNextJsImage],
      },
    },
  ],
  settings: {
    ...baseEslintConfig.settings,
    ...reactEslintConfig.settings,
    ...nextEslintConfig.settings,
  },
};
