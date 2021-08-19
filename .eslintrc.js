module.exports = {
  env: { browser: true, es2021: true },
  extends: ['react-app', 'plugin:react/recommended', 'standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 'off', // 不检测组件 props 的类型
  },
}
