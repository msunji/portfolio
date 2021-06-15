import React from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";

// some styled components
const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  height: 60vh;
  h1 {
    font-size: 4em;
    line-height: 1.2;
  }

  position: relative;
  z-index: 10;
`;

const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: #ffba00;
`;

const Symbols = styled.span`
  color: red;
`;

function Intro() {
  return (
    <div className="intro">
      <IntroContainer className="container">
        <h1>
          Hey! ✌🏻 <br />
          I'm <Underline>Marge Consunji</Underline> <br />
          <Symbols>✹</Symbols> I'm a front-end developer <br /> based in Taipei
          🥟
        </h1>
      </IntroContainer>

      <About />
      <Projects />
    </div>
  );
}

export default Intro;
