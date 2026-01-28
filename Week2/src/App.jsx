import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Bai1/StudentInfo.css";
import Header from "./Bai1/Header";
import Footer from "./Bai1/Footer";
import StudentInfo from "./Bai1/StudentInfo";

function App() {
  // ---------------- Buoi2_Bai1_ReactJS ----------------
  // return(
  //   <>
  //     <Header/>
  //     <StudentInfo hoten="Nguyễn Trần Phi Hoàng"
  //     mssv="23711521"
  //     lop="DHKTPM19B"></StudentInfo>
  //     <Footer></Footer>
  //   </>
  // );

  // ---------------- Buoi2_Bai2_ReactJS ----------------
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>Count: {count}</p>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => Math.max(0, count - 1))}>
        -
      </button>
      <button onClick={() => setCount((count) => 0)}>Restart</button>
    </>
  );
}

export default App;
