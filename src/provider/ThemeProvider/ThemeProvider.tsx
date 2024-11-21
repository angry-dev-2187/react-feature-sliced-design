import { useTheme as useNextTheme, ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import { PropsWithChildren, useEffect } from 'react'
import { Theme } from '../../types/types'

export const userThemeToNextThemeMap = {
  [Theme.DARK]: 'dark',
  [Theme.LIGHT]: 'light',
}

export const nextThemeToUserThemeMap = {
  dark: Theme.DARK,
  light: Theme.LIGHT,
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemeProvider disableTransitionOnChange enableSystem={false} defaultTheme="dark">
      {children}
    </NextThemeProvider>
  )
}
