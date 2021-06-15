import React from "react";
import styled from "styled-components";
import Button from "./Button";

const AboutContainer = styled.section`
  background: #ffba00;
  position: relative;
  // z-index: -1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 6rem;
  position: relative;
  z-index: 10;
`;

function About() {
  return (
    <AboutContainer id="about">
      <Grid className="container">
        <div>
          <h3>
            About
            <br /> Me
          </h3>
        </div>
        <div>
          <p>
            My name is Marge (short for Margaret). I come from an economic
            research background, but I've always had a knack for making things
            both physical and digital. Baking, arts and crafts, pottery, and
            graphic design, I've done it all.
          </p>
          <p>
            Previously, I was working with <b>Python</b> for data visualisation
            and cleaning datasets. These days, I've been working on brushing up
            on my <b>React</b> and <b>Node.js</b> skills.
          </p>

          <p>
            When I'm not working on web dev-related things, I'm either running,
            baking bread, playing videogames, or learning foreign languages.
          </p>

          <Button text="View my CV" link="" />
        </div>
      </Grid>
    </AboutContainer>
  );
}

export default About;
