import React from "react";

function PromoButton(props) {
  return (
    <div>
      {props.promotion} {props.text}
    </div>
  );
}

export default PromoButton;
