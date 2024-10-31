import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [
    {
      id: 1,
      name: "Place 1",
      image:
        "https://images.pexels.com/photos/257499/pexels-photo-257499.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
    {
      id: 2,
      name: "Place 2",
      image:
        "https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
    {
      id: 3,
      name: "Place 3",
      image:
        "https://images.pexels.com/photos/1630114/pexels-photo-1630114.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
    {
      id: 4,
      name: "Place 4",
      image:
        "https://images.pexels.com/photos/29153527/pexels-photo-29153527/free-photo-of-serene-lakefront-cabin-in-bolu-s-lush-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
    {
      id: 5,
      name: "Place 5",
      image:
        "https://images.pexels.com/photos/1637780/pexels-photo-1637780.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
    {
      id: 6,
      name: "Place 6",
      image:
        "https://images.pexels.com/photos/441585/pexels-photo-441585.jpeg?auto=compress&cs=tinysrgb&w=600",
      visited: false,
    },
  ],
};
const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    markVisited: (state, action) => {
      const place = state.places.find((place) => place.id === action.payload);
      if (place) place.visited = true;
    },
    unmarkAsVisited: (state, action) => {
      const place = state.places.find((place) => place.id === action.payload);
      if (place) place.visited = false;
    },
  },
});

export const { markVisited, unmarkAsVisited } = placesSlice.actions;
export default placesSlice.reducer;
