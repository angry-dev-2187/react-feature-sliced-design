import type { Meta, StoryObj } from '@storybook/react'

import Flex from '../Flex'
import Icon from './Icon'

import CopilotIcon from '~shared/icons/20/copilot.svg'

const meta: Meta<typeof Icon> = {
  title: 'DESIGN_SYSTEM: Icon',
  component: Icon,
}

export default meta

type Story = StoryObj<typeof Icon>

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Default: Story = {
  args: {},
  argTypes: {},

  render: () => {
    return (
      <div style={style}>
        <Flex align="center" justify="center" gap="2">
          <Icon variant="default" icon={<CopilotIcon />} />
          <Icon variant="secondary" icon={<CopilotIcon />} />
          <Icon variant="accent" icon={<CopilotIcon />} />
          <Icon variant="highlight" icon={<CopilotIcon />} />
          <Icon variant="success" icon={<CopilotIcon />} />
          <Icon variant="warning" icon={<CopilotIcon />} />
          <Icon variant="error" icon={<CopilotIcon />} />
        </Flex>
      </div>
    )
  },
}
