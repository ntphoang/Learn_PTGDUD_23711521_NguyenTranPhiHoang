function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.anh} alt="" />
      <h3>{props.ten}</h3>
      <p>{props.gia}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
