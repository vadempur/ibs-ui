import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Page1 from "./components/Page1/Page1";
import Banner from "./components/Banner/Banner";
import Slide from "./components/Slide";
import { useEventListener } from "./customHooks";
import hat from "./hard-hat.svg";
import Contact from "./components/Contact/Contact";

let startX,
  startY,
  dist,
  threshold = 80; //required min distance traveled to be considered swipe

function App() {
  const [slideVisible, setSlideVisible] = useState(true);
  const slide_container = useRef();
  const banner_container = useRef();

  const handleTouchEnd = e => {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageY - startY; // get total dist traveled by finger while in contact with surface
    let not_so_horizontal = Math.abs(touchobj.pageX - startX) <= 100;

    if (slideVisible) {
      var hideTheSlide = dist < 0 && Math.abs(dist) >= threshold && not_so_horizontal;
      if (hideTheSlide) {
        setSlideVisible(false);
      }
    } 
  };
  const handleTouchStart = e => {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
  };

  useEventListener("touchstart", handleTouchStart, banner_container.current);
  useEventListener("touchend", handleTouchEnd, banner_container.current);

  useEventListener("touchstart", handleTouchStart, slide_container.current);
  useEventListener("touchend", handleTouchEnd, slide_container.current);

  useEventListener("wheel", e => {
    if (slideVisible) {
      if (e.deltaY > 0) {
        setTimeout(() => {
          setSlideVisible(false);
        }, 300);
      }
    }
  });

  useEventListener("keyup", e => {
    if (e.key === "ArrowDown" && slideVisible) setSlideVisible(false);
    // if (e.key === "ArrowUp" && !slideVisible && window.scrollY <= 0) setSlideVisible(true);
  });

  useEventListener("scroll", () => {
    if (slideVisible && window.scrollY > 0) setSlideVisible(false);
  });

  return (
    <div className="App">
      <Header setSlideVisible={setSlideVisible} light={slideVisible} />
      <Banner getRef={banner_container} replay={!slideVisible} />
      <Page1 />
      <div id="constraction" className="on-construction">
        <img width="100px" src={hat} alt="hat" />
        <p>Site en construction</p>
        <br/>
        <br/>
        <hr/>
        <p>Services...</p>
        <hr/>
        <br/>
        <br/>
        <p>Produits</p>
        <hr/>
      </div>
      {/* <Letter/> */}
      <Slide getRef={slide_container} isHidden={!slideVisible} setHidden={setSlideVisible}/>
      <Contact/>

    </div>
  );
}

export default App;
