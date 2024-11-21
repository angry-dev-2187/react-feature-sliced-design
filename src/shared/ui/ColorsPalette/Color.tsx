import React, { useEffect, useId, useState } from 'react'

import Flex from '~shared/ui/Flex'
import Tooltip from '~shared/ui/Tooltip'

function Color({ variable }: { variable: string }) {
  const id = useId()

  const [color, setColor] = useState(null)

  useEffect(() => {
    const element = document.getElementById(id)

    if (element) {
      const computedStyles = window.getComputedStyle(element)
      const color = computedStyles.getPropertyValue(variable)
      setColor(color)
    }
  }, [id, variable])

  const style = {
    width: '64px',
    height: '64px',
    borderRadius: '4px',
    border: '1px solid grey',
    background: `var(${variable})`,
  } as React.CSSProperties

  return (
    <Tooltip
      interactive
      placement="top"
      content={
        <Flex direction="column" gap="0-5">
          <div>variable: var({variable});</div>
          <div>color: {color}</div>
        </Flex>
      }
    >
      <div id={id} style={style} />
    </Tooltip>
  )
}

export default Color
