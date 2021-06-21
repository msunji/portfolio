import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProjectTile = styled.div`
  position: relative;
  margin-bottom: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  border: 3px solid #2e60a4;
  box-shadow: 10px 10px #2e60a4;
`;

const ProjectTitle = styled.h3``;

const ProjectDescription = styled.p`
  font-size: 1.3em;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

function Project({ title, desc, thumbnail, link }) {
  return (
    <ProjectTile>
      <ProjectThumbnail>
        {/* <source srcSet={props.thumbnail} /> */}
        <img src={thumbnail} alt={`Preview for ${title} project`} />
      </ProjectThumbnail>
      <ProjectInfo>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{desc}</ProjectDescription>
        <Button text="View Project" link={link} />
      </ProjectInfo>
    </ProjectTile>
  );
}

export default Project;
