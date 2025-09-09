import type { ComponentSizeType, ComponentThemeType, ComponentTypeType } from '../constants'
import { sizeList, themeList, typeList } from '../constants'

/** 获取合法类型 */
export function getValidType(type: any): ComponentTypeType {
  if (!type || typeof type !== 'string' || !typeList.includes(type as ComponentTypeType)) {
    return 'primary'
  }
  return type as ComponentTypeType
}

/** 获取合法主题 */
export function getValidTheme(theme: any): ComponentThemeType {
  if (!theme || typeof theme !== 'string' || !themeList.includes(theme as ComponentThemeType)) {
    return 'light'
  }
  return theme as ComponentThemeType
}

/** 获取合法尺寸 */
export function getValidSize(size: any): ComponentSizeType {
  if (!size || typeof size !== 'string' || !sizeList.includes(size as ComponentSizeType)) {
    return 'default'
  }
  return size as ComponentSizeType
}
