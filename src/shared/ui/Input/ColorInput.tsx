import { ChangeEvent, FC, forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react'

import styles from './ColorInput.module.scss'
import Input from './Input'
import { InputProps } from './types'

const ColorInput: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ value, defaultValue, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const colorRef = useRef<HTMLInputElement>(null)

    const NOT_HEX_COLOR_CHARS_REGEXP = /[^\da-f]/gi

    const onChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
      const { currentTarget } = ev
      const { value } = currentTarget

      const hex = value.replace(NOT_HEX_COLOR_CHARS_REGEXP, '').slice(0, 6)
      const color = hex ? `#${hex.toUpperCase()}` : ''
      // if input is controlled do not set it's value directly
      if (onChange) {
        currentTarget.value = color
        onChange(ev)
      } else {
        inputRef.current.value = color
      }
      colorRef.current.value = color
    }

    // Will update color if input controlled by react-hook-form
    useEffect(() => {
      const color = defaultValue || value || inputRef.current.value
      colorRef.current.value = color.toString().toUpperCase()
    })

    useImperativeHandle(ref, () => inputRef.current)

    return (
      <Input
        ref={colorRef}
        readOnly
        {...props}
        before={
          <input
            ref={inputRef}
            type="color"
            className={styles.color}
            defaultValue={defaultValue}
            value={value}
            onChange={onChangeHandler}
          />
        }
      />
    )
  }
)

export default memo(ColorInput)
