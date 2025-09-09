import type { ComponentAlignType, ComponentSpacingType } from '../../constants'

export interface SpaceProps {
  /** 对齐方式 */
  align?: ComponentAlignType
  /** 垂直方向 */
  vertical?: boolean
  /** 自动换行 */
  wrap?: boolean
  /** 间距尺寸 */
  spacing?: ComponentSpacingType | number | number[]
}
