import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

import { themeConfig } from './theme'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue Semi Design',
  description: 'A vue component library based on semi design',
  outDir: './dist',
  srcDir: './src',
  lastUpdated: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/semi_logo.svg' }]],
  themeConfig,
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
})
