import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "./postCards";

function Home({posts, setPost}) {

    return (
        <div>
            <nav>
                <ul className="flex border-b border-gray-200 h-15 flex items-center mb-5 justify-end">
                    <div className="w-2/9 flex justify-around">
                        <li><button className="bg-blue-200 border-b border-r"><Link to="/create">Create a Post</Link></button></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="signup">Sign Up</Link></li>
                    </div>
                </ul>
            </nav>
            <PostCards posts={posts}/>
        </div>
    )
}

export default Home;