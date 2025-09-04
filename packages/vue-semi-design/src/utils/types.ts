import type { Plugin } from 'vue'

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type ComponentWithInstall<T> = T & Plugin

export type Nullable<T> = undefined | null | T
