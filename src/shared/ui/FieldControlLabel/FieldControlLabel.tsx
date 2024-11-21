import cn from 'classnames'
import React, { useId } from 'react'

import styles from './FieldControlLabel.module.scss'

import Flex from '~shared/ui/Flex'
import Text from '~shared/ui/Text'

interface FieldControlLabelProps extends React.HTMLAttributes<HTMLElement> {
  control: React.ReactElement
  label: React.ReactNode
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
}

function FieldControlLabel({ control, label, required, disabled, readOnly, className }: FieldControlLabelProps) {
  const id = useId()

  return (
    <Flex align="center" justify="start" gap="2" className={className}>
      {React.isValidElement(control) &&
        React.cloneElement<Record<string, any>>(control, {
          id,
          ...(disabled !== undefined && { disabled: disabled === true }),
          ...(readOnly !== undefined && { readOnly: readOnly === true }),
        })}

      <Text
        as="label"
        htmlFor={id}
        variant={disabled ? 'secondary' : 'default'}
        className={cn(styles.label, readOnly && styles.readOnly, disabled && styles.disabled)}
      >
        {label}

        {required && (
          <Text as="span" variant="error">
            *
          </Text>
        )}
      </Text>
    </Flex>
  )
}

export default FieldControlLabel
