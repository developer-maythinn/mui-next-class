import React from "react";
import UseEffectHook from "./components/Hooks/UseEffectHook";
import SelectedImage from "./components/Image-components/SelectedImage";
import UseReducerShowHide from "./components/Hooks/UseReducerShowHide";
import ComponentA from "./components/Hooks/PropsDrillingAndUseContext/ComponentA";
import HOC from "./components/HOC/HOC";
import Test from "./components/HOC/Test";
import CustomHook from "./components/CustomHook/CustomHook";

function About() {
  return (
    <>
      {/* <UseEffectHook /> */}
      {/* <SelectedImage /> */}
      {/* <UseReducerShowHide /> */}
      {/* <ComponentA /> */}
      {/* <HOC /> */}
      {/* <Test /> */}
      <CustomHook />
    </>
  );
}

export default About;
