import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'cz-git'

const scopes = readdirSync(resolve(process.cwd(), 'packages'))

export default defineConfig({
  extends: ['@commitlint/config-conventional'],
  prompt: {
    useEmoji: true,
    scopes,
    types: [
      {
        value: 'feat',
        name: 'feat:     新功能',
        emoji: ':rocket:',
      },
      {
        value: 'fix',
        name: 'fix:      bug修复',
        emoji: ':bug:',
      },
      {
        value: 'docs',
        name: 'docs:     文档变更',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    不影响代码功能的变更，例如空格、分号等格式修正',
        emoji: ':dizzy:',
      },
      {
        value: 'refactor',
        name: 'refactor: 代码重构（不包括 bug 修复、功能新增）',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     性能优化',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     添加或者修正测试',
        emoji: ':wheelchair:',
      },
      {
        value: 'build',
        name: 'build:    构建系统或外部依赖的变动',
        emoji: ':package:',
      },
      {
        value: 'ci',
        name: 'ci:       持续集成相关变动',
        emoji: ':hammer:',
      },
      {
        value: 'chore',
        name: 'chore:    不修改源代码或者测试的文件变更',
        emoji: ':wrench:',
      },
      {
        value: 'revert',
        name: 'revert:   回退提交',
        emoji: ':rewind:',
      },
    ],
  },
})
