import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { markVisited, unmarkAsVisited } from "../redux/placesSlice";

function Place({ place }) {
  const dispatch = useDispatch();

  const toggleVisitedStatus = (id, visited) => {
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markVisited(id));
    }
  };
  console.log("place.visited", place.visited);
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={place.image} alt={"img"} />
          <h3>{place.name}</h3>
          <p>{place.description}</p>
          <p className="visited">{place.visited ? "Visited" : "Not Visited"}</p>
          <div className="btn-gp">
            <button
              onClick={() => toggleVisitedStatus(place.id, place.visited)}
            >
              {place.visited ? "Unmark as Visited" : "Mark as Visited"}
            </button>
            <Link to={`/places/${place.id}`}>
              <button>View Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Place;
