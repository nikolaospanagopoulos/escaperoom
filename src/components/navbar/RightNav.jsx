import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Ul=styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&display=swap');
list-style: none;
color: white;
display: flex;
flex-flow: row nowrap;
font-family: 'Big Shoulders Stencil Text', cursive;

flex-flow: column nowrap;
background: rgba(0,0,0,0.9);
position: fixed;
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
top: 0;
right: 0;
height: 100vh;
width: 20%;
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
border-left: 2px solid red;

z-index:50;
li {
  color: #fff;
  cursor:pointer;
  font-size: 1.5rem;
  letter-spacing:0.1rem

}

li {
  padding: 18px 10px;
  letter-spacing:0.1rem
  
}

.icon{
    font-size:4.5rem;
    color:#66ffd9;
    position:relative;
    top:27rem;
    left:2rem;
    cursor:pointer;
}

@media(max-width:768px){

    width:50vw;
  
}
`


const RightNav=({open})=>{
    return(
        <Ul open={open}>
        <li>HOME</li>
        <li>WE OFFER</li>
        <li>NETWORK</li>
        <li>CHALLENGES</li>
        
 <FontAwesomeIcon icon={faGlobe} className="icon" />
    </Ul>
    )
}

export default RightNav