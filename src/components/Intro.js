import React from "react";
import styled from "styled-components";
import Project from "./Project";

// some styled components
const IntroText = styled.div`
  text-align: left;
  max-width: 700px;
  padding-top: 20em;
  margin-bottom: 6rem;
`;

const IntroHeader = styled.h1`
  font-size: 4rem;
`;

const IntroSubtitle = styled.p`
  font-size: 2.2rem;
  line-height: 2.6rem;
`;

const IntroName = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    background: #d78a8a;
    top: 40%;
    height: 40%;
    width: 100%;
    z-index: -1;
    right: 0;
  }
`;

function Intro() {
  return (
    <div className="intro">
      <IntroText>
        <IntroHeader>
          Hello, I'm <IntroName>Marge</IntroName>
        </IntroHeader>
        <IntroSubtitle>
          I'm a front-end web developer and hobby baker based in Taipei. I keep
          track of notes and things here.
        </IntroSubtitle>
      </IntroText>

      <div className="project-list">
        <h2>Projects</h2>
        <Project
          title="IDAS Conference Website"
          desc="A remake of a website created for the 2018 IDAS Conference"
          thumbnail="http://placecorgi.com/250"
        />
        <Project
          title="API project goes here"
          desc="Make a project that pulls data from an API"
          thumbnail="http://placecorgi.com/250"
        />
        <Project
          title="Bookmark app?"
          desc="A bookmark app"
          thumbnail="http://placecorgi.com/250"
        />
      </div>
    </div>
  );
}

export default Intro;
