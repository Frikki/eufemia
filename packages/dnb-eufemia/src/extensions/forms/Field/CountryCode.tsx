import React, { useContext, useCallback, useMemo } from 'react'
import { Autocomplete, HelpButton } from '../../../components'
import classnames from 'classnames'
import countries from '../constants/countries'
import { useDataValue } from '../hooks'
import {
  FormError,
  FieldProps,
  FieldHelpProps,
  pickSpacingProps,
} from '../types'
import SharedContext from '../../../shared/Context'

export type Props = FieldHelpProps &
  FieldProps<string> & {
    width?: false | 'small' | 'medium' | 'large' | 'stretch'
  }

function CountryCode(props: Props) {
  const sharedContext = useContext(SharedContext)
  const {
    className,
    layout = 'vertical',
    placeholder,
    label = sharedContext?.translation.Forms.countryCodeLabel,
    value,
    emptyValue,
    info,
    warning,
    error,
    disabled,
    help,
    width,
    handleFocus,
    handleBlur,
    handleChange,
  } = useDataValue(props)

  const autocompleteData = useMemo(
    () =>
      countries.map((country) => ({
        selected_key: `+${country.code}`,
        selected_value: `${country.iso} (+${country.code})`,
        content: `+${country.code} ${country.name}`,
      })),
    []
  )

  const forwardHandleChange = useCallback(
    ({ data: changedData }: { data: { selected_key: string } }) => {
      if (!changedData || !changedData.selected_key.trim()) {
        handleChange?.(emptyValue)
        return
      }

      handleChange?.(changedData?.selected_key)
    },
    [emptyValue, handleChange]
  )

  const valueIndex = autocompleteData.findIndex(
    (item) => item.selected_key === value
  )

  return (
    <Autocomplete
      className={classnames(
        'dnb-forms-field-country-code',
        width !== undefined &&
          `dnb-forms-field-country-code--width-${width}`,
        className
      )}
      placeholder={placeholder ?? ' '}
      label_direction={layout}
      label={label}
      data={autocompleteData}
      value={valueIndex}
      disabled={disabled}
      on_focus={handleFocus}
      on_blur={handleBlur}
      on_change={forwardHandleChange}
      status={
        error?.message ??
        ((warning instanceof Error && warning.message) ||
          (warning instanceof FormError && warning.message) ||
          warning?.toString() ||
          (info instanceof Error && info.message) ||
          (info instanceof FormError && info.message) ||
          info?.toString())
      }
      suffix={
        help ? (
          <HelpButton title={help.title}>{help.contents}</HelpButton>
        ) : undefined
      }
      independent_width
      search_numbers
      {...pickSpacingProps(props)}
      stretch={width === 'stretch'}
    />
  )
}

CountryCode._supportsEufemiaSpacingProps = true
export default CountryCode
