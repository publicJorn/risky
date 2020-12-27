module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    // jest: true,
    node: true,
  },

  extends: [
    'standard-with-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],

  rules: {
    // generic
    'no-console': ['warn', { allow: ['error', 'warn'] }],

    // prettier
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],
  },
}
