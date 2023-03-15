import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eyes: "red",
  legs: "white",
  tails: 2,
  loading: true,
};

const catSlice = createSlice({
  name: "cat",
  initialState,
});

console.log(catSlice);

export default catSlice.reducer;
