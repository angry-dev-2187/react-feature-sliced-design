import { useCallback, useState } from 'react'
import { useUpdateEffect } from 'react-use'

type UseTooltipOpenedStateParams = {
  opened?: boolean
  defaultOpened?: boolean
  onOpenedChange?: (isOpened?: boolean) => void
}

function useTooltipOpenedState({ defaultOpened, opened, onOpenedChange }: UseTooltipOpenedStateParams) {
  const [isOpened, setIsOpened] = useState(opened ?? defaultOpened ?? false)

  useUpdateEffect(() => {
    if (typeof opened !== 'undefined') {
      setIsOpened(opened)
    }
  }, [opened])

  const handleOpenedChange = useCallback(
    (isOpened?: boolean) => {
      if (typeof opened === 'undefined') {
        setIsOpened(isOpened)
      }

      onOpenedChange?.(isOpened)
    },
    [opened, onOpenedChange]
  )

  return [isOpened, handleOpenedChange] as const
}

export default useTooltipOpenedState
