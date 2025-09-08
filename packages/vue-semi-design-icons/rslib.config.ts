import type { LibConfig } from '@rslib/core'
import { defineConfig } from '@rslib/core'
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue'
import version from './src/version'

const banner = `/* @vue-semi-design/icons ${version} */`

// build umd for library
function buildUmd(): LibConfig[] {
  return [
    // minified
    {
      banner: {
        css: banner,
        js: banner,
      },
      umdName: 'VueSemiDesignIcons',
      bundle: true,
      dts: false,
      source: {
        entry: {
          index: ['./src/index.ts'],
        },
      },
      format: 'umd',
      output: {
        externals: {
          vue: 'Vue',
        },
        filename: {
          js: 'index.full.min.js',
        },
        target: 'web',
        sourceMap: true,
        distPath: {
          root: './dist/umd',
        },
        minify: {
          css: true,
          cssOptions: {
            removeUnusedLocalIdents: true,
          },
        },
      },
    },
    // not minified
    {
      banner: {
        js: banner,
      },
      umdName: 'VueSemiDesignIcons',
      bundle: true,
      dts: false,
      source: {
        entry: {
          index: './src/index.ts',
        },
      },
      format: 'umd',
      output: {
        externals: {
          vue: 'Vue',
        },
        filename: {
          js: 'index.full.js',
        },
        target: 'web',
        sourceMap: true,
        distPath: {
          root: './dist/umd',
        },
        minify: {
          js: true,
          jsOptions: {
            minimizerOptions: {
              mangle: false,
              minify: false,
              compress: {
                defaults: true,
                unused: true,
                dead_code: true,
                toplevel: true,
              },
              format: {
                comments: 'some',
                preserve_annotations: true,
              },
            },
          },
        },
      },
    },
  ]
}

export default defineConfig({
  lib: [
    {
      banner: {
        dts: banner,
        js: banner,
      },
      bundle: false,
      dts: true,
      format: 'esm',
      source: {
        entry: {
          index: ['./src/**/*'],
        },
      },
      output: {
        target: 'web',
        sourceMap: true,
        distPath: {
          root: './dist/es',
        },
      },
    },
    ...buildUmd(),
  ],
  plugins: [pluginUnpluginVue()],
})
