import { existsSync } from 'node:fs'
import { appendFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pascalCase } from 'es-toolkit'
import { glob } from 'glob'

export function resolvePath(...paths: string[]) {
  return resolve(dirname('.'), ...paths)
}

async function getSvgMap(): Promise<Record<string, string>> {
  const list = await glob(resolvePath('./src/svg/*.svg'))
  const svgMapEntries = await Promise.all(
    list.map(async (path) => {
      const name = path.split('/').pop()?.replace('.svg', '').replace('_', '-')
      let svg = await readFile(path, { encoding: 'utf-8' })

      svg = svg.replaceAll(/fill="#?[a-zA-Z0-9]+" /g, `fill="currentColor" `)

      return [`Icon${pascalCase(name as string)}`, svg]
    }),
  )
  return Object.fromEntries(svgMapEntries)
}

function vueTemplate(name: string, svg: string) {
  return `
<script lang="ts" setup>
  import { defineOptions } from 'vue'

  defineOptions({
    name: 'Icon${name}'
  })
</script>

<template>
  ${svg}
</template>
  `
}

const entryFile = resolvePath('src', 'icons.ts')

async function generate() {
  // 删除入口文件
  if (existsSync(entryFile)) {
    await rm(entryFile)
  }
  // 删除文件夹
  await rm(resolvePath('src/components'), { force: true, recursive: true })
  // 创建文件夹
  await mkdir(resolvePath('src/components'))

  const svgFiles = await getSvgMap()
  await Promise.all(
    Object.entries(svgFiles).map(async ([name, svg]) => {
      const template = vueTemplate(name, svg)
      await writeFile(resolvePath('src/components', `${name}.vue`), template, {
        encoding: 'utf-8',
      })
      await appendFile(
        entryFile,
        `export { default as ${name} } from './components/${name}.vue' \n`,
        'utf-8',
      )
    }),
  )
  console.log('svg to vue components generate successful')
}

generate()
