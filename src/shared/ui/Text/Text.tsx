import cn from 'classnames'
import React from 'react'

import styles from './Text.module.scss'
import {
  TextVariant,
  TextType,
  TextFontWeight,
  TextFontStyle,
  TextAlign,
  TextLineHeight,
  TextDecoration,
  TextOverflow,
  TextWhiteSpace,
  PreferType,
} from './lib/types'
import { getTextFontWeightByType } from './lib/utils'

interface BaseTextProps {
  as?: React.ElementType
  children?: React.ReactNode
  variant?: TextVariant
  textType?: TextType
  textAlign?: TextAlign
  textDecoration?: TextDecoration
  textOverflow?: TextOverflow
  textWhiteSpace?: TextWhiteSpace
  fontWeight?: TextFontWeight
  fontStyle?: TextFontStyle
  lineHeight?: TextLineHeight
}

export type TextProps = BaseTextProps & React.HTMLAttributes<HTMLElement>

function Text<T extends unknown>(
  {
    as: Component = 'p',
    variant = 'default',
    textType = 'body-md',
    textAlign = 'start',
    lineHeight = 'md',
    fontStyle = 'normal',
    fontWeight = getTextFontWeightByType(textType),
    textDecoration,
    textOverflow,
    textWhiteSpace,
    children,
    className,
    ...props
  }: PreferType<BaseTextProps, TextProps, T>,
  ref: React.ForwardedRef<HTMLElement>
): React.JSX.Element {
  return (
    <Component
      ref={ref}
      className={cn(
        styles.root,
        variant && styles[variant],
        textType && styles[textType],
        textAlign && styles[`align-${textAlign}`],
        textDecoration && styles[`decoration-${textDecoration}`],
        textOverflow && styles[`overflow-${textOverflow}`],
        textWhiteSpace && styles[`white-space-${textWhiteSpace}`],
        lineHeight && styles[`line-height-${lineHeight}`],
        fontWeight && styles[`weight-${fontWeight}`],
        fontStyle && styles[`style-${fontStyle}`],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default React.forwardRef<HTMLElement, TextProps>(Text) as typeof Text
