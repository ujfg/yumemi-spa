module.exports = {
  root: true, // ここより上位の設定探さなくていいよ
  env: { // どこの環境で実行するか(グローバル変数の中身が変わる)
    browser: true,
    es2021: true,
  },
  extends: [ // これらルールで拡張する(下に行くほど上書き、prettierとeslintの競合対策)
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  rules: {
    'no-use-before-define': "off",
    "@typescript-eslint/no-use-before-define": "off",
    'import/prefer-default-export': "off",
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    },
  },
 };