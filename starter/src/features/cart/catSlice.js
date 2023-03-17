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
  reducers: {
    clearCat: (state) => {
      state.legs = "white";
      state.loading = !state.loading;
      console.log(state);
    },
  },
});

// console.log(catSlice);
export const { clearCat } = catSlice.actions;

export default catSlice.reducer;
