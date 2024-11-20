import { useCallback, useState } from 'react'

export default function usePossibleControlledState<T>(
  initialValue: T,
  controlledValue: T | undefined,
  onChange: ((newValue: T) => void) | undefined
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue)

  const handleChange = useCallback(
    (newValue: T) => {
      onChange?.(newValue)
      setValue(newValue)
    },
    [onChange]
  )

  return [controlledValue === undefined ? value : controlledValue, handleChange]
}
