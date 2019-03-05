module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "rules": {
    'semi': ['error', 'never'],
    'no-extra-semi': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}