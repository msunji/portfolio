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

const HandWave = styled.span`
  animation: wave 2s infinite;
  display: inline-block;

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-14deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-14deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

function Intro() {
  return (
    <div className="intro">
      <svg
        class="blob--blue"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.5,-48.1C42.8,-43.5,43.5,-28.9,43.8,-16.8C44.2,-4.8,44.2,4.8,39.9,11.4C35.7,18.1,27.1,21.7,19.7,23.7C12.3,25.6,6.2,25.8,-3.1,30.1C-12.4,34.4,-24.8,42.8,-39.8,43.3C-54.8,43.8,-72.5,36.6,-82,23C-91.4,9.3,-92.7,-10.6,-86.6,-27.7C-80.5,-44.8,-66.9,-59.2,-51.2,-61C-35.6,-62.8,-17.8,-52.2,-1.9,-49.7C14.1,-47.1,28.1,-52.6,35.5,-48.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <IntroContainer className="container">
        <h1>
          Hey! <HandWave>✌🏻</HandWave> <br />
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
