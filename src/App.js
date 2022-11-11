import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";

class App extends Component {
  constructor() {
    super();
    this.state = { theme: "dark", currentSection: "aboutMe" };
    this.aboutMe = this.aboutMe.bind(this);
    this.projects = this.projects.bind(this);
  }

  // changes the page to about me
  aboutMe() {
    this.setState({ currentSection: "aboutMe" });
  }

  // changes the page to projects
  projects() {
    this.setState({ currentSection: "projects" });
  }

  render() {
    let currentSection;
    if (this.state.currentSection === "aboutMe") {
      // about me sections of the page
      currentSection = <AboutMe />;
    } else if (this.state.currentSection === "projects") {
      // projects sections of the page
      currentSection = <Projects />;
    }
    return (
      <div className={this.state.theme}>
        <Header
          theme={this.state.theme}
          aboutMe={this.aboutMe}
          projects={this.projects}
          currentSection={this.state.currentSection}
        />
        <main>{currentSection}</main>
      </div>
    );
  }
}

export default App;
