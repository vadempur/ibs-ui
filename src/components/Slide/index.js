import React, { useState, useEffect, useRef } from "react";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { useMobile, useEventListener } from "../../customHooks";
import img1 from "../../assets/1.jpeg";
import Hammer from "hammerjs";
function Slide() {
  const slide_container = useRef();
  const [isHidden,setIsHidden] = useState(false);
  const isMobile = useMobile(1080);
  // const [toggleSubMenu, setToggleSubMenu] = useState(-1);

  useEffect(() => {
    // create a simple instance
    // by default, it only adds horizontal recognizers
    let mc = new Hammer(slide_container.current);
    // let the pan gesture support all directions.
    // this will block the vertical scrolling on a touch-device while on the element
    mc.get("pan").set({ direction: Hammer.DIRECTION_UP });
    // listen to events...
    mc.on("panup", function(ev) {
      setIsHidden(true);   
    });

  }, []);

  useEventListener("wheel", e => {
    if (!isHidden) {
      if (e.deltaY > 0) {
        setIsHidden(true);
      }
    }
  });

  useEventListener("scroll", () => {
    if (isHidden) {
      const top = window.scrollY;
      if (top < 1) {
        setIsHidden(false);
      }
    }
  });

  // if (isHidden) {
  //   document.body.style.overflow = "auto";
  // } else {
  //   document.body.style.overflow = "hidden";
  // }

  return (
    <div ref={slide_container} className={`slide-container ${isHidden && "slide-hidden"}`}>
      <Carousel dots={false} pauseOnHover={false} autoplay>
        <div>
          <img className="slide-img" width={window.innerWidth} height={window.innerHeight} src={img1} alt="slide_image" />
        </div>
        <div>
          <img className="slide-img" width={window.innerWidth} height={window.innerHeight} src={img1} alt="slide_image" />
        </div>
      </Carousel>
    </div>
  );
}

const SlideItem = ({ img }) => {
  return (
    <div>
      <img src={img} alt="slide_image" />
    </div>
  );
};

export default Slide;
