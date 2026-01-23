import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./ProductCard";
import "./ProductCard.css";
import laptopImg from "./assets/Anh_LaptopDell.png";
function App() {
  return (
    <div>
      <ProductCard ten="Laptop DELL" gia="20.000.000" anh={laptopImg}></ProductCard>
    </div>
  );
}

export default App;
