/**
 * Global helpers tests
 *
 */

import {
  setPageFocusElement,
  applyPageFocus,
  scrollToLocationHashId,
  IS_IE11
} from '../helpers'

const bodyElement = document.body
bodyElement.insertAdjacentHTML(
  'afterbegin',
  `<div class="focus-content">My Content</div>`
)
bodyElement.insertAdjacentHTML(
  'afterbegin',
  `<div id="scroll-hash">My Content</div>`
)

beforeAll(() => {
  setPageFocusElement('.focus-content', 'content')
  applyPageFocus('content')
})

describe('"applyPageFocus" should', () => {
  const focusElement = document.querySelector('.focus-content')
  it('set a focus on the given element', () => {
    expect(focusElement === document.activeElement).toBe(true)
  })
  it('have attribute "tabindex" with the value -1', () => {
    expect(focusElement.getAttribute('tabindex')).toBe('-1')
  })
  it('have a css class called "dnb-no-focus"', () => {
    expect(focusElement.getAttribute('class')).toContain('dnb-no-focus')
  })
})

describe('"scrollToLocationHashId" should', () => {
  window.location.hash = '#scroll-hash'
  const scrollElement = document.querySelector('#scroll-hash')
  it('have a valid dom element', () => {
    expect(scrollElement instanceof HTMLElement).toBe(true)
  })
  it('set a focus on the given element', () => {
    const offset = 100
    let mock = null
    window.scrollTo = (result) => {
      mock = result
    }
    scrollToLocationHashId({ offset })
    expect(typeof mock).toBe('object')
    expect(typeof mock).not.toBe(null)
    const { top, behavior } = mock
    expect(top).toBe(-offset) // NB: minus!
    expect(behavior).toBe('smooth')
  })
})

describe('"IS_IE11" should', () => {
  it('result in false (no function)', () => {
    navigator.maxTouchPoints = 2
    expect(IS_IE11).toBe(false)
  })
})
