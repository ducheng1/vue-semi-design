export default {
  '**/*': ['eslint --fix --cache --cache-location=node_modules/.cache/eslint/'],
  '**/*.{scss,css}': ['stylelint --fix --cache --cache-location=node_modules/.cache/stylelint/'],
}
