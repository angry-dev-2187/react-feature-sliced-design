import type { Meta, StoryObj } from '@storybook/react'

import FieldDescriptor from './FieldDescriptor'

import Flex from '~shared/ui/Flex'
import Input from '~shared/ui/Input'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof FieldDescriptor> = {
  title: 'DESIGN_SYSTEM: FieldDescriptor',
  component: FieldDescriptor,
}

export default meta

type Story = StoryObj<typeof FieldDescriptor>

export const Default: Story = {
  args: {
    variant: 'info',
    children: 'Descriptor',
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    children: {
      control: 'text',
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ variant, ...args }) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <div>
          <Input placeholder="Placeholder" invalid={variant === 'error'} />
          <FieldDescriptor variant={variant} {...args} />
        </div>
      </Flex>
    )
  },
}
