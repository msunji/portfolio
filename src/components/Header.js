import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
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
          <p>Light/Dark Mode</p>
        </li>
      </NavLinks>
    </NavContainer>
  );
}

export default Header;
