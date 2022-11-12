import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

class App extends Component {
  constructor() {
    super();
    this.state = { theme: "dark", currentSection: "aboutMe" };
    this.aboutMe = this.aboutMe.bind(this);
    this.projects = this.projects.bind(this);
    this.contact = this.contact.bind(this);
  }

  // changes the page to about me
  aboutMe() {
    this.setState({ currentSection: "aboutMe" });
  }

  // changes the page to projects
  projects() {
    this.setState({ currentSection: "projects" });
  }

  // changes the page to contact
  contact() {
    this.setState({ currentSection: "contact" });
  }

  render() {
    let currentSection;
    if (this.state.currentSection === "aboutMe") {
      // about me sections of the page
      currentSection = <AboutMe />;
    } else if (this.state.currentSection === "projects") {
      // projects sections of the page
      currentSection = <Projects />;
    } else if (this.state.currentSection === "contact") {
      currentSection = <Contact />;
    }
    return (
      <div className={this.state.theme}>
        <Header
          aboutMe={this.aboutMe}
          projects={this.projects}
          contact={this.contact}
          currentSection={this.state.currentSection}
        />
        <main>{currentSection}</main>
      </div>
    );
  }
}

export default App;
