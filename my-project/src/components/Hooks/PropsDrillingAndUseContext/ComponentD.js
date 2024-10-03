import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <>
      <div>ComponentD</div>
      <h1>{user}</h1>
    </>
  );
}

export default ComponentD;
