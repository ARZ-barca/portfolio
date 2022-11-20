import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App(props) {
  const [section, setSection] = useState("aboutMe");
  const [theme, _] = useState("dark");

  function aboutMe() {
    setSection("aboutMe");
  }

  function projects() {
    setSection("projects");
  }

  function contact() {
    setSection("contact");
  }

  let currentSection;
  if (section === "aboutMe") {
    // about me sections of the page
    currentSection = <AboutMe />;
  } else if (section === "projects") {
    // projects sections of the page
    currentSection = <Projects />;
  } else if (section === "contact") {
    // contact sections of the page
    currentSection = <Contact />;
  }
  return (
    <div className={theme}>
      <Header
        aboutMe={aboutMe}
        projects={projects}
        contact={contact}
        currentSection={section}
      />
      <main>{currentSection}</main>
    </div>
  );
}

export default App;
