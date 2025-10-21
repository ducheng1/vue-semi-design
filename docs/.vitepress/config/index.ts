import mdContainer from 'markdown-it-container'
import { defineConfig } from 'vitepress'

import createDemoContainer from '../plugins/demo'
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
      md.use(mdContainer, 'demo', createDemoContainer(md))
    },
  },
  vite: {
    ssr: {
      noExternal: ['vue-semi-design'],
    },
  },
})
