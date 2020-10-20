import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styled/Themes'
import { GlobalStyles } from './styled/GlobalStyles'
import { Header } from './components/common/header'
import { MainContainer as Container } from './components/common/main-container'
import { Home } from './pages/home'
import { About } from './pages/about'

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
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
      <Router>
        <Header theme={theme} changeTheme={toggleTheme}></Header>
        <Container>
          <Main>
            <Switch>
              <Route path="/about" children={<About />} />
              <Route path="/" exact children={<Home />} />
            </Switch>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export { App }
