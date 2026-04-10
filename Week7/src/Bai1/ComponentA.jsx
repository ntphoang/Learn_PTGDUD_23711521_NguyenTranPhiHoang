import { useSelector } from "react-redux";
import countState from "./countSlice";

export default function ComponentA() {
  const count = useSelector((state) => state.count.value);
  return <h1>Count: {count}</h1>;
}
