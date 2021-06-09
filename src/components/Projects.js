import styled from "styled-components";
import Project from "./Project";

const ProjectIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2);
  margin-bottom: 5em;

  > h2 {
    text-transform: uppercase;
  }

  > div {
    position: relative;

    & > #blob--yellow {
      position: absolute;
      fill: var(--primary-yellow);
      top: -200px;
      left: -100px;
      z-index: -1000;
    }
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
    <>
      <ProjectIntro className="container">
        <h3>Projects</h3>
        <div>
          <svg
            id="blob--yellow"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.5,-48.1C42.8,-43.5,43.5,-28.9,43.8,-16.8C44.2,-4.8,44.2,4.8,39.9,11.4C35.7,18.1,27.1,21.7,19.7,23.7C12.3,25.6,6.2,25.8,-3.1,30.1C-12.4,34.4,-24.8,42.8,-39.8,43.3C-54.8,43.8,-72.5,36.6,-82,23C-91.4,9.3,-92.7,-10.6,-86.6,-27.7C-80.5,-44.8,-66.9,-59.2,-51.2,-61C-35.6,-62.8,-17.8,-52.2,-1.9,-49.7C14.1,-47.1,28.1,-52.6,35.5,-48.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <p>
            Here are a few things I've worked on recently. For experiments and
            notes, you can read about them here.
          </p>
        </div>
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
    </>
  );
};

export default Projects;
