import React, { useState } from "react";
import Place from "./Place";
import { useSelector } from "react-redux";

function RandomPlace() {
  const places = useSelector((state) => state.places.places);
  const [randomPlaceId, setRandomPlaceId] = useState(null);

  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length + 1) - 1;
    let randomPlaceItem = places[randomIndex];
    setRandomPlaceId(randomPlaceItem.id);
  };
  const randomPlace = randomPlaceId
    ? places.find((place) => place.id === randomPlaceId)
    : null;
  return (
    <>
      <button onClick={getRandomPlace}>Suggest Random Place</button>
      <div className="container">
        {
          randomPlace && <Place place={randomPlace} />
        }
      </div>
    </>
  );
}

export default RandomPlace;
