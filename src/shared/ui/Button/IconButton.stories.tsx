import type { Meta, StoryObj } from '@storybook/react'

import IconButton from './IconButton'

import UsersIcon from '~shared/icons/24/user.svg'
import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof IconButton> = {
  title: 'DESIGN_SYSTEM: IconButton',
  component: IconButton,
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
    },
    size: {
      control: 'select',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    type: {
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
        <IconButton {...args} icon={<UsersIcon width={20} height={20} viewBox="2 2 20 20" />} />
      </Flex>
    )
  },
}
