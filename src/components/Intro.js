import React from "react";
import Project from "./Project";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>Hello, I'm Marge</h1>
        <p>I'm a front-end web developer and hobby baker based in Taipei.</p>
      </div>

      <div className="project-list">
        <h2>Projects</h2>
        <Project
          title="IDAS Conference Website"
          desc="A remake of a website created for the 2018 IDAS Conference"
          thumbnail="http://placecorgi.com/250"
        />
        <Project
          title="API project goes here"
          desc="Make a project that pulls data from an API"
          thumbnail="http://placecorgi.com/250"
        />
        <Project
          title="Bookmark app?"
          desc="A bookmark app"
          thumbnail="http://placecorgi.com/250"
        />
      </div>
    </div>
  );
}

export default Intro;
