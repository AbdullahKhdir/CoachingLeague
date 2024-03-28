/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ButtonSmall = ({ property1, className, subtract = "/img/subtract-3.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`button-small property-1-2-${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <img
        className="subtract-8"
        alt="Subtract"
        src={
          state.property1 === "hover"
            ? "/img/subtract-4.svg"
            : state.property1 === "press"
            ? "/img/subtract-5.svg"
            : state.property1 === "disabled"
            ? "/img/subtract-6.svg"
            : subtract
        }
      />
      <div className="text-wrapper-6">ORDER</div>
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

ButtonSmall.propTypes = {
  property1: PropTypes.oneOf(["disabled", "hover", "press", "default"]),
  subtract: PropTypes.string,
};
