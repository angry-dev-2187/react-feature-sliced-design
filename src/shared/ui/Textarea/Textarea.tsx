import cn from 'classnames'
import { isNil } from 'lodash'
import React, { useMemo } from 'react'
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize'

import styles from './Textarea.module.scss'

import { formatSizing } from '~shared/lib/styleUtils'

type TextareaVariant = 'default' | 'secondary'

export interface TextareaProps extends TextareaAutosizeProps {
  variant?: TextareaVariant
  invalid?: boolean
  hovered?: boolean
  focused?: boolean
  fullWidth?: boolean
  width?: number | string
  minRows?: number
  maxRows?: number
}

function Textarea(
  {
    variant = 'default',
    invalid,
    hovered,
    focused,
    fullWidth,
    width = fullWidth ? '100%' : 240,
    disabled,
    readOnly,
    title,
    className,
    style,
    ...props
  }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {
  const computedStyles = useMemo(
    () => ({
      ...style,
      ...(!isNil(width) && { width: formatSizing(width) }),
    }),
    [style, width]
  )

  return (
    <TextareaAutosize
      ref={ref}
      disabled={disabled}
      readOnly={readOnly}
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
      {...props}
    />
  )
}

export default React.forwardRef<HTMLTextAreaElement, TextareaProps>(Textarea)
