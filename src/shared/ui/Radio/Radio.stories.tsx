import type { Meta, StoryObj } from '@storybook/react'

import Radio from './Radio'

import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Radio> = {
  title: 'DESIGN_SYSTEM: Radio',
  component: Radio,
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    checked: true,
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Radio {...args} />
      </Flex>
    )
  },
}
