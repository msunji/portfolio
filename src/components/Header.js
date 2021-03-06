import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <p>MCONSUNJI</p>
      </Link>

      <NavLinks>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <p>Light/Dark Mode</p>
        </li>
      </NavLinks>
    </NavContainer>
  );
}

export default Header;
