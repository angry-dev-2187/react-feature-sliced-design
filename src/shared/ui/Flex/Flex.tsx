import cn from 'classnames'
import React from 'react'

import styles from './Flex.module.scss'
import { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './lib/types'

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  align?: FlexAlign
  justify?: FlexJustify
  direction?: FlexDirection
  gap?: FlexGap
  rowGap?: FlexGap
  colGap?: FlexGap
  wrap?: boolean
  inline?: boolean
}

function Flex(
  {
    as: Component = 'div',
    children,
    className,
    direction = 'row',
    align = 'stretch',
    justify = 'start',
    gap,
    rowGap,
    colGap,
    wrap = false,
    inline = false,
    ...props
  }: React.PropsWithChildren<FlexProps>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <Component
      ref={ref}
      className={cn(
        styles.root,
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        styles[`direction-${direction}`],
        styles[`gap-${gap}`],
        styles[`row-gap-${rowGap}`],
        styles[`col-gap-${colGap}`],
        inline && styles.inline,
        wrap && styles.wrap,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default React.forwardRef<HTMLElement, FlexProps>(Flex)
