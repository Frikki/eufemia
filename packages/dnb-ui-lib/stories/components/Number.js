/**
 * dnb-ui-lib Component Story
 *
 */

import React from 'react'
import { Wrapper, Box } from '../helpers'
import styled from '@emotion/styled'
import { P } from '../../src/elements'
import Provider from '../../src/shared/Provider'
import Number from '../../src/components/Number'
import Dropdown from '../../src/components/Dropdown'

// import { format } from '../../src/components/Number'
import Context from '../../src/shared/Context'

const CustomStyle = styled.div`
  .dnb-number {
    ${'' /* display: block; */}
    ${'' /* color: hotpink; */}
  }
  .dnb-sr-only--shadow {
    box-shadow: 0 0 1px 1px blue;
    margin: 0;
  }
`

const ChangeLocale = () => {
  const {
    setLocale,
    // setCurrentLocale,// to update only the current context
    locale
  } = React.useContext(Context)

  return (
    <Dropdown
      value={locale}
      data={{ 'en-US': 'English', 'nb-NO': 'Norsk' }}
      on_change={({ data: { selected_key: locale } }) => {
        setLocale(locale)
      }}
    />
  )
}

export default [
  'Number',
  () => {
    return (
      <CustomStyle>
        <Provider
        // locale="nb-NO"
        >
          <Wrapper>
            <Box>
              <Provider locale="en-US">
                <ChangeLocale />
                <P>
                  text <Number currency>12 345</Number> text{' '}
                  <Number currency="USD" value="12345" /> text{' '}
                  <Number currency>12 345 678</Number> text{' '}
                  <Number currency>12345.0</Number> text{' '}
                  <Number currency="EUR">-12345,68</Number> text{' '}
                </P>
              </Provider>
            </Box>
            <Box>
              <P>
                text <Number value="12345" /> text{' '}
                <Number value={-12345678.9} />{' '}
              </P>
            </Box>
            <Box>
              <P>
                random phone number <Number value="99999999" phone />{' '}
                random phone number <Number value="4799999999" phone />{' '}
                random phone number <Number value="++4799999999" phone />{' '}
                random phone number{' '}
                <Number value="004780022222" phone link="sms" /> random
                phone number <Number value="+47116000" phone /> random text{' '}
                <Number value="+4702000" phone />
              </P>
            </Box>
            <Box>
              <P>
                bank account number <Number value="20001234567" ban />{' '}
                random account number
              </P>
            </Box>
            <Box>
              <P>
                national identification number{' '}
                <Number value="18089212345" nin /> random identification
                number
              </P>
            </Box>
            <Box>
              <p className="dnb-p">
                Hidden text:
                <span className="dnb-sr-only--inline">
                  I am only visible to screen readers, so you probably
                  can't see me.. Unless you're using a screen reader.
                </span>
                !
              </p>
              <p className="dnb-p dnb-sr-only dnb-not-sr-only">
                I'm the opposite of .dnb-sr-only, so you should be able to
                see me.
              </p>
              <p className="dnb-sr-only--shadow">hello 1</p>
              <span className="dnb-sr-only">hello 2</span>
              <span className="dnb-sr-only--inline">hello 3</span>
              <p className="dnb-sr-only--shadow">end</p>
              ---
              <p className="dnb-sr-only--shadow">hello 1</p>
              <p className="dnb-sr-only">hello 2</p>
              <div className="dnb-sr-only--inline">hello 3</div>
              {/* <span className="dnb-sr-only--inline-wrapper">
            </span> */}
              <p className="dnb-sr-only--shadow">end</p>
              <button className="dnb-button dnb-button--primary">
                <Number value={-12345678.9} />
              </button>
            </Box>
          </Wrapper>
        </Provider>
      </CustomStyle>
    )
  }
]
