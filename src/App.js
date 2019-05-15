import React, { Component } from "react";
import "./App.css";
import Illustration from "./components/Illustration/Illustration";
import Header from "./components/Header/Header";
import hat from "./hard-hat.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="section1-left">
            <h1>Présentation du Savoir-Faire</h1>
            <p>
              En 2009, IB Solutions atteint le statut GOLD CERTIFIED PARTNER <br/>
              Microsoft Business Solutions (Dynamics NAV et AX) <br/>
              Data Management solutions pour la spécialisation BI
            </p>
          </div>
          <div className="illustration">
            <Illustration />
          </div>
        </div>
        <div className="container content" >
          <img width='100px' src={hat} alt='hat' />
          <p>Site en construction</p>
        </div>
      </div>
    );
  }
}

export default App;
