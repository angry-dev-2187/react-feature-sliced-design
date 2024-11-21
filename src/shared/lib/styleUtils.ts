import { CSSProperties } from 'react'

export function insertStyles(values: Record<string, string | undefined>) {
  return Object.entries(values).reduce<Record<string, string>>((acc, [key, val]) => {
    return val == null ? acc : { ...acc, [key]: val }
  }, {})
}

export function formatSizing(value?: string | number): string | undefined {
  return (
    (typeof value === 'number' && (value <= 0 || value > 1) && `${value}px`) ||
    (typeof value === 'number' && value < 1 && `${value * 100}%`) ||
    (value as string | undefined)
  )
}

/**
 * Assign css properties to html element
 */
export function css(element: HTMLElement, styles: CSSProperties) {
  if (element) {
    Object.keys(styles).forEach((property) => {
      // eslint-disable-next-line no-param-reassign
      element.style[property] = styles[property]
    })
  }
}
