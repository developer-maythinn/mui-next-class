import React from "react";

function Bag({ children }) {
  return (
    <>
      <div style={{ color: "pink", backgroundColor: "green" }}>{children}</div>
    </>
  );
}

export default Bag;
