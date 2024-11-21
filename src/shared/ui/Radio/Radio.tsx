/* eslint-disable import/prefer-default-export */
import cn from 'classnames'
import { forwardRef, useState } from 'react'
import { useUpdateEffect } from 'react-use'

import styles from './Radio.module.scss'

type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>

function Radio(
  { checked, defaultChecked, value, className, disabled, readOnly, onChange, ...props }: RadioProps,
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
        disabled && styles.disabled,
        readOnly && styles.readOnly,
        className
      )}
    >
      <input
        ref={ref}
        type="radio"
        checked={checkedState}
        disabled={disabled || readOnly}
        className={styles.input}
        onChange={handleOnChange}
        {...props}
      />

      {checkedState && <span className={styles.icon} />}
    </span>
  )
}

export default forwardRef<HTMLInputElement, RadioProps>(Radio) as typeof Radio
