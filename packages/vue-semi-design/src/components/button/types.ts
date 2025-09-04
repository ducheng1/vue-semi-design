import type { ComponentSizeType, ComponentThemeType, ComponentTypeType } from '../../constants'

export interface ButtonProps {
  /** 将按钮设置为块级按钮 */
  block?: boolean
  /** 禁用状态 */
  disabled?: boolean
  /** 设置 button 原生的 type 值 */
  htmlType?: HTMLButtonElement['type']
  /** 图标位置 */
  iconPosition?: 'left' | 'right'
  /** 加载状态 */
  loading?: boolean
  /** 设置水平方向是否去掉内边距，只对设置了 icon 的 Button 有效 */
  noHorizontalPadding?: boolean | 'left' | 'right'
  /** 按钮大小 */
  size?: ComponentSizeType
  /** 按钮主题 */
  theme?: ComponentThemeType
  /** 按钮类型 */
  type?: ComponentTypeType
}
