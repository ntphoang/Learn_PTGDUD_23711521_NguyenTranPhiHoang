import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initState,
  reducers: {
    them: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    xoa: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    sua: (state, action) => {
      const {id, text} = action.payload;
      const todo = state.todos.find((t) => t.id == id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { them, xoa, sua } = todoSlice.actions;
export default todoSlice.reducer;
