import {useState,useEffect} from 'react';

function useMobile(width){

  const [isMobileSize, setIsMobileSize] = useState(false);
  
  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  function resize() {
    let innerWidth = window.innerWidth <= width;
    if (innerWidth !== isMobileSize) {
      setIsMobileSize(innerWidth);
    }
  }
  
  return isMobileSize;
}

export {
  useMobile
};