import React from 'react'

import Color from './Color'
import Colors from './Colors'

import Flex from '~shared/ui/Flex'

function ColorsPalette() {
  return (
    <Flex direction="column" gap="2">
      <Colors title="Lavender colors">
        <Color variable="--lavender-0" />
        <Color variable="--lavender-1" />
        <Color variable="--lavender-2" />
        <Color variable="--lavender-3" />
        <Color variable="--lavender-4" />
        <Color variable="--lavender-5" />
        <Color variable="--lavender-6" />
        <Color variable="--lavender-7" />
        <Color variable="--lavender-8" />
        <Color variable="--lavender-9" />
      </Colors>

      <Colors title="Lavender-gradient colors">
        <Color variable="--lavender-gradient-1" />
        <Color variable="--lavender-gradient-2" />
        <Color variable="--lavender-gradient-3" />
      </Colors>

      <Colors title="Orange colors">
        <Color variable="--orange-0" />
        <Color variable="--orange-1" />
        <Color variable="--orange-2" />
        <Color variable="--orange-3" />
        <Color variable="--orange-4" />
        <Color variable="--orange-5" />
        <Color variable="--orange-6" />
      </Colors>

      <Colors title="Orange-gradient colors">
        <Color variable="--organge-gradient-0" />
        <Color variable="--organge-gradient-1" />
        <Color variable="--organge-gradient-2" />
      </Colors>

      <Colors title="Green colors">
        <Color variable="--green-0" />
        <Color variable="--green-1" />
        <Color variable="--green-2" />
        <Color variable="--green-3" />
        <Color variable="--green-4" />
        <Color variable="--green-5" />
        <Color variable="--green-6" />
      </Colors>

      <Colors title="Yellow colors">
        <Color variable="--yellow-0" />
        <Color variable="--yellow-1" />
        <Color variable="--yellow-2" />
        <Color variable="--yellow-3" />
        <Color variable="--yellow-4" />
        <Color variable="--yellow-5" />
        <Color variable="--yellow-6" />
      </Colors>

      <Colors title="Red colors">
        <Color variable="--red-0" />
        <Color variable="--red-1" />
        <Color variable="--red-2" />
        <Color variable="--red-3" />
        <Color variable="--red-4" />
        <Color variable="--red-5" />
        <Color variable="--red-6" />
      </Colors>

      <Colors title="Surface colors (light theme)">
        <Color variable="--surface-light-0" />
        <Color variable="--surface-light-1" />
        <Color variable="--surface-light-2" />
        <Color variable="--surface-light-3" />
        <Color variable="--surface-light-4" />
        <Color variable="--surface-light-5" />
        <Color variable="--surface-light-6" />
        <Color variable="--surface-light-7" />
        <Color variable="--surface-light-8" />
        <Color variable="--surface-light-9" />
        <Color variable="--surface-light-10" />
      </Colors>

      <Colors title="Surface colors (dark theme)">
        <Color variable="--surface-dark-0" />
        <Color variable="--surface-dark-1" />
        <Color variable="--surface-dark-2" />
        <Color variable="--surface-dark-3" />
        <Color variable="--surface-dark-4" />
        <Color variable="--surface-dark-5" />
        <Color variable="--surface-dark-6" />
        <Color variable="--surface-dark-7" />
        <Color variable="--surface-dark-8" />
        <Color variable="--surface-dark-9" />
        <Color variable="--surface-dark-10" />
      </Colors>
    </Flex>
  )
}

export default ColorsPalette
