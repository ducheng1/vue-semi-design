import type { App } from 'vue'
import type { ComponentWithInstall } from '../../utils'
import type { InputProps } from './types'
import SemiInput from './input.vue'

SemiInput.install = (app: App) => {
  app.component(SemiInput.name as string, SemiInput)
  return app
}

export default SemiInput as ComponentWithInstall<typeof SemiInput>

export type { InputProps }
