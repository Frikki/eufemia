/**
 * HTML Element
 *
 */
import React from 'react'
import type { SharedHProps } from './H'
import H from './H'

const H1 = ({ size, ...props }: SharedHProps) => (
  <H as="h1" size={size || 'auto'} {...props} />
)

export default H1
