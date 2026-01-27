import "./App.css";
import ProductCard from "./Bai1/ProductCard";
import Button from "./Bai2/Button";
import Alert from "./Bai3/Alert";
import LoginForm from "./Bai4/LoginForm";
import "./Bai1/ProductCard.css";
import "./Bai2/Button.css";
import "./Bai3/Alert.css";
import "./Bai4/LoginForm.css";
import { useState } from "react";


function App() {
  // --------------- Bài 3 (Buổi 1) ---------------
  // const [state, setState] = useState(null);
  // return (
  //   <>
  //     <button onClick={() => setState("success")}>Success</button>
  //     <button onClick={() => setState("warning")}>Warning</button>
  //     <button onClick={() => setState("error")}>Error</button>

  //     {state && <Alert type={state} />}
  //   </>
  // );

  // --------------- Bài 4 (Buổi 1) ---------------

  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
}

export default App;
