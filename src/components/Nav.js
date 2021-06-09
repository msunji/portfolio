import React from "react";
import { FaCircle } from "react-icons/fa";
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
  position: relative;
  z-index: 1;

  &:before {
    content: "\\3030";
    position: absolute;
    top: 20%;
    z-index: -2;
    transform: scale(4);
    color: orange;
  }

  & p {
    font-size: 0.9em;
    line-height: 1;
    margin-bottom: 0;
    padding-top: 0.05rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-of-type) {
      margin-right: 3em;
    }

    & svg {
      margin-right: 10px;
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
          <NavHome to="/">
            <p>Marge</p>
            <p>Consunji</p>
          </NavHome>

          <NavLinks>
            {/* <li>
          <a href="">Projects</a>
        </li> */}
            <li>
              <FaCircle />
              <a href="/about">About</a>
            </li>
            <li>
              <FaCircle />
              <a href="https://notes.mconsunji.com">Notes</a>
            </li>
          </NavLinks>
        </NavContainer>
      </div>
    </>
  );
}

export default Header;
