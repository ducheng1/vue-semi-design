import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '..'
import '../../../styles/button.scss'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Basic/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    default: () => 'test',
  },
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
  },
}

export const Secondary: Story = {
  args: {},
}

export const Tertiary: Story = {
  args: {
    tertiary: true,
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}
