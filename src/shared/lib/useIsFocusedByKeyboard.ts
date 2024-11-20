import React, { useRef, useState } from 'react'

type UseIsFocusedByKeyboard = {
  onFocus?: React.FocusEventHandler<HTMLElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLElement> | undefined
  onMouseUp?: React.MouseEventHandler<HTMLElement> | undefined
  onMouseDown?: React.MouseEventHandler<HTMLElement> | undefined
}

// Temp solution until we integrate reusable FocusRing
export function useIsFocusedByKeyboard({ onFocus, onBlur, onMouseUp, onMouseDown }: UseIsFocusedByKeyboard = {}) {
  const [isFocusedByKeyboard, setIsFocusedByKeyboard] = useState(false)

  const isMouseDownRef = useRef(false)

  const handleOnMouseDown = (ev: React.MouseEvent<HTMLElement>) => {
    onMouseDown?.(ev)
    isMouseDownRef.current = true
  }

  const handleOnMouseUp = (ev: React.MouseEvent<HTMLElement>) => {
    onMouseUp?.(ev)
    isMouseDownRef.current = false
  }

  const handleOnFocus = (ev: React.FocusEvent<HTMLElement>) => {
    onFocus?.(ev)

    if (!isMouseDownRef.current) {
      setIsFocusedByKeyboard(true)
    }
  }

  const handleOnBlur = (ev: React.FocusEvent<HTMLElement>) => {
    onBlur?.(ev)
    setIsFocusedByKeyboard(false)
  }

  return {
    isFocusedByKeyboard,
    onFocus: handleOnFocus,
    onBlur: handleOnBlur,
    onMouseUp: handleOnMouseUp,
    onMouseDown: handleOnMouseDown,
  }
}

export default useIsFocusedByKeyboard
