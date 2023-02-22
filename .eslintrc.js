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
  ],
  parser: '@typescript-eslint/parser', // TypeScriptを扱えるようにするには、TypeScript用のパーサー(@typescript-eslint/parser)をインストールして指定する必要がある。
  parserOptions: { // どのECMAScriptを対象にするか、JSXコードを記述するか、など
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [ // eslintのプラグインを利用する場合はインストールしてここに記述。eslint-plugin というプレフィックスは省略可
    'react',  // means eslint-plugin-react
    '@typescript-eslint', // means @typescript-eslint/eslint-plugin
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