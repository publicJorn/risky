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
    '../.eslint-rules.js',
    'standard-with-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
}
