import React, { useRef, useState, useCallback } from "react";
import "./DiagonalFloor.css";
import { useEventListener, map } from "../../../helpers/customHooks";

const init_rotation1 = -10,
  init_rotation2 = init_rotation1 - 0.8,
  init_rotation3 = init_rotation2 - 2.5;

function DiagonalFloor() {
  const [rotation, setRotation] = useState(init_rotation1);
  const [rotation2, setRotation2] = useState(init_rotation2);
  const [rotation3, setRotation3] = useState(init_rotation3);
  const diago = useRef(null);
  const diago2 = useRef(null);
  const diago3 = useRef(null);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 500) {
      // let new_rotation = rotation + (window.scrollY - lastScrollY) / 20;

      let new_rotation = map(window.scrollY, 0, 500, init_rotation1, 0);
      let new_rotation2 = map(window.scrollY, 0, 500, init_rotation2, 0);
      let new_rotation3 = map(window.scrollY, 0, 500, init_rotation3, 0);

      setRotation(new_rotation);
      setRotation2(new_rotation2);
      setRotation3(new_rotation3);
    } else {
      setRotation(0);
      setRotation2(0);
      setRotation3(0);
    }
  });

  useEventListener("scroll", handleScroll);

  // console.log(rotation);

  return (
    <div className="diagonal-container">
      <svg viewBox="0 0 100 30" className="diagonal-svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FDBD29", stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <rect
          ref={diago3}
          fill="url(#grad1)"
          x="0"
          y="30"
          width="120"
          height="30"
          transform={"rotate(" + rotation3 + ", 0, 30)"}
        />
        <rect
          ref={diago2}
          fill="#29ABE2"
          x="0"
          y="30"
          width="120"
          height="30"
          transform={"rotate(" + rotation2 + ", 0, 30)"}
        />
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
      {/* <i /> */}
    </div>
  );
}

export default DiagonalFloor;
