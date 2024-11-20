import { ButtonSize, IconButtonSize } from './types'

import { SpinnerProps } from '~shared/ui/Spinner'

export function getButtonSpinnerSize(size: ButtonSize): SpinnerProps['size'] {
  if (size === 'xs') return 'xs'
  if (size === 'sm') return 'sm'
  return 'md'
}

export function getIconButtonSpinnerSize(size: IconButtonSize): SpinnerProps['size'] {
  if (size === 'xs') return 'xs'
  return 'sm'
}
