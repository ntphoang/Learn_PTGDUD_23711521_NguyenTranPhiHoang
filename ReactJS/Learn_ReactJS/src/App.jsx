import "./App.css";
import ProductCard from "./Bai1/ProductCard";
import "./Bai1/ProductCard.css";

function App() {
  return (
    <div>
      <ProductCard
        ten="LAPTOP DELL"
        gia="20.000.000 VND"
        anh="/Anh_LaptopDell.png"
      />
    </div>
  );
}

export default App;
