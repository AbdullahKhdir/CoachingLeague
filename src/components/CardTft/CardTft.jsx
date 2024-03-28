/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardTft = ({
  property1,
  className,
  subtract = "/img/subtract-20.svg",
  maskGroup = "/img/mask-group.png",
  img = "/img/mask-group-11.png",
  teamfightTactics = "/img/teamfight-tactics-seeklogo-3-2.svg",
  overlapGroupClassName,
}) => {
  return (
    <div className={`CARD-TFT property-1-0-${property1} ${className}`}>
      <div className="overlap-group-5">
        <img
          className="subtract-7"
          alt="Subtract"
          src={
            property1 === "default"
              ? "/img/subtract-18.svg"
              : property1 === "ACTIVE"
              ? "/img/subtract-19.svg"
              : subtract
          }
        />
        <img
          className="mask-group-3"
          alt="Mask group"
          src={property1 === "DISABLED" ? maskGroup : "/img/mask-group-2.png"}
        />
        <img className="mask-group-4" alt="Mask group" src={property1 === "DISABLED" ? img : "/img/mask-group-9.png"} />
        <img
          className="teamfight-tactics"
          alt="Teamfight tactics"
          src={
            property1 === "ACTIVE"
              ? "/img/teamfight-tactics-seeklogo-3-1.svg"
              : property1 === "DISABLED"
              ? teamfightTactics
              : "/img/teamfight-tactics-seeklogo-3.svg"
          }
        />
        {property1 === "DISABLED" && (
          <div className="group-3">
            <div className={`overlap-group-6 ${overlapGroupClassName}`}>
              <div className="coming-soon-2">COMING SOON</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CardTft.propTypes = {
  property1: PropTypes.oneOf(["DISABLED", "ACTIVE", "default"]),
  subtract: PropTypes.string,
  maskGroup: PropTypes.string,
  img: PropTypes.string,
  teamfightTactics: PropTypes.string,
};
