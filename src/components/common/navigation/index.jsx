import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
      </ul>
    </Nav>
  )
}

export { Navigation }
