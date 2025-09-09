import type { Meta, StoryObj } from '@storybook/vue3'
import { IconAlarm } from '@vue-semi-design/icons'
import { h } from 'vue'
import Icon from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Icon> = {
  title: '基础/Icon 图标',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    default: () => h(IconAlarm),
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}

export const Size: Story = {
  name: '尺寸',
  render: () => ({
    components: { Icon, IconAlarm },
    template: `
      ${['extra-large', 'large', '', 'small', 'extra-small']
        .map(
          (size) => `
        <Icon size="${size}"><IconAlarm /></Icon>
      `,
        )
        .join('')}
    `,
  }),
}

export const Rotate: Story = {
  name: '旋转',
  args: {
    rotate: 45,
  },
}

export const Spin: Story = {
  name: '旋转动画',
  args: {
    spin: true,
  },
}
