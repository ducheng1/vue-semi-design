import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'
import { defaultLocale, supportedLocales } from './i18n'

export const sidebarConfig: VitePressSidebarOptions[] = supportedLocales
  .map((locale) => [
    {
      documentRootPath: '/src',
      scanStartPath: `${locale}/guide`,
      basePath: locale === defaultLocale ? '/guide/' : `/${locale}/guide/`,
      resolvePath: locale === defaultLocale ? '/guide/' : `/${locale}/guide/`,
      useTitleFromFileHeading: true,
      sortMenusByFrontmatterOrder: true,
      useFolderTitleFromIndexFile: true,
    },
    {
      documentRootPath: '/src',
      scanStartPath: `${locale}/components`,
      basePath: locale === defaultLocale ? '/components/' : `/${locale}/components/`,
      resolvePath: locale === defaultLocale ? '/components/' : `/${locale}/components/`,
      useTitleFromFileHeading: true,
      sortMenusByFrontmatterOrder: true,
      useFolderTitleFromIndexFile: true,
    },
  ])
  .flat()
