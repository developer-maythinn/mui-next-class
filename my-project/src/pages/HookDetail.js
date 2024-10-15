import React from "react";
import { useParams } from "react-router-dom";
import InputFocus from "../components/Hooks/UseRef/InputFocus";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";
import Clock from "../components/Hooks/UseEffect/Clock";
import ProductSearch from "../components/Hooks/UseMemo/ProductSearch";
import WithoutUseMemo from "../components/Hooks/UseMemo/WithoutUseMemo";
import Counter from "../components/Hooks/UseCallback/Counter";

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
      ) : id === "useMemo" ? (
        <>
          <ProductSearch />
          <h3>Without useMemo</h3>
          <WithoutUseMemo />
        </>
      ) : id === "useCallback" ? (
        <>
          <Counter />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default HookDetail;
