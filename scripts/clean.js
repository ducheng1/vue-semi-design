import { promises as fs } from 'node:fs'
import path from 'node:path'
import * as process from 'node:process'
import chalk from 'chalk'

// recursive find dirs and remove
async function removeTarget(targets, currentDir) {
  const items = await fs.readdir(currentDir)
  for (const item of items) {
    try {
      const itemPath = path.join(currentDir, item)
      const stat = await fs.lstat(itemPath)
      if (targets.includes(item)) {
        await fs.rm(itemPath, { recursive: true, force: true })
        console.log(`Deleted: ${itemPath}`)
      } else if (stat.isDirectory()) {
        await removeTarget(targets, itemPath)
      }
    } catch (e) {
      console.error(chalk.red(`Error cleaning ${item}: ${e.message}`))
    }
  }
}

async function cleanup() {
  const targets = ['.turbo', 'dist', '.cache']
  if (process.argv.includes('-p')) {
    targets.push('node_modules', 'pnpm-lock.yaml')
  }
  console.log(chalk.blue(`Start cleanup workspace, targets: ${targets.join(', ')}`))
  try {
    const rootDir = path.dirname('..')
    await removeTarget(targets, rootDir)
    console.log(chalk.green('Cleanup success'))
  } catch (e) {
    console.error(chalk.red(`Error during cleanup: ${e.message}`))
    process.exit(1)
  }
}

cleanup()
