import type { App } from 'vue'
import * as components from './components'
import version from './version'

function install(app: App) {
  Object.keys(components).forEach((key) => {
    // @ts-expect-error any
    const component = components[key]
    if (component.install) {
      app.use(component)
    }
  })

  return app
}

export * from './components'
export { version }

export default {
  version,
  install,
}
