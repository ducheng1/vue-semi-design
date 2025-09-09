# Vue Semi Design

A modern, comprehensive, flexible design system and UI library. Connect DesignOps & DevOps. Quickly build beautiful Vue apps.

Thanks to [Semi Design](https://github.com/DouyinFE/semi-design)

## Notice

This package is still under developing

## Install

```bash
# with npm
npm i vue-semi-design

# with yarn
yarn add vue-semi-design

# with pnpm (recommended)
pnpm add vue-semi-design
```

## Usage

Import theme css in entry file

```typescript
import 'vue-semi-design/styles/default-theme.css'
```

Then import component and css

```vue
<script>
import { Button } from 'vue-semi-design'
</script>

<template>
  <div>
    <Button>Button</Button>
  </div>
</template>
```

Or you can full import in entry file

```typescript
import { createApp } from 'vue'
import VueSemiDesign from 'vue-semi-design'
import App from './App.vue'
import 'vue-semi-design/styles/index.css'

const app = createApp(App)

app.use(VueSemiDesign)

app.mount('#app')
```

## License

Vue Semi Design is releasing under [MIT License](https://github.com/ducheng1/vue-semi-design/blob/dev/LICENSE)
