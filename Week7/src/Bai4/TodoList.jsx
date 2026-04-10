import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} text={todo.text} id={todo.id}></TodoItem>
        );
      })}
    </>
  );
}
