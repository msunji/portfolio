import styled from "styled-components";

const AboutContainer = styled.div`
  margin-bottom: 10em;

  & > p:last-of-type {
    margin-bottom: 5em;
  }
`;

function About() {
  return (
    <AboutContainer>
      <p>
        My friends call me Marge. I come from an economic research background,
        but I've always had a knack for making things both physical and digital.
        Baking, arts and crafts, pottery, and graphic design, I've done it all.
      </p>
      <p>
        Previously, I was working with <b>Python</b> for data visualisation and
        cleaning datasets. These days, I've been working on brushing up on my{" "}
        <b>React</b> and <b>Node.js</b> skills.
      </p>

      <p>
        When I'm not working on web dev-related things, I'm either running,
        baking bread, playing videogames, or learning foreign languages.
      </p>

      <a className="boxLink" href="/">
        View my CV
      </a>
    </AboutContainer>
  );
}

export default About;
