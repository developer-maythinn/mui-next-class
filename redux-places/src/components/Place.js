import React from "react";
import { Link } from "react-router-dom";

function Place({ place }) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={place.image} alt={"img"} />
          <h3>{place.name}</h3>
          <p>{place.visited ? "Visited" : "Not Visited"}</p>

          <div className="btn-gp">
            <button>
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
