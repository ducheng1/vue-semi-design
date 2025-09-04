/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-clean-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'selector-class-pattern': null,
    'at-rule-empty-line-before': null,
  },
}
