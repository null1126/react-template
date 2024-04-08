module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'prettier/prettier': 'error',
    // 禁止使用var
    'no-var': 'error',
    // 可以使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 导入模块排序
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
