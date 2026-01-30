export default function StatusBadge(props) {
  return (
    <>
      <div>
        <p className={props.state}>Trạng thái: {props.state}</p>
      </div>
    </>
  );
}
