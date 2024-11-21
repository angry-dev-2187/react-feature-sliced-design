import cn from 'classnames'
import React from 'react'

import styles from './FieldDescriptor.module.scss'
import ErrorIcon from './lib/icons/error.svg'
import SuccessIcon from './lib/icons/success.svg'

interface FieldDescriptorProps {
  variant?: 'info' | 'error' | 'success'
  className?: string
}

function FieldDescriptor({ children, variant = 'info', className }: React.PropsWithChildren<FieldDescriptorProps>) {
  return (
    <div className={cn(styles.root, styles[variant], className)}>
      {variant === 'error' && <ErrorIcon />}
      {variant === 'success' && <SuccessIcon />}
      {children}
    </div>
  )
}

export default FieldDescriptor
