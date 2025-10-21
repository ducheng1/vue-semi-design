import type { Theme } from 'vitepress'
// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
// @ts-expect-error no type
import { useComponents } from './useComponents'
import './style.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
  },
} satisfies Theme
