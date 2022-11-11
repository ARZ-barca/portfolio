import React from "react";
import "./Header.css";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className={props.theme}>
      <h1 className="intro ">
        Hello World, my name is <span className="name">alireza</span>{" "}
        <span className="and">&&</span> welcome to my website
      </h1>
      <NavBar
        currentSection={props.currentSection}
        projects={props.projects}
        aboutMe={props.aboutMe}
      />
    </header>
  );
}

export default Header;
