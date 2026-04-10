import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./Bai1/countSlice";
import ComponentA from "./Bai1/componentA";
import ComponentB from "./Bai1/componentB";

function App() {
  return (
    <div>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </div>
  );
}

export default App;
