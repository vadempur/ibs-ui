import React from "react";

function DiagonalFloor() {

  return (

    <div style={{ position: "absolute", zIndex: -1, right: 0, bottom: 0, width: "100%",margin:0,padding:0 }}>
      <svg viewBox="0 0 100 10" >
        <path style={{fill:'var(--primary)'}} d="M 100,0 100,10 L 0,10 z" />
      </svg>
    </div>
  
  );
}

export default DiagonalFloor;
