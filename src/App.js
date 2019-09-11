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
    this.state = {
      scrolledDown: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
      if (top > 30) {
        if (!this.state.scrolledDown) {
          this.setState({ scrolledDown: true });
          // clearTimeout(scrollToTop);
          // const scrollToTop = setTimeout(() => {
          //   window.scrollTo({ top: 40, behavior: "smooth" });
          // }, 66);
        }
      } else {
        this.setState({ scrolledDown: false });
      }
    });
  }

  componentWillUnmount() {}

  render() {
    const { scrolledDown } = this.state;
    return (
      <div className="App">
        <Header light={!scrolledDown} />
        <Banner />
        <Page1 />
        <div id="constraction" className="on-construction">
          <img width="100px" src={hat} alt="hat" />
          <p>Site en construction</p>
        </div>
        {/* <Letter/> */}
        <Slide isHidden={scrolledDown} />
      </div>
    );
  }
}

export default App;
