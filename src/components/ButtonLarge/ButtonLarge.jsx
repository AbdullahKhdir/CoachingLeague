import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const ButtonLarge = ({
  hover,
  className,
  subtract = "/img/subtract-7.svg",
  text = "CREATE ACCOUNT",
  subtractClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    hover: hover || "default",
  });

  return (
    <div
      className={`button-large hover-${state.hover} ${className}`}
      onMouseLeave={() => {
        dispatch("on_leave");
      }}
      onHov
      onMouseEnter={() => {
        dispatch("on_enter");
      }}
      onMouseDown={() => {
        dispatch("on_mouse_down");
      }}
      onMouseUp={() => {
        dispatch("on_enter");
      }}
    >
      <img
        className={`subtract-2 ${subtractClassName}`}
        alt="Subtract"
        src={
          state.hover === "hover"
            ? "/img/subtract-8.svg"
            : state.hover === "press"
            ? "/img/subtract-9.svg"
            : state.hover === "disabled"
            ? "/img/subtract-10.svg"
            : subtract
        }
      />
      <div className="CREATE-ACCOUNT">{text}</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "on_enter":
      return {
        ...state,
        hover: "hover",
      };

    case "on_leave":
    case "on_mouse_up":
      return {
        ...state,
        hover: "default",
      };
    
    case "on_mouse_down":
      return {
        ...state,
        hover: "press",
      };
  }

  return state;
}

ButtonLarge.propTypes = {
  hover: PropTypes.oneOf(["disabled", "hover", "press", "default"]),
  subtract: PropTypes.string,
  text: PropTypes.string,
};
