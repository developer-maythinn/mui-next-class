import React from "react";
import PromoButton from "./PromoButton";

function PromoHeader(props) {
  return <PromoButton promotion={props.promotion} text={props.text} />;
}

export default PromoHeader;
