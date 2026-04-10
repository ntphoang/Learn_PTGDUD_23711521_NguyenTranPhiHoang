import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./Bai1/countSlice";
import { change } from "./Bai2/themeSlice";
import ComponentA from "./Bai1/componentA";
import ComponentB from "./Bai1/componentB";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <div className={theme}>
      <p>Theme: {theme}</p>
      <button onClick={() => dispatch(change())}>Change theme</button>
    </div>
  );
}

export default App;
