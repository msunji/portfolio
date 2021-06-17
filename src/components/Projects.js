import styled from "styled-components";
import { ProjectInfo } from "../assets/data/ProjectInfo.js";
import Project from "./Project";

const ProjSection = styled.section``;

const ProjList = styled.section`
  display: grid;
`;

const Projects = () => {
  console.log(ProjectInfo);
  return (
    <ProjSection id="projects">
      <div className="container">
        <div>
          <h3>Projects</h3>
          <p>Here are a few things I've worked on.</p>
        </div>
        <ProjList>
          {ProjectInfo.map(({ id, title, desc, thumb }) => (
            <Project key={id} title={title} desc={desc} thumbnail={thumb} />
          ))}
        </ProjList>
      </div>
    </ProjSection>
  );
};

export default Projects;
