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
  display: inline-flex;

  li {
    font-size: 1em;
    &:not(:last-of-type) {
      margin-right: 3em;
    }

    a {
      display: inline-flex;
      align-items: center;
    }
  }

  a,
  a:visited {
    text-decoration: none;
    border-bottom: none;
    transition: fill 0.5s ease;
  }

  a:hover,
  a:focus {
    font-weight: 700;
    color: var(--main-text-color);
  }

  .circle {
    transition: all 0.4s ease-in-out;
    margin-right: 10px;
    fill: var(--main-text-color);
    width: 1em;
    height: 1em;
  }

  li:hover {
    .circle {
      fill: var(--primary-red);
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
              <a href="/#about">
                <FaCircle className="circle" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/#projects">
                <FaCircle className="circle" />
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="https://notes.mconsunji.com">
                <FaCircle className="circle" />
                <span>Notes</span>
              </a>
            </li>
          </NavLinks>
        </NavContainer>
      </div>
    </>
  );
}

export default Header;
