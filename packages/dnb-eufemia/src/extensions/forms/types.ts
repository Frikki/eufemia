import { JSONSchema7 } from 'json-schema'
import { SpacingProps } from '../../components/space/types'

interface IFormErrorOptions {
  validationRule?: string | string[]
}

/**
 * Standard error object for Eufemia Forms, extending the built-in error with additional information for data handling
 */
export class FormError extends Error {
  /**
   * What validation rule did the error occur based on? (i.e: minLength, required or maximum)
   */
  validationRule?: string | string[]

  constructor(message: string, options?: IFormErrorOptions) {
    super(message)

    if (options) {
      this.validationRule = options.validationRule
    }
  }
}

// Spacing

export const pickSpacingProps = <Props extends SpacingProps>(
  props: Props
): SpacingProps => {
  return {
    space: props?.space,
    top: props?.top,
    bottom: props?.bottom,
    left: props?.left,
    right: props?.right,
  }
}

export const omitSpacingProps = <Props extends SpacingProps>(
  props: Props
): Omit<Props, keyof SpacingProps> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { space, top, bottom, left, right, ...restProps } = props
  return restProps
}

// Data value

interface DefaultErrorMessages {
  required?: string
}

export interface DataValueReadProps<Value = unknown> {
  /** JSON Pointer for where the data for this field is located in the source dataset */
  path?: string
  /** JSON Pointer for where the data for this field is located in the source iterate loop element */
  elementPath?: string
  value?: Value
}

const dataValueReadProps = ['path', 'elementPath', 'value']

export function pickDataValueReadProps<Props extends DataValueReadProps>(
  props: Props
): DataValueReadProps {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(([key]) =>
      dataValueReadProps.includes(key)
    )
  )
}

export function omitDataValueReadProps<Props extends DataValueReadProps>(
  props: Props
): Omit<DataValueReadProps, keyof DataValueReadProps> {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(
      ([key]) => !dataValueReadProps.includes(key)
    )
  )
}

export interface DataValueWriteProps<
  Value = unknown,
  EmptyValue = undefined | string | number,
> {
  emptyValue?: EmptyValue
  onFocus?: (value: Value | EmptyValue) => void
  onBlur?: (value: Value | EmptyValue) => void
  onChange?: (value: Value | EmptyValue) => void
}

const dataValueWriteProps = ['emptyValue', 'onFocus', 'onBlur', 'onChange']

export function pickDataValueWriteProps<Props extends DataValueWriteProps>(
  props: Props
): DataValueWriteProps {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(([key]) =>
      dataValueWriteProps.includes(key)
    )
  )
}

export function omitDataValueWriteProps<Props extends DataValueWriteProps>(
  props: Props
): Omit<DataValueWriteProps, keyof DataValueWriteProps> {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(
      ([key]) => !dataValueWriteProps.includes(key)
    )
  )
}

export type DataValueReadWriteProps<
  Value = unknown,
  EmptyValue = undefined | string | number,
> = DataValueReadProps<Value> & DataValueWriteProps<Value, EmptyValue>

export function pickDataValueReadWriteProps<
  Props extends DataValueReadWriteProps,
>(props: Props): DataValueReadWriteProps {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(
      ([key]) =>
        dataValueReadProps.includes(key) ||
        dataValueWriteProps.includes(key)
    )
  )
}

export function omitDataValueReadWriteProps<
  Props extends DataValueReadWriteProps,
>(
  props: Props
): Omit<DataValueReadWriteProps, keyof DataValueReadWriteProps> {
  return Object.fromEntries(
    Object.entries(props ?? {}).filter(
      ([key]) =>
        !dataValueReadProps.includes(key) &&
        !dataValueWriteProps.includes(key)
    )
  )
}

export type ComponentProps = SpacingProps & {
  className?: string
}

export type DataValueReadComponentProps<Value = unknown> = ComponentProps &
  DataValueReadProps<Value>

export type DataValueReadWriteComponentProps<
  Value = unknown,
  EmptyValue = undefined | string | number,
> = ComponentProps &
  DataValueReadProps<Value> &
  DataValueWriteProps<Value, EmptyValue>

export interface FieldProps<
  Value = unknown,
  EmptyValue = undefined | string | number,
  ErrorMessages extends { required?: string } = DefaultErrorMessages,
> extends DataValueReadWriteComponentProps<Value, EmptyValue> {
  /** ID added to the actual field component, and linked to the label via for-attribute */
  id?: string
  layout?: 'horizontal' | 'vertical'
  /** Main label text */
  label?: string
  /** A more discreet text displayed beside the label (i.e for "(optional)") */
  labelDescription?: string
  /** Secondary information displayed at the end of the label line (i.e character counter) */
  labelSecondary?: string
  /** Text showing in place of the value if no value is given */
  placeholder?: string
  info?: Error | FormError | string
  warning?: Error | FormError | string
  error?: Error | FormError
  disabled?: boolean
  // Validation
  required?: boolean
  schema?: JSONSchema7
  validator?: (
    value: Value | EmptyValue
  ) => Error | undefined | Promise<Error | undefined>
  onBlurValidator?: (
    value: Value | EmptyValue
  ) => Error | undefined | Promise<Error | undefined>
  /**
   * Should error messages based on validation be shown initially (from given value-prop or source data)
   * before the user interacts with the field?
   * @default false
   * */
  validateInitially?: boolean
  /**
   * Should error messages be shown when touching (like focusing a field and blurring) without having changed
   * the value? So the user did not introduce a new error, but it was invalid based on validation initially.
   */
  validateUnchanged?: boolean
  /** Should validation be done while writing, not just when blurring the field? */
  continuousValidation?: boolean
  errorMessages?: ErrorMessages
  // Derivatives
  toInput?: (external: Value | undefined) => any
  fromInput?: (...args: any[]) => Value | undefined
}

export interface FieldHelpProps {
  help?: {
    title?: string
    contents?: string
  }
}

export interface ValueProps<Value>
  extends DataValueReadComponentProps<Value> {
  label?: string
  /** Should the component render if the value is empty? */
  showEmpty?: boolean
  /** Text showing in place of the value if no value is given. */
  placeholder?: string
  /** JSON Pointer for where the data for this field is located in the source iterate loop element */
  elementPath?: string
  /** For showing the value inline (not as a block element) */
  inline?: boolean
  // Derivatives
  /** Prepare value for display (regardless of source like props or data context) */
  prepare?: (external: Value | undefined) => string
}
