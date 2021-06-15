import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem 1rem 2rem;
  border: 2px solid var(--primary-blue);
  box-shadow: 5px 5px var(--primary-blue);
  background: linear-gradient(
    to left top,
    white 50%,
    var(--primary-yellow) 50%
  );
  background-size: 200% 200%;
  background-position: bottom right;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-position: top left;
  }

  a,
  a:visited {
    text-decoration: none;
    border-bottom: none;
    font-size: 1.3em;
  }
`;

function Button({ link, text }) {
  return (
    <StyledButton>
      <a href={link}>{text}</a>
    </StyledButton>
  );
}

export default Button;
