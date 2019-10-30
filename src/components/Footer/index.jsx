import React from "react";
import facebook_logo from "../../assets/facebook_logo.svg";
import linkedin_logo from "../../assets/linkedin_logo.svg";
import twitter_logo from "../../assets/twitter_logo.svg";
import ibs_logo from "../../assets/logo-footer.svg";
import "./styles.css";

export default function Footer() {
  return (
    <section className="rights-reserved">
      <div className="footer-row"  >
        <div className="footer-col" style={{ flex: 3 }}>
          <img className="footer-logo" src={ibs_logo} alt="ibs" href="ibsolutions-dz.com" />
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

        <div className="footer-col" style={{ flex: 1 }}>
          <h3 className="footer-title">Liens utiles</h3>
          <p className="footer-link">Link</p>
          <p className="footer-link">Link</p>
          <p className="footer-link">Link</p>
        </div>
        <div className="footer-col" style={{ flex: 1 }}>
          <h3 className="footer-title">Liens utiles</h3>
          <p className="footer-link">Link</p>
          <p className="footer-link">Link</p>
          <p className="footer-link">Link</p>
        </div>


        <div className="footer-col" style={{ flex: 1 }}>
          <h3 className="footer-title">Suivez nous</h3>
          <div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className="social-logo" src={facebook_logo} alt="facebook" href="google.com" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img className="social-logo" src={twitter_logo} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className="social-logo" src={linkedin_logo} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-row border-top">
        <p className="rights-text">© 2019 IBS Solutions. All rights reserved.</p>
      </div>
    </section>
  );
}
