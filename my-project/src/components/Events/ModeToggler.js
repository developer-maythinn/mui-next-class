import React from "react";

function ModeToggler() {
  let darkMode = false;
  const handleMode = () => {
    darkMode = !darkMode;
    if (darkMode) {
      console.log("Dark Mode");
    } else {
      console.log("Light Mode");
    }
  };
  return (
    <div>
      <button onClick={handleMode}>Change Mode</button>
    </div>
  );
}

export default ModeToggler;
