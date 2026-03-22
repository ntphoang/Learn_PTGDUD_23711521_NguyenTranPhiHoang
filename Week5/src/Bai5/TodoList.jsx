export default function TodoList({ todos, onDelete }) {
  if (!todos.length) return <p>Chưa có todo nào</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} <button onClick={() => onDelete(todo.id)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
}
