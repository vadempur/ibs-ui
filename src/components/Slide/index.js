import React, { useState, useEffect, useCallback } from "react";

import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { useMobile, useEventListener } from "../../customHooks";
import img1 from "../../assets/1.jpeg";
function Slide({isHidden}) {

  const isMobile = useMobile(1080);
  // const [toggleSubMenu, setToggleSubMenu] = useState(-1);

  useEffect(() => {}, []);

  if(isHidden){
    document.body.style.overflow = "auto";
  }else{
    document.body.style.overflow = "hidden";
  }

  return (
    <div className={`slide-container ${isHidden&&"slide-hidden"}`}>
      <Carousel dots={false} pauseOnHover={false} autoplay>
        <div>
          <img className="slide-img" src={img1} alt="slide_image" />
        </div>
        <div>
          <img className="slide-img" src={img1} alt="slide_image" />
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
