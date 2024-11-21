/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames'
import { isNil } from 'lodash'
import React, { useCallback, useRef, useMemo, forwardRef, useImperativeHandle } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './types'

import { formatSizing } from '~shared/lib/styleUtils'

function Input(
  {
    // type = 'text',
    variant = 'default',
    invalid,
    hovered,
    focused,
    fullWidth,
    width = fullWidth ? '100%' : 240,
    disabled,
    readOnly,
    before,
    after,
    title,
    className,
    style,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current)

  const handleRootClick = useCallback(() => {
    if (inputRef.current instanceof HTMLElement) {
      inputRef.current.focus()
    }
  }, [])

  const computedStyles = useMemo(
    () => ({
      ...style,
      ...(!isNil(width) && { width: formatSizing(width) }),
    }),
    [style, width]
  )

  return (
    <div
      title={title}
      aria-readonly={readOnly}
      aria-disabled={disabled}
      onClick={handleRootClick}
      style={computedStyles}
      className={cn(
        styles.root,
        variant && styles[variant],
        disabled && styles.disabled,
        readOnly && styles.readOnly,
        hovered && styles.hovered,
        focused && styles.focused,
        invalid && styles.invalid,
        fullWidth && styles.fullWidth,
        className
      )}
    >
      {before && <span className={styles.before}>{before}</span>}
      <input ref={inputRef} type="text" disabled={disabled} readOnly={readOnly} className={styles.input} {...props} />
      {after && <span className={styles.after}>{after}</span>}
    </div>
  )
}

export default forwardRef<HTMLInputElement, InputProps>(Input)
