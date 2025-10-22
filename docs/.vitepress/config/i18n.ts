import type { VitePressI18nOptions } from 'vitepress-i18n/types'

export const defaultLocale: string = 'en'
export const supportedLocales: string[] = [defaultLocale, 'zhHans', 'zhHant']

const i18nConfig: VitePressI18nOptions = {
  locales: supportedLocales,
  rootLocale: defaultLocale,
  searchProvider: 'local',
  description: {
    en: 'A vue component library based on semi design',
    zhHans: '一个基于 Semi Design 设计语言的 vue 组件库',
    zhHant: '一個基於 Semi Design 設計語言的 vue 組件庫',
  },
  themeConfig: {
    en: {
      nav: [
        { text: 'Guide', link: '/en/guide/quick-start', activeMatch: '/en/guide' },
        {
          text: 'Components',
          link: '/en/components/overview/introduction',
          activeMatch: '/en/components',
        },
      ],
      editLink: {
        pattern: 'https://github.com/ducheng1/vue-semi-design/blob/dev/docs/src/:path',
        text: 'Edit this page on GitHub',
      },
    },
    zhHans: {
      nav: [
        { text: '指南', link: '/zhHans/guide/quick-start', activeMatch: '/zhHans/guide' },
        {
          text: '组件',
          link: '/zhHans/components/overview/introduction',
          activeMatch: '/zhHans/components',
        },
      ],
      editLink: {
        pattern: 'https://github.com/ducheng1/vue-semi-design/blob/dev/docs/src/:path',
        text: '在 Github 上编辑',
      },
    },
    zhHant: {
      nav: [
        { text: '指南', link: '/zhHant/guide/quick-start', activeMatch: '/zhHant/guide' },
        {
          text: '組件',
          link: '/zhHant/components/overview/introduction',
          activeMatch: '/zhHant/components',
        },
      ],
      editLink: {
        pattern: 'https://github.com/ducheng1/vue-semi-design/blob/dev/docs/src/:path',
        text: '在 Github 上編輯',
      },
    },
  },
}

export default i18nConfig
