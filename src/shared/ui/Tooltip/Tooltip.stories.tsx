import type { Meta, StoryObj } from '@storybook/react'

import Tooltip from './Tooltip'
import { defaultOffset, defaultDelay } from './lib/constants'
import { Trigger } from './lib/types'

const meta: Meta<typeof Tooltip> = {
  title: 'DESIGN_SYSTEM: Tooltip',
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Default: Story = {
  args: {
    content: 'Hi there!',
    placement: 'bottom',
    trigger: 'hover',
    offset: defaultOffset,
    delay: defaultDelay,
    followCursor: false,
    interactive: false,
    hideArrow: false,
    disabled: false,
  },

  argTypes: {
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'] as Trigger[],
    },
    width: {
      control: 'number',
    },
    minWidth: {
      control: 'number',
    },
    maxWidth: {
      control: 'number',
    },
    onOpenedChange: {
      table: {
        disable: true,
      },
    },
    opened: {
      table: {
        disable: true,
      },
    },
    defaultOpened: {
      table: {
        disable: true,
      },
    },
    shift: {
      table: {
        disable: true,
      },
    },
    portalRoot: {
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

  render: ({
    content,
    placement,
    trigger,
    offset,
    delay,
    followCursor,
    interactive,
    hideArrow,
    disabled,
    minWidth,
    maxWidth,
    width,
  }) => {
    return (
      <div style={style}>
        <Tooltip
          content={content}
          placement={placement}
          trigger={trigger}
          offset={offset}
          delay={delay}
          followCursor={followCursor}
          interactive={interactive}
          hideArrow={hideArrow}
          disabled={disabled}
          minWidth={minWidth}
          maxWidth={maxWidth}
          width={width}
        >
          <button type="button">Point at me</button>
        </Tooltip>
      </div>
    )
  },
}
