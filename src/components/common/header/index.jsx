import React, { children } from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #ff008e;
  color: #000;
`

const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <div>
        <h1>Streaming</h1>
      </div>
      {children}
    </HeaderStyled>
  )
}

export { Header }
