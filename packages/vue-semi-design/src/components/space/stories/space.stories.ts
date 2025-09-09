import type { Meta, StoryObj } from '@storybook/vue3'
import Space from '..'
import Button from '../../button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Space> = {
  title: '基础/Space 间距',
  component: Space,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: '默认状态',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    `,
  }),
}

export const Medium: Story = {
  name: '中等间距',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space spacing="medium">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    `,
  }),
}

export const Loose: Story = {
  name: '宽间距',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space spacing="loose">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    `,
  }),
}

export const Number: Story = {
  name: '自定义间距',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space :spacing="4">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    `,
  }),
}

export const NumberArray: Story = {
  name: '自定义间距（数组）',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space :spacing="[4, 16]" wrap>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮5</Button>
        <Button>按钮6</Button>
        <Button>按钮7</Button>
        <Button>按钮8</Button>
        <Button>按钮9</Button>
      </Space>
    `,
  }),
}

export const Vertical: Story = {
  name: '垂直',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space vertical>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    `,
  }),
}

export const Wrap: Story = {
  name: '自动换行',
  render: () => ({
    components: { Space, Button },
    template: `
      <Space :spacing="[4, 16]">
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮5</Button>
        <Button>按钮6</Button>
        <Button>按钮7</Button>
        <Button>按钮8</Button>
        <Button>按钮9</Button>
      </Space>
    `,
  }),
}
