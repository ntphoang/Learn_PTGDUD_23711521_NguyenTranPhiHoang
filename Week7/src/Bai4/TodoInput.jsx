import { useState } from "react";
import { useDispatch } from "react-redux";
import { them } from "./todoSlice";
export default function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(them(text));
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
