import React from "react";
import logo_line from "../../assets/logo_line.svg"

import "./styles.css";
export default function(){
  return (
    <div className="loader-container">      
      <img src={logo_line} alt="loader-icon" className="loader-image"/>      
    </div>
  )
}