import { useState, useEffect } from "react";
import CreatePost from "./createPost";
import Delete from "./delete";
import Edit from "./edit";

function PostCards({posts = [], setPost}) {

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap md:w-6/7 px-[3.571428571%] gap-x-[7.142857143%]">
                {posts.map(post => (
                    <div key={post.id} className="md:w-2/7 lg:h-70 w-6/7 h-80 border-b-1 bg-[#0F344F]/40 font-sans sm:w-4/7 flex flex-col justify-around px-4 mb-15 rounded-md">
                        <h3 className="h-15 font-bold w-7/7 m-auto my-3">{post.title}</h3>
                        <div className="h-40 overflow-hidden"><p>{post.body}</p></div>
                        <div className="h-10 w-1/1 flex justify-end items-center"><div className="cursor-pointer mx-2"><Edit post={post} setPost={setPost}/></div><div className="cursor-pointer"><Delete post={post} setPost={setPost}/></div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostCards;