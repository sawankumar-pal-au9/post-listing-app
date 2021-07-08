import React, { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import DisplayPosts from "./components/DisplayPosts";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <CreatePost setPosts={ setPosts } />
      <DisplayPosts posts={ posts } setPosts={ setPosts } />
    </div>
  );
}

export default App;
