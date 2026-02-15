import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DemoUseState from "./useState/DemoUseState";
import DemoUseEffect from "./useEffect/DemoUseEffect";
import DemoUseReducer from "./useReducer/DemoUseReducer";
import DemoUseRef from "./useRef/DemoUseRef";
import DemoUseMemo from "./useMemo/DemoUseMemo";
import DemoUseCallBack from "./useCallBack/DemoUseCallBack";

function App() {
  return (
    <>
      <DemoUseMemo />;
    </>
  );
}

export default App;
