import type { App } from 'vue'
import type { ComponentWithInstall } from '../../utils'
import type { SpaceProps } from './types'
import Space from './space.vue'

Space.install = (app: App) => {
  app.component(Space.name as string, Space)
  return app
}

export default Space as ComponentWithInstall<typeof Space>

export type { SpaceProps }
