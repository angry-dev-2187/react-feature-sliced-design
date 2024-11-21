import { FloatingContext, useTransitionStyles } from '@floating-ui/react'

import { arrowDimensions } from './constants'

type UseTooltipAnimationParams = {
  context: FloatingContext
  arrowX: number
  arrowY: number
  duration?: number
}

function useTooltipAnimation({ context, arrowX = 0, arrowY = 0, duration = 150 }: UseTooltipAnimationParams) {
  const transformX = arrowX + arrowDimensions.width / 2
  const transformY = arrowY + arrowDimensions.height

  const { isMounted, styles: animationStyles } = useTransitionStyles(context, {
    duration,

    initial: {
      transform: 'scale(0.8)',
      opacity: 0,
    },

    common: ({ side }) => ({
      transform: 'scale(1)',
      opacity: 1,
      transformOrigin: {
        top: `${transformX}px calc(100% + ${arrowDimensions.height}px)`,
        bottom: `${transformX}px ${-arrowDimensions.height}px`,
        left: `calc(100% + ${arrowDimensions.height}px) ${transformY}px`,
        right: `${-arrowDimensions.height}px ${transformY}px`,
      }[side],
    }),
  })

  return { isMounted, animationStyles }
}

export default useTooltipAnimation
