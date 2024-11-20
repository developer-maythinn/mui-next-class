import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log("action.payload", action.payload);
      state.push({ id: Date.now(), text: action.payload });
    },
  },
});

export const { addItem } = todoSlice.actions;
export default todoSlice.reducer;
