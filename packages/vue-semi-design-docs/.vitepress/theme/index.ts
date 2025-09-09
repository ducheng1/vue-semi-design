import type { Theme } from 'vitepress'
// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
// @ts-expect-error no types
import { useComponents } from './useComponents'
import './style.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  extends: DefaultTheme,
  Layout: h(DefaultTheme, null),
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
  },
} satisfies Theme
