import styled from "styled-components";
import Project from "./Project";

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-template-rows: 400px 100px 300px;
  grid-template-areas:
    "a a b"
    "a a b";
`;

const Projects = () => {
  return (
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
      {/* <Project
        className="item3"
        title="Bookmark app?"
        desc="A bookmark app"
        thumbnail="http://placecorgi.com/450/500"
      /> */}
    </ProjectList>
  );
};

export default Projects;
