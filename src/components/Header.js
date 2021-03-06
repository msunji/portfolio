import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default Header;
