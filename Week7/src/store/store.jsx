import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../Bai1/countSlice.jsx";

export const store = configureStore({
  reducer: {
    count: countSlice,
  },
});

