import React from "react";
import PromoHeader from "./PromoHeader";
export const promoContext = React.createContext();

function Promo() {
  const promotion = "50%";
  const text = "Percent";
  return <PromoHeader promotion={promotion} text={text} />;
}

export default Promo;
