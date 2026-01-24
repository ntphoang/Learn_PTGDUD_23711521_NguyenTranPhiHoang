function Button(props) {
  return (
    <div>
      <button className={`btn btn-${props.type}`}>{props.children}</button>
    </div>
  );
}
export default Button;
