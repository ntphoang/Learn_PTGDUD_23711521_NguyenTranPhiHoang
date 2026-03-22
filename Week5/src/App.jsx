import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SearchBar from "./Bai4/SearchBar";
import PostList from "./Bai4/PostList";
import TodoForm from "./Bai5/TodoForm";
import TodoList from "./Bai5/TodoList";

function App() {
  //---------------Bài 4------------------
  // const [posts, setPosts] = useState([]);
  // const [filteredPosts, setFilteredPosts] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setFilteredPosts(data);
  //     });
  // }, []);

  // const handleSearch = (value) => {
  //   setSearch(value);
  //   const filtered = posts.filter((post) =>
  //     post.title.toLowerCase().includes(value.toLowerCase()),
  //   );
  //   setFilteredPosts(filtered);
  // };

  // return (
  //   <div className="App">
  //     <h1>Posts</h1>
  //     <SearchBar search={search} onSearch={handleSearch} />
  //     <PostList posts={filteredPosts} />
  //   </div>
  // );

  //-------------BÀI 5-----------------
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5000/todos";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => setError("Không thể tải todos"));
  }, []);

  const addTodo = async (title) => {
    setLoading(true);
    setError("");
    try {
      const newTodo = { title };
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      if (!res.ok) throw new Error("Thêm thất bại");
      const data = await res.json();
      setTodos((prev) => [...prev, data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    setError("");
    const prevTodos = [...todos];
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Xóa thất bại");
    } catch (err) {
      setError(err.message);
      setTodos(prevTodos);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <TodoForm onAdd={addTodo} loading={loading} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
