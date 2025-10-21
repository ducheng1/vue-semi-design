import mdContainer from 'markdown-it-container'
import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import createDemoContainer from '../plugins/demo'
import { sidebarConfig } from './sidebar'
import { themeConfig } from './theme'

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
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
      locales: {
        'root': {
          label: 'English',
          lang: 'en-US',
        },
        'zh-CN': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    },
    sidebarConfig,
  ),
)
