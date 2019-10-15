import React from "react";
import hat from "../../assets/hard-hat.svg";
export default function WorkInProgress() {
  return (
    <div style={{display:"flex",flexDirection:"column",  justifyContent:"center",alignItems:"center" , height:"500px"}}>
      <img width="100px" src={hat} alt="hat" />
      <p>Page en construction...</p>
    </div>
  );
}
