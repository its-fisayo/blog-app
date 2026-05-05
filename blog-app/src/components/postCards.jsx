import { useState, useEffect } from "react";
import CreatePost from "./createPost";

function PostCards({posts = []}) {

    return (
        <div className="flex flex-wrap justify-around">
            {posts.map(post => (
                <div key={post.id} className="w-2/5 h-50 border-2 mb-3 bg-gray-100 font-sans">
                    <h3 className="font-bold w-100 m-auto my-3 text-lg">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostCards;