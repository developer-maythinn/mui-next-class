import React from "react";
// import Test from "./Test";

// Higher Order Component(HOC)
export const withBlueBackground = (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{ background: "blue" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const HelloWorld = () => {
  return (
    <>
      <h1>Hello World</h1>
      {/* <Test /> */}
    </>
  );
};

const HOC = withBlueBackground(HelloWorld);
export default HOC;
