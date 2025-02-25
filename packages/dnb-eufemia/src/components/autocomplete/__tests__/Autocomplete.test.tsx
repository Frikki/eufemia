/**
 * Autocomplete Test
 *
 */

import React from 'react'
import { axeComponent, loadScss, wait } from '../../../core/jest/jestSetup'
import * as helpers from '../../../shared/helpers'
import Autocomplete, { AutocompleteProps } from '../Autocomplete'
import { SubmitButton } from '../../input/Input'
import { format } from '../../number-format/NumberUtils'
import userEvent from '@testing-library/user-event'
import {
  mockImplementationForDirectionObserver,
  testDirectionObserver,
} from '../../../fragments/drawer-list/__tests__/DrawerListTestMocks'
import {
  cleanup,
  fireEvent,
  render,
  act,
  waitFor,
} from '@testing-library/react'
import FormRow from '../../form-row/FormRow'
import {
  DrawerListData,
  DrawerListDataObject,
  DrawerListDataObjectUnion,
} from '../../../fragments/drawer-list'

const mockProps: AutocompleteProps = {
  id: 'autocomplete-id',
  no_animation: true, // use no_animation so we don't need to wait
  skip_portal: true,
}
const props: AutocompleteProps = {
  id: 'autocomplete-id',
  mode: 'sync',
  value: 1,
  show_submit_button: true,
  no_animation: true,
  skip_portal: true,
}

const mockData: DrawerListDataObjectUnion[] = [
  'AA c',
  'BB cc zethx',
  { content: ['CC', 'cc'] },
]

mockImplementationForDirectionObserver()

beforeEach(() => {
  document.body.innerHTML = ''
})

describe('Autocomplete component', () => {
  it('has correct word and in-word highlighting', () => {
    render(
      <Autocomplete
        data={['aaa', 'The Godfather the godfather The Godfather', 'ccc']}
        opened
        input_value="the g th"
        {...mockProps}
      />
    )
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      /* html */ `<li class="first-of-type dnb-drawer-list__option" role="option" tabindex="-1" aria-selected="false" data-item="1" id="option-autocomplete-id-1"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span><span class="dnb-drawer-list__option__item--highlight">Th</span>e <span class="dnb-drawer-list__option__item--highlight">G</span>odfa<span class="dnb-drawer-list__option__item--highlight">th</span>er <span class="dnb-drawer-list__option__item--highlight">th</span>e <span class="dnb-drawer-list__option__item--highlight">g</span>odfa<span class="dnb-drawer-list__option__item--highlight">th</span>er <span class="dnb-drawer-list__option__item--highlight">Th</span>e <span class="dnb-drawer-list__option__item--highlight">G</span>odfa<span class="dnb-drawer-list__option__item--highlight">th</span>er</span></span></span></li>`
    )
  })

  it('has correct input HTML Element attributes', () => {
    render(<Autocomplete data={mockData} opened {...mockProps} />)

    const elem = document.querySelector('input')

    expect(elem.getAttribute('autocomplete')).toBe('off')
    expect(elem.getAttribute('autocapitalize')).toBe('none')
    expect(elem.getAttribute('spellcheck')).toBe('false')
    expect(elem.getAttribute('autocorrect')).toBe('off')
    expect(elem.getAttribute('role')).toBe('combobox')
    expect(elem.getAttribute('aria-autocomplete')).toBe('both')
    expect(elem.getAttribute('aria-haspopup')).toBe('listbox')
    expect(elem.getAttribute('aria-controls')).toBe('autocomplete-id-ul')
    expect(elem.getAttribute('aria-expanded')).toBe('true')
    expect(elem.getAttribute('name')).toBe('autocomplete-id')
  })

  it('has correct options after filter', () => {
    render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(1)
    expect(
      document.querySelector(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).textContent
    ).toBe(mockData[0])

    // check "cc"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc' },
    })
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(2)

    // check "bb cc"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb cc' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(2)

    // check "aa cc"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa cc' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])

    // check inside words
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb cc th x' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      /* html */ `<li class="first-of-type dnb-drawer-list__option" role="option" tabindex="-1" aria-selected="false" data-item="1" id="option-autocomplete-id-1"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span><span class="dnb-drawer-list__option__item--highlight">BB</span> <span class="dnb-drawer-list__option__item--highlight">cc</span> ze<span class="dnb-drawer-list__option__item--highlight">thx</span></span></span></span></li>`
    )

    // check "invalid"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'invalid' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('Ingen alternativer')
  })

  it('will set correct width when independent_width is set', async () => {
    const style = {
      getPropertyValue: () => 20,
    } as undefined

    jest.spyOn(window, 'getComputedStyle').mockImplementation(() => style)

    const { rerender } = render(
      <Autocomplete value={1} data={mockData} opened />
    )

    const styleElement = document.querySelector(
      '.dnb-drawer-list__portal__style'
    )

    await waitFor(() => {
      expect(styleElement.getAttribute('style')).toBe(
        'width: 64px; --drawer-list-width: 4rem; top: 0px; left: 0px;'
      )
    })

    rerender(
      <Autocomplete value={1} data={mockData} independent_width opened />
    )

    expect(styleElement.getAttribute('style')).toBe(
      'width: 320px; --drawer-list-width: 20rem; top: 0px; left: 0px;'
    )

    const element = document.querySelector('.dnb-drawer-list')
    expect(Array.from(element.classList)).toContain(
      'dnb-drawer-list--independent-width'
    )
  })

  describe('suffix_value', () => {
    const mockData = [
      {
        selected_value: 'a selected',
        suffix_value: 'a suffix',
        content: '11 aa',
      },
      {
        selected_value: 'b selected',
        suffix_value: <span>b suffix</span>,
        content: '22 bb',
      },
      {
        selected_value: 'c selected',
        suffix_value: 'c suffix',
        content: '22 cc',
      },
    ]

    it('will show suffix_value in options and in input when selected', () => {
      let index = 1

      const { rerender } = render(
        <Autocomplete {...mockProps} value={index} data={mockData} />
      )

      const assertInputValue = () => {
        expect(
          (document.querySelector('.dnb-input__input') as HTMLInputElement)
            .value
        ).toBe(mockData[index].selected_value)
      }

      assertInputValue()

      index = 2
      rerender(
        <Autocomplete {...mockProps} value={index} data={mockData} />
      )

      assertInputValue()

      // open
      keydown(40) // down

      expect(
        document
          .querySelectorAll('.dnb-drawer-list__option')[1]
          .querySelector(
            '.dnb-drawer-list__option__item.dnb-drawer-list__option__suffix'
          ).textContent
      ).toBe('b suffix')
      expect(
        document
          .querySelectorAll('.dnb-drawer-list__option')[2]
          .querySelector(
            '.dnb-drawer-list__option__item.dnb-drawer-list__option__suffix'
          ).textContent
      ).toBe(mockData[2].suffix_value)
    })

    it('will not open drawer-list when click on suffix_value and is disabled', () => {
      render(
        <Autocomplete {...mockProps} value={1} data={mockData} disabled />
      )

      fireEvent.click(
        document.querySelector('.dnb-autocomplete__suffix_value')
      )

      expect(
        document.querySelector('.dnb-autocomplete').classList
      ).not.toContain('dnb-autocomplete--opened')

      expect(document.activeElement.tagName).toBe('BODY')
    })

    it('will open drawer-list when click on suffix_value', () => {
      render(<Autocomplete {...mockProps} value={1} data={mockData} />)

      expect(
        document.querySelector('.dnb-autocomplete').classList
      ).not.toContain('dnb-autocomplete--opened')

      fireEvent.click(
        document.querySelector('.dnb-autocomplete__suffix_value')
      )
      expect(
        document.querySelector('.dnb-autocomplete').classList
      ).toContain('dnb-autocomplete--opened')

      expect(document.activeElement.tagName).toBe('INPUT')
    })

    it('has inner id, used to compute form status width, when status and suffix value', () => {
      render(
        <Autocomplete
          data={mockData}
          {...mockProps}
          status="status text"
          status_state="info"
          status_props={{ stretch: true }}
          show_submit_button
          stretch
          value={1}
        />
      )

      expect(
        document.querySelector('.dnb-autocomplete__inner')
      ).toHaveAttribute('id')
    })
  })

  it('has correct options when search_in_word_index is set to 1', () => {
    render(
      <Autocomplete
        data={mockData}
        search_in_word_index="1"
        show_submit_button
        {...mockProps}
      />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'ethx' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'thx' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'ethxX' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('Ingen alternativer')
  })

  it('should update aria-live with results', async () => {
    render(
      <Autocomplete
        data={mockData}
        show_submit_button
        ariaLiveDelay={1}
        {...mockProps}
      />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb' },
    })

    await wait(2)

    const nodes = document.querySelectorAll('.dnb-sr-only')

    expect(nodes[nodes.length - 1].textContent).toBe('1 alternativer')
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc' },
    })

    await wait(2)

    const nodes1 = document.querySelectorAll('.dnb-sr-only')
    expect(nodes1[nodes1.length - 1].textContent).toBe('2 alternativer')
    const content = (mockData[2] as DrawerListDataObject).content
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe((content as string[]).join(''))

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'c' },
    })

    await wait(2)

    const nodes2 = document.querySelectorAll('.dnb-sr-only')
    expect(nodes2[nodes2.length - 1].textContent).toBe('3 alternativer')
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe((content as string[]).join(''))

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'invalid' },
    })

    await wait(2)

    const nodes3 = document.querySelectorAll('.dnb-sr-only')
    expect(nodes3[nodes3.length - 1].textContent).toBe(
      'Ingen alternativer'
    )
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('Ingen alternativer')
  })

  it('will prefer search_content over content', () => {
    const mockData = [
      { content: 'item aa', search_content: ['AA c'] },
      { content: 'item bb', search_content: ['BB cc zethx'] },
      { content: 'item cc', search_content: ['CC', 'cc'] },
      { content: 'item cc second', search_content: ['CC', 'cc', 'more'] },
    ]

    render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      '<li class="first-of-type dnb-drawer-list__option dnb-drawer-list__option--focus" role="option" tabindex="-1" aria-selected="true" data-item="1" id="option-autocomplete-id-1"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span>item <span class="dnb-drawer-list__option__item--highlight">bb</span></span></span></span></li>'
    )

    // First result direction
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc bb' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      '<li class="first-of-type dnb-drawer-list__option" role="option" tabindex="-1" aria-selected="false" data-item="2" id="option-autocomplete-id-2"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span>item <span class="dnb-drawer-list__option__item--highlight">cc</span></span></span></span></li>'
    )

    // Second result direction
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb cc' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      '<li class="first-of-type dnb-drawer-list__option dnb-drawer-list__option--focus" role="option" tabindex="-1" aria-selected="true" data-item="1" id="option-autocomplete-id-1"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span>item <span class="dnb-drawer-list__option__item--highlight">bb</span></span></span></span></li>'
    )

    // With three matches, we prioritize the second one to be on the first place
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc bb more' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      '<li class="first-of-type dnb-drawer-list__option" role="option" tabindex="-1" aria-selected="false" data-item="3" id="option-autocomplete-id-3"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span>item <span class="dnb-drawer-list__option__item--highlight">cc</span> second</span></span></span></li>'
    )

    // Do not find item, as there is defined a search_content
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'item' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('Ingen alternativer')
  })

  it('should update aria-live (for VoiceOver support) with selected item', () => {
    Object.defineProperty(helpers, 'IS_MAC', {
      value: true,
    })

    render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )

    toggle()

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      ''
    )

    // simulate changes
    keydown(40) // down

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      'AA c'
    )

    // simulate changes
    keydown(40) // down

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      'BB cc zethx'
    )

    // simulate changes
    keydown(40) // down

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      'CCcc'
    )

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent('keydown', {
          keyCode: 13, // enter
        })
      )
    })

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      'Valgt: CCcc'
    )

    // simulate changes
    toggle()
    keydown(38) // up

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      'BB cc zethx'
    )

    // eslint-disable-next-line
    Object.defineProperty(helpers, 'IS_MAC', {
      value: false,
    })

    // simulate changes
    keydown(38) // up

    expect(document.querySelectorAll('.dnb-sr-only')[0].textContent).toBe(
      ''
    )
  })

  it('can be used with regex chars', () => {
    const mockData = [
      'AA aa',
      'BB * bb',
      'CC + cc',
      'DD - dd',
      'EE / ee',
      'FF \\ ff',
    ]

    render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '*+-/\\' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('Ingen alternativer')

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'bb *' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc +' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[2])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'dd -' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[3])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'ee /' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[4])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'ff \\' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[5])
  })

  it('has correct options when using search_numbers', () => {
    const mockData = [
      format(20001234567, { ban: true }),
      format(22233344425, { ban: true }),
      format(1234.5, { currency: true }),
      format('+47116000', { phone: true }),
    ] as DrawerListData

    render(
      <Autocomplete
        data={mockData}
        search_numbers
        show_submit_button
        {...mockProps}
      />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '222333.444' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].outerHTML
    ).toBe(
      /* html */ `<li class="first-of-type dnb-drawer-list__option dnb-drawer-list__option--focus" role="option" tabindex="-1" aria-selected="true" data-item="1" id="option-autocomplete-id-1"><span class="dnb-drawer-list__option__inner"><span class="dnb-drawer-list__option__item"><span><span class="dnb-drawer-list__option__item--highlight">2223</span> <span class="dnb-drawer-list__option__item--highlight">33</span> <span class="dnb-drawer-list__option__item--highlight">4442</span>5</span></span></span></li>`
    )

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '222333 444' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[1])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '1234' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[2])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '00' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[3])
  })

  it('has correct options when using search_numbers and search_in_word_index=1', () => {
    const mockData = ['100.222.333,40', '123456', '100 222 444,50']

    render(
      <Autocomplete
        data={mockData}
        show_submit_button
        search_numbers
        search_in_word_index={1}
        {...mockProps}
      />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '1002223' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '100,222,3' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '100,222,34' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '1002224' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[2])

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '1' },
    })
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(3)

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '333' },
    })
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe(mockData[0])
  })

  it('has correct options after filter and key interaction', () => {
    let elem

    render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )

    // check "cc"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc' },
    })
    const content = (mockData[2] as DrawerListDataObject).content
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe((content as string[]).join(''))
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(2)
    expect(
      document.querySelector('li.dnb-drawer-list__option--focus')
    ).not.toBeInTheDocument()

    // then simulate changes
    keydown(40) // down

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0].classList
    ).toContain('dnb-drawer-list__option--focus')

    // then simulate changes
    keydown(40) // down

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[1].classList
    ).toContain('dnb-drawer-list__option--focus')
    expect(
      document
        .querySelectorAll('li.dnb-drawer-list__option')[1]
        .getAttribute('id')
    ).toBe(
      document
        .querySelector('.dnb-input__input')
        .getAttribute('aria-activedescendant')
    )

    // check "cc bb"
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc bb' },
    })
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(2)
    expect(
      document.querySelector('li.dnb-autocomplete__show-all').textContent
    ).toBe('Vis alt')
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(3)
    expect(
      document
        .querySelectorAll('li.dnb-drawer-list__option')[1]
        .getAttribute('aria-selected')
    ).toBe('true')

    elem = document.querySelectorAll('li.dnb-drawer-list__option')[1]
    expect(elem.textContent).toBe(mockData[1])
    expect(elem.getAttribute('aria-selected')).toBe('true')

    // remove selection and reset the order and open again
    // aria-selected should now be on place 1
    keydown(27) // esc
    toggle()

    elem = document.querySelectorAll('li.dnb-drawer-list__option')[1]
    expect(elem.textContent).toBe(mockData[1])
    expect(elem.getAttribute('aria-selected')).toBe('true')
  })

  it('has correct options after filter if filter is disabled', () => {
    render(
      <Autocomplete
        disable_filter
        data={mockData}
        show_submit_button
        {...mockProps}
      />
    )

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(3)
  })

  it('has correct "aria-expanded"', () => {
    render(<Autocomplete {...props} data={mockData} />)

    keydown(13) // enter

    const elem = document.querySelector('.dnb-autocomplete')
    expect(
      elem
        .querySelector(
          'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
        )
        .getAttribute('aria-expanded')
    ).toBe('true')
  })

  it('has correct "opened" state on click in input', () => {
    render(<Autocomplete {...mockProps} data={mockData} />)

    fireEvent.mouseDown(document.querySelector('.dnb-input__input'))

    const elem = document.querySelector('.dnb-autocomplete')
    expect(elem.classList).toContain('dnb-autocomplete--opened')

    expect(
      elem.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(3)
  })

  it('has correct "opened" state on submit button click', () => {
    render(<Autocomplete {...props} data={mockData} />)

    toggle()

    const elem = document.querySelector('.dnb-autocomplete')

    expect(elem.classList).toContain('dnb-autocomplete--opened')
  })

  it('has type="button" on submit button', () => {
    render(<Autocomplete {...props} data={mockData} />)

    expect(
      document
        .querySelector('button.dnb-input__submit-button__button')
        .getAttribute('type')
    ).toBe('button')
  })

  it('has correct length of li elements', () => {
    render(<Autocomplete {...props} data={mockData} />)

    toggle()

    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(mockData.length)
  })

  it('has valid events returning all additional attributes in the event return', () => {
    const on_show = jest.fn()
    const on_hide = jest.fn()
    const on_focus = jest.fn()
    const on_blur = jest.fn()
    const params = { 'data-attr': 'value' }

    render(
      <Autocomplete
        on_show={on_show}
        on_hide={on_hide}
        on_focus={on_focus}
        on_blur={on_blur}
        {...params}
        data={mockData}
        show_submit_button
        {...mockProps}
      />
    )

    document.querySelector('input').focus()
    expect(on_focus).toHaveBeenCalledTimes(1)
    expect(on_focus.mock.calls[0][0].attributes).toMatchObject(params)
    expect(document.activeElement.tagName).toBe('INPUT')

    // ensure we focus only once
    document.querySelector('input').focus()
    expect(on_focus).toHaveBeenCalledTimes(1)

    fireEvent.blur(document.querySelector('input'))
    expect(on_blur).toHaveBeenCalledTimes(1)
    expect(on_blur.mock.calls[0][0].attributes).toMatchObject(params)

    // ensure we blur only once
    fireEvent.blur(document.querySelector('input'))
    expect(on_blur).toHaveBeenCalledTimes(1)

    toggle()
    expect(on_show).toHaveBeenCalledTimes(1)
    expect(on_show.mock.calls[0][0].attributes).toMatchObject(params)
    expect(on_show).toHaveBeenCalledWith({
      attributes: {
        ...params,
        onMouseDown: expect.any(Function),
      },
      data: null,
      ulElement: null,
    })

    keydown(27) // esc
    expect(on_hide).toHaveBeenCalledTimes(1)
    expect(on_hide.mock.calls[0][0].attributes).toMatchObject(params)
    expect(on_hide.mock.calls[0][0].event).toEqual(
      new KeyboardEvent('keydown', {})
    )

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).not.toContain('dnb-autocomplete--opened')

    // ensure we blur only once
    fireEvent.blur(document.querySelector('input'))
    expect(on_blur).toHaveBeenCalledTimes(1)

    toggle()
    expect(on_show).toHaveBeenCalledTimes(2)
    expect(on_show.mock.calls[1][0].attributes).toMatchObject(params)

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')

    keydown(27) // esc

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).not.toContain('dnb-autocomplete--opened')

    toggle()
    expect(on_show).toHaveBeenCalledTimes(3)
  })

  it('updates its input value if value and data prop changes', async () => {
    const value = 0
    const data = mockData

    const { rerender } = render(<Autocomplete value={value} data={data} />)

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(data[value])

    const newValue = 1
    const newData = [...mockData, 'New data']

    rerender(<Autocomplete value={newValue} data={newData} />)

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(newData[newValue])
  })

  it('can be reset to null', () => {
    let value
    const { rerender } = render(
      <Autocomplete
        {...props}
        placeholder="placeholder"
        value={null}
        data={mockData}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('')
    expect(
      document.querySelector('.dnb-input__placeholder').textContent
    ).toBe('placeholder')

    value = 1
    rerender(
      <Autocomplete
        {...props}
        placeholder="placeholder"
        value={value}
        data={mockData}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[value])

    rerender(
      <Autocomplete
        {...props}
        placeholder="placeholder"
        value={undefined}
        data={mockData}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('')

    value = 0
    rerender(
      <Autocomplete
        {...props}
        placeholder="placeholder"
        value={value}
        data={mockData}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[value])

    rerender(
      <Autocomplete
        {...props}
        placeholder="placeholder"
        value={null}
        data={mockData}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('')
  })

  it('returns correct value in on_blur event', () => {
    const on_focus = jest.fn()
    const on_blur = jest.fn()
    const onBlur = jest.fn()
    const on_change = jest.fn()

    render(
      <Autocomplete
        on_focus={on_focus}
        on_blur={on_blur}
        onBlur={onBlur}
        on_change={on_change}
        data={mockData}
        {...mockProps}
      />
    )

    fireEvent.focus(document.querySelector('input'))
    expect(on_focus).toHaveBeenCalledTimes(1)

    fireEvent.change(document.querySelector('input'), {
      target: { value: 'cc' },
    })

    // Try to call on_blur by mousedown
    fireEvent.mouseDown(document.querySelector('.dnb-drawer-list'))
    fireEvent.blur(document.querySelector('input'))
    expect(on_blur).toHaveBeenCalledTimes(0)
    expect(onBlur).toHaveBeenCalledTimes(0)

    // Try to call on_blur by keystroke
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        keyCode: 13, // enter
      })
    )
    fireEvent.blur(document.querySelector('input'))
    expect(on_blur).toHaveBeenCalledTimes(0)
    expect(onBlur).toHaveBeenCalledTimes(0)

    // Make a selection
    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[1]
    )

    expect(on_change).toHaveBeenCalledTimes(1)
    expect(on_change.mock.calls[0][0].data).toBe('BB cc zethx')

    // All the clicks should not have invoked the on_blur event
    expect(on_blur).toHaveBeenCalledTimes(0)
    expect(onBlur).toHaveBeenCalledTimes(0)

    // But a second one will
    fireEvent.blur(document.querySelector('input'))

    expect(on_blur).toHaveBeenCalledTimes(1)
    expect(onBlur).toHaveBeenCalledTimes(1)
    expect(on_blur.mock.calls[0][0].value).toBe('BB cc zethx')
    expect(onBlur.mock.calls[0][0].value).toBe('BB cc zethx')
  })

  it('will invalidate selected_item when selected_key changes', () => {
    const mockData = [
      { selected_key: 'a', content: 'AA c' },
      { selected_key: 'b', content: 'BB cc zethx' },
      { selected_key: 'c', content: ['CC', 'cc'] },
    ]

    const newMockData = [
      { selected_key: 'a', content: 'AA c' },
      { selected_key: 'x', content: 'BB cc changed value' },
      { selected_key: 'c', content: ['CC', 'cc'] },
    ]

    const onTypeHandler = ({ value, updateData }) => {
      if (value === 'c') {
        updateData(newMockData)
      }
    }

    const on_change = jest.fn()
    const on_type = jest.fn(onTypeHandler)

    const { rerender } = render(
      <Autocomplete
        {...mockProps}
        on_change={on_change}
        on_type={on_type}
        data={mockData}
      />
    )

    // 1. Make first a selected_item change
    rerender(
      <Autocomplete
        {...mockProps}
        on_change={on_change}
        on_type={on_type}
        data={mockData}
        value={2}
      />
    )

    // 2. Then update the data
    rerender(
      <Autocomplete
        {...mockProps}
        on_change={on_change}
        on_type={on_type}
        data={newMockData}
        value={2}
      />
    )

    // 3. And change the value again
    rerender(
      <Autocomplete
        {...mockProps}
        on_change={on_change}
        on_type={on_type}
        data={newMockData}
        value={1}
      />
    )

    // It should not trigger the resetSelectionItem method
    expect(on_change).toHaveBeenCalledTimes(0)
    expect(document.querySelector('input').value).toBe(
      newMockData[1].content
    )

    // Reset data and value
    rerender(
      <Autocomplete
        {...mockProps}
        on_change={on_change}
        on_type={on_type}
        data={mockData}
        value={null}
      />
    )

    fireEvent.change(document.querySelector('input'), {
      target: { value: 'cc' },
    })

    // Make a selection
    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[1]
    )

    expect(document.querySelector('input').value).toBe(mockData[1].content)

    expect(on_change).toHaveBeenCalledTimes(1)
    expect(on_change.mock.calls[0][0].data).toEqual(mockData[1])

    // Trigger data update
    fireEvent.change(document.querySelector('input'), {
      target: { value: 'c' },
    })

    expect(document.querySelector('input').value).toBe('c')

    expect(on_change).toHaveBeenCalledTimes(2)
    expect(on_change.mock.calls[1][0].data).toEqual(undefined)

    fireEvent.change(document.querySelector('input'), {
      target: { value: 'cc' },
    })
    expect(on_type).toHaveBeenCalledTimes(3)

    // Make a selection
    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[1]
    )

    expect(on_change).toHaveBeenCalledTimes(3)
    expect(on_change.mock.calls[2][0].data).toEqual(newMockData[1])
    expect(document.querySelector('input').value).toBe(
      newMockData[1].content
    )
  })

  it('selects correct value and key', () => {
    const mockData = [
      { selected_key: 'a', content: 'A value' },
      { selected_key: 'b', content: 'B value' },
      { selected_key: 'c', content: 'C value' },
      { selected_key: 'id-123', content: '123 value' },
      { selected_key: 'id-456', content: '456 value' },
    ]

    const on_change = jest.fn()

    const { rerender } = render(
      <Autocomplete
        {...mockProps}
        no_animation
        show_submit_button
        data={mockData}
        on_change={on_change}
      />
    )

    // open first
    toggle()

    const openAndSelectNext = () => {
      // then simulate changes
      keydown(40) // down
      act(() => {
        document.dispatchEvent(
          new KeyboardEvent('keydown', {
            keyCode: 13, // enter
          })
        )
      })
    }

    openAndSelectNext()

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('A value')
    expect(on_change.mock.calls[0][0].data.selected_key).toBe('a')

    rerender(
      <Autocomplete
        {...mockProps}
        no_animation
        show_submit_button
        data={mockData}
        on_change={on_change}
        value="b"
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('B value')

    toggle()
    openAndSelectNext()

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('C value')
    expect(on_change.mock.calls[1][0].data.selected_key).toBe('c')

    rerender(
      <Autocomplete
        {...mockProps}
        no_animation
        show_submit_button
        data={mockData}
        on_change={on_change}
        value="id-123"
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('123 value')

    toggle()
    openAndSelectNext()

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('456 value')
    expect(on_change.mock.calls[2][0].data.selected_key).toBe('id-456')
    rerender(
      <Autocomplete
        {...mockProps}
        no_animation
        show_submit_button
        data={mockData}
        on_change={on_change}
        value={123}
      />
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('')
  })

  const runBlurActiveItemTest = ({
    Comp,
    shouldHaveActiveItem,
    shouldHaveActiveItemWhenEmpty,
  }) => {
    const closeAndReopen = () => {
      // Close and open
      fireEvent.blur(document.querySelector('.dnb-input__input'))
      fireEvent.focus(document.querySelector('.dnb-input__input'))
      fireEvent.mouseDown(document.querySelector('.dnb-input__input'))
    }

    render(Comp)

    // open
    fireEvent.mouseDown(document.querySelector('.dnb-input__input'))

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(3)

    fireEvent.focus(document.querySelector('.dnb-input__input'))
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc' },
    })

    // Make first item active
    keydown(40) // down

    expect(
      document.querySelector('li.dnb-drawer-list__option--focus')
    ).toBeInTheDocument()

    closeAndReopen()

    expect(
      document.querySelector('li.dnb-drawer-list__option--focus') !== null
    ).toBe(shouldHaveActiveItem)

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '' },
    })

    expect(
      document.querySelector('li.dnb-drawer-list__option--focus')
    ).not.toBeInTheDocument()

    keydown(40) // down

    expect(
      document.querySelector('li.dnb-drawer-list__option--focus')
    ).toBeInTheDocument()

    closeAndReopen()

    // This here is what we expect
    expect(
      document.querySelector('li.dnb-drawer-list__option--focus') !== null
    ).toBe(shouldHaveActiveItemWhenEmpty)

    // This also opens the drawer-list
    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'cc' },
    })

    keydown(40) // activate
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        keyCode: 13, // enter
      })
    )

    closeAndReopen()

    // Now we have a selected item
    expect(
      document.querySelector('li.dnb-drawer-list__option--selected')
    ).toBeInTheDocument()
    expect(
      document.querySelector('li.dnb-drawer-list__option--focus')
    ).toBeInTheDocument()
    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('CC cc')

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '' },
    })

    closeAndReopen()

    // This here is what we expect
    expect(
      document.querySelector('li.dnb-drawer-list__option--focus') !== null
    ).toBe(shouldHaveActiveItemWhenEmpty)
    expect(
      document.querySelector('li.dnb-drawer-list__option--selected')
    ).not.toBeInTheDocument()

    cleanup()
  }

  it('should reset "active_item" on input blur when no selection is made and "keep_value" and "keep_value_and_selection" is false', () => {
    const on_show = jest.fn()
    const on_hide = jest.fn()
    const on_focus = jest.fn()
    const on_blur = jest.fn()
    const on_change = jest.fn()
    const on_type = jest.fn()

    runBlurActiveItemTest({
      Comp: (
        <Autocomplete
          data={mockData}
          {...mockProps}
          on_show={on_show}
          on_hide={on_hide}
          on_focus={on_focus}
          on_blur={on_blur}
          on_change={on_change}
          on_type={on_type}
        />
      ),
      shouldHaveActiveItem: false,
      shouldHaveActiveItemWhenEmpty: false,
    })

    expect(on_show).toBeCalledTimes(2)
    expect(on_hide).toBeCalledTimes(2)
    expect(on_focus).toBeCalledTimes(4)
    expect(on_blur).toBeCalledTimes(3)
    expect(on_change).toBeCalledTimes(2)
    expect(on_type).toBeCalledTimes(4)
  })

  it('should only reset "active_item" on input blur and "keep_value" is true and value is empty', () => {
    const on_show = jest.fn()
    const on_hide = jest.fn()
    const on_focus = jest.fn()
    const on_blur = jest.fn()
    const on_change = jest.fn()
    const on_type = jest.fn()

    runBlurActiveItemTest({
      Comp: (
        <Autocomplete
          keep_value
          data={mockData}
          {...mockProps}
          on_show={on_show}
          on_hide={on_hide}
          on_focus={on_focus}
          on_blur={on_blur}
          on_change={on_change}
          on_type={on_type}
        />
      ),
      shouldHaveActiveItem: true,
      shouldHaveActiveItemWhenEmpty: false,
    })

    expect(on_show).toBeCalledTimes(2)
    expect(on_hide).toBeCalledTimes(2)
    expect(on_focus).toBeCalledTimes(4)
    expect(on_blur).toBeCalledTimes(3)
    expect(on_change).toBeCalledTimes(2)
    expect(on_type).toBeCalledTimes(4)
  })

  it('should not reset "active_item" on input blur and "keep_value_and_selection" true', () => {
    const on_show = jest.fn()
    const on_hide = jest.fn()
    const on_focus = jest.fn()
    const on_blur = jest.fn()
    const on_change = jest.fn()
    const on_type = jest.fn()

    runBlurActiveItemTest({
      Comp: (
        <Autocomplete
          keep_value_and_selection
          data={mockData}
          {...mockProps}
          on_show={on_show}
          on_hide={on_hide}
          on_focus={on_focus}
          on_blur={on_blur}
          on_change={on_change}
          on_type={on_type}
        />
      ),
      shouldHaveActiveItem: true,
      shouldHaveActiveItemWhenEmpty: true,
    })

    expect(on_show).toBeCalledTimes(2)
    expect(on_hide).toBeCalledTimes(2)
    expect(on_focus).toBeCalledTimes(4)
    expect(on_blur).toBeCalledTimes(3)
    expect(on_change).toBeCalledTimes(2)
    expect(on_type).toBeCalledTimes(4)
  })

  it('should have a button for screen readers to open options – regardless', () => {
    render(<Autocomplete {...mockProps} data={mockData} no_animation />)

    const buttonElem = document
      .querySelector('.dnb-sr-only')
      .querySelector('button')

    expect(buttonElem.textContent).toBe(
      'Bla gjennom alternativer, lukk med esc knappen'
    )
    expect(buttonElem).toBeInTheDocument()
    expect(buttonElem.getAttribute('tabindex')).toBe('-1')

    fireEvent.click(buttonElem)

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')
    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-drawer-list__options'
    )

    fireEvent.click(buttonElem)

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).not.toContain('dnb-autocomplete--opened')
    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-input__input'
    )
  })

  it('should keep input focus when using show-all or select item', () => {
    render(<Autocomplete data={mockData} {...mockProps} />)

    document.querySelector('input').focus()
    fireEvent.change(document.querySelector('input'), {
      target: { value: 'cc' },
    })

    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-input__input'
    )
    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(mockData.length - 1)

    document.querySelector('input').focus()

    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-input__input'
    )

    fireEvent.click(
      document.querySelector('li.dnb-autocomplete__show-all')
    )

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[1].classList
    ).toContain('dnb-drawer-list__option--focus')

    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-input__input'
    )

    expect(
      document.querySelectorAll(
        'li.dnb-drawer-list__option:not(.dnb-autocomplete__show-all)'
      ).length
    ).toBe(mockData.length)

    fireEvent.blur(document.querySelector('input'))
    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
    )

    expect(Array.from(document.activeElement.classList)).toContain(
      'dnb-input__input'
    )
  })

  it('has correct "opened" state on input mousedown', () => {
    render(<Autocomplete {...props} data={mockData} />)

    fireEvent.mouseDown(document.querySelector('.dnb-input__input'))

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')

    // close
    keydown(27) // esc

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).not.toContain('dnb-autocomplete--opened')

    fireEvent.mouseDown(document.querySelector('.dnb-input__input'))

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')
  })

  it('will open drawer-list when open_on_focus is set to true', () => {
    const on_focus = jest.fn()
    const on_change = jest.fn()

    render(
      <Autocomplete
        open_on_focus={true}
        on_focus={on_focus}
        on_change={on_change}
        data={mockData}
        {...mockProps}
      />
    )

    fireEvent.focus(document.querySelector('input'))
    expect(on_focus).toHaveBeenCalledTimes(1)

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')

    // Make a selection
    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[1]
    )

    expect(on_change).toHaveBeenCalledTimes(1)
    expect(on_change.mock.calls[0][0].data).toBe('BB cc zethx')
  })

  it('will prevent close if false gets returned from on_hide event', () => {
    let preventClose = false
    const on_hide = jest.fn(() => !preventClose)
    render(
      <Autocomplete
        on_hide={on_hide}
        data={mockData}
        show_submit_button
        {...mockProps}
      />
    )

    // first open
    toggle()

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')

    act(() => {
      // close
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
    })
    expect(on_hide).toHaveBeenCalledTimes(1)

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).not.toContain('dnb-autocomplete--opened')

    // reopen
    toggle()

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')

    preventClose = true

    // close again, but with false returned
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
    })
    expect(on_hide).toHaveBeenCalledTimes(2)

    // we are still open
    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete--opened')
  })

  it('has no highlighted value by using "disable_highlighting"', () => {
    render(
      <Autocomplete
        mode="async"
        disable_highlighting
        data={mockData}
        show_submit_button
        {...mockProps}
      />
    )

    toggle()

    const result = document
      .querySelectorAll('li.dnb-drawer-list__option')[0]
      .querySelector('.dnb-drawer-list__option__inner').outerHTML

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })

    expect(
      document
        .querySelectorAll('li.dnb-drawer-list__option')[0]
        .querySelector('.dnb-drawer-list__option__inner').outerHTML
    ).toBe(result)
  })

  it('and new data has to replace all data properly in sync mode', () => {
    const replaceData = ['aaa']

    const { rerender } = render(
      <Autocomplete data={mockData} {...mockProps} />
    )

    keydown(40) // down

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(2)

    // update data
    rerender(<Autocomplete {...mockProps} data={replaceData} />)

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'a' },
    })

    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(1)
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option')[0]
        .textContent
    ).toBe('aaa')
  })

  it('and updateData has to replace all data properly in async mode', () => {
    const on_type = jest.fn()
    const replaceData = ['aaa']

    render(
      <Autocomplete
        mode="async"
        disable_filter
        on_type={on_type}
        data={mockData}
        {...mockProps}
      />
    )

    keydown(40) // down

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'aa' },
    })

    const callOne = on_type.mock.calls[0][0]
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(3)
    expect(on_type).toHaveBeenCalledTimes(1)
    expect(callOne.value).toBe('aa')
    expect(callOne.dataList.length).toBe(3)

    act(() => {
      // update data
      callOne.updateData(replaceData)
    })

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'a' },
    })

    const callTwo = on_type.mock.calls[1][0]
    expect(
      document.querySelectorAll('li.dnb-drawer-list__option').length
    ).toBe(1)
    expect(on_type).toHaveBeenCalledTimes(2)
    expect(callTwo.dataList.length).toBe(1)
    expect(callOne.dataList).not.toBe(callTwo.dataList)

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: 'something' },
    })

    const callThree = on_type.mock.calls[2][0]
    expect(callThree.dataList).toStrictEqual(callTwo.dataList)
  })

  it('will use selected_value as the input value when selected', () => {
    const mockData = [
      { selected_value: 'a value', content: '11 aa' },
      { selected_value: 'b value', content: '22 bb' },
      { selected_value: 'c value', content: '22 cc' },
    ]

    let index = 1

    const { rerender } = render(
      <Autocomplete {...mockProps} value={index} data={mockData} />
    )

    const assert = () => {
      expect(
        (document.querySelector('.dnb-input__input') as HTMLInputElement)
          .value
      ).toBe(mockData[index].selected_value)
    }

    assert()

    index = 2
    rerender(<Autocomplete {...mockProps} value={index} data={mockData} />)

    assert()
  })

  it('will select correct item after updateData', () => {
    const mockData = [
      { selected_value: 'a value', content: '11 aa' },
      { selected_value: 'b value', content: '22 bb' },
      { selected_value: 'c value', content: '22 cc' },
    ]

    const onTypeHandler = ({ updateData }) => {
      updateData(mockData)
    }

    const WithState = () => {
      const [value, setValue] = React.useState(null)

      return (
        <Autocomplete
          {...mockProps}
          mode="async"
          value={value}
          data={mockData}
          show_submit_button
          on_type={onTypeHandler}
          on_change={({ value }) => {
            setValue(value)
          }}
        />
      )
    }
    render(<WithState />)

    toggle()

    fireEvent.change(document.querySelector('.dnb-input__input'), {
      target: { value: '22' },
    })

    fireEvent.click(
      document.querySelectorAll('li.dnb-drawer-list__option')[1]
    )

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe('c value')
  })

  it('has correct selected value', () => {
    render(<Autocomplete {...props} data={mockData} />)
    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[props.value])
  })

  it('has correct selected value after new selection', () => {
    render(<Autocomplete {...props} data={mockData} />)
    toggle()

    // then simulate changes
    keydown(40) // down

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[props.value])
  })

  it('has a default title if no value is given', () => {
    const title = 'Make a selection'
    render(
      <Autocomplete
        data={mockData}
        title={title}
        show_submit_button
        {...mockProps}
      />
    )
    expect(
      document.querySelector('.dnb-input__placeholder').textContent
    ).toBe(title)
  })

  it('has a correct value content if we send in a React component', () => {
    const value = 1
    render(
      <Autocomplete
        data={mockData}
        value={value}
        show_submit_button
        {...mockProps}
      />
    )
    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[value])
  })

  it('has correct value after useEffect value state change', () => {
    const newValue = 0
    const UpdateValue = () => {
      const [value, setValue] = React.useState(props.value)

      React.useEffect(() => {
        setValue(newValue)
      }, [])

      return <Autocomplete {...props} data={mockData} value={value} />
    }

    render(<UpdateValue />)

    expect(
      (document.querySelector('.dnb-input__input') as HTMLInputElement)
        .value
    ).toBe(mockData[newValue])
  })

  it('has a disabled attribute, once we set disabled to true', () => {
    const { rerender } = render(
      <Autocomplete data={mockData} show_submit_button {...mockProps} />
    )
    rerender(
      <Autocomplete
        data={mockData}
        show_submit_button
        {...mockProps}
        disabled={true}
      />
    )
    expect(
      document.querySelector(
        'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
      )
    ).toHaveAttribute('disabled')
    expect(
      document
        .querySelector(
          'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
        )
        .querySelector('.dnb-icon')
        .getAttribute('data-testid')
    ).toContain('chevron down')
  })

  it('supports input_element properly', () => {
    const onChange = jest.fn()
    render(
      <Autocomplete
        {...mockProps}
        data={mockData}
        input_element={(props) => (
          <input
            {...props}
            type="text"
            aria-label="label"
            onChange={onChange}
          />
        )}
      />
    )

    expect(document.querySelector('input')).toBeInTheDocument()
    expect(
      Array.from(document.querySelector('input').classList)
    ).toContain('dnb-autocomplete__input')
    expect(
      document.querySelector('input').getAttribute('aria-label')
    ).toBe('label')

    const value = 'new value'
    fireEvent.change(document.querySelector('input'), {
      target: { value },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  const orig = window.requestAnimationFrame
  afterEach(() => {
    window.requestAnimationFrame = orig
  })

  it('will make anchors inside drawer-list item accessible', async () => {
    window.requestAnimationFrame = undefined

    const mockData = [
      'first item',
      [
        <a href="/" className="first-anchor" key="first">
          anchor
        </a>,
        <a href="/" className="second-anchor" key="second">
          anchor
        </a>,
      ],
      'one more item',
    ]

    render(<Autocomplete {...mockProps} data={mockData} />)

    fireEvent.focus(document.querySelector('input'))

    // focus the first item
    keydown(40) // down

    // focus the second item
    keydown(40) // down

    await userEvent.tab()

    expect(Array.from(document.activeElement.classList)).toContain(
      'first-anchor'
    )

    await userEvent.tab()

    expect(Array.from(document.activeElement.classList)).toContain(
      'second-anchor'
    )
  })

  it('will keep focus on input when opening', () => {
    const mockData = ['first item', 'one more item']

    render(<Autocomplete data={mockData} {...mockProps} />)

    document.querySelector('input').focus()

    // open
    keydown(40) // down

    expect(document.activeElement.tagName).toBe('INPUT')
  })

  it('submit_element will replace the internal SubmitButton', () => {
    const { rerender } = render(
      <Autocomplete
        data={mockData}
        {...mockProps}
        submit_element={<SubmitButton icon="bell" />}
      />
    )
    rerender(
      <Autocomplete
        data={mockData}
        {...mockProps}
        submit_element={<SubmitButton icon="bell" />}
        disabled={true}
      />
    )
    expect(
      document.querySelector(
        'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
      )
    ).toHaveAttribute('disabled')
    expect(
      document
        .querySelector(
          'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
        )
        .querySelector('.dnb-icon')
    ).toBeInTheDocument()

    expect(
      document
        .querySelector(
          'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
        )
        .querySelector('.dnb-icon')
        .getAttribute('data-testid')
    ).toContain('bell')
  })

  it('has working direction observer', async () => {
    render(<Autocomplete {...props} data={mockData} />)

    // open first
    fireEvent.click(
      document.querySelector(
        'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
      )
    )

    await testDirectionObserver()
  })

  it('has error status when only providing status', () => {
    render(
      <Autocomplete
        data={mockData}
        {...mockProps}
        status="status text"
        show_submit_button
      />
    )

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete__status--error')
    expect(document.querySelector('.dnb-form-status').classList).toContain(
      'dnb-form-status--error'
    )
    expect(document.querySelector('.dnb-input').classList).toContain(
      'dnb-input__status--error'
    )
    expect(
      document.querySelector('button.dnb-input__submit-button__button')
        .classList
    ).toContain('dnb-button__status--error')
  })

  it('has correct status when status_state is error', () => {
    render(
      <Autocomplete
        data={mockData}
        {...mockProps}
        status="status text"
        status_state="error"
        show_submit_button
      />
    )

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete__status--error')
    expect(document.querySelector('.dnb-form-status').classList).toContain(
      'dnb-form-status--error'
    )
    expect(document.querySelector('.dnb-input').classList).toContain(
      'dnb-input__status--error'
    )
    expect(
      document.querySelector('button.dnb-input__submit-button__button')
        .classList
    ).toContain('dnb-button__status--error')
  })

  it('has correct status when status_state is info', () => {
    render(
      <Autocomplete
        data={mockData}
        {...mockProps}
        status="status text"
        status_state="info"
        show_submit_button
      />
    )

    expect(
      document.querySelector('.dnb-autocomplete').classList
    ).toContain('dnb-autocomplete__status--info')
    expect(document.querySelector('.dnb-form-status').classList).toContain(
      'dnb-form-status--info'
    )
    expect(document.querySelector('.dnb-input').classList).toContain(
      'dnb-input__status--info'
    )
    expect(
      document.querySelector('button.dnb-input__submit-button__button')
        .classList
    ).toContain('dnb-button__status--info')
  })

  it('should support spacing props', () => {
    render(<Autocomplete top="2rem" />)

    const element = document.querySelector('.dnb-autocomplete')

    expect(element.classList).toContain('dnb-space__top--large')
  })

  it('should inherit FormRow vertical label', () => {
    render(
      <FormRow vertical>
        <Autocomplete label="Label" />
      </FormRow>
    )

    const element = document.querySelector('.dnb-autocomplete')
    const attributes = Array.from(element.attributes).map(
      (attr) => attr.name
    )

    expect(attributes).toEqual(['class'])
    expect(Array.from(element.classList)).toEqual([
      'dnb-autocomplete',
      'dnb-form-component',
      'dnb-autocomplete--auto',
      'dnb-autocomplete--vertical',
      'dnb-autocomplete--icon-position-left',
      'dnb-autocomplete--default',
    ])
  })
})

describe('Autocomplete markup', () => {
  it('should validate with ARIA rules', async () => {
    const snapshotProps: AutocompleteProps = {
      label: 'Autocomplete Label:',
      status: 'status',
      status_state: 'error',
      status_props: null,
      value: 2,
      opened: true,
      show_submit_button: true,
      no_animation: true,
      skip_portal: true,
    }
    const CheckComponent = render(
      <Autocomplete {...snapshotProps} data={mockData} />
    )

    expect(
      await axeComponent(CheckComponent, {
        rules: {
          'aria-valid-attr-value': { enabled: false },
          'aria-required-children': { enabled: false },
        },
      })
    ).toHaveNoViolations()
  })
})

describe('Autocomplete scss', () => {
  it('has to match style dependencies css', () => {
    const css = loadScss(require.resolve('../style/deps.scss'))
    expect(css).toMatchSnapshot()
  })

  it('have to match default theme snapshot', () => {
    const css = loadScss(
      require.resolve('../style/themes/dnb-autocomplete-theme-ui.scss')
    )
    expect(css).toMatchSnapshot()
  })
})

const keydown = (keyCode) => {
  fireEvent.keyDown(document.querySelector('.dnb-input__input'), {
    keyCode,
  })
}

const toggle = () => {
  fireEvent.click(
    document.querySelector(
      'button.dnb-input__submit-button__button:not(.dnb-input__clear-button)'
    )
  )
}
