/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardValorant = ({
  property1,
  className,
  subtract = "/img/subtract-24.svg",
  img = "/img/subtract-60.png",
  maskGroup = "/img/mask-group-14.png",
  valorantLogoBlack = "/img/valorant-logo-black-color-version-2-3.svg",
  overlapGroupClassName,
}) => {
  return (
    <div className={`CARD-VALORANT property-1-${property1} ${className}`}>
      <div className="overlap-group-4">
        <img
          className="subtract-5"
          alt="Subtract"
          src={
            property1 === "default"
              ? "/img/subtract-22.svg"
              : property1 === "ACTIVE"
              ? "/img/subtract-23.svg"
              : subtract
          }
        />
        <img
          className="subtract-6"
          alt="Subtract"
          src={
            property1 === "ACTIVE" ? "/img/subtract-59.png" : property1 === "DISABLED" ? img : "/img/subtract-58.png"
          }
        />
        <img
          className="mask-group-2"
          alt="Mask group"
          src={
            property1 === "ACTIVE"
              ? "/img/mask-group-13.png"
              : property1 === "DISABLED"
              ? maskGroup
              : "/img/mask-group-12.png"
          }
        />
        <img
          className="valorant-logo-black"
          alt="Valorant logo black"
          src={
            property1 === "ACTIVE"
              ? "/img/valorant-logo-black-color-version-2-2.svg"
              : property1 === "DISABLED"
              ? valorantLogoBlack
              : "/img/valorant-logo-black-color-version-2-1.svg"
          }
        />
        {property1 === "DISABLED" && (
          <div className="group-2">
            <div className={`coming-soon-wrapper ${overlapGroupClassName}`}>
              <div className="coming-soon">COMING SOON</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CardValorant.propTypes = {
  property1: PropTypes.oneOf(["DISABLED", "ACTIVE", "default"]),
  subtract: PropTypes.string,
  img: PropTypes.string,
  maskGroup: PropTypes.string,
  valorantLogoBlack: PropTypes.string,
};
