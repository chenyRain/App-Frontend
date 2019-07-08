module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [0, 'double'], // 不强制使用胆英豪
    'space-before-function-paren': 'off', // 不检查方法名后面的是否有空格
    'semi': 0, // 不检查分号
    'import/no-duplicates': 0, // 不检查分号
    'no-unused-vars': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
