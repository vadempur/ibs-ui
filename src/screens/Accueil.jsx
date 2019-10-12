import React, { useState, useRef } from "react";
import Page1 from "../components/Page1/Page1";
import Banner from "../components/Banner/Banner";
import Slide from "../components/Slide";
import Contact from "../components/Contact/Contact";
import { useEventListener } from "../helpers/customHooks";

let startX,
  startY,
  dist,
  threshold = 80; //required min distance traveled to be considered swipe

export default function Accueil() {
  const [isSlideHidden, setSlideHidden] = useState(false);
  const slide_container = useRef();
  const banner_container = useRef();

  const handleTouchEnd = e => {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageY - startY; // get total dist traveled by finger while in contact with surface
    let not_so_horizontal = Math.abs(touchobj.pageX - startX) <= 100;

    if (isSlideHidden) {
      var hideTheSlide = dist < 0 && Math.abs(dist) >= threshold && not_so_horizontal;
      if (hideTheSlide) {
        setSlideHidden(true);
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
    if (isSlideHidden) {
      if (e.deltaY > 0) {
        setTimeout(() => {
          setSlideHidden(true);
        }, 300);
      }
    }
  });

  useEventListener("keyup", e => {
    if (e.key === "ArrowDown" && isSlideHidden) setSlideHidden(true);
  });

  useEventListener("scroll", () => {
    if (isSlideHidden && window.scrollY > 0) setSlideHidden(true);
  });

  return (
    <>
      <Banner getRef={banner_container} replay={isSlideHidden} />
      <Page1 />
      <div style={{ padding: "60px 0", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <p>Services...</p>
        <p>Produits...</p>
      </div>
      <Slide getRef={slide_container} isHidden={isSlideHidden} setHidden={setSlideHidden} />
      <Contact />
    </>
  );
}
