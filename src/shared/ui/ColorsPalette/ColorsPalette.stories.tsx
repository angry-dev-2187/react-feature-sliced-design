import type { Meta, StoryObj } from '@storybook/react'

import ColorsPalette from './ColorsPalette'

const meta: Meta<typeof ColorsPalette> = {
  title: 'DESIGN_SYSTEM: ColorsPalette',
  component: ColorsPalette,
}

export default meta

type Story = StoryObj<typeof ColorsPalette>

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Default: Story = {
  render: () => {
    return (
      <div style={style}>
        <ColorsPalette />
      </div>
    )
  },
}
