import antfu from '@antfu/eslint-config'
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended'

export default antfu(
  {
    javascript: true,
    typescript: true,
    type: true,
    regexp: true,
    vue: true,
    jsx: true,
    markdown: true,
    formatters: {
      html: true,
      css: false,
      markdown: true,
    },
    ignores: ['node_modules', 'dist', 'pnpm-lock.yaml'],
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style', 'route'],
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false },
      ],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/slot-name-casing': ['error', 'kebab-case'],
      'vue/html-self-closing': 'error',
    },
  },
  {
    rules: {
      'no-console': 'off',
      'antfu/if-newline': 'off',
      'antfu/no-import-dist': 'off',
    },
  },
  eslintConfigPrettier,
)
