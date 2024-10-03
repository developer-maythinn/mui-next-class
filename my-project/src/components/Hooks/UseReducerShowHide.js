import React, { useReducer, useState } from "react";

const initialState = {
  showText: false,
  changeStyle: false,
};
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_STYLE = "CHANGE_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showText: false,
      };

    case SHOW_TEXT:
      return {
        ...state,
        showText: true,
      };

    case CHANGE_STYLE:
      return {
        ...state,
        changeStyle: !state.changeStyle,
      };

    default:
      return state;
  }
}

function UseReducerShowHide() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showText, changeStyle } = state;
 
  return (
    <>
      {showText ? (
        <h3
          style={{
            background: showText && changeStyle ? "blueViolet" : "#fff",
          }}
        >
          Text
        </h3>
      ) : null}
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show</button>
      <button onClick={() => dispatch({ type: CHANGE_STYLE })}>
        Toggle Change Styles
      </button>
    </>
  );
}

export default UseReducerShowHide;
