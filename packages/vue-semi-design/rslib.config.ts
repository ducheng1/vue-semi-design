import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rslib/core'
import { glob } from 'glob'
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue'
import * as sass from 'sass'

// @ts-expect-error allow async config
export default defineConfig(async () => {
  const scssFiles = await glob('src/styles/**/*.scss', { platform: 'linux' })

  return {
    lib: [
      // build umd bundle
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
        dts: true,
        source: {
          entry: {
            index: ['./src/components/**/*', '!**/*.stories.ts'],
          },
        },
        output: {
          distPath: {
            root: './dist/es',
            js: './components',
          },
        },
      },
      // build styles
      {
        bundle: false,
        format: 'esm',
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
      pluginSass({
        sassLoaderOptions: {
          implementation: sass,
          sourceMap: true,
        },
      }),
    ],
  }
})
