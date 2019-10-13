import React from "react";
import logo_box from "../../assets/logo_box.svg";
import "./Societe.css";
export default function Societe() {
  return (
    <div className="padding-under-header">
      <section className="section-container">
        <div className="societe-container">
          <h1>Qui sommes nous</h1>
          <div className="societe-row">
            <div className="societe-colum-left">
              <ul className="societe-ul">
                <li>Existe depuis 2005</li>
                <li>A triplé son CA pendant les quatre dernières années</li>
                <li>Leader national des solutions Dynamics AX ©</li>
                <li>Est Gold Partner Microsoft ©</li>
                <li>
                  Plus de 43 Collaborateurs en Algérie Certifiés sur Dynamics AX, Navision, CRM, SureStep, Plateformes
                </li>
                <li>Expérience internationale, multisectorielle</li>
                <li>Solutions intégrées totalement ou partiellement</li>
                <li>Solutions intégrées totalement ou partiellement</li>
                <li>
                  Solutions localisées selon la réglementation en vigueur Audits, Conseil, Accompagnement pour des
                  solutions sur-mesure Formations, Assistance et TMA
                </li>
              </ul>
            </div>
            <div className="societe-colum-right">
              <img src={logo_box} alt="box" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
