module.exports = {
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
  }
}
