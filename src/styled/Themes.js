import React from 'react'
import { ThemeProvider } from 'styled-components'
import variables from './Andes/_variables.scss'

const lightColor = variables.andesGray70
const darkColor = variables.andesGray800
const whiteColor = variables.andesWhite
const blackColor = variables.andesBlack
const pink = '#ff008e'

const basicTheme = {
  fontFamily: variables.fontFamily,
  fontSize: variables.fontSizeBase,
  brandColor: pink,
}

export const lightTheme = {
  ...basicTheme,
  bodyBg: lightColor,
  textColor: blackColor,
  hardColor: whiteColor,
}

export const darkTheme = {
  ...basicTheme,
  bodyBg: darkColor,
  textColor: whiteColor,
  hardColor: blackColor,
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
