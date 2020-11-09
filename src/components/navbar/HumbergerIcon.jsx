import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

// USING STYLED COMPONENTS LIBRARY

const StyledBurger = styled.div`


cursor:pointer;

  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  display: none;
   display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index:99;

@media(max-width:768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
}




  div {
    width: 2rem;

    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index:99;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      z-index:99;
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      z-index:99;
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      z-index:99;
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />

        <div />

        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
