import { useState, useEffect } from "react";
import CreatePost from "./createPost";
import Delete from "./delete";
import Edit from "./edit";

function PostCards({posts = [], setPost}) {
    const [showModal, setShowModal] = useState(false);

    function handleModal(){
        if(showModal == false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap md:w-6/7 px-[3.571428571%] gap-x-[2.142857143%]">
                {posts.map(post => (
                    <div key={post._id} className="lg:w-5/16 md:w-5/11 sm:w-4/7 mx-auto lg:mx-0 md:h-70 w-6/7 h-80 cursor-pointer hover:border-3 hover:shadow-xl active:shadow-none transition-shadow bg-white border-2 border-gray-200 font-sans flex flex-col justify-around px-4 mb-5 rounded-md">
                        <h3 className="h-15 font-bold w-7/7 m-auto my-3">{post.title}</h3>
                        <div className="h-40 overflow-hidden"><p>{post.description}</p></div>
                        <div className="h-10 w-1/1 flex justify-end items-center"><div className="cursor-pointer mx-2 w-8 h-8 flex justify-center items-center border-2 border-gray-200 rounded-sm"><Edit post={post} setPost={setPost}/></div><div className="cursor-pointer w-8 h-8 flex justify-center items-center border-2 border-gray-200 rounded-sm"><Delete post={post} setPost={setPost}/></div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostCards;