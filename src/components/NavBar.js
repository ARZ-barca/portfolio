import React from "react";
import "./styles/NavBar.css";
import externallinkSVG from "../images/external-link.svg";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="nav">
      <NavLink to="/">About me</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact info</NavLink>
      <a
        href="https://github.com/ARZ-barca"
        target={"_blank"}
        rel={"noreferrer"}
        className="github-link"
      >
        <span>GitHub</span>
        <img src={externallinkSVG} alt="link out"></img>
      </a>
    </nav>
  );
}

export default NavBar;
