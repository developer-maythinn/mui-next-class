import React, { useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = React.createContext();

function ComponentA() {
  const [username, setUsername] = useState("MT Coding");
  return (
    <>
      <div>ComponentA</div>
      <UserContext.Provider value={username}>
        <ComponentB />
      </UserContext.Provider>
    </>
  );
}

export default ComponentA;
