import type { UserConfig } from 'vitepress'
import mdContainer from 'markdown-it-container'
import { defineConfig } from 'vitepress'
import { withI18n } from 'vitepress-i18n'
import { withSidebar } from 'vitepress-sidebar'
import createDemoContainer from '../plugins/demo'
import i18nConfig from './i18n'
import { sidebarConfig } from './sidebar'
import { themeConfig } from './theme'

const config: UserConfig = {
  title: 'Vue Semi Design',
  outDir: './dist',
  srcDir: './src',
  lastUpdated: true,
  cleanUrls: true,
  rewrites: {
    'en/:rest*': ':rest*',
  },
  sitemap: {
    hostname: 'https://vsd.dcwedu.top',
  },
  head: [['link', { rel: 'icon', href: '/semi_logo.svg' }]],
  themeConfig,
  markdown: {
    config: (md) => {
      md.use(mdContainer, 'demo', createDemoContainer(md))
    },
  },
  vite: {
    ssr: {
      noExternal: ['vue-semi-design', '@vue-semi-design/icons'],
    },
  },
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(withI18n(config, i18nConfig), sidebarConfig))
