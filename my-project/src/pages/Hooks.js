import React from "react";
import { Link } from "react-router-dom";

function Hooks() {
  return (
    <>
      <ul>
        <li>
          <Link to="/hooks/useRef">Use Ref</Link>
        </li>
        <li>
          <Link to="/hooks/useEffect">Use Effect</Link>
        </li>
      </ul>
    </>
  );
}

export default Hooks;
