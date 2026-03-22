import { useState } from "react";

export default function TodoForm({ onAdd, loading }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Thêm todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Đang thêm..." : "Thêm"}
      </button>
    </form>
  );
}
