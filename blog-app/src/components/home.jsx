import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "./postCards";

function Home({posts, setPost}) {

    return (
        <div className="flex flex-col min-h-screen">
            <nav>
                <ul className="flex border-b border-gray-200 h-15 flex items-center mb-10 justify-end text-[#0F344F]">
                    <img src="favicon3.png" alt="logo" className="w-10 h-10 mr-auto ml-5 sm:ml-10"/>
                    <div className="md:w-2/7  flex justify-around">
                        <li><Link to="/create"><button className="bg-[#0F344F]/40 text-white border-b border-r p-2 w-20 hover:bg-[#0F344F]/20 cursor-pointer rounded-lg text-black">Post</button></Link></li>
                        <li className="p-2 hover:text-[#0F344F]/30"><Link to="/">Login</Link></li>
                        <li className="p-2 hover:text-[#0F344F]/30"><Link to="signup">Sign Up</Link></li>
                    </div>
                </ul>
            </nav>
            <PostCards posts={posts} setPost={setPost}/>
            <footer className="bg-[#0F344F]/80 text-white h-10 mt-auto flex justify-center pt-2"><p>&copy; {new Date().getFullYear()} Trying it out</p></footer>
        </div>
    )
}

export default Home;