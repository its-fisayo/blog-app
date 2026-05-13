import { useState, useEffect } from 'react'
import React from 'react';
import Login from "./components/login";
import Signup from './components/signup';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/createPost';
import api from './services/intersectors';

function App() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

    useEffect(() => {
      const token = localStorage.getItem("token");
      async function fetchPosts() {
          try {
            setLoading(true)
            const res = await api.get("/blog");
            const data = res.data;
            console.log("Blogs fetched successfully", res.data);

            if (res.status === 200) {
            setPost(data.blogs || []);
            }
         } catch (error) {
          console.log(error);
          setErr("Failed to load posts.")
         } finally {
          setLoading(false);
         }
          }
      if(token) {
         fetchPosts();
      }
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home posts={posts} setPost={setPost} loading={loading} err={err}/>}/>
        <Route path="/create" element={<CreatePost posts={posts} setPost={setPost}/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
