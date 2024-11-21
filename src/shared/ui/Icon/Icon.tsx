import cn from 'classnames'
import React from 'react'

import styles from './Icon.module.scss'

// The same colors as we use for text
type IconVariant = 'default' | 'secondary' | 'accent' | 'highlight' | 'success' | 'warning' | 'error'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  icon: React.ReactNode
  variant?: IconVariant
  size?: 'sm' | 'md' | 'lg'
}

function Icon({ icon, variant = 'default', className, size, ...props }: IconProps) {
  return (
    <span className={cn(styles.root, styles[variant], size && styles[size], className)} {...props}>
      {icon}
    </span>
  )
}

export default Icon
