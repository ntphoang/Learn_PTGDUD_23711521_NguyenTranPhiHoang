import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../Bai1/countSlice.jsx";
import themeSlice, { loadTheme, saveTheme } from "../Bai2/themeSlice.jsx";
import userSlice from "../Bai3/userSlice.jsx";
import todoSlice from "../Bai4/todoSlice.jsx";

const persistedState = loadTheme();
export const store = configureStore({
  reducer: {
    count: countSlice,
    theme: themeSlice,
    user: userSlice,
    todo: todoSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveTheme({ theme: store.getState().theme });
});
