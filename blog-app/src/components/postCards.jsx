import { useState, useEffect } from "react";
import CreatePost from "./createPost";

function PostCards({posts = []}) {

    return (
        <div className="flex flex-wrap justify-around">
            {posts.map(post => (
                <div key={post.id} className="md:w-2/5 lg:h-60 w-6/7 h-70 border-b-1 mb-3 bg-gray-100 font-sans sm:w-4/7 flex flex-col justify-around px-4 mb-10">
                    <h3 className="font-bold w-5/7 m-auto my-3 ">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostCards;