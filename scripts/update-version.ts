import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import packageJson from '../packages/vue-semi-design/package.json'

writeFileSync(resolve(cwd(), 'src/version.ts'), `export default '${packageJson.version}'`)
