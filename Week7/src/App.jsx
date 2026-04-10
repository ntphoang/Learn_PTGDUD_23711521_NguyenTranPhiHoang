import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./Bai1/countSlice";
import { change } from "./Bai2/themeSlice";
import { login, logout } from "./Bai3/userSlice";
import ComponentA from "./Bai1/componentA";
import ComponentB from "./Bai1/componentB";
import Component3A from "./Bai3/Component3A";
import Component3B from "./Bai3/Component3B";
import TodoInput from "./Bai4/TodoInput";
import TodoList from "./Bai4/TodoList";

function App() {
  return (
    <div>
      <h1>TODO APP</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
