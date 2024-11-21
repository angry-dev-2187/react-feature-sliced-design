import React, { useState, useEffect } from 'react'

import Input from './Input'
import { PasswordInputProps } from './types'

import Hide from '~shared/icons/24/hide.svg'
import Visible from '~shared/icons/24/visible.svg'
import { IconButton } from '~shared/ui/Button'

function PasswordInput({ visible, defaultVisible, onVisibleChange, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(() => visible || defaultVisible || false)

  useEffect(() => {
    if (visible !== undefined) {
      setIsVisible(visible)
    }
  }, [visible])

  const handleOnVisibleChange = () => {
    const nextIsVisibleState = !isVisible

    if (visible === undefined) {
      setIsVisible(nextIsVisibleState)
    }

    onVisibleChange?.(nextIsVisibleState)
  }

  return (
    <Input
      {...props}
      type={!isVisible ? 'password' : 'text'}
      spellCheck={false}
      autoComplete="off"
      after={
        <IconButton
          type="button"
          variant="secondary"
          onClick={handleOnVisibleChange}
          icon={
            <>
              {!isVisible && <Hide title="Show password" width={20} height={20} />}
              {isVisible && <Visible title="Hide password" width={20} height={20} />}
            </>
          }
        />
      }
    />
  )
}

export default React.memo(PasswordInput)
