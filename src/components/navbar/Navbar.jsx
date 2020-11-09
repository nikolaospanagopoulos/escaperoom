import React from 'react';

import styled from 'styled-components'

import Burger from './HumbergerIcon'
const Nav = styled.nav`
width: 100%;
height: 55px;
border-bottom: 2px solid #f1f1f1;
padding: 0 30px;
display: flex;
justify-content: space-between;
z-index:98;
.logo {
  padding: 15px 0;
}
`
const Navbar =()=>{
    return(
        <Nav>
        <div className="logo" >
        </div>
        <Burger/>
        </Nav>
    )
}

export default Navbar