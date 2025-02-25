/**
 * HTML Element
 *
 */
import React from 'react'
import type { SharedHProps } from './H'
import H from './H'

const H2 = ({ size, ...props }: SharedHProps) => (
  <H as="h2" size={size || 'auto'} {...props} />
)

export default H2
