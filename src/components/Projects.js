import styled from "styled-components";
import { ProjectInfo } from "../assets/data/ProjectInfo.js";
import Project from "./Project";

const ProjectList = styled.section`
  > h2 {
    text-transform: uppercase;
  }

  > div {
    position: relative;
  }
`;

const Projects = () => {
  console.log(ProjectInfo);
  return (
    <ProjectList id="projects">
      <div className="container projects__text">
        <h3>Projects</h3>

        <p>
          Here are a few things I've worked on recently. For experiments and
          notes, you can read about them here.
        </p>
      </div>
      <ProjectList className="container">
        {ProjectInfo.map(({ id, title, desc, thumb }) => (
          <Project key={id} title={title} desc={desc} thumbnail={thumb} />
        ))}
      </ProjectList>
    </ProjectList>
  );
};

export default Projects;
