import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Bai1/StudentInfo.css";
import "./Bai4/StatusBadge.css";
import Header from "./Bai1/Header";
import Footer from "./Bai1/Footer";
import StudentInfo from "./Bai1/StudentInfo";
import StatusBadge from "./Bai4/StatusBadge";

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
  // const [count, setCount] = useState(0);
  // return (
  //   <>
  //     <div>
  //       <p>Count: {count}</p>
  //     </div>
  //     <button onClick={() => setCount((count) => count + 1)}>+</button>
  //     <button onClick={() => setCount((count) => Math.max(0, count - 1))}>
  //       -
  //     </button>
  //     <button onClick={() => setCount((count) => 0)}>Restart</button>
  //   </>
  // );

  // ---------------- Buoi2_Bai3_ReactJS ----------------
  // const [ten, setTen] = useState("");
  // const [email, setEmail] = useState("");
  // return (
  //   <>
  //     <form action="">
  //       <input
  //         type="text"
  //         placeholder="Tên"
  //         onChange={(e) => setTen(e.target.value)}
  //         value={ten}
  //       />
  //       <input
  //         type="text"
  //         placeholder="Email"
  //         onChange={(e) => setEmail(e.target.value)}
  //         value={email}
  //       />
  //     </form>
  //     <h3>THÔNG TIN CỦA BẠN</h3>
  //     <p>Tên: {ten}</p>
  //     <p>Email: {email}</p>
  //   </>
  // );

  // ---------------- Buoi2_Bai4_ReactJS ----------------
  const [state, setState] = useState(null);
  return (
    <>
      <StatusBadge state={state}></StatusBadge>
      <button onClick={() => setState("online")}>Online</button>
      <button onClick={() => setState("offline")}>Offline</button>
      <button onClick={() => setState("busy")}>Busy</button>
    </>
  );
}

export default App;
