import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Place from "./Place";
import RandomPlace from "./RandomPlace";
import { markVisited, unmarkAsVisited } from "../redux/placesSlice";

function Places() {
  const places = useSelector((state) => state.places.places);

  return (
    <>
      <RandomPlace />
      <h1 style={{ color: "#fff" }}>All Places</h1>
      <div className="container">
        {places?.length > 0 &&
          places.map((place) => (
            <React.Fragment key={place.id}>
              <Place place={place}  />
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default Places;
