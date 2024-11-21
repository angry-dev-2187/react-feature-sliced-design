export type TextVariant = 'default' | 'secondary' | 'accent' | 'highlight' | 'success' | 'warning' | 'error'

export type TextType =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-xl'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption'

export type TextFontWeight = 'regular' | 'semibold' | 'bold'
export type TextFontStyle = 'normal' | 'italic'
export type TextAlign = 'start' | 'center' | 'end'
export type TextLineHeight = 'sm' | 'md' | 'lg'
export type TextDecoration = 'underline' | 'line-through' | 'none'
export type TextOverflow = 'clip' | 'ellipsis'
export type TextWhiteSpace = 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'

export type PreferType<BaseType, MainType, PreferedType> = PreferedType extends undefined
  ? MainType
  : Prefer<BaseType & PreferedType, React.HTMLAttributes<HTMLElement>>
