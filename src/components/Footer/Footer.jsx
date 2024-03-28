/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({
  className,
  LOGO = "/img/logo-1.svg",
  subtract = "/img/subtract.svg",
  instagram = "/img/instagram-121520-1.svg",
  xLogoOriginal = "/img/x-logo-2023-original-1.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame-2">
        <img className="LOGO" alt="Logo" src={LOGO} />
        <div className="frame-3">
          <div className="frame-4">
            <div className="text-wrapper-2">Home</div>
            <div className="text-wrapper-2">Staff</div>
            <div className="text-wrapper-2">About</div>
            <div className="text-wrapper-2">Page</div>
          </div>
          <div className="frame-5">
            <img className="img" alt="Subtract" src={subtract} />
            <img className="img" alt="Instagram" src={instagram} />
            <div className="x-logo-original-wrapper">
              <img className="x-logo-original" alt="X logo original" src={xLogoOriginal} />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-6">
        <p className="text-wrapper-2">2024 © SkillMate. All rights reserved.</p>
        <div className="text-wrapper-2">Terms &amp; Conditions</div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  LOGO: PropTypes.string,
  subtract: PropTypes.string,
  instagram: PropTypes.string,
  xLogoOriginal: PropTypes.string,
};
