/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ButtonSmall } from "../ButtonSmall";
import "./style.css";

export const Selection = ({
  property1,
  className,
  groupClassName,
  vector = "/img/vector.svg",
  group = "/img/group-10365743-1-1.svg",
  subtract = "/img/subtract-13.svg",
  divClassName,
  buttonSmallSubtract = "/img/subtract-14.svg",
  check = "/img/check-222359-1.svg",
  frame = "/img/frame.svg",
  precision = "/img/precision-4610224-1.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`SELECTION ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="frame-9">
        {["INVALID-COUPON", "selected"].includes(state.property1) && (
          <div className={`vector-wrapper ${groupClassName}`}>
            <img
              className="vector"
              alt="Vector"
              src={state.property1 === "INVALID-COUPON" ? "/img/vector-1.svg" : vector}
            />
          </div>
        )}

        {state.property1 === "default" && <img className="ellipse" alt="Ellipse" src="/img/ellipse-14.svg" />}

        <div className="frame-10">
          <div className="frame-11">
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="rectangle-5" />
                <div className="group-4">
                  <div className="overlap-group-7">
                    <img
                      className="group-5"
                      alt="Group"
                      src={
                        state.property1 === "INVALID-COUPON"
                          ? "/img/group-10365743-1-2.svg"
                          : state.property1 === "default"
                          ? "/img/group-10365743-1.svg"
                          : group
                      }
                    />
                    <img
                      className="subtract-9"
                      alt="Subtract"
                      src={
                        state.property1 === "INVALID-COUPON"
                          ? "/img/subtract-16.svg"
                          : state.property1 === "default"
                          ? "/img/subtract-11.svg"
                          : subtract
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-12">
              <p className="DUO-ULTRA">
                <span className="span">DUO </span>
                <span className="text-wrapper-7">ULTRA</span>
              </p>
              <p
                className={`text-wrapper-8 ${
                  ["INVALID-COUPON", "selected"].includes(state.property1) ? divClassName : undefined
                }`}
              >
                Play with a Grandmaster+ player
              </p>
            </div>
          </div>
          <div className="frame-13">
            <div className="frame-13">
              <p className="element-game">
                <span className="text-wrapper-9">6.99€</span>
                <span className="text-wrapper-10">/game</span>
              </p>
            </div>
            <ButtonSmall
              className="button-small-instance"
              property1="default"
              subtract={state.property1 === "default" ? "/img/subtract-12.svg" : buttonSmallSubtract}
            />
          </div>
        </div>
      </div>
      {["INVALID-COUPON", "selected"].includes(state.property1) && (
        <div className="frame-14">
          <div className="frame-15">
            <div className="group-6">
              {state.property1 === "selected" && <img className="check" alt="Check" src={check} />}

              {state.property1 === "INVALID-COUPON" && (
                <>
                  <div className="check-wrapper">
                    <img className="check" alt="Check" src="/img/check-222359-1-1.svg" />
                  </div>
                  <div className="text-wrapper-11">Ensure win</div>
                </>
              )}
            </div>
            <div className="ensure-win">
              {state.property1 === "selected" && <>Ensure win</>}

              {state.property1 === "INVALID-COUPON" && (
                <div className="frame-16">
                  <div className="text-wrapper-11">Games</div>
                  <div className="frame-17">
                    <img className="img-2" alt="Frame" src="/img/frame-1.svg" />
                    <div className="text-wrapper-12">1</div>
                    <img className="img-2" alt="Precision" src="/img/precision-4610224-1-1.svg" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="frame-18">
            <div className="frame-19">
              <div className="games">
                {state.property1 === "selected" && <>Games</>}

                {state.property1 === "INVALID-COUPON" && <>Coupon 1234</>}
              </div>
              <div className="frame-20">
                {state.property1 === "selected" && (
                  <>
                    <img className="img-2" alt="Frame" src={frame} />
                    <div className="text-wrapper-12">1</div>
                    <img className="img-2" alt="Precision" src={precision} />
                  </>
                )}

                {state.property1 === "INVALID-COUPON" && <>Apply</>}
              </div>
            </div>
            <div className="frame-21">
              {state.property1 === "selected" && (
                <>
                  <div className="text-wrapper-13">Enter Coupon</div>
                  <div className="text-wrapper-14">Apply</div>
                </>
              )}

              {state.property1 === "INVALID-COUPON" && (
                <p className="text-wrapper-55">
                  You entered an invalid code.
                  <br />
                  Please try again!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "selected",
        };
    }
  }

  if (state.property1 === "selected") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "INVALID-COUPON") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Selection.propTypes = {
  property1: PropTypes.oneOf(["selected", "INVALID-COUPON", "default"]),
  vector: PropTypes.string,
  group: PropTypes.string,
  subtract: PropTypes.string,
  buttonSmallSubtract: PropTypes.string,
  check: PropTypes.string,
  frame: PropTypes.string,
  precision: PropTypes.string,
};
