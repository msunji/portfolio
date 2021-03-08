import React from "react";
import styled from "styled-components";

const ProjectTile = styled.div`
  position: relative;
`;

const ProjectInfo = styled.div`
  background: white;
  max-width: 600px;
  padding: 3rem;
  position: absolute;
  z-index: 1000;
  left: 30%;
  top: 30%;
`;

const ProjectTitle = styled.h2``;

function Project(props) {
  return (
    <ProjectTile>
      <img src={props.thumbnail} alt={`Preview for ${props.title} project`} />
      <ProjectInfo>
        <ProjectTitle>{props.title}</ProjectTitle>
        <p>{props.desc}</p>
      </ProjectInfo>
    </ProjectTile>
  );
}

export default Project;
