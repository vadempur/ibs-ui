import React, { useEffect, useRef, useState } from "react";
import "./DiagonalFloor.css";

let lastScrollY = 0;

function DiagonalFloor() {
  
  const [rotation, setRotation] = useState(-10);

  const diago = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    let new_rotation = rotation + (window.scrollY - lastScrollY) / 20;
    if (new_rotation < -10) new_rotation = -10;
    if (new_rotation > 0) new_rotation = 0;
    setRotation(new_rotation);

    lastScrollY = window.scrollY;
  };

  // console.log(rotation);

  return (
    <div className="diagonal-container">
      <svg viewBox="0 0 100 50" className="diagonal-svg">
        <rect
          ref={diago}
          fill="var(--primary)"
          x="0"
          y="50"
          width="120"
          height="50"
          transform={"rotate(" + rotation + ", 0, 50)"}
        />
      </svg>
    </div>
  );
}

export default DiagonalFloor;
