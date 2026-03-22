import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SearchBar from "./Bai4/SearchBar";
import PostList from "./Bai4/PostList";

function App() {
  //---------------Bài 4------------------
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <SearchBar search={search} onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
