import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Styled/Themes'
import { GlobalStyles } from './Styled/GlobalStyles'

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
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <button onClick={toggleTheme}>Toggle theme</button>
          <h1>{`It's a ${theme === 'light' ? 'light' : 'dark'} theme!`}</h1>
          <footer></footer>
        </>
      </ThemeProvider>
    </>
  )
}
