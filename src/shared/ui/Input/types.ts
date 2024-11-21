// TODO - add formatters for different input types
// type InputType = 'text' | 'date' | 'email' | 'number' | 'password' | 'search'
export type InputVariant = 'default' | 'secondary'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // type?: InputType
  variant?: InputVariant
  invalid?: boolean
  hovered?: boolean
  focused?: boolean
  fullWidth?: boolean
  width?: number | string
  before?: React.ReactNode
  after?: React.ReactNode
}

export interface PasswordInputProps extends Omit<InputProps, 'type' | 'after'> {
  visible?: boolean
  defaultVisible?: boolean
  onVisibleChange?: (v: boolean) => void
}
