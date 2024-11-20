import type { StorybookConfig } from '@storybook/nextjs'
import { RuleSetRule } from 'webpack'

const config: StorybookConfig = {
  stories: [
    //"../stories/**/*.mdx",
    '../src/shared/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    // For using SVGs in stories
    const rules = config?.module?.rules as RuleSetRule[]
    const imageRule = rules.find((rule) => rule?.test instanceof RegExp && rule.test.test('.svg'))
    if (imageRule) {
      imageRule.exclude = /\.svg$/
    }
    rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  staticDirs: ['../public'],
}

export default config
