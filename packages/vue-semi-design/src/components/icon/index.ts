import type { App } from 'vue'
import type { ComponentWithInstall } from '../../utils'
import type { IconProps } from './types'
import SemiIcon from './icon.vue'

SemiIcon.install = (app: App) => {
  app.component(SemiIcon.name as string, SemiIcon)
  return app
}

export default SemiIcon as ComponentWithInstall<typeof SemiIcon>

export type { IconProps }
