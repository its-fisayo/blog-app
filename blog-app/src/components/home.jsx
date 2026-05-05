import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "./postCards";

function Home({posts, setPost}) {

    return (
        <div>
            <button>
                <Link to="/create">Create a Post</Link>
            </button>
            <PostCards posts={posts}/>
        </div>
    )
}

export default Home;