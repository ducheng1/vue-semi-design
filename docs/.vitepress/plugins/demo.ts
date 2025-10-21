import type { MarkdownRenderer } from 'vitepress'
import * as fs from 'node:fs'
import path from 'node:path'

interface ContainerOpts {
  marker?: string | undefined
  validate?: (params: string) => boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}
function createDemoContainer(md: MarkdownRenderer): ContainerOpts {
  return {
    validate(params) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve('examples', `${sourceFile}.vue`), 'utf-8')
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<VpDemo path="${sourceFile}" source="${encodeURIComponent(
          md.render(`\`\`\` vue\n${source}\`\`\``),
        )}" description="${encodeURIComponent(md.render(description))}">
        <template #preview>
          <block-${sourceFile.replaceAll('/', '-')} />
        </template>
      `
      } else {
        return '</VpDemo>\n'
      }
    },
  }
}

export default createDemoContainer
