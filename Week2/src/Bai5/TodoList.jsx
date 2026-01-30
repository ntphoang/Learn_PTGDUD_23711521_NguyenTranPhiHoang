import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}></TodoItem>
      ))}
    </ul>
  );
}
