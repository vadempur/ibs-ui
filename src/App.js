import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Page1 from "./components/Page1/Page1";

import hat from "./hard-hat.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Page1 />
        <div id="constraction" className="on-construction" >
          <img width="100px" src={hat} alt="hat" />
          <p>Site en construction</p>
        </div> 
      </div>
    );
  }
}

export default App;
