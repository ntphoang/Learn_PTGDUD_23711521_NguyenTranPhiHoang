import "./App.css";
import ProductCard from "./Bai1/ProductCard";
import Button from "./Bai2/Button";
import "./Bai1/ProductCard.css";
import "./Bai2/Button.css";

function App() {
  return (
    <div>
      <ProductCard
        ten="LAPTOP DELL"
        gia="20.000.000 VND"
        anh="/Anh_LaptopDell.png"
      />
      <div>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="success">Success</Button>
      </div>
    </div>
  );
}

export default App;
