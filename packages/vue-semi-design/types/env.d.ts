/// <reference types="@rsbuild/core/types" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<object, object, any>
  export default component
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
