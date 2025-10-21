import type { ComponentSizeType } from '../../constants'

export interface InputProps {
  /** v-model */
  modelValue?: string
  /** 占位内容 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否显示清除按钮 */
  showClear?: boolean
  /** 输入框类型 */
  type?: InputType
  /** 尺寸 */
  size?: ComponentSizeType
}

export type InputType = 'text' | 'password' | 'textarea'

export interface InputEmits {
  /** v-model */
  'update:modelValue': [value: string]
  /** 输入框内容变化时的回调 */
  'change': [value: string, e: Event]
  'clear': [e: Event]
  'blur': [e: Event]
  'focus': [e: Event]
  'keydown': [e: Event]
  'keypress': [e: Event]
  'keyup': [e: Event]
  'compositionStart': [e: Event]
  'compositionEnd': [e: Event]
  'compositionUpdate': [e: Event]
}

export type TargetElement = HTMLInputElement | HTMLTextAreaElement
