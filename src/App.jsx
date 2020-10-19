import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './assets/styled/Themes'
import { GlobalStyles } from './assets/styled/GlobalStyles'
import { Header } from './components/common/header'
import { ThemeMode } from './components/common/theme-mode'
import { Home } from './pages/home'

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const App = () => {
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
      <Header>
        <ThemeMode theme={theme} changeTheme={toggleTheme} />
      </Header>
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  )
}

export { App }
