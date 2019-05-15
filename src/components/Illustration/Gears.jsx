import React, { useRef, useEffect } from "react";
import { TweenLite, TimelineMax, Power0 } from "gsap/all";
function Gears() {
  const orange_gear = useRef(null);
  const blue_gear = useRef(null);

  useEffect(() => {
    let t1 = new TimelineMax();
    t1.from(blue_gear.current, 10, { ease: Power0.easeNone, repeat: -1, rotation: -360, transformOrigin: "50% 50%" });
    let t2 = new TimelineMax();
    t2.from(orange_gear.current, 6, { ease: Power0.easeNone, repeat: -1, rotation: 360, transformOrigin: "50% 50%" });
  });

  return (
    <>
      {/* blue gear */}
      <g clipPath="url(#a)">
        <g ref={blue_gear}>
          <ellipse
            className="st1"
            transform="rotate(-88.206 133.36 612.652)"
            cx="133.36"
            cy="612.65"
            rx="54.32"
            ry="54.32"
          />
          <path
            className="st26"
            d="M110.45 704.51c4.44 1.16 9 2.02 13.68 2.53l6.05-15.62c4.15.23 8.25.13 12.27-.27l7.37 15.24c4.54-.74 8.98-1.82 13.29-3.19l-.82-16.74c4-1.52 7.84-3.36 11.5-5.49l12.9 10.89c3.75-2.49 7.31-5.24 10.66-8.24l-7.56-14.96c3.09-3.08 5.93-6.42 8.48-9.99l16.2 4.7c2.35-3.74 4.44-7.67 6.26-11.75l-13.01-10.61a78.12 78.12 0 0 0 3.64-12.81l16.65-2.29c.29-2.18.52-4.38.66-6.61s.2-4.44.19-6.64l-16.22-4.4c-.28-4.5-.95-8.9-1.96-13.17l14.26-8.85a94.686 94.686 0 0 0-4.7-12.46l-16.67 2.59a77.51 77.51 0 0 0-7.13-11l9.41-13.86c-2.94-3.4-6.12-6.58-9.52-9.53l-14.19 9.15a78.35 78.35 0 0 0-10.71-6.92l2.96-16.49c-4.1-1.91-8.37-3.55-12.77-4.86l-9.27 14.17c-3.93-.92-7.98-1.54-12.13-1.84l-4-16.27c-4.71-.09-9.35.17-13.9.76l-2.7 16.7c-3.9.75-7.7 1.8-11.38 3.11l-10.28-13.25c-4.37 1.84-8.58 4-12.59 6.45l4.33 16.36a78.796 78.796 0 0 0-8.82 7.16l-14.81-7.93a94.645 94.645 0 0 0-9.06 11.09l10.6 13.17a77.66 77.66 0 0 0-5.09 9.85l-16.79-1.23a93.059 93.059 0 0 0-3.84 13.89l15.02 7.71c-.24 1.8-.43 3.62-.55 5.46s-.17 3.67-.16 5.49l-15.88 5.72c.31 4.86 1 9.62 2.03 14.27l16.81.93c1.02 3.58 2.28 7.06 3.78 10.42l-12.2 11.7c2.21 4.25 4.75 8.31 7.56 12.16l15.7-5.97c2.41 2.93 5.02 5.68 7.83 8.23l-6.39 15.68c3.67 2.94 7.56 5.62 11.66 8l11.89-11.82a78.55 78.55 0 0 0 10.89 4.54l.57 16.94zm-20.14-94.1c1.58-24.63 22.83-43.31 47.46-41.73s43.31 22.83 41.72 47.46c-1.58 24.63-22.83 43.31-47.46 41.73s-43.31-22.83-41.72-47.46z"
          />
          <path
            className="st26"
            d="M163.8 615.14c1.03-15.97-11.08-29.74-27.05-30.77s-29.74 11.08-30.77 27.05c-1.03 15.96 11.08 29.74 27.05 30.77s29.75-11.08 30.77-27.05z"
          />
        </g>
      </g>
      {/*  */}

      {/* orange gear */}
      <g clipPath="url(#a)">
        <g ref={orange_gear}>
          <ellipse
            className="st1"
            transform="rotate(-88.206 198.752 746.524)"
            cx="198.75"
            cy="746.52"
            rx="40.35"
            ry="40.35"
          />
          <path
            className="st41"
            d="M194.1 796.82l2.78 11.72 16.13-1.35.8-12.18a50.1 50.1 0 0 0 13.93-6.64l9.64 7.18 11.48-11.4-7.29-9.94c2.78-4.26 4.92-8.95 6.31-13.94l12.16-.71 1.47-16.12-12.21-2.99c-.64-5.13-2.05-9.99-4.09-14.48l9.07-8.55-9.24-13.29-11.53 5.69a50.616 50.616 0 0 0-12.22-8.33l1.48-12.65-15.61-4.25-5.26 11.94c-2.21-.11-4.45-.08-6.71.1-2.7.22-5.32.67-7.86 1.29l-7.06-10.73-14.69 6.78 3.65 12.53a50.505 50.505 0 0 0-10.33 10.42l-12.24-3.67-6.89 14.64 10.69 7.14a50.254 50.254 0 0 0-1.28 14.82l-11.52 4.96 4.13 15.65 12.5-1.37a50.28 50.28 0 0 0 8.69 12.41l-5.5 10.94 13.22 9.33 8.52-8.89a49.35 49.35 0 0 0 14.88 3.94zm-21.36-47.8c-1.23-14.72 9.7-27.65 24.42-28.89 14.72-1.23 27.66 9.7 28.89 24.42s-9.7 27.66-24.42 28.89-27.66-9.7-28.89-24.42z"
          />
          <path
            className="st41"
            d="M217.62 745.26c-.84-10.07-9.69-17.54-19.75-16.7-10.07.84-17.54 9.69-16.7 19.75.84 10.07 9.69 17.54 19.75 16.7 10.07-.84 17.54-9.68 16.7-19.75z"
          />
        </g>
      </g>
      {/*  */}
    </>
  );
}

export default Gears;