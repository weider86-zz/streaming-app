import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeMode } from '../theme-mode'
import { MainContainer as Container } from '../main-container'

const StyledHeader = styled.div`
  background-color: #ff008e;
  .content {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${({ theme }) => theme.textColor};
  }
  .logo {
    width: 200px;
  }
  .user {
    width: 200px;
    display: inline-flex;
    justify-content: flex-end;
  }
`

const Nav = styled.div`
  ul {
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0 8px;
  }
  a,
  a:hover,
  a:focus,
  a:visited {
    color: ${({ theme }) => theme.textColor};
  }
`

const Header = ({ theme, changeTheme, children }) => {
  return (
    <StyledHeader>
      <Container>
        <div className="content">
          <div className="logo">
            <h1>{'<streaming>'}</h1>
          </div>
          <div className="nav">
            <Nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </Nav>
          </div>
          <div className="user">
            <ThemeMode theme={theme} changeTheme={changeTheme} />
          </div>
        </div>
      </Container>
    </StyledHeader>
  )
}

export { Header }
