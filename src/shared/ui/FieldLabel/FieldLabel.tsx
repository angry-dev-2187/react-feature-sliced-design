import cn from 'classnames'
import React from 'react'

import styles from './FieldLabel.module.scss'

interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

function FieldLabel({ children, required, className, ...props }: React.PropsWithChildren<FieldLabelProps>) {
  return (
    <label className={cn(styles.root, className)} {...props}>
      {children} {required && <span className={styles.requiredSign}>*</span>}
    </label>
  )
}

export default FieldLabel
