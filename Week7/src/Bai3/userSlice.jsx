import { createSlice } from "@reduxjs/toolkit";

const initState = {
  username: "",
  password: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: () => {
      return initState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
