/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback } from 'react'
import ComponentBox from '../../../../shared/tags/ComponentBox'
import { Input, Slider } from '@dnb/eufemia/src'
import {
  Form,
  Layout,
  StepsLayout,
  Field,
  Value,
  Visibility,
  FieldBlock,
  useDataValue,
  DataContext,
} from '@dnb/eufemia/src/extensions/forms'

export const CreateBasicFieldComponent = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        Field,
        FieldBlock,
        useDataValue,
      }}
    >
      {() => {
        const MyCustomField = (props) => {
          const preparedProps = {
            ...props,
            validator: (value) => {
              return value === 'secret'
                ? new Error('Do not reveal the secret!')
                : undefined
            },
          }

          const {
            info,
            warning,
            error,
            value,
            handleChange,
            handleFocus,
            handleBlur,
          } = useDataValue(preparedProps)

          return (
            <FieldBlock
              label="What is the secret of the custom field?"
              info={info}
              warning={warning}
              error={error}
            >
              <Input
                value={value}
                on_change={({ value }) => handleChange(value)}
                on_focus={handleFocus}
                on_blur={handleBlur}
              />
            </FieldBlock>
          )
        }

        return (
          <MyCustomField
            value="Nothing to see here"
            onChange={(value) => console.log('onChange', value)}
          />
        )
      }}
    </ComponentBox>
  )
}

export const CreateComposedFieldComponent = () => {
  return (
    <ComponentBox
      scope={{
        DataContext,
        Layout,
        Field,
        FieldBlock,
        Slider,
        useDataValue,
        useCallback,
      }}
    >
      {() => {
        const MyComposedField = (props) => {
          const birthYear = useDataValue({
            path: '/birthYear',
          })

          const handleBirthYearChange = useCallback(
            (sliderData) => {
              birthYear.handleChange(sliderData.value)
            },
            [birthYear],
          )

          return (
            <FieldBlock label={props.label ?? 'Name and age'}>
              <Layout.Row>
                <Field.String
                  path="/firstName"
                  label="First name"
                  width="medium"
                  minLength={2}
                />
                <Field.String
                  path="/lastName"
                  label="Last name"
                  width="medium"
                  required
                />
                <Layout.FlexItem width="large">
                  <Slider
                    min={1900}
                    max={new Date().getFullYear()}
                    step={1}
                    label="Birth year"
                    label_direction="vertical"
                    // @ts-ignore
                    value={birthYear.value}
                    on_change={handleBirthYearChange}
                    on_drag_start={birthYear.handleFocus}
                    on_drag_end={birthYear.handleBlur}
                    status={birthYear.error?.message}
                    tooltip
                    alwaysShowTooltip
                  />
                </Layout.FlexItem>
              </Layout.Row>
            </FieldBlock>
          )
        }

        const data = {
          firstName: 'John',
          birthYear: 2000,
        }

        return (
          <DataContext.Provider
            data={data}
            onChange={(data) => console.log('onChange', data)}
          >
            <MyComposedField label="My custom label" />
          </DataContext.Provider>
        )
      }}
    </ComponentBox>
  )
}

export const BaseFieldComponents = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Layout.Card stack>
        <Field.String
          label="Text field"
          value="Lorem Ipsum"
          onChange={(value) => console.log('onChange', value)}
        />
        <Field.Number
          label="Number Field"
          value={789}
          onChange={(value) => console.log('onChange', value)}
        />
        <Field.Boolean
          label="Boolean Field"
          value={true}
          onChange={(value) => console.log('onChange', value)}
        />
      </Layout.Card>
    </ComponentBox>
  )
}

export const FeatureFields = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Layout.Card stack>
        <Field.String label="Fornavn" value="John" />
        <Field.String label="Etternavn" value="Smith" />
        <Field.NationalIdentityNumber value="20058512345" />
        <Field.Email value="john@smith.email" />
        <Field.PhoneNumber value="+47 98765432" />
      </Layout.Card>
    </ComponentBox>
  )
}

export const LayoutComponents = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Layout.Section>
        <Layout.MainHeading>Profile</Layout.MainHeading>

        <Layout.Card stack>
          <Layout.SubHeading>Name</Layout.SubHeading>

          <Field.String label="Fornavn" value="John" />
          <Field.String label="Etternavn" value="Smith" />
        </Layout.Card>

        <Layout.Card stack>
          <Layout.SubHeading>More information</Layout.SubHeading>

          <Field.NationalIdentityNumber value="20058512345" />
          <Field.Email value="john@smith.email" />
          <Field.PhoneNumber value="+47 98765432" />
        </Layout.Card>
      </Layout.Section>
    </ComponentBox>
  )
}

export const VisibilityBasedOnData = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Form.Handler
        data={{
          firstName: undefined,
          lastName: 'Smith',
          advanced: false,
          ssn: '123',
          email: '@smith.email',
          phone: '+47 98765432',
        }}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
      >
        <Layout.Section>
          <Layout.MainHeading>Profile</Layout.MainHeading>

          <Layout.Card stack>
            <Layout.SubHeading>Name</Layout.SubHeading>

            <Field.String path="/firstName" label="Fornavn" />
            <Field.String path="/lastName" label="Etternavn" />
          </Layout.Card>
        </Layout.Section>
        <Field.Boolean
          path="/advanced"
          variant="checkbox-button"
          label="More fields"
        />
        <Visibility pathTrue="/advanced">
          <Layout.Section>
            <Layout.Card stack>
              <Layout.SubHeading>More information</Layout.SubHeading>

              <Field.NationalIdentityNumber value="20058512345" />
              <Field.Email value="john@smith.email" />
              <Field.PhoneNumber value="+47 98765432" />
            </Layout.Card>
          </Layout.Section>
        </Visibility>
      </Form.Handler>
    </ComponentBox>
  )
}

export const UsingFormHandler = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Form.Handler
        data={{
          firstName: 'John',
          lastName: 'Smith',
          ssn: '20058512345',
          email: 'john@smith.email',
          phone: '+47 98765432',
        }}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
      >
        <Layout.MainHeading>Profile</Layout.MainHeading>

        <Layout.Card stack>
          <Field.String path="/firstName" label="Fornavn" />
          <Field.String path="/lastName" label="Etternavn" />
          <Field.NationalIdentityNumber path="/ssn" />
          <Field.Email path="/email" />
          <Field.PhoneNumber path="/phone" />

          <Layout.ButtonRow>
            <Form.SubmitButton />
          </Layout.ButtonRow>
        </Layout.Card>
      </Form.Handler>
    </ComponentBox>
  )
}

export const Validation = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Form.Handler
        data={{
          firstName: undefined,
          lastName: 'Smith',
          ssn: '123',
          email: '@smith.email',
          phone: '+47 98765432',
        }}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
      >
        <Layout.MainHeading>Profile</Layout.MainHeading>

        <Layout.Card stack>
          <Field.String path="/firstName" label="Fornavn" required />
          <Field.String path="/lastName" label="Etternavn" required />
          <Field.NationalIdentityNumber path="/ssn" validateInitially />
          <Field.Email path="/email" validateInitially />
          <Field.PhoneNumber path="/phone" validateInitially />
        </Layout.Card>
      </Form.Handler>
    </ComponentBox>
  )
}

export const WithSteps = () => {
  return (
    <ComponentBox
      scope={{
        Form,
        Layout,
        StepsLayout,
        Field,
        Value,
        Visibility,
      }}
    >
      <Form.Handler
        data={{
          firstName: undefined,
          lastName: 'Smith',
          advanced: false,
          ssn: '123',
          email: '@smith.email',
          phone: '+47 98765432',
        }}
        onChange={(data) => console.log('onChange', data)}
        onPathChange={(path, value) =>
          console.log('onPathChange', path, value)
        }
        onSubmit={(data) => console.log('onSubmit', data)}
      >
        <StepsLayout>
          <StepsLayout.Step title="Name">
            <Layout.MainHeading>Profile</Layout.MainHeading>

            <Layout.Card stack>
              <Layout.SubHeading>Name</Layout.SubHeading>

              <Field.String path="/firstName" label="Fornavn" required />
              <Field.String path="/lastName" label="Etternavn" required />
            </Layout.Card>

            <Layout.ButtonRow>
              <StepsLayout.NextButton />
            </Layout.ButtonRow>
          </StepsLayout.Step>

          <StepsLayout.Step title="More information">
            <Layout.MainHeading>Profile</Layout.MainHeading>

            <Layout.Card stack>
              <Layout.SubHeading>More information</Layout.SubHeading>

              <Field.NationalIdentityNumber path="/ssn" />
              <Field.Email path="/email" />
              <Field.PhoneNumber path="/phone" />
            </Layout.Card>

            <Layout.ButtonRow>
              <StepsLayout.PreviousButton />
              <StepsLayout.NextButton />
            </Layout.ButtonRow>
          </StepsLayout.Step>

          <StepsLayout.Step title="Summary">
            <Layout.MainHeading>Profile</Layout.MainHeading>

            <Layout.Card stack>
              <Layout.FlexContainer direction="row">
                <Value.String path="/firstName" label="Fornavn" />
                <Value.String path="/lastName" label="Etternavn" />
              </Layout.FlexContainer>

              <Value.NationalIdentityNumber path="/ssn" />
              <Value.Email path="/email" />
              <Value.PhoneNumber path="/phone" />
            </Layout.Card>

            <Layout.ButtonRow>
              <StepsLayout.PreviousButton />
              <Form.SubmitButton />
            </Layout.ButtonRow>
          </StepsLayout.Step>
        </StepsLayout>
      </Form.Handler>
    </ComponentBox>
  )
}
