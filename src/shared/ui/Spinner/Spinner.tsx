import cn from 'classnames'
import React from 'react'

import styles from './Spinner.module.scss'
import { defaultSizes } from './lib/constants'
import { SpinnerSize, SpinnerVariant } from './lib/types'

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize
  variant?: SpinnerVariant
  stroked?: boolean
}

function Spinner({ size = 'md', variant = 'default', stroked, className, ...props }: SpinnerProps) {
  const sizeValue = (defaultSizes[size] || size) as number
  const radius = (sizeValue / 100) * 40
  const cx = sizeValue / 2
  const cy = sizeValue / 2
  const strokeWidth = Math.max(1.5, Math.floor(sizeValue / 12))
  const viewBox = `0 0 ${sizeValue} ${sizeValue}`

  return (
    <span className={cn(styles.root, variant && styles[variant], stroked && styles.stroked, className)} {...props}>
      <svg width={sizeValue} height={sizeValue} className={styles.svg} fill="none" viewBox={viewBox}>
        <circle cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} className={styles.circle} />
        <circle cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} className={styles.circle} />
      </svg>
    </span>
  )
}

export default Spinner
