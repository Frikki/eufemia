/**
 * Web Skeleton Helpers
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { convertJsxToString } from '../../shared/component-helper'
import classnames from 'classnames'

const propTypes = {
  __element: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node
  ]),
  className: PropTypes.string,
  style: PropTypes.object
}
const defaultProps = {
  __element: null,
  children: null,
  className: null,
  style: null
}

export class AutoSize extends React.PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps

  render() {
    const {
      className,
      children,
      __element: Comp,
      style,
      ...props
    } = this.props

    const string = convertJsxToString(children)

    if (typeof string === 'string') {
      const countChars = string.length

      return React.createElement(
        Comp,
        {
          className: classnames(className, 'dnb-skeleton'),
          'data-skeleton-chars': String(countChars),
          style: {
            ...(style || {}),
            ...{
              '--skeleton-chars': `${countChars}ch`
            }
          },
          ...props
        },
        children
      )
    }

    return (
      <Comp {...props} className={className} style={style}>
        {children}
      </Comp>
    )
  }
}
