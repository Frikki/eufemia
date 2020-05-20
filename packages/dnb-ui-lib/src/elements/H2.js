/**
 * HTML Element
 *
 */

import React from 'react'
import E from './Element'

const H2 = (p) => <E is="h2" {...p} />
H2.tagName = 'dnb-h--large'
export default H2
