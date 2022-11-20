import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header>
      <div className="hero">
        <h1 className="intro">
          Hello World, my name is <span className="name">alireza</span>{" "}
          <span className="and">&&</span> welcome to my website
        </h1>
      </div>
      <NavBar
        currentSection={props.currentSection}
        projects={props.projects}
        aboutMe={props.aboutMe}
        contact={props.contact}
      />
    </header>
  );
}

export default Header;
