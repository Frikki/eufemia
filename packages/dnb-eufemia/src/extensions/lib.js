/**
 * ATTENTION: This file is auto generated by using "prepareTemplates".
 * Do not change the content!
 *
 */

/**
 * Library Index template to autogenerate all the components and extensions
 * Used by "prepareTemplates"
 */

import { registerElement } from '../shared/component-helper'

// import all the available components
import MessageBubble from './message-bubble/MessageBubble'
import PaymentCard from './payment-card/PaymentCard'

// define / export all the available components
export { MessageBubble, PaymentCard }

export const getExtensions = () => {
  return { MessageBubble, PaymentCard }
}

let webComponentsAreEnabled = false
export const enableWebComponents = () => {
  if (webComponentsAreEnabled) return false
  webComponentsAreEnabled = true
  const components = getExtensions()

  // register this component to work with custom element
  for (const c in components) {
    if (components[c] && components[c].tagName) {
      registerElement(
        components[c].tagName,
        components[c],
        components[c].defaultProps
      )
    }
  }
}
