import React from 'react'
import { ThemeProvider } from 'styled-components'

const lightColor = '#E2E2E2'
const darkColor = '#363537'

const basicTheme = {
  fontFamily: `Segoe UI, Helvetica, Arial, sans-serif`,
  fontSize: '24px',
}

export const lightTheme = {
  ...basicTheme,
  bodyBg: lightColor,
  textColor: darkColor,
}

export const darkTheme = {
  ...basicTheme,
  bodyBg: darkColor,
  textColor: lightColor,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
