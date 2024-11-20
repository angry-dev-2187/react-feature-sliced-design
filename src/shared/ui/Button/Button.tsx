import cn from 'classnames'
import React from 'react'

import styles from './Button.module.scss'
import { ButtonFontSize, ButtonFontWeight, ButtonLineHeight, ButtonSize, ButtonVariant } from './lib/types'
import { getButtonSpinnerSize } from './lib/utils'

import { useIsFocusedByKeyboard } from '~shared/lib/useIsFocusedByKeyboard'
import Spinner from '~shared/ui/Spinner'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fontSize?: ButtonFontSize
  fontWeight?: ButtonFontWeight
  lineHeight?: ButtonLineHeight
  before?: React.ReactNode
  after?: React.ReactNode
  loading?: boolean
  hovered?: boolean
  fullWidth?: boolean
}

function Button(
  {
    variant = 'default',
    size,
    fontSize = 'sm',
    fontWeight = 'semibold',
    lineHeight = 'default',
    children,
    className,
    before,
    after,
    type,
    disabled,
    loading,
    hovered,
    fullWidth,
    onFocus,
    onBlur,
    onMouseDown,
    onMouseUp,
    ...props
  }: React.PropsWithChildren<ButtonProps>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { isFocusedByKeyboard, ...focusHandlers } = useIsFocusedByKeyboard({
    onFocus,
    onBlur,
    onMouseUp,
    onMouseDown,
  })

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={cn(
        styles.button,
        size && styles[size],
        fontSize && styles[`fs-${fontSize}`],
        fontWeight && styles[`fw-${fontWeight}`],
        lineHeight && styles[`lh-${lineHeight}`],
        variant && styles[variant],
        disabled && styles.disabled,
        hovered && styles.hovered,
        loading && styles.loading,
        fullWidth && styles.fullWidth,
        isFocusedByKeyboard && styles.focusedByKeyboard,
        className
      )}
      {...props}
      {...focusHandlers}
    >
      {before && <span className={styles.before}>{before}</span>}
      {children && <span className={styles.content}>{children}</span>}
      {after && <span className={styles.after}>{after}</span>}

      {loading && (
        <span className={styles.loader}>
          <Spinner size={getButtonSpinnerSize(size)} variant="default" className={styles.spinner} />
        </span>
      )}
    </button>
  )
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(Button)
