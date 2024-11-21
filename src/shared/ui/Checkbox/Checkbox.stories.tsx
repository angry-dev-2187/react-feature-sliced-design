import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Checkbox> = {
  title: 'DESIGN_SYSTEM: Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    indeterminate: false,
    checked: true,
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Checkbox {...args} />
      </Flex>
    )
  },
}
