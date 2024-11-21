import React from 'react'

import Text from '~shared/ui/Text'
import Flex from '~shared/ui/Flex'

function Colors({ children, title }: React.PropsWithChildren<{ title: string }>) {
  return (
    <Flex direction="column" gap="1">
      <Text>{title}</Text>
      <Flex gap="1" align="center" wrap>
        {children}
      </Flex>
    </Flex>
  )
}

export default Colors
