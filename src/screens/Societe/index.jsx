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
                <li className="societe-li fade-in">Existe depuis 2005</li>
                <li className="societe-li fade-in">A triplé son CA pendant les quatre dernières années</li>
                <li className="societe-li fade-in">Leader national des solutions Dynamics AX ©</li>
                <li className="societe-li fade-in">Est Gold Partner Microsoft ©</li>
                <li className="societe-li fade-in">
                  Plus de 43 Collaborateurs en Algérie Certifiés sur Dynamics AX, Navision, CRM, SureStep, Plateformes
                </li>
                <li className="societe-li fade-in">Expérience internationale, multisectorielle</li>
                <li className="societe-li fade-in">Solutions intégrées totalement ou partiellement</li>
                <li className="societe-li fade-in">Solutions intégrées totalement ou partiellement</li>
                <li className="societe-li fade-in">
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
