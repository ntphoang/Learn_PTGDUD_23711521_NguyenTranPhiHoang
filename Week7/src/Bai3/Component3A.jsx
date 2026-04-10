import { useSelector } from "react-redux";

export default function Component3A() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>Component 3A</h1>
      <p>Username: {user.username}</p>
    </div>
  );
}
