/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Avatar = ({ property1, className, rectangleClassName }) => {
  return (
    <div className={`avatar ${className}`}>
      <div className={`overlap-group ${property1}`}>
        <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src="/img/rectangle-32.png" />
        <img
          className="rectangle-2"
          alt="Rectangle"
          src={
            property1 === "challenger-1"
              ? "/img/rectangle-2.png"
              : property1 === "challenger-2"
              ? "/img/rectangle-2-1.png"
              : property1 === "master-2"
              ? "/img/rectangle-33-1.png"
              : "/img/rectangle-33.png"
          }
        />
        <img
          className="master-emblem"
          alt="Master emblem"
          src={
            ["challenger-1", "challenger-2"].includes(property1)
              ? "/img/challenger-emblem-2022-1.png"
              : "/img/master-emblem-2022-1.png"
          }
        />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  property1: PropTypes.oneOf(["challenger-1", "master-1", "challenger-2", "master-2"]),
};
