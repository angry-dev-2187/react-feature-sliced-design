import cn from 'classnames'
import React from 'react'

import styles from './Button.module.scss'
import { ButtonVariant, IconButtonSize } from './lib/types'
import { getIconButtonSpinnerSize } from './lib/utils'

import { useIsFocusedByKeyboard } from '~shared/lib/useIsFocusedByKeyboard'
import Spinner from '~shared/ui/Spinner'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  variant?: ButtonVariant
  size?: IconButtonSize
  loading?: boolean
}

function IconButton(
  {
    variant = 'default',
    size,
    icon,
    type,
    disabled,
    loading,
    className,
    onFocus,
    onBlur,
    onMouseDown,
    onMouseUp,
    ...props
  }: IconButtonProps,
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
      disabled={disabled}
      className={cn(
        styles.iconButton,
        size && styles[size],
        variant && styles[variant],
        disabled && styles.disabled,
        loading && styles.loading,
        isFocusedByKeyboard && styles.focusedByKeyboard,
        className
      )}
      {...props}
      {...focusHandlers}
    >
      {icon}

      {loading && (
        <span className={styles.loader}>
          <Spinner size={getIconButtonSpinnerSize(size)} variant="default" />
        </span>
      )}
    </button>
  )
}

export default React.forwardRef<HTMLButtonElement, IconButtonProps>(IconButton)
