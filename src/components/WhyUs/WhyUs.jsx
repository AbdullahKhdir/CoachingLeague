/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const WhyUs = ({
  property1,
  className,
  subtract = "/img/subtract-2.svg",
  shield = "/img/shield-109123-2-1.svg",
  divClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`WHY-US ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.property1 === "hover" && <img className="subtract" alt="Subtract" src={subtract} />}

      <div className="frame">
        <div className="group">
          <img
            className="shield"
            alt="Shield"
            src={state.property1 === "default" ? "/img/shield-109123-2.svg" : shield}
          />
        </div>
        <div className="div">
          <div className="text-wrapper">100% SAFE</div>
          <p className={`p ${state.property1 === "hover" ? divClassName : undefined}`}>
            You are playing on your own account without need to share any information
          </p>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

WhyUs.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
  subtract: PropTypes.string,
  shield: PropTypes.string,
};
