import React from "react";
import styled from "styled-components";
import Projects from "./Projects";

// some styled components
const IntroContainer = styled.div``;
const IntroText = styled.div`
  text-align: left;
  max-width: 700px;
  padding-top: 20em;
  margin-bottom: 12rem;
`;

const IntroHeader = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

const IntroSubtitle = styled.p`
  font-size: 2.2rem;
  line-height: 2.6rem;
  transition: all 0.5s linear;
`;

// const IntroName = styled.span`
//   position: relative;
//   display: inline-block;

//   &::after {
//     content: "";
//     position: absolute;
//     background: #d78a8a;
//     top: 40%;
//     height: 40%;
//     width: 100%;
//     z-index: -1;
//     right: 0;
//   }
// `;

function Intro() {
  return (
    <div className="intro">
      <IntroContainer>
        <svg
          id="intro__blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="blobGradient" gradientTransform="rotate(120)">
            <stop class="blobGrad1" offset="0%" />
            <stop class="blobGrad2" offset="70%" />
          </linearGradient>
          <path
            id="blobFill"
            d="M43.4,-61.2C51,-54.2,48.4,-34.5,52.7,-17.9C57,-1.3,68.3,12.3,64.4,20C60.6,27.6,41.6,29.4,28.4,34.6C15.1,39.8,7.6,48.4,-3.6,53.4C-14.8,58.4,-29.7,59.8,-45,55.3C-60.4,50.8,-76.3,40.4,-81.2,26.2C-86.1,12,-80,-6,-73.9,-23.8C-67.8,-41.5,-61.7,-59,-49.4,-64.5C-37.1,-70,-18.5,-63.5,-0.3,-63.1C17.9,-62.6,35.8,-68.2,43.4,-61.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <IntroText>
          <IntroHeader>Hey! I'm Marge </IntroHeader>
          <IntroSubtitle>
            I'm a front-end web developer and hobby baker based in Taipei.
          </IntroSubtitle>
        </IntroText>
      </IntroContainer>
      <Projects />
    </div>
  );
}

export default Intro;
