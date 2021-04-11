import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://twitter.com/SwapChurro">
        <i className="fab fa-twitter" style={{fontSize:'36px'}}></i>
      </StyledLink>
      <StyledLink target="_blank" href="https://churroswap.gitbook.io/churroswap/">
        <i className="fas fa-info-circle" style={{fontSize:'36px'}}></i>
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/churroswap">
        <i className="fab fa-telegram-plane" style={{fontSize:'36px'}}></i>
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  text-transform: lowercase;
  align-items: start;
  display: flex;
`

const StyledLink = styled.a`
  color: black;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
