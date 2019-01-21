import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

import SocialBar from "./components/Bars/SocialBar/SocialBar";
import NavBar from "./components/Bars/NavBar/NavBar";
import Hamburger from "./components/Bars/Hamburger/Hamburger";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App_Container">
          <SocialBar />
          <NavBar />
          <Hamburger />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;