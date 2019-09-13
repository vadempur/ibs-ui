import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Page1 from "./components/Page1/Page1";
import Banner from "./components/Banner/Banner";
import Slide from "./components/Slide";

import hat from "./hard-hat.svg";

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // window.addEventListener("wheel", (e) => {
    //   if (!this.state.scrolledDown) {
    //     if(e.deltaY > 0){
    //       setTimeout(()=>{
    //         this.setState({ scrolledDown: true });
    //       },300);
    //     }
    //   }
    // });

    // window.addEventListener("scroll" , ()=>{
    //   if(this.state.scrolledDown){
    //     const top = window.scrollY;
    //     if(top<1){
    //       this.setState({ scrolledDown: false });
    //     }
    //   }
    // })
  }

  componentWillUnmount() {}

  render() {
    
    return (
      <div className="App">
        <Header />
        <Banner />
        <Page1 />
        <div id="constraction" className="on-construction">
          <img width="100px" src={hat} alt="hat" />
          <p>Site en construction</p>
        </div>
        {/* <Letter/> */}
        <Slide />
      </div>
    );
  }
}

export default App;
