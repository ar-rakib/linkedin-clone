import styled from 'styled-components'

import React from 'react'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src='/images/home-logo.svg' alt='logo' />
          </a>
        </Logo>
        <Search>
          <div>
            <input type='text' placeholder='search' />
          </div>
          <SearchIcon>
            <img src='/images/search-icon.svg' alt='' />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href=''>
                <img src='/images/nav-home.svg' alt='' />
              </a>
            </NavList>

          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}


const Container = styled.div`
 background-color:white;
 border-bottom: 1px solid rgba(0,0,0,0.08);
 left:0;
 z-index: 100;
 top: 0;
 padding: 0 24px;
 width: 100vw;
 position: fixed;
 `

const Content = styled.div`
 display: flex;
 align-items: center;
 margin: 0 auto;
 min-height: 100%;
 max-width: 1128px;
 `

const Logo = styled.span`
 margin-right: 8px;
 font-size: 0px;

 `
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`;

const Nav = styled.nav`
margin-left: auto;
display: block;
background-color: yellow;
@media (max-width: 768px){
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  width: 100%;
  /*background-color: aquamarine;
  max-width: 200px;

  left: 50%; 
    transform: translateX(-50%);

  border-radius: 5px;*/
}
`

const NavListWrap =styled.ul`
display: flex;
position: nowrap;
list-style-type:none;

`
const NavList = styled.li`
display: flex;
align-items: center;
a{
  align-items: center;
  background:transparent;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  min-height: 42px;
  min-width: 88px;
  position: relative;
  text-decoration: none;
}
`
export default Header