import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styled/Themes'
import { GlobalStyles } from './Styled/GlobalStyles'

const ButtonStyled = styled.button`
  outline: none;
  background-color: ${({ theme }) => theme.textColor};
  border: ${({ theme }) => theme.bodyBg};
  color: ${({ theme }) => theme.bodyBg};
  padding: ${(props) => (props.primary ? '12px' : '24px')};
  margin-right: 12px;
`

const borderRed = '5px solid red'

const Card = styled.div`
  max-width: 350px;
  border: ${borderRed};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
`

export const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ButtonStyled onClick={toggleTheme}>Toggle theme1</ButtonStyled>
      <ButtonStyled primary onClick={toggleTheme}>
        Toggle theme2
      </ButtonStyled>
      <Card>
        <h1>{`It's a ${theme === 'light' ? 'light' : 'dark'} theme!`}</h1>
      </Card>
    </ThemeProvider>
  )
}
