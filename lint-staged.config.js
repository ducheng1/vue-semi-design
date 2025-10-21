export default {
  '**/*': [
    'eslint --fix --cache --cache-location=node_modules/.cache/eslint/',
    'prettier --write --ignore-unknown',
  ],
  '**/*.{scss,css,vue}': [
    'stylelint --fix --cache --cache-location=node_modules/.cache/stylelint/',
  ],
}
