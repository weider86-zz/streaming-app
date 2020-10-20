import React from 'react'
import styled from 'styled-components'
import { ThemeMode } from '../theme-mode'
import { MainContainer as Container } from '../main-container'
import { Navigation } from '../navigation'

const StyledHeader = styled.div`
  background: ${({ theme }) => theme.brandColor};
  .content {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${({ theme }) => theme.textColor};
  }
  .logo-container {
    width: 200px;
  }
  .user-container {
    width: 200px;
    display: inline-flex;
    justify-content: flex-end;
  }
`

const Header = ({ theme, changeTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <div className="content">
          <div className="logo-container">
            <h1>{'<streaming>'}</h1>
          </div>
          <div className="nav-container">
            <Navigation />
          </div>
          <div className="user-container">
            <ThemeMode theme={theme} changeTheme={changeTheme} />
          </div>
        </div>
      </Container>
    </StyledHeader>
  )
}

export { Header }
