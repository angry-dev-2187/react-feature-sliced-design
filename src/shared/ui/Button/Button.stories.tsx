import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import { ButtonVariant, ButtonSize, ButtonFontSize, ButtonFontWeight, ButtonLineHeight } from './lib/types'

import UsersIcon from '~shared/icons/24/users.svg'
import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Button> = {
  title: 'DESIGN_SYSTEM: Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

const sharedArgTypes: Story['argTypes'] = {
  variant: {
    control: 'select',
    options: ['primary', 'default', 'secondary', 'link', 'danger'] as ButtonVariant[],
  },
  size: {
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSize[],
  },
  fontSize: {
    control: 'select',
    options: ['xs', 'sm', 'md'] as ButtonFontSize[],
  },
  fontWeight: {
    control: 'select',
    options: ['regular', 'semibold'] as ButtonFontWeight[],
  },
  lineHeight: {
    control: 'select',
    options: ['default', 'sm', 'md', 'lg'] as ButtonLineHeight[],
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
}

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    fontSize: 'sm',
    fontWeight: 'semibold',
    lineHeight: 'default',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    ...sharedArgTypes,
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Button {...args}>Click me</Button>
      </Flex>
    )
  },
}

export const Icons: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
  argTypes: {
    ...sharedArgTypes,
  },
  render: (args) => {
    return (
      <Flex direction="column" align="center" justify="center" gap="1" style={style}>
        <Button {...args} before={<UsersIcon width={20} height={20} viewBox="0 0 20 20" />}>
          Before
        </Button>

        <Button {...args} after={<UsersIcon width={20} height={20} viewBox="0 0 20 20" />}>
          After
        </Button>
      </Flex>
    )
  },
}

export const Variants = {
  render: () => {
    return (
      <Flex align="center" justify="center" gap="1" style={style}>
        <Button variant="default" size="md">
          Default
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="link" size="md">
          Link
        </Button>
        <Button variant="primary" size="md">
          Primary
        </Button>
        <Button variant="danger" size="md">
          Danger
        </Button>
      </Flex>
    )
  },
}

export const Sizes = {
  render: () => {
    return (
      <Flex align="center" justify="center" gap="1" style={style}>
        <Button variant="primary" size="xs">
          XS
        </Button>
        <Button variant="primary" size="sm">
          SM
        </Button>
        <Button variant="primary" size="md">
          MD
        </Button>
        <Button variant="primary" size="lg">
          LG
        </Button>
        <Button variant="primary" size="xl">
          XL
        </Button>
      </Flex>
    )
  },
}
