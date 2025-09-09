import type {
  ComponentAlignType,
  ComponentSizeType,
  ComponentSpacingType,
  ComponentThemeType,
  ComponentTypeType,
} from '../constants'
import { alignList, sizeList, spacingList, themeList, typeList } from '../constants'

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

/** 获取合法对齐 */
export function getValidAlign(align: any): ComponentAlignType {
  if (!align || typeof align !== 'string' || !alignList.includes(align as ComponentAlignType)) {
    return 'center'
  }
  return align as ComponentAlignType
}

/** 获取合法间距 */
export function getValidSpacing(spacing: any): ComponentSpacingType | number | number[] {
  if (
    !spacing ||
    typeof spacing !== 'string' ||
    !spacingList.includes(spacing as ComponentSpacingType)
  ) {
    if (Array.isArray(spacing)) {
      return spacing
    }
    if (typeof spacing === 'number') {
      return spacing
    }
    return 'tight'
  }
  return spacing as ComponentSpacingType
}
