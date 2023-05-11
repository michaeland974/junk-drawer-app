/* eslint-env node */
module.exports = {
  env: { browser: true, es2020: true, jest:true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'html'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'semi': [2, 'always'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  
};
