module.exports = {
  root: true,
  extends: ['vue', 'standard', 'vuepress', 'plugin:vue/recommended'],
  overrides: [
    {
      files: ['*.js', '*.vue'],
      extends: 'vuepress',
    },
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'import/named': 'off',
  },
}
