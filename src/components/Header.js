import React from "react";
import "./styles/Header.css";
import NavBar from "./NavBar";
import Typist from "react-typist-component";

function Header(props) {
  return (
    <header>
      <div className="hero">
        <Typist typingDelay={75} cursor={<span className="cursor">|</span>}>
          <h1 className="intro">
            Hello World, my name is <span className="name">alireza</span>
            <Typist.Delay ms={1000} /> & welcome <Typist.Delay ms={1000} />
            <Typist.Backspace count={10} />
            <span className="and">&&</span> welcome to my website
          </h1>
        </Typist>
        <div className="theme" onClick={props.changeTheme}></div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
