import type { DefaultTheme } from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
  logo: '/semi_logo.svg',
  search: {
    provider: 'local',
  },
  nav: [
    { text: 'Guide', link: '/guide/quick-start' },
    { text: 'Components', link: '/components/overview/introduction' },
  ],
  socialLinks: [
    { icon: 'npm', link: 'https://www.npmjs.com/package/vue-semi-design' },
    { icon: 'github', link: 'https://github.com/ducheng1/vue-semi-design' },
  ],
  footer: {
    message:
      'Designed by Douyin FE & <a href="https://dribbble.com/MetaEnterpriseDesign">MED</a>, developed by ducheng1',
    copyright: 'Copyright &copy; 2025-present ducheng1',
  },
  editLink: {
    pattern: 'https://github.com/ducheng1/vue-semi-design/blob/dev/docs/src/:path',
    text: 'Edit this page on GitHub',
  },
}
