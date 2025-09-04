import type { App } from 'vue'
import type { ComponentWithInstall } from '../../utils'
import type { ButtonProps } from './types'
import SemiButton from './button.vue'

SemiButton.install = (app: App) => {
  app.component(SemiButton.name as string, SemiButton)
  return app
}

export default SemiButton as ComponentWithInstall<typeof SemiButton>

export type { ButtonProps }
