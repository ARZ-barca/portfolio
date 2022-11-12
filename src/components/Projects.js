import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import uniqid from "uniqid";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        title: "Etch-a-Sketch",
        description: (
          <p className="project-description">
            A browser version of{" "}
            <a
              href="https://en.wikipedia.org/wiki/Etch_A_Sketch"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Etch-A-Sketch
            </a>
            .
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/etch-a-sketch",
          demo: "https://arz-barca.github.io/etch-a-sketch/",
        },
        key: uniqid(),
      },
      {
        title: "Calculator",
        description: (
          <p className="project-description">
            A browser based calculator with keyboard support.
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/calculator",
          demo: "https://arz-barca.github.io/calculator/",
        },
        key: uniqid(),
      },
      {
        title: "Library",
        description: (
          <p className="project-description">
            A library app that uses browser storage api to store you books.
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/library",
          demo: "https://arz-barca.github.io/library/",
        },
        key: uniqid(),
      },
      {
        title: "Tic Tac Toe",
        description: (
          <p className="project-description">
            A tic-tac-toe game that can be played player vs player or player vs
            ai or ai vs ai. with 3 different ai.
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/tic-tac-toe",
          demo: "https://arz-barca.github.io/tic-tac-toe/",
        },
        key: uniqid(),
      },
      {
        title: "Todo App",
        description: (
          <p className="project-description">
            A todo app for the sake of tradition. ( I hate todo apps )
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/todolist",
          demo: "https://arz-barca.github.io/todolist/",
        },
        key: uniqid(),
      },
      {
        title: "Weather App",
        description: (
          <p className="project-description">
            A weather app that tells you different weather conditions of the day
            for any city using{" "}
            <a
              href="https://openweathermap.org/api"
              target={"_blank"}
              rel={"noreferrer"}
            >
              OpenWeather api
            </a>
            . you can search in any language.
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/weatherApp",
          demo: "https://arz-barca.github.io/weatherApp/",
        },
        key: uniqid(),
      },
      {
        title: "Battleship",
        description: (
          <p className="project-description">
            A browser based player vs ai{" "}
            <a
              href="https://en.wikipedia.org/wiki/Battleship_(game)"
              target={"_blank"}
              rel={"noreferrer"}
            >
              Battleship
            </a>{" "}
            game
          </p>
        ),
        links: {
          source: "https://github.com/ARZ-barca/battleShip",
          demo: "https://arz-barca.github.io/battleShip/",
        },
        key: uniqid(),
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
          key={project.key}
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
