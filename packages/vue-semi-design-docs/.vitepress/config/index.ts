import { defineConfig } from 'vitepress'
import { themeConfig } from './theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'Vue Semi Design',
  description: 'A vue component library based on semi design',
  outDir: './dist',
  srcDir: './src',
  lastUpdated: true,
  themeConfig,
})
