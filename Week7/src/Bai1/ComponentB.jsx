import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./countSlice";

export default function ComponentB() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrease())}>Giảm</button>
      <button onClick={() => dispatch(increase())}>Tăng</button>
    </div>
  );
}
