import type { Meta, StoryObj } from '@storybook/react'

import FieldLabel from './FieldLabel'

import Flex from '~shared/ui/Flex'
import Input from '~shared/ui/Input'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof FieldLabel> = {
  title: 'DESIGN_SYSTEM: FieldLabel',
  component: FieldLabel,
}

export default meta

type Story = StoryObj<typeof FieldLabel>

export const Default: Story = {
  args: {
    children: 'Field label',
    required: false,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
  render: ({ children, ...args }) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <div>
          <FieldLabel htmlFor="field-label-id" {...args}>
            {children}
          </FieldLabel>
          <Input id="field-label-id" placeholder="Placeholder" />
        </div>
      </Flex>
    )
  },
}
