function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.anh} />
      <h3>{props.ten}</h3>
      <p>{props.gia}</p>
      <button>Add to card</button>
    </div>
  );
}
export default ProductCard;
