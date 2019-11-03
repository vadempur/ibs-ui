import React from "react";
import logo_icon from "../../assets/logo_icon.svg"

import "./styles.css";
export default function(){
  return (
    <div className="loader-container">      
      <img src={logo_icon} alt="loader-icon" className="loader-image"/>      
    </div>
  )
}