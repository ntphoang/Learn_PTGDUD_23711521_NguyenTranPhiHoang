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

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      Username{" "}
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      Password{" "}
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() =>
          dispatch(
            login({
              username: username,
              password: password,
            }),
          )
        }
      >
        Login
      </button>
      <div>
        <Component3A></Component3A>
        <Component3B></Component3B>
      </div>
    </div>
  );
}

export default App;
