import {
  useInteractions,
  useFloating,
  useHover,
  FloatingPortal,
  FloatingArrow,
  autoUpdate,
  safePolygon,
  arrow as arrowMiddleware,
  offset as offsetMiddleware,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  Placement,
  OffsetOptions,
  ShiftOptions,
  useFocus,
  useClick,
  useRole,
  useDismiss,
  useClientPoint,
} from '@floating-ui/react'
import cn from 'classnames'
import { isFunction } from 'lodash'
import React, { memo, useRef } from 'react'

import styles from './Tooltip.module.scss'
import { defaultOffset, defaultDelay, arrowDimensions } from './lib/constants'
import { TooltipChildren, Trigger, DelayOptions } from './lib/types'
import useTooltipAnimation from './lib/useTooltipAnimation'
import useTooltipOpenedState from './lib/useTooltipOpenedState'

// TODO - move to ~shared/lib
import { formatSizing } from '~shared/lib/styleUtils'

export interface TooltipProps {
  children?: TooltipChildren
  content?: React.ReactNode
  placement?: Placement
  trigger?: Trigger | Trigger[]
  offset?: OffsetOptions
  shift?: ShiftOptions
  delay?: DelayOptions
  disabled?: boolean
  hideArrow?: boolean
  followCursor?: boolean
  interactive?: boolean
  portalRoot?: HTMLElement
  className?: string
  minWidth?: number | string
  maxWidth?: number | string
  width?: number | string
  opened?: boolean
  defaultOpened?: boolean
  onOpenedChange?: (isOpened: boolean) => void
}

// TODO - add tests
function Tooltip({
  children,
  content,
  placement,
  trigger = 'hover',
  offset = defaultOffset,
  shift,
  delay = defaultDelay,
  disabled,
  hideArrow,
  followCursor,
  interactive,
  portalRoot,
  className,
  minWidth,
  maxWidth,
  width,
  opened,
  defaultOpened,
  onOpenedChange,
}: TooltipProps) {
  const arrowRef = useRef<SVGSVGElement>(null)

  const [isOpened, setIsOpened] = useTooltipOpenedState({
    opened,
    defaultOpened,
    onOpenedChange,
  })

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: !disabled && isOpened,
    onOpenChange: setIsOpened,
    whileElementsMounted: autoUpdate,
    placement,
    middleware: [
      // offset middleware must go first
      offsetMiddleware(offset),
      shiftMiddleware(shift),
      flipMiddleware(),
      arrowMiddleware({ element: arrowRef, padding: 8 }),
    ],
  })

  // Triggers
  const triggerEvents = Array.isArray(trigger) ? trigger : [trigger]

  const click = useClick(context, {
    enabled: triggerEvents.includes('click'),
  })

  const focus = useFocus(context, {
    enabled: triggerEvents.includes('focus'),
    visibleOnly: false,
  })

  const hover = useHover(context, {
    enabled: triggerEvents.includes('hover'),
    handleClose: interactive ? safePolygon() : undefined,
    delay,
  })

  // followCursor and interactive can't be used together because the tooltip will always run away
  const clientPoints = useClientPoint(context, { enabled: !!followCursor && !interactive })
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, click, clientPoints, dismiss, role])

  const [child] = Array.isArray(children) ? children : [children]
  const isFunctionChild = isFunction(child)

  const { isMounted, animationStyles } = useTooltipAnimation({
    context,
    arrowX: middlewareData.arrow?.x,
    arrowY: middlewareData.arrow?.y,
  })

  return (
    <>
      {isFunctionChild && (
        <>
          {child({
            ref: refs.setReference,
            refProps: getReferenceProps(),
          })}
        </>
      )}

      {!isFunctionChild && React.isValidElement(child) && (
        <>
          {React.cloneElement(child as React.ReactElement, {
            ref: refs.setReference,
            ...getReferenceProps(),
          })}
        </>
      )}

      {!disabled && isMounted && (
        <FloatingPortal root={portalRoot}>
          <div ref={refs.setFloating} {...getFloatingProps()} style={floatingStyles} className={styles.root}>
            <div
              className={cn(styles.tooltip, className)}
              style={
                {
                  ...animationStyles,
                  ...(minWidth && { minWidth: formatSizing(minWidth) }),
                  ...(maxWidth && { maxWidth: formatSizing(maxWidth) }),
                  ...(width && { width: formatSizing(width) }),
                } as React.CSSProperties
              }
            >
              {content}

              {!hideArrow && (
                <FloatingArrow
                  ref={arrowRef}
                  context={context}
                  width={arrowDimensions.width}
                  height={arrowDimensions.height}
                  tipRadius={arrowDimensions.tipRadius}
                  className={styles.arrow}
                />
              )}
            </div>
          </div>
        </FloatingPortal>
      )}
    </>
  )
}

export default memo(Tooltip)
