import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: initState,
  reducers: {
    change: (state) => {
      state.value == "light" ? (state.value = "dark") : (state.value = "light");
    },
  },
});

export const loadTheme = () => {
  try {
    const serialState = localStorage.getItem("themeState");
    if (serialState === null) return undefined;
    return JSON.parse(serialState);
  } catch (error) {
    return undefined;
  }
};

export const saveTheme = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("themeState", serialState);
  } catch (error) {
    console.log(error);
  }
};

export const { change } = themeSlice.actions;
export default themeSlice.reducer;
