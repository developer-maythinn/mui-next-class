import React from "react";
import Place from "../components/Place";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function PlaceDetail() {
  const { id } = useParams();
 const navigate = useNavigate();
  const place = useSelector(state => state.places.places.find(place => place.id === parseInt(id)))
  console.log(place)
  return (
    <>
      <h1>Historical Places</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <div className="container">
        <Place place={place} />
        </div>
    </>
  );
}

export default PlaceDetail;
