import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ButtonLarge } from "../ButtonLarge";
import "./style.css";

export const Navigation = ({
  active = true,
  className = "NAVIGATION",
  label  = "home",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    active: active || false,
    label: 'home',
  });

  function reducer(state, action) {
    switch (action) {
        case "home":
        return {
            ...state,
            active: true,
            label: 'home',
        };
        
        case "sign-in":
        return {
            ...state,
            active: true,
            label: 'sign-in',
        };

        case "default": 
        return {
            ...state,
            active: label === 'home',
            label: '',
        };
        
        case "staff":
        return {
            ...state,
            active: true,
            label: 'staff',
        };

        case "about":
        return {
            ...state,
            active: true,
            label: 'about',
        };
    }

    return state;
    }

  return (
    <div className={className}>
        <div className="frame-25">
            <img className="LOGO-2" alt="Logo" src="/img/logo-1-3.svg" />
            <div className="group-8">
                <div className="group-9">
                    <div className="header"
                        onMouseEnter={() => {
                            dispatch('home');
                        }}
                        onMouseLeave={() => {
                            dispatch('default');
                        }}
                    >
                        <div className={state.active && state.label === 'home' ? "home" : "home-not-active"}>HOME</div>
                        <img 
                            className={state.active && state.label === 'home' ? "line-home" : "line-home-disabled"} 
                            alt="Line" 
                            src="/img/line-2-1.svg" 
                        />
                    </div>
                    <div className="header-2"
                        onMouseEnter={() => {
                            dispatch('staff');
                        }}
                        onMouseLeave={() => {
                            dispatch('default');
                        }}
                    >
                        <div className={state.active && state.label === 'staff' ? "staff" : "staff-not-active"}>STAFF</div>
                        <img
                            className={state.active && state.label === 'staff' ? "line-staff" : "line-staff-disabled"} 
                            alt="Line" 
                            src="/img/line-2-1.svg" 
                        />
                    </div>
                    <div className="header-3"
                        onMouseEnter={() => {
                            dispatch('about');
                        }}
                        onMouseLeave={() => {
                            dispatch('default');
                        }}
                    >
                        <div className={state.active && state.label === 'about' ? "about" : "about-not-active"}>ABOUT</div>
                        <img 
                            className={state.active && state.label === 'about' ? "line-about" : "line-about-disabled"} 
                            alt="Line" 
                            src="/img/line-2-1.svg" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="frame-26">
            <div 
                className="sign-in"
                // className={state.active && state.label === 'sign-in' ? "sign-in" : "sign-in-not-active"}
                onMouseEnter={() => {
                    dispatch("sign-in");
                }}
                onMouseLeave={() => {
                    dispatch("default");
                }}
            >
                Sign In
                <img
                    className={state.active && state.label === 'sign-in' ? "line-sign-in" : "line-sign-in-disabled"} 
                    alt="Line" 
                    src="/img/line-2-1.svg" 
                />
            </div>
            <ButtonLarge className="button-large-instance" hover="default" subtract="/img/subtract-29.svg" />
        </div>
    </div>
  );
};

Navigation.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string
};
