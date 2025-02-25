import React from 'react'
import classnames from 'classnames'
import { ComponentProps, pickSpacingProps } from '../types'
import FlexContainer, {
  Props as FlexContainerProps,
} from './FlexContainer'

export type Props = ComponentProps & {
  direction?: FlexContainerProps['direction']
  spacing?: FlexContainerProps['spacing']
  alignSelf?: FlexContainerProps['alignSelf']
  children: React.ReactNode
}

function Section(props: Props) {
  const {
    className,
    direction,
    spacing,
    alignSelf = 'stretch',
    children,
  } = props
  return (
    <FlexContainer
      className={classnames('dnb-forms-section', className)}
      direction={direction ?? 'column'}
      spacing={spacing ?? 'small'}
      alignSelf={alignSelf}
      {...pickSpacingProps(props)}
    >
      {children}
    </FlexContainer>
  )
}

Section._supportsEufemiaSpacingProps = true
export default Section
