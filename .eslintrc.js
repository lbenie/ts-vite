/**
 * @type {import('eslint').CLIEngine.Options}
 */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json', './tsconfig.spec.json'],
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, trailingComma: 'all' },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/prefer-readonly': ['error', { ignoreClass: true }],
  },
  env: {
    browser: true,
    node: true,
  },
}
