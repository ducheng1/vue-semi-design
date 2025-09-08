import type { App } from 'vue'
import * as components from './icons'
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

export * from './icons'
export { version }

export default {
  version,
  install,
}
