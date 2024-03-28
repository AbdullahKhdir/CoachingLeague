/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AvatarLive = ({
  property1,
  className,
  rectangleClassName,
  translation = "/img/translation-3892826-1-3.svg",
}) => {
  return (
    <div className={`avatar-live ${className}`}>
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <img className={`rectangle-3 ${rectangleClassName}`} alt="Rectangle" src="/img/rectangle-32-4.png" />
            <img
              className={`rectangle-4 property-1-1-${property1}`}
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
              className={`master-emblem-2 property-1-2-${property1}`}
              alt="Master emblem"
              src={
                ["challenger-1", "challenger-2"].includes(property1)
                  ? "/img/challenger-emblem-2022-1.png"
                  : "/img/master-emblem-2022-1.png"
              }
            />
          </div>
        </div>
        <div className="frame-8">
          <img
            className="translation"
            alt="Translation"
            src={
              property1 === "challenger-1"
                ? "/img/translation-3892826-1-1.svg"
                : property1 === "challenger-2"
                ? "/img/translation-3892826-1-2.svg"
                : property1 === "master-2"
                ? translation
                : "/img/translation-3892826-1.svg"
            }
          />
          <div className="text-wrapper-5">LIVE NOW</div>
        </div>
      </div>
    </div>
  );
};

AvatarLive.propTypes = {
  property1: PropTypes.oneOf(["challenger-1", "master-1", "challenger-2", "master-2"]),
  translation: PropTypes.string,
};
