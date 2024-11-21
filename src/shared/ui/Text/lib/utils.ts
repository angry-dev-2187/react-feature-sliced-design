import { TextType, TextFontWeight } from './types'

// eslint-disable-next-line import/prefer-default-export
export function getTextFontWeightByType(type: TextType): TextFontWeight {
  const correlationMap: Record<TextType, TextFontWeight> = {
    'heading-xl': 'bold',
    'heading-lg': 'semibold',
    'heading-md': 'semibold',
    'heading-sm': 'semibold',
    'body-xl': 'regular',
    'body-lg': 'regular',
    'body-md': 'regular',
    'body-sm': 'regular',
    caption: 'regular',
  }

  return correlationMap[type]
}
