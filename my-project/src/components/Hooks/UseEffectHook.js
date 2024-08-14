import React, { useState, useEffect } from "react";

// function UseEffectHook() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//     </>
//   );
// }

function UseEffectHook() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   }, [count]);

  return (
    <>
      <h1>Rendered {count}</h1>
    </>
  );
}

export default UseEffectHook;
