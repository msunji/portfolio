import React from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";

// some styled components
const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  h1 {
    font-size: 4em;
    line-height: 1.2;
  }
`;

const Blobs = styled.div`
  position: relative;
  max-width: 1000px;
  z-index: -1000;

  & > #blob--pink {
    position: absolute;
    top: 40;
    left: 90;
    fill: var(--primary-pink);
    width: 60%;
    z-index: 1;
  }

  & > #blob--red {
    width: 70%;
    position: absolute;
    left: 50;
    fill: var(--primary-red);
  }
`;

const Underline = styled.span`
  border-bottom: 2px solid red;
`;

const Symbols = styled.span`
  color: red;
`;

function Intro() {
  return (
    <div className="intro">
      <IntroContainer>
        <Blobs>
          <svg
            id="blob--pink"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="blobFill"
              d="M43.4,-61.2C51,-54.2,48.4,-34.5,52.7,-17.9C57,-1.3,68.3,12.3,64.4,20C60.6,27.6,41.6,29.4,28.4,34.6C15.1,39.8,7.6,48.4,-3.6,53.4C-14.8,58.4,-29.7,59.8,-45,55.3C-60.4,50.8,-76.3,40.4,-81.2,26.2C-86.1,12,-80,-6,-73.9,-23.8C-67.8,-41.5,-61.7,-59,-49.4,-64.5C-37.1,-70,-18.5,-63.5,-0.3,-63.1C17.9,-62.6,35.8,-68.2,43.4,-61.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            id="blob--red"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="blobFill"
              d="M42.5,-64.9C56.9,-56.8,71.8,-48.2,78.1,-35.4C84.5,-22.6,82.2,-5.5,74.8,7.2C67.5,20,55,28.4,45.3,38.7C35.6,49,28.5,61,18.3,65.6C8,70.1,-5.4,67.1,-20.2,64.7C-34.9,62.2,-51,60.2,-62.3,51.5C-73.5,42.9,-79.9,27.7,-76.7,14.3C-73.5,1,-60.7,-10.4,-52.7,-22.5C-44.8,-34.6,-41.7,-47.3,-33.7,-58.4C-25.7,-69.5,-12.9,-78.9,0.6,-79.8C14,-80.7,28,-73.1,42.5,-64.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </Blobs>

        <h1>
          Hey! ✌🏻 I'm <Underline>Marge Consunji</Underline> <br />
          <Symbols>✹</Symbols> I'm a front-end developer <br /> based in Taipei
          🥟
        </h1>
      </IntroContainer>
      {/* <About /> */}
      {/* <Projects /> */}
    </div>
  );
}

export default Intro;
