import type { DefaultTheme } from 'vitepress'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

export const themeConfig: DefaultTheme.Config = {
  logo: '/semi_logo.svg',
  search: {
    provider: 'local',
  },
  nav: [
    { text: '指南', link: '/guide/quick-start/' },
    { text: '组件', link: '/components/introduction/' },
  ],
  socialLinks: [{ icon: 'github', link: 'https://github.com/ducheng1/vue-semi-design' }],
  footer: {
    message:
      'Designed by Douyin FE & <a href="https://dribbble.com/MetaEnterpriseDesign">MED</a>, developed by ducheng1',
    copyright: 'Copyright &copy; 2025-present ducheng1',
  },
  sidebar: calculateSidebar(
    [
      { folderName: 'src/guide', separate: true },
      { folderName: 'src/components', separate: true },
    ],
    '',
    // 'src',
    { '/': 2 },
  ),
  editLink: {
    pattern:
      'https://github.com/ducheng1/vue-semi-design/blob/dev/packages/vue-semi-design-docs/src/:path',
    text: '在 GitHub 上编辑此页',
  },
}
