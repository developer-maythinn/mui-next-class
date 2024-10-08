import React from "react";
import { useParams } from "react-router-dom";
import InputFocus from "../components/Hooks/UseRef/InputFocus";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";
import Clock from "../components/Hooks/UseEffect/Clock";

function HookDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      {id === "useRef" ? (
        <>
          <InputFocus />
          <VideoPlayer />
        </>
      ) : id === "useEffect" ? (
        <>
         <Clock />
        </>
      )  : (
        <></>
      )}
    </>
  );
}

export default HookDetail;
