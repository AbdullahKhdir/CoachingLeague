/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Faq = ({ property1, className, unchecked = "/img/unchecked-121718-1.svg" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "close",
  });

  return (
    <div
      className={`FAQ property-1-0-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="frame-7">
        {["close", "hover"].includes(state.property1) && <p className="text-wrapper-3">WHAT IF I LOSE THE GAME?</p>}

        {state.property1 === "open" && (
          <>
            <p className="text-wrapper-4">WHAT IF I LOSE THE GAME?</p>
            <p className="there-s-an-option">
              There&#39;s an option called &#34;Ensure win&#34; which would compensate a loss, otherwise
              <br />
              we can&#39;t guarantee outcome of your game since there are too many factors involved.
              <br /> <br />
              However, considering that you have one of the best players on your side, higher <br />
              win rate using our service is guaranteed.
            </p>
          </>
        )}
      </div>
      <img
        className="add"
        alt="Add"
        src={
          state.property1 === "hover"
            ? "/img/add-359831-1-1.svg"
            : state.property1 === "open"
            ? unchecked
            : "/img/add-359831-1.svg"
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "close") {
    switch (action) {
      case "click":
        return {
          property1: "open",
        };

      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "close",
        };

      case "click":
        return {
          property1: "open",
        };
    }
  }

  if (state.property1 === "open") {
    switch (action) {
      case "click":
        return {
          property1: "close",
        };
    }
  }

  return state;
}

Faq.propTypes = {
  property1: PropTypes.oneOf(["open", "close", "hover"]),
  unchecked: PropTypes.string,
};
