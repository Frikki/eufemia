/**
 * UI lib Component Example
 *
 */

import React from 'react'
import ComponentBox from '../../../../shared/tags/ComponentBox'
import InputPassword from '@dnb/eufemia/src/components/input/InputPassword'
import styled from '@emotion/styled'
import {
  FormSet,
  FormRow,
  HelpButton,
  Space,
  Input,
  Button,
} from '@dnb/eufemia/src/components'

const Wrapper = styled.div`
  display: block;
  width: 100%;

  .dnb-input input {
    min-width: 10rem;
  }
  .dnb-form-label + .dnb-input {
    margin-top: 0;
  }
`

export const InputExampleDefault = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-placeholder">
      <Input label="Label:" placeholder="Placeholder text" />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleSearch = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-search">
      <Input
        label="Search:"
        type="search"
        placeholder="Search text placeholder"
        on_change={({ value }) => {
          console.log('on_change', value)
        }}
        on_submit={({ value }) => {
          console.log('Submit:', value)
        }}
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleMedium = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-medium">
      <Input
        size="medium"
        type="search"
        stretch={true}
        value="Medium search value"
        on_change={({ value }) => {
          console.log('on_change', value)
        }}
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleWithIcon = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-icon">
      <Input
        label="Input with icon:"
        placeholder="Input"
        label_direction="vertical"
        icon="check"
        bottom
      />
      <Input
        label="Input with icon:"
        label_sr_only
        placeholder="Input with a placeholder"
        icon_position="right"
        icon="check"
        align="right"
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleDisabled = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-disabled">
      <Input
        disabled
        label="Disabled input:"
        placeholder="Disabled Input with a placeholder"
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleFormStatus = () => (
  <Wrapper>
    <ComponentBox>
      <FormRow bottom data-visual-test="input-error">
        <Input
          label="With FormStatus:"
          status="You have to fill in this field"
          value="Input value with error"
        />
      </FormRow>
      <FormRow data-visual-test="input-error-button">
        <Input
          label="With button:"
          status="You have to fill in this field"
          value="Input value with error"
          type="search"
        />
      </FormRow>
    </ComponentBox>
  </Wrapper>
)

export const InputExampleSuffix = () => (
  <Wrapper>
    <ComponentBox>
      <Input
        label={
          <Space element="span" className="dnb-h--large">
            Fødselsnummer
          </Space>
        }
        label_direction="vertical"
        autocomplete="on"
        placeholder="Placeholder text"
        suffix={
          <HelpButton title="Info" size="large">
            Some content
          </HelpButton>
        }
        on_change={({ value }) => {
          console.log('on_change', value)
        }}
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleStretched = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-stretch">
      <FormRow
        label="Long label labwl Adipiscing mauris dis proin nec:"
        vertical
      >
        <Input
          value="I stretch ..."
          stretch
          status="Status message"
          status_state="warn"
        />
      </FormRow>
    </ComponentBox>
  </Wrapper>
)

export const InputExampleNumbers = () => (
  <Wrapper>
    <ComponentBox>
      <Input
        label="Label:"
        autocomplete="on"
        placeholder="Placeholder text"
        status="Numbers are using DNB Mono (monospace)"
        status_state="info"
        value="1234567890"
        on_change={({ value }) => {
          console.log('on_change', value)
          return String(value).toUpperCase()
        }}
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleSubmit = () => (
  <Wrapper>
    <ComponentBox>
      <FormSet
        prevent_submit={true}
        on_submit={(event) => {
          console.log('FormRow.on_submit', event)
        }}
      >
        <FormRow>
          <Input
            type="search"
            label="Label:"
            value="Input ..."
            selectall={true}
            on_submit={(event) => {
              console.log('Input.on_submit', event)
            }}
            on_change={({ value }) => {
              console.log('on_change:', value)
            }}
            right="small"
            bottom="x-small"
          />
          <Button text="Submit" type="submit" />
        </FormRow>
      </FormSet>
    </ComponentBox>
  </Wrapper>
)

export const InputExamplePassword = () => (
  <Wrapper>
    <ComponentBox
      scope={{ InputPassword }}
      data-visual-test="input-password"
    >
      <InputPassword
        label="Label:"
        placeholder="A placeholder text"
        on_change={({ value }) => {
          console.log('on_change:', value)
        }}
        on_show_password={() => {
          console.log('on_show_password')
        }}
        on_hide_password={() => {
          console.log('on_hide_password')
        }}
      />
    </ComponentBox>
  </Wrapper>
)

export const InputExampleClear = () => (
  <Wrapper>
    <ComponentBox data-visual-test="input-clear">
      <FormRow direction="vertical">
        <Input clear={true} value="Value ..." size="medium" />
        <Input clear={true} value="Value ..." type="search" top />
        <Input
          clear={true}
          value="Value ..."
          icon="loupe"
          type="search"
          top
        />
      </FormRow>
    </ComponentBox>
  </Wrapper>
)

export const InputScreenshotTests = () => {
  return (
    <Wrapper>
      <ComponentBox data-visual-test="input-align">
        <FormRow label="Left aligned" vertical>
          <Input value="Plain" />
          <Input value="Search" type="search" />
          <Input value="Search" size="medium" type="search" />
          <Input value="Search" size="large" type="search" />
          <Input
            value="Value Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"
            icon="calendar"
          />
          <Input
            placeholder="Placeholder Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"
            icon_position="right"
            icon="calendar"
          />
          <Input size="medium" value="Value" icon="calendar" />
          <Input
            size="medium"
            placeholder="Placeholder"
            icon_position="right"
            icon="calendar"
          />
          <Input size="large" value="Value" icon="calendar" />
          <Input
            size="large"
            placeholder="Placeholder"
            icon_position="right"
            icon="calendar"
          />
        </FormRow>
        <FormRow label="Right aligned" vertical top>
          <Input value="Plain" align="right" />
          <Input value="Search" type="search" align="right" />
          <Input
            value="Search"
            size="medium"
            type="search"
            align="right"
          />
          <Input value="Search" size="large" type="search" align="right" />
          <Input
            value="Value Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"
            icon="calendar"
            align="right"
          />
          <Input
            placeholder="Placeholder Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"
            icon_position="right"
            icon="calendar"
            align="right"
          />
          <Input
            size="medium"
            value="Value"
            icon="calendar"
            align="right"
          />
          <Input
            size="medium"
            placeholder="Placeholder"
            icon_position="right"
            icon="calendar"
            align="right"
          />
          <Input
            size="large"
            value="Value"
            icon="calendar"
            align="right"
          />
          <Input
            size="large"
            placeholder="Placeholder"
            icon_position="right"
            icon="calendar"
            align="right"
          />
        </FormRow>
      </ComponentBox>
    </Wrapper>
  )
}
