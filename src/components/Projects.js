import styled from "styled-components";
import Project from "./Project";

const ProjectIntro = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  margin-bottom: 5em;

  > h2 {
    text-transform: uppercase;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  grid-template-areas:
    "a a . . ."
    ". . . b b"
    ". c c . .";
`;

const Projects = () => {
  return (
    <div>
      <ProjectIntro>
        <h2>Projects</h2>
        <p>
          Here are a few things I've worked on recently. For experiments and
          notes, you can read about them here.
        </p>
      </ProjectIntro>
      <ProjectList>
        <Project
          class="item1"
          title="IDAS Conference Website"
          desc="A remake of a website created for the 2018 IDAS Conference"
          thumbnail="http://placecorgi.com/450/500"
        />
        <Project
          class="item2"
          title="API project goes here"
          desc="Make a project that pulls data from an API"
          thumbnail="http://placecorgi.com/350"
        />
        <Project
          class="item3"
          title="Bookmark app?"
          desc="A bookmark app"
          thumbnail="http://placecorgi.com/450/500"
        />
      </ProjectList>
    </div>
  );
};

export default Projects;
