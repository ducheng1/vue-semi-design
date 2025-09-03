import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rslib/core'
import { glob } from 'glob'
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue'

// @ts-expect-error allow async config
export default defineConfig(async () => {
  const scssFiles = await glob('src/styles/**/*.scss', { platform: 'linux' })

  return {
    lib: [
      {
        bundle: true,
        dts: false,
        format: 'umd',
        output: {
          distPath: {
            root: './dist/umd',
          },
        },
      },
      // build components
      {
        bundle: false,
        format: 'esm',
        dts: {
          distPath: './dist/es',
        },
        source: {
          entry: {
            index: ['./src/components/**/*', '!**/*.stories.ts'],
          },
        },
        output: {
          distPath: {
            root: './dist/es/components',
          },
        },
      },
      // build styles
      {
        bundle: false,
        source: {
          entry: scssFiles,
        },
        output: {
          distPath: {
            root: './dist/es/styles',
          },
        },
      },
    ],
    output: {
      target: 'web',
      cleanDistPath: true,
    },
    plugins: [
      pluginUnpluginVue({
        unpluginVueOptions: {
          style: {
            preprocessLang: 'scss',
          },
        },
      }),
      pluginSass(),
    ],
  }
})
