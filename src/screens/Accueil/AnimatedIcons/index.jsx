import React, { createRef, useState, useCallback, useRef } from "react";
import "./styles.css";
import { useEventListener, useMobile } from "../../../helpers/customHooks";
import NumberOneIcon from "./NumberOneIcon";
import ServicesIcon from "./ServicesIcon";
import CollabIcon from "./CollabIcon";
import NetworkIcon from "./NetworkIcon";
import { Link } from "react-router-dom";


function AnimatedIcons() {
  const [iconsToPlay, setIconsToPlay] = useState([]);
  const [iconsToSlide, setIconsToSlide] = useState([]);
  const refs = useRef([createRef(), createRef(), createRef(), createRef()]);
  const isMobile = useMobile(1080);

  const isElementOnViewPort = useCallback(() => {
    if (!isMobile) return;

    let new_play = [];
    let changed = false;
    refs.current.forEach((e, index) => {
      const rect = e.current.getBoundingClientRect();
      const visible = isRectOnViewPort(rect);
      if (iconsToPlay[index] !== visible) changed = true;
      new_play[index] = visible;
    });

    if (changed) setIconsToPlay(new_play);
  });

  useEventListener("scroll", isElementOnViewPort);

  const slideInListener = useCallback(() => {
    let new_play = [];
    let changed = false;
    refs.current.forEach((e, index) => {
      const rect = e.current.getBoundingClientRect();
      const visible = isRectPartiallyOnViewPort(rect);
      if (setIconsToSlide[index] !== visible) changed = true;
      new_play[index] = visible;
    });

    if (changed) setIconsToSlide(new_play);
  });
  useEventListener("scroll", slideInListener);

  const handlePlayOnMouse = index => {
    if (isMobile) return;
    let new_play = [];
    new_play[index] = true;
    setIconsToPlay(new_play);
  };

  function setColumnClass(index){
    return `column-container ${iconsToSlide[index] === true ? "slide-in-"+ (isMobile?0:index) : ""}` 
  }

  return (
    <section className="section-1">
      <h1 className="section-1-title">Et Si Solutions Rimaient Avec Integration</h1>
      <div className="svg-icons-container">
        <Link to="/about" className="page1-column">
          <div
            className={setColumnClass(0)}
            ref={refs.current[0]}
            onMouseEnter={() => handlePlayOnMouse(0)}
            onMouseLeave={() => handlePlayOnMouse(-1)}
          >
            <NumberOneIcon shouldPlay={iconsToPlay[0]} />
            <h2> Mission et valeurs </h2>
          </div>
        </Link>

        <Link to="/about" className="page1-column">
          <div
            ref={refs.current[1]}
            className={setColumnClass(1)}
            onMouseEnter={() => handlePlayOnMouse(1)}
            onMouseLeave={() => handlePlayOnMouse(-1)}
          >
            <CollabIcon shouldPlay={iconsToPlay[1]} />
            <h2> Nos Partenaires </h2>
          </div>
        </Link>

        <Link to="/about" className="page1-column">
          <div
            ref={refs.current[2]}
            className={setColumnClass(2)}
            onMouseEnter={() => handlePlayOnMouse(2)}
            onMouseLeave={() => handlePlayOnMouse(-1)}
          >
            <ServicesIcon shouldPlay={iconsToPlay[2]} />
            <h2> Qui sommes nous </h2>
          </div>
        </Link>

        <Link to="/about" className="page1-column">
          <div
            ref={refs.current[3]}
            className={setColumnClass(3)}
            onMouseEnter={() => handlePlayOnMouse(3)}
            onMouseLeave={() => handlePlayOnMouse(-1)}
          >
            <NetworkIcon shouldPlay={iconsToPlay[3]} />
            <h2> Nos clients </h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default AnimatedIcons;

function isRectOnViewPort(rect) {
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ); /*or $(window).width() */
}
function isRectPartiallyOnViewPort(bounding) {
  return (
    // bounding.top >= 0 &&
    // bounding.left >= 0 &&
    // bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
