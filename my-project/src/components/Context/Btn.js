import React, { useState, useContext } from "react";
import { Context } from "../../App";

function Btn() {
  const [signedIn, setSignedIn] = useContext(Context);
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {signedIn ? "Signed out" : "Signed In"}
    </button>
  );
}

export default Btn;
