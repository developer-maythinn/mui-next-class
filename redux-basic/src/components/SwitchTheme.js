import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function SwitchTheme({ children }) {
  const theme = useSelector((state) => state.theme);
  let isLightMode = theme === "light";
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          background: isLightMode ? "#fff" : "#333",
          color: isLightMode ? "#000" : "#fff",
          height: "100vh",
        }}
      >
        <h1>{isLightMode ? "Light Theme" : "Dark Theme"}</h1>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
        {children}
      </div>
    </>
  );
}

export default SwitchTheme;
