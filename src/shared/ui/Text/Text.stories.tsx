import type { Meta, StoryObj } from '@storybook/react'
import { capitalize } from 'lodash'
import React from 'react'

import Text from './Text'
import {
  TextAlign,
  TextDecoration,
  TextFontStyle,
  TextFontWeight,
  TextLineHeight,
  TextType,
  TextVariant,
  TextOverflow,
  TextWhiteSpace,
} from './lib/types'

import Flex from '~shared/ui/Flex'

const style: React.CSSProperties = {
  width: '100%',
  minHeight: '512px',
  padding: '56px 24px',
  overflow: 'auto',
}

const meta: Meta<typeof Text> = {
  title: 'DESIGN_SYSTEM: Text',
  component: Text,
}

const textTypes: TextType[] = [
  'heading-xl',
  'heading-lg',
  'heading-md',
  'heading-sm',
  'body-xl',
  'body-lg',
  'body-md',
  'body-sm',
  'caption',
]

const textVariants: TextVariant[] = ['default', 'secondary', 'accent', 'highlight', 'success', 'warning', 'error']
const textAlignments: TextAlign[] = ['start', 'center', 'end']
const textDecorations: TextDecoration[] = ['none', 'line-through', 'underline']
const textOverflows: TextOverflow[] = ['clip', 'ellipsis']
const textWhiteSpaces: TextWhiteSpace[] = ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']
const fontStyles: TextFontStyle[] = ['normal', 'italic']
const fontWeights: TextFontWeight[] = ['regular', 'semibold', 'bold']
const lineHeights: TextLineHeight[] = ['sm', 'md', 'lg']

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    variant: 'default',
    textType: 'body-md',
    textAlign: 'center',
    textDecoration: undefined,
    lineHeight: 'md',
    fontWeight: 'regular',
    fontStyle: 'normal',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: textVariants,
    },
    textType: {
      control: 'select',
      options: textTypes,
    },
    textAlign: {
      control: 'select',
      options: textAlignments,
    },
    textDecoration: {
      control: 'select',
      options: textDecorations,
    },
    textOverflow: {
      control: 'select',
      options: textOverflows,
    },
    textWhiteSpace: {
      control: 'select',
      options: textWhiteSpaces,
    },
    lineHeight: {
      control: 'select',
      options: lineHeights,
    },
    fontWeight: {
      control: 'select',
      options: fontWeights,
    },
    fontStyle: {
      control: 'select',
      options: fontStyles,
    },
  },
  render: (args) => {
    return (
      <Flex align="center" justify="center" style={style}>
        <Text {...args}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Flex>
    )
  },
}

export const Types: Story = {
  render: () => (
    <Flex align="center" justify="center" direction="column" style={style}>
      {textTypes.map((v) => (
        <Text key={v} textType={v}>
          {capitalize(v)}
        </Text>
      ))}
    </Flex>
  ),
}

export const Variants: Story = {
  render: () => (
    <Flex align="center" justify="center" direction="column" style={style}>
      {textVariants.map((v) => (
        <Text key={v} variant={v}>
          {capitalize(v)}
        </Text>
      ))}
    </Flex>
  ),
}
