import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};

const countSlice = createSlice({
  name: "countSlice",
  initialState: initState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = countSlice.actions;
export default countSlice.reducer;
