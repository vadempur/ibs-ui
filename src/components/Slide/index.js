import React, { useState, useRef } from "react";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import scroll_indicator from "../../assets/scroll.svg";
import { useEventListener } from "../../customHooks";

function Slide({ isHidden,setHidden, getRef }) {
  const carouselRef = useRef();
  if (isHidden) {
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 500);
  } else {
    document.body.style.overflow = "hidden";
  }

  useEventListener("keyup", e => {
    if (!isHidden) {
      if (e.key === "ArrowRight") carouselRef.current.slickPrev();
      if (e.key === "ArrowLeft") carouselRef.current.slickNext();
    }
  });

  return (
    <div ref={getRef} className={`slide-container ${isHidden && "slide-hidden"}`}>
      <div onClick={()=>{setHidden(false)}} className="scroll_indicator">
      <img src={scroll_indicator} alt="scroll_indicator" />
      </div>
      <Carousel ref={carouselRef} dots={false} accessibility={false} pauseOnHover={false} autoplay autoplaySpeed={6000}>
        <SlideItem
          img={img1}
          title={"The standard Lorem"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        />
        <SlideItem
          img={img2}
          title={" Ipsum passage since the 1500s ?"}
          description={"Excepteur sint occaecat cupidatat qui officia deserunt mollit anim id est laborum."}
        />
      </Carousel>
    </div>
  );
}

const SlideItem = ({ img, title, description }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEventListener("resize", () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <div className="slide-item" style={{ width, height }}>
      <img className="slide-img" src={img} alt="slide_image" />
      <div className="slide-text">
        <div>
          <h1 className="slide-text-title">{title}</h1>
          <p className="slide-text-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
