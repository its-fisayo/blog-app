import { useState, useEffect } from 'react'
import React from 'react';
import Login from "./components/login";
import Signup from './components/signup';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/createPost';

function App() {
  const [posts, setPost] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json();
            setPost(data);
         }
         fetchPosts();
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home posts={posts} setPost={setPost}/>}/>
        <Route path="/create" element={<CreatePost posts={posts} setPost={setPost}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
