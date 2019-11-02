import React,{useState} from 'react';
import { useEventListener } from '../../../../helpers/customHooks';
import "./styles.css"

export default function SlideItem ({ img, title, description }) {
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