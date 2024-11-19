import type { Meta, StoryObj } from '@storybook/react'

import Flex from './Flex'

const meta: Meta<typeof Flex> = {
  title: 'DESIGN_SYSTEM: Flex',
  component: Flex,
}

export default meta

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
}

const colors = ['#FFAA79', '#EC7373', '#CD9854', '#486D6C', '#BA84FF', '#8489FF']

export const Default: StoryObj<typeof Flex> = {
  args: {
    align: 'stretch',
    justify: 'start',
    direction: 'row',
    wrap: true,
  },

  argTypes: {
    align: {
      control: 'select',
    },
    justify: {
      control: 'select',
    },
    direction: {
      control: 'select',
    },
    gap: {
      control: 'select',
    },
    rowGap: {
      control: 'select',
    },
    colGap: {
      control: 'select',
    },
    inline: {
      table: {
        disable: true,
      },
    },
    as: {
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

  render: ({ wrap, ...args }) => {
    return (
      <div style={style}>
        <Flex wrap={wrap} {...args}>
          {Array.from({ length: 18 }).map((_, index) => {
            return (
              <div
                key={index}
                style={
                  {
                    width: '128px',
                    height: '128px',
                    backgroundColor: colors[index % colors.length],
                  } as React.CSSProperties
                }
              />
            )
          })}
        </Flex>
      </div>
    )
  },
}
