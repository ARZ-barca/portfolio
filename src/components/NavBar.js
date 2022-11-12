import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="nav">
      <div
        className={"" + props.currentSection === "aboutMe" ? "selected" : ""}
        onClick={props.aboutMe}
      >
        About me
      </div>
      <div
        className={"" + props.currentSection === "projects" ? "selected" : ""}
        onClick={props.projects}
      >
        Projects
      </div>
      <div
        className={"" + props.currentSection === "contact" ? "selected" : ""}
        onClick={props.contact}
      >
        Contact info
      </div>
      <a
        href="https://github.com/ARZ-barca"
        target={"_blank"}
        rel={"noreferrer"}
      >
        GitHub
      </a>
    </nav>
  );
}

export default NavBar;
