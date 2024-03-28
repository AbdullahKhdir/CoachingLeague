/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardLeague = ({
  property1,
  className,
  subtract = "/img/subtract-27.svg",
  img = "/img/subtract-62.png",
  maskGroup = "/img/mask-group-5.png",
}) => {
  return (
    <div className={`CARD-LEAGUE ${property1} ${className}`}>
      <div className="overlap-2">
        <img
          className="subtract-3"
          alt="Subtract"
          src={
            property1 === "ACTIVE"
              ? subtract
              : property1 === "DISABLED"
              ? "/img/subtract-28.svg"
              : "/img/subtract-26.svg"
          }
        />
        <div className="div-wrapper">
          <div className="overlap-group-3">
            <img
              className="subtract-4"
              alt="Subtract"
              src={
                property1 === "ACTIVE"
                  ? img
                  : property1 === "DISABLED"
                  ? "/img/subtract-63.png"
                  : "/img/subtract-61.png"
              }
            />
            <img
              className="mask-group"
              alt="Mask group"
              src={
                property1 === "ACTIVE"
                  ? maskGroup
                  : property1 === "DISABLED"
                  ? "/img/mask-group-6.png"
                  : "/img/mask-group-4.png"
              }
            />
            <img
              className="lol-logo"
              alt="Lol logo"
              src={property1 === "DISABLED" ? "/img/lol-logo-1.png" : "/img/lol-logo-1-1.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CardLeague.propTypes = {
  property1: PropTypes.oneOf(["DISABLED", "ACTIVE", "DEFAULT"]),
  subtract: PropTypes.string,
  img: PropTypes.string,
  maskGroup: PropTypes.string,
};
