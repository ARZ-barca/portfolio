import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";
import uniqid from "uniqid";

function Projects() {
  const projects = [
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
      title: "Tic Tac Toe",
      description: (
        <p className="project-description">
          A tic-tac-toe game that can be played player vs player or player vs ai
          or ai vs ai. with 3 different ai.
        </p>
      ),
      links: {
        source: "https://github.com/ARZ-barca/tic-tac-toe",
        demo: "https://arz-barca.github.io/tic-tac-toe/",
      },
      key: uniqid(),
    },
    {
      title: "Memory card",
      description: (
        <p className="project-description">
          A memory game based on digimon series.
        </p>
      ),
      links: {
        source: "https://github.com/ARZ-barca/memory-card",
        demo: "https://arz-barca.github.io/memory-card/",
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
  ];
  const projectCards = projects.map((project) => {
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
    <div className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-cards">{projectCards}</div>
    </div>
  );
}

export default Projects;
