import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../Bai1/countSlice.jsx";
import themeSlice, { loadTheme, saveTheme } from "../Bai2/themeSlice.jsx";

const persistedState = loadTheme();
export const store = configureStore({
  reducer: {
    count: countSlice,
    theme: themeSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveTheme({ theme: store.getState().theme });
});
