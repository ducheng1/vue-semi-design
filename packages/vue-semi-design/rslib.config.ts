import type { LibConfig } from '@rslib/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { defineConfig } from '@rslib/core'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import { glob } from 'glob'
import { pluginUnpluginVue } from 'rsbuild-plugin-unplugin-vue'
import version from './src/version'

const banner = `/* vue-semi-design ${version} */`

// build styles
function buildStyle(styleEntry: Record<string, string>): LibConfig[] {
  return [
    {
      banner: {
        css: banner,
      },
      bundle: false,
      source: {
        entry: styleEntry,
      },
      output: {
        target: 'web',
        sourceMap: true,
        distPath: {
          root: './dist/es/styles',
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
        minify: {
          css: true,
          cssOptions: {
            removeUnusedLocalIdents: true,
          },
        },
      },
      tools: {
        postcss: {
          postcssOptions: {
            plugins: [autoprefixer(), cssnano()],
          },
        },
      },
    },
  ]
}

// build vue and ts in esm format
function buildEsm(): LibConfig[] {
  return [
    {
      banner: {
        js: banner,
        dts: banner,
      },
      bundle: false,
      dts: true,
      format: 'esm',
      source: {
        entry: {
          index: ['./src/**/*', '!**/*.stories.ts', '!./src/styles/**/*'],
        },
        transformImport: [
          {
            libraryName: 'vue-semi-design',
            style: true,
            styleLibraryDirectory: 'styles',
          },
        ],
      },
      output: {
        target: 'web',
        sourceMap: true,
        distPath: {
          root: './dist/es',
        },
      },
    },
  ]
}

// build umd for library
function buildUmd(): LibConfig[] {
  return [
    // minified
    {
      banner: {
        css: banner,
        js: banner,
      },
      umdName: 'VueSemiDesign',
      bundle: true,
      dts: false,
      source: {
        entry: {
          index: ['./src/styles/index.scss', './src/index.ts'],
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
      umdName: 'VueSemiDesign',
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
      // style
      ...buildStyle(scssEntries),
      // esm
      ...buildEsm(),
      // umd
      ...buildUmd(),
    ],
    plugins: [pluginUnpluginVue(), pluginSass()],
  }
})
