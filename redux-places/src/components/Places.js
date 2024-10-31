import React from "react";
import { useSelector } from "react-redux";
import Place from "./Place";

function Places() {
  const places = useSelector((state) => state.places.places);
  console.log(places);
  return(
    <>
        <h1>All Places</h1>
        <div className="container">
            {
                places?.length > 0 && places.map(place => (
                    <React.Fragment key={place.id}>
                        <Place place={place} />
                    </React.Fragment>
                ))
            }
        </div>
    </>
  )
}

export default Places;
