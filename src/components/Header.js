import React from "react";
import "./styles/Header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className="hero">
        <h1 className="intro">
          Hello World, my name is <span className="name">alireza</span>{" "}
          <span className="and">&&</span> welcome to my website
        </h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
