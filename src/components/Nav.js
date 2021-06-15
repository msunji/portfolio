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
  color: #0d443d;

  &:before {
    content: "\\3030";
    position: absolute;
    top: 20%;
    z-index: -2;
    transform: scale(4);
    color: orange;
  }

  & p {
    font-size: 1em;
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
    transition: all 0.5s ease;
  }

  a:hover,
  a:focus {
    color: blue;
    text-decoration: underline;
  }

  .circle {
    height: 1em;
    fill: #0D443D;
  }

  .circle:

  li:hover {
    .circle {
      animation: fill-circle 0.4s linear;
    }
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
            <li>
              <FaCircle className="circle" />
              <a href="/#about">About</a>
            </li>
            <li>
              <FaCircle className="circle" />
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <FaCircle className="circle" />
              <a href="https://notes.mconsunji.com">Notes</a>
            </li>
          </NavLinks>
        </NavContainer>
      </div>
    </>
  );
}

export default Header;
