import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import scroll_indicator from "../../assets/scroll.svg";
import { useEventListener } from "../../helpers/customHooks";
import SlideItem from "./SlideItem";

let startX,
  startY,
  dist,
  threshold = 80; //required min distance traveled to be considered swipe

function Slide() {
  const history = useHistory();
  const carouselRef = useRef();
  const slide_container = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  useEventListener("keyup", e => {
    if (e.key === "ArrowRight") carouselRef.current.slickPrev();
    if (e.key === "ArrowLeft") carouselRef.current.slickNext();
  });

  /* close slide listeners */
  useEventListener("keyup", e => {
    if (e.key === "ArrowDown") history.push("/home");
  });

  const handleTouchStart = e => {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
  };
  const handleTouchEnd = e => {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageY - startY; // get total dist traveled by finger while in contact with surface
    let not_so_horizontal = Math.abs(touchobj.pageX - startX) <= 100;
    var hideTheSlide = dist < 0 && Math.abs(dist) >= threshold && not_so_horizontal;
    if (hideTheSlide) {
      history.push("/home");
    }
  };
  useEventListener("touchstart", handleTouchStart, slide_container.current);
  useEventListener("touchend", handleTouchEnd, slide_container.current);

  useEventListener("scroll", () => {
    if (window.scrollY > 0) history.push("/home");
  });
  useEventListener("wheel", e => {
    if (e.deltaY > 0) {
      setTimeout(() => {
        history.push("/home");
      }, 300);
    }
  });

  return (
    <div ref={slide_container} className={`slide-container"}`}>
      <Link to="/home" className="scroll_indicator">
        <img src={scroll_indicator} alt="scroll_indicator" />
      </Link>
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

export default Slide;
