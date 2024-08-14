import React, { useState } from "react";

function UseStateHook() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  const handleMode = () => {
    setDarkModeOn((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={handleMode}
        style={{ background: darkModeOn ? "red" : "blue" }}
      >
        Change Mode
      </button>
      {darkModeOn ? "This is Dark Mode" : "This is Light Mode"}
      {console.log(darkModeOn)}
    </>
  );
}

export default UseStateHook;
