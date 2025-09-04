import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '..'
import '../../../styles/components/button.scss'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: '基础/按钮',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    default: () => '单色按钮',
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: '浅色背景',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        primary: '浅色主要',
        secondary: '浅色次要',
        tertiary: '浅色第三',
        warning: '浅色警告',
        danger: '浅色危险',
      })
        .map(
          ([type, label]) => `
        <Button theme="light" type="${type}">${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Solid: Story = {
  name: '深色背景',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        primary: '深色主要',
        secondary: '深色次要',
        tertiary: '深色第三',
        warning: '深色警告',
        danger: '深色危险',
      })
        .map(
          ([type, label]) => `
        <Button theme="solid" type="${type}">${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Borderless: Story = {
  name: '无背景',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        primary: '主要',
        secondary: '次要',
        tertiary: '第三',
        warning: '警告',
        danger: '危险',
      })
        .map(
          ([type, label]) => `
        <Button theme="borderless" type="${type}">${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Outline: Story = {
  name: '边框',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        primary: '主要',
        secondary: '次要',
        tertiary: '第三',
        warning: '警告',
        danger: '危险',
      })
        .map(
          ([type, label]) => `
        <Button theme="outline" type="${type}">${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Disabled: Story = {
  name: '禁用状态',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        '': '禁用',
        'borderless': '无背景',
        'light': '浅色',
        'solid': '深色',
      })
        .map(
          ([theme, label]) => `
        <Button theme="${theme}" disabled>${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Size: Story = {
  name: '尺寸',
  render: () => ({
    components: { Button },
    template: `
      ${Object.entries({
        'large': '大尺寸',
        '': '默认尺寸',
        'small': '小尺寸',
      })
        .map(
          ([size, label]) => `
        <Button size=${size}>${label}</Button>
      `,
        )
        .join('')}
    `,
  }),
}

export const Block: Story = {
  name: '块状',
  args: {
    block: true,
  },
}
