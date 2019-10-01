import React from "react";
import logo from "../../assets/logo_icon.svg"
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
      <img src={logo} alt="logo" className="contact-info-logo" />
      <h1 className="contact-info-title">IB Solutions</h1>
      <span> </span>
      <p className="contact-info-phone">+213 21 54 07 18</p>
      <p className="contact-info-address">Coopérative El Amir Khaled N° 24 et 24 Bis Gué de Constantine, Alger</p>
    </div>
  );
}
