import type { App } from 'vue'
import type { ComponentWithInstall } from '../../utils'
import type { ButtonGroupProps, ButtonProps } from './types'
import ButtonGroup from './button-group.vue'
import Button from './button.vue'

Button.install = (app: App) => {
  app.component(Button.name as string, Button)
  return app
}

export default Button as ComponentWithInstall<typeof Button>
export { ButtonGroup }

export type { ButtonGroupProps, ButtonProps }
