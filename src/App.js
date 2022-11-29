import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={theme}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AboutMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
