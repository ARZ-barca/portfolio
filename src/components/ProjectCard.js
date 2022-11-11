import React from "react";
import ProjectLinks from "./ProjectLinks";
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3 className="project-heading">{props.title}</h3>
      {props.description}
      <ProjectLinks links={props.links} />
    </div>
  );
}

export default ProjectCard;
