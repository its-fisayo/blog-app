import { useState, useEffect } from "react";
import CreatePost from "./createPost";

function PostCards({posts = []}) {

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>{post.id}</p>
                </div>
            ))}
        </div>
    )
}

export default PostCards;