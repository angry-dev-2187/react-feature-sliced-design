import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Input> = {
  title: 'DESIGN_SYSTEM: Input',
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    variant: 'default',
    hovered: false,
    focused: false,
    invalid: false,
    disabled: false,
    readOnly: false,
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    before: {
      table: {
        disable: true,
      },
    },
    after: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Input placeholder="Placeholder" {...args} />
      </Flex>
    )
  },
}
