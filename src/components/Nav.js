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

  li {
    display: flex;
    flex-direction: row;

    &:not(:last-of-type) {
      margin-right: 3em;
    }
  }

  a,
  a:visited {
    text-decoration: none;
    border-bottom: none;
  }
`;

function Header() {
  return (
    <>
      <div className="container">
        <NavContainer>
          <NavHome to="/">MCONSUNJI</NavHome>

          <NavLinks>
            {/* <li>
          <a href="">Projects</a>
        </li> */}
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="https://notes.mconsunji.com">Notes</a>
            </li>
          </NavLinks>
        </NavContainer>
      </div>
    </>
  );
}

export default Header;
