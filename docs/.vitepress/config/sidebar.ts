import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'

export const sidebarConfig: VitePressSidebarOptions[] = [
  {
    documentRootPath: '/src',
    scanStartPath: 'guide',
    basePath: '/guide/',
    resolvePath: '/guide/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    useFolderTitleFromIndexFile: true,
  },
  {
    documentRootPath: '/src',
    scanStartPath: 'components',
    basePath: '/components/',
    resolvePath: '/components/',
    useTitleFromFileHeading: true,
    sortMenusByFrontmatterOrder: true,
    useFolderTitleFromIndexFile: true,
  },
]
