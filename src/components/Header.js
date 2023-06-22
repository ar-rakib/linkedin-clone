import styled from 'styled-components'

 import React from 'react'
 
 const Header = () => {
   return (
     <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src='/images/home-logo.svg' />
          </a>
        </Logo>
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
 `
 
 export default Header