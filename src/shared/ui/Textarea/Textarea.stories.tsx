import type { Meta, StoryObj } from '@storybook/react'

import Textarea from './Textarea'

import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Textarea> = {
  title: 'DESIGN_SYSTEM: Textarea',
  component: Textarea,
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    variant: 'default',
    hovered: false,
    focused: false,
    invalid: false,
    disabled: false,
    readOnly: false,
    fullWidth: false,
    minRows: 1,
    maxRows: 5,
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
    className: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Textarea placeholder="Placeholder" {...args} />
      </Flex>
    )
  },
}
