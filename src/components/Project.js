import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProjectTile = styled.div`
  position: relative;
  margin-bottom: 5rem;
`;

const ProjectThumbnail = styled.picture``;

const ProjectInfo = styled.div`
  background: white;
  max-width: 600px;
  padding: 3rem;
  position: absolute;
  z-index: 1000;
  left: 30%;
  top: 30%;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p`
  margin-bottom: 0;
`;

function Project(props) {
  return (
    <ProjectTile className={props.class}>
      <ProjectThumbnail>
        <source srcset={props.thumbnail} />
        <img src={props.thumbnail} alt={`Preview for ${props.title} project`} />
      </ProjectThumbnail>
      <ProjectInfo>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectDescription>{props.desc}</ProjectDescription>
        <Button text="View Project" link="" />
      </ProjectInfo>
    </ProjectTile>
  );
}

export default Project;
