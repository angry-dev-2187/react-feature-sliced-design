import React from 'react'
import type { Preview } from '@storybook/react'

import '../src/styles/globals.scss'
import { ThemeProvider, useTheme } from 'next-themes'

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const { theme, themes, setTheme } = useTheme()
      const storyTheme = context.globals.theme === 'dark' ? 'dark' : 'light'
      setTheme(storyTheme)
      console.log(storyTheme, theme, themes)
      return (
        <ThemeProvider disableTransitionOnChange enableSystem={false} themes={['dark', 'light']} defaultTheme={storyTheme}>
          <Story />
        </ThemeProvider>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      items: [
        { value: 'light', title: 'light' },
        { value: 'dark', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export default preview
