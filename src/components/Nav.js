import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  text-transform: uppercase;
  padding-top: 3rem;
`;

const NavHome = styled(Link)`
  border-bottom: none;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <NavHome to="/">MCONSUNJI</NavHome>

      <NavLinks>
        <li>
          <a href="">01. Works</a>
        </li>
        <li>
          <a href="">02. About</a>
        </li>
        <li>
          <a href="">03. Notes</a>
        </li>
      </NavLinks>
    </NavContainer>
  );
}

export default Header;
