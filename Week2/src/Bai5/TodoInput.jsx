import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  function handleAdd() {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  }
  return (
    <>
      <input
        type="text"
        placeholder="Nhập việc mới"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
