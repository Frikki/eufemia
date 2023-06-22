/**
 * Component Test
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import { axeComponent, loadScss } from '../../../core/jest/jestSetup'
import Section, { SectionAllProps } from '../Section'
import Provider from '../../../shared/Provider'

const props: SectionAllProps = {
  style_type: 'mint-green-12',
}

describe('Section component', () => {
  it('should have correct styles', () => {
    render(<Section style_type="divider" />)
    expect(
      document
        .querySelector('section.dnb-section')
        .classList.contains('dnb-section--divider')
    ).toBe(true)
  })

  it('should support any string in style_type', () => {
    render(<Section style_type="cucstom" />)
    expect(
      document
        .querySelector('section.dnb-section')
        .classList.contains('dnb-section--cucstom')
    ).toBe(true)
  })

  it('should support spacing props', () => {
    render(<Section top="medium">text</Section>)

    const element = document.querySelector('section.dnb-section')

    expect(Array.from(element.classList)).toEqual([
      'dnb-section',
      'dnb-section--mint-green-12',
      'dnb-space__top--medium',
    ])
  })

  it('will use props from Provider', () => {
    render(
      <Provider Section={{ style_type: 'divider' }}>
        <Section />
      </Provider>
    )

    expect(
      document
        .querySelector('section.dnb-section')
        .classList.contains('dnb-section--divider')
    ).toBe(true)
  })

  it('should have correct spacing', () => {
    const hasSpacing = () =>
      Array.from(document.querySelector('section.dnb-section').classList)
        .filter((className) => className.includes('dnb-section--spacing'))
        .join('')

    const { rerender } = render(<Section />)
    expect(hasSpacing()).toBe('')

    rerender(<Section spacing="large" />)
    expect(hasSpacing()).toBe('dnb-section--spacing-large')

    rerender(<Section spacing="medium" />)
    expect(hasSpacing()).toBe('dnb-section--spacing-medium')

    rerender(<Section spacing="small" />)
    expect(hasSpacing()).toBe('dnb-section--spacing-small')

    rerender(<Section spacing />)
    expect(hasSpacing()).toBe('dnb-section--spacing-large')
  })

  it('should have a div as the element tag', () => {
    render(<Section element="div" />)
    expect(document.querySelector('div.dnb-section')).toBeTruthy()
  })

  it('should validate with ARIA rules', async () => {
    const Component = render(<Section {...props} />)
    expect(await axeComponent(Component)).toHaveNoViolations()
  })
})

describe('Section scss', () => {
  it('has to match style dependencies css', () => {
    const css = loadScss(require.resolve('../style/deps.scss'))
    expect(css).toMatchSnapshot()
  })

  it('have to match default theme snapshot', () => {
    const css = loadScss(
      require.resolve('../style/themes/dnb-section-theme-ui.scss')
    )
    expect(css).toMatchSnapshot()
  })
})
