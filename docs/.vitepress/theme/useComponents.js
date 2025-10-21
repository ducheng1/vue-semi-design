import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
// Don't remove this file, because it registers the demo components.
import ButtonBlock from '../../blocks/button/block.vue'
import ButtonIcon from '../../blocks/button/icon.vue'
import ButtonSize from '../../blocks/button/size.vue'
import ButtonTheme from '../../blocks/button/theme.vue'
import ButtonType from '../../blocks/button/type.vue'

export function useComponents(app) {
  app.component('ButtonBlock', ButtonBlock)
  app.component('ButtonIcon', ButtonIcon)
  app.component('ButtonSize', ButtonSize)
  app.component('ButtonTheme', ButtonTheme)
  app.component('ButtonType', ButtonType)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
