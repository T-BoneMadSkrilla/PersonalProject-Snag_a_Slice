import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

import SocialBar from "./components/Bars/SocialBar/SocialBar";
import NavBar from "./components/Bars/NavBar/NavBar";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App_Container">
          <SocialBar />
          <NavBar />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;