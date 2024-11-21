import { ReferenceType } from '@floating-ui/react'

export interface TooltipChildFunctionProps {
  ref: (node: ReferenceType) => void
  refProps: Record<string, any>
}

export type TooltipChildren = React.ReactNode | ((props: TooltipChildFunctionProps) => React.ReactNode)

export type DelayOptions =
  | number
  | Partial<{
      open: number
      close: number
    }>

export type Trigger = 'hover' | 'click' | 'focus'
