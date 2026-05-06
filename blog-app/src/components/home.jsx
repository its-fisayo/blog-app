import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "./postCards";

function Home({posts, setPost}) {

    return (
        <div className="">
            <nav>
                <ul className="flex border-b border-gray-200 h-15 flex items-center mb-5 justify-end text-blue-500">
                    <div className="md:w-2/7  flex justify-around">
                        <li><Link to="/create"><button className="bg-blue-500 border-b border-r p-2 w-20 hover:bg-blue-200 cursor-pointer rounded-lg text-black">Post</button></Link></li>
                        <li className="p-2 hover:text-blue-200"><Link to="/">Login</Link></li>
                        <li className="p-2 hover:text-blue-200"><Link to="signup">Sign Up</Link></li>
                    </div>
                </ul>
            </nav>
            <PostCards posts={posts}/>
        </div>
    )
}

export default Home;