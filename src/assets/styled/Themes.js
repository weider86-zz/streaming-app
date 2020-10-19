import React from 'react'
import { ThemeProvider } from 'styled-components'
import variables from './Andes/_variables.scss'

const lightColor = variables.andesGray70
const darkColor = variables.andesGray800
const whiteColor = variables.andesWhite

const basicTheme = {
  fontFamily: variables.fontFamily,
  fontSize: variables.fontSizeBase,
}

export const lightTheme = {
  ...basicTheme,
  bodyBg: lightColor,
  textColor: darkColor,
}

export const darkTheme = {
  ...basicTheme,
  bodyBg: darkColor,
  textColor: whiteColor,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
