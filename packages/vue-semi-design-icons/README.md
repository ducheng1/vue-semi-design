# Vue Semi Design Icons

Icon lib for Vue Semi Design.

## Quick Start

```shell
# with npm
npm i @vue-semi-design/icons

# with yarn
yarn add @vue-semi-design/icons

# with pnpm (recommended)
pnpm add @vue-semi-design/icons
```

Import icons in project:

```vue
<script>
import { IconLoading } from '@vue-semi-design/icons'
import { SemiIcon } from 'vue-semi-design'
</script>

<template>
  <SemiIcon>
    <IconLoading />
  </SemiIcon>
</template>
```

Or you can full import in entry file

```typescript
import VueSemiDesignIcons from '@vue-semi-design/icons'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(VueSemiDesignIcons)

app.mount('#app')
```

## License

Vue Semi Design Icons is releasing under [MIT License](https://github.com/ducheng1/vue-semi-design/blob/dev/LICENSE)
