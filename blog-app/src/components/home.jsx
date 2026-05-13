import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostCards from "./postCards";

function Home({posts, setPost, loading, err}) {
        const navigate = useNavigate();
        const handleLogout = () => {
            localStorage.removeItem("token");
            navigate("/")
        }

    return (
        <div className="flex flex-col min-h-screen bg-[#fdfdfd]">
            <nav>
                <ul className="flex border-b border-gray-200 bg-white h-15 flex items-center mb-10 justify-end text-[#0F344F] shadow-sm">
                    <img src="favicon4.png" alt="logo" className="w-10 h-10 mr-auto ml-5 sm:ml-10"/>
                    <div className="md:w-3/11 lg:w-2/11 sm:w-1/3 w-1/2 flex justify-around">
                        <li onClick={handleLogout} className="p-2 hover:text-blue-500 hover:underline decoration-3 underline-offset-23 cursor-pointer">Log Out</li>
                        <li><Link to="/create"><button className="bg-blue-500 text-white border-b border-r p-2 w-20 hover:bg-blue-500/20 cursor-pointer rounded-lg text-black">Post</button></Link></li>
                    </div>
                </ul>
            </nav>
            {loading ? (
                <div>Loading posts...</div>
            ) : err ? (
                <div>{err}</div>
            ) : (
            <PostCards posts={posts} setPost={setPost}/>)}
            <div className="w-15 h-15 bg-blue-500 text-white text-5xl text-center rounded-full fixed bottom-20 right-20 hover:bg-blue-500/60 cursor-pointer"><Link to="/create"><h1>+</h1></Link></div>
            <footer className="bg-[#0F344F]/80 text-white h-15 mt-auto flex justify-center pt-4.5"><p>&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p></footer>
        </div>
    )
}

export default Home;