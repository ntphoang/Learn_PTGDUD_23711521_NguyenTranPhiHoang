import "./App.css";
import ProductCard from "./Bai1/ProductCard";
import Button from "./Bai2/Button";
import Alert from "./Bai3/Alert";
import "./Bai1/ProductCard.css";
import "./Bai2/Button.css";
import "./Bai3/Alert.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(null);
  return (
    <>
      <button onClick={() => setState("success")}>Success</button>
      <button onClick={() => setState("warning")}>Warning</button>
      <button onClick={() => setState("error")}>Error</button>

      {state && <Alert type={state} />}
    </>
  );
}

export default App;
