import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from '..'
import Space from '../../space'

const modelValue = ref()

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: '输入类/Input 输入框',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {
    'placeholder': '请输入',
    'modelValue': modelValue.value,
    'onUpdate:modelValue': (value) => {
      modelValue.value = value
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  name: '默认状态',
  args: {},
}

export const Size: Story = {
  name: '尺寸',
  render: () => ({
    components: { Input, Space },
    template: `
    <Space vertical>
      <Input size="large" placeholder="large" />
      <Input placeholder="default" />
      <Input size="small" placeholder="small" />
    </Space>
    `,
  }),
}

export const Disabled: Story = {
  name: '禁用',
  args: {
    disabled: true,
  },
}

export const Prefix: Story = {
  name: '前缀',
  args: {
    prefix: () => 'Prefix',
  },
}

export const Suffix: Story = {
  name: '后缀',
  args: {
    suffix: () => 'Suffix',
  },
}
