module.exports = {
  // prettier 默认配置(https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier/flowtype', 'prettier/react'],
  // 使用自带的babel进行编译
  parser: 'babel-eslint',
  parserOptions: {
    // 指定js的版本(es6)
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },

  // 自定义的规则
  rules: {
    'import/first': 'warn',
    'no-unused-vars': 'error',
    'react/no-unused-state': 'warn',
    'no-shadow': 'off',
  },
}
