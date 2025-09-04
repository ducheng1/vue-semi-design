import type { LibConfig } from '@rslib/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rslib/core'
import { glob } from 'glob'
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue'
import * as sass from 'sass'

function buildEsm(styleEntry: Record<string, string>): LibConfig[] {
  return [
    // build vue and ts
    {
      bundle: false,
      dts: true,
      format: 'esm',
      source: {
        entry: {
          index: ['./src/**/*', '!**/*.stories.ts', '!./src/styles/**/*'],
        },
      },
      output: {
        target: 'web',
        cleanDistPath: true,
        distPath: {
          root: './dist/es',
        },
      },
    },
    // build styles
    {
      bundle: false,
      source: {
        entry: styleEntry,
      },
      output: {
        target: 'web',
        cleanDistPath: true,
        distPath: {
          root: './dist/styles',
        },
        copy: [
          {
            from: '**/*.scss',
            context: 'src/styles',
            to: 'src',
            globOptions: {
              ignore: ['**/index.scss'],
            },
          },
        ],
      },
    },
  ]
}

function buildUmd(): LibConfig[] {
  return [
    // js
    {
      bundle: true,
      dts: false,
      format: 'umd',
      output: {
        target: 'web',
        cleanDistPath: true,
        distPath: {
          root: './dist/umd',
        },
      },
    },
    {
      bundle: true,
      source: {
        entry: {
          index: './src/styles/index.scss',
        },
      },
      output: {
        target: 'web',
        cleanDistPath: true,
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
  ]
}

export default defineConfig(async () => {
  const scssFiles = await glob('src/styles/**/*.scss', {
    platform: 'linux',
    // ignore: ['src/styles/index.scss'],
  })

  const scssEntries = Object.fromEntries(
    scssFiles.map((file) => {
      const entry = file.replace('src/styles/', '').replace('.scss', '')
      return [entry, file]
    }),
  )

  return {
    lib: [
      // esm
      ...buildEsm(scssEntries),
      // umd
      ...buildUmd(),
    ],
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
