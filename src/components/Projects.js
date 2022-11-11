import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        title: "Etch-a-Sketch",
        description: (
          <p className="project-description">
            a browser version of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Etch_A_Sketch"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Etch-A-Sketch
            </a>
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/etch-a-sketch",
          demo: "https://arz-barca.github.io/etch-a-sketch/",
        },
      },
    ];
  }
  render() {
    const projects = this.projects.map((project) => {
      return (
        <ProjectCard
          title={project.title}
          description={project.description}
          links={project.links}
        />
      );
    });
    return (
      <div>
        <h2 className="projects-heading">Projects</h2>
        <div className="projects">{projects}</div>
      </div>
    );
  }
}

export default Projects;
