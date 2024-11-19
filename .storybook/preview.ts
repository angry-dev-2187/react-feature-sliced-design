import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};


export const globalTypes = {
  dataTheme: {
    defaultValue: 'light',
  },
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'Light', dataTheme: 'light', color: '#fbf9f8' },
        { name: 'Dark', dataTheme: 'dark', color: '#222231' },
      ],
    },
  },
}

export default preview;
