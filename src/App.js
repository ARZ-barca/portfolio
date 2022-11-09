import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = { theme: "dark" };
  }

  render() {
    return <Header theme={this.state.theme} />;
  }
}

export default App;
