import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;

    .grid-child {
      font-size: 0.9em;

      h4 {
        font-weight: 700;
        margin-bottom: 0;
      }
    }
  }
`;

const ProjectOverview = styled.section``;

const Notes = () => {
  return (
    <ProjectContainer>
      <div className="container">
        <h1>Notes</h1>
        <p>A personal journal/notebook for thoughts, processes, and ideas.</p>
        <div className="grid">
          <div className="grid-child">
            <h4>Updated</h4>
            <small>June 2021</small>
          </div>
          <div className="grid-child">
            <h4>Tech</h4>
            <small>Next.js, Contentful</small>
          </div>
          <div className="grid-child">
            <h4>View</h4>
            <small>
              <a href="https://github.com/msunji/notes">Code</a>
            </small>{" "}
            /{" "}
            <small>
              <a href="https://notes.mconsunji.com/">Live Site</a>
            </small>
          </div>
        </div>
      </div>
      <ProjectOverview>
        <div className="container">
          <h3>Overview</h3>
        </div>
      </ProjectOverview>
    </ProjectContainer>
  );
};

export default Notes;
