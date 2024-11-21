import cn from 'classnames'
import React, { forwardRef, useState } from 'react'
import { useUpdateEffect } from 'react-use'

import styles from './Checkbox.module.scss'
import CheckIcon from './lib/icons/check.svg'
import IndeterminateIcon from './lib/icons/indeterminate.svg'
import { CheckboxSize, CheckboxVariant } from './lib/types'

type InputCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>

export interface CheckboxProps extends InputCheckboxProps {
  indeterminate?: boolean
  variant?: CheckboxVariant
  checkIcon?: React.ReactNode
  size?: CheckboxSize
  borderRadius?: 'md' | 'lg'
  indeterminateIcon?: React.ReactNode
}

function Checkbox(
  {
    variant = 'default',
    size = 'md',
    borderRadius = 'md',
    indeterminate,
    checked,
    defaultChecked,
    className,
    disabled,
    readOnly,
    onChange,
    checkIcon,
    indeterminateIcon,
    ...props
  }: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [checkedState, setCheckedState] = useState(checked ?? defaultChecked ?? false)

  useUpdateEffect(() => {
    if (typeof checked !== 'undefined') {
      setCheckedState(checked)
    }
  }, [checked])

  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof checked === 'undefined') {
      setCheckedState(ev.currentTarget.checked)
    }

    onChange?.(ev)
  }

  return (
    <span
      className={cn(
        styles.root,
        checkedState && styles.checked,
        variant && styles[variant],
        size && styles[size],
        borderRadius && styles[`br-${borderRadius}`],
        disabled && styles.disabled,
        readOnly && styles.readOnly,
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        checked={checkedState}
        readOnly={readOnly}
        disabled={disabled || readOnly}
        className={styles.input}
        onChange={handleOnChange}
        {...props}
      />

      {checkedState && (checkIcon ?? <CheckIcon className={styles.icon} />)}
      {indeterminate && !checkedState && (indeterminateIcon ?? <IndeterminateIcon className={styles.icon} />)}
    </span>
  )
}

export default forwardRef<HTMLInputElement, CheckboxProps>(Checkbox) as typeof Checkbox
