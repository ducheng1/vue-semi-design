import type { Theme } from 'vitepress'
// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import VpDemo from '../../components/vp-demo/index.vue'
import * as examples from '../../examples'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('VpDemo', VpDemo)
    Object.entries(examples).forEach(([name, component]) => {
      ctx.app.component(`Block${name}`, component)
    })
  },
} satisfies Theme
