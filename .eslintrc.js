module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 扩展规则
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-tencent',
    'eslint-config-tencent/ts',
  ],
  // 解析器
  parser: 'vue-eslint-parser',
  // 解析器配置项
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue', '.html'],
  },
  // 规则插件
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/first': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
