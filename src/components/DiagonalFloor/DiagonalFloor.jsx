import React, { useEffect, useRef, useState } from "react";
import "./DiagonalFloor.css";

function DiagonalFloor() {
  const [rotation, setRotation] = useState(-6);

  const diago = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    handleScroll();
  },[]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY < 300) {
      // let new_rotation = rotation + (window.scrollY - lastScrollY) / 20;
      let new_rotation = 0;
     
      new_rotation = map(window.scrollY, 0, 300, -6, 0);
     
      setRotation(new_rotation);
    }else{
      setRotation(0);
    }

  };

  function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }

  // console.log(rotation);

  return (
    <div className="diagonal-container">
      <svg ref={container} viewBox="0 0 100 30" className="diagonal-svg">
        <rect
          ref={diago}
          fill="var(--primary)"
          x="0"
          y="30"
          width="120"
          height="30"
          transform={"rotate(" + rotation + ", 0, 30)"}
        />
      </svg>
      <i />
    </div>
  );
}

export default DiagonalFloor;
