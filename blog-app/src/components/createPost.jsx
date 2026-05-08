import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostCards from "./postCards";

function CreatePost({posts, setPost}) {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        id: ""
    });
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if((newPost.title.trim() == "") || (newPost.body.trim() == "")) {
            alert("Enter a post title and body!");
        } else {
        const PostToAdd = {...newPost, id: posts.length + 1};

        setPost(prev => [...prev, PostToAdd]);
        setNewPost({title: "", body: "", id: ""});

        navigate("/home");
        }
    }

    return (
        <div className="bg-[#0F344F]/10 h-screen pt-20">
            <div className="md:w-3/5 lg:w-2/5 w-4/5 bg-white mx-auto border-b p-6 rounded-lg flex flex-col items-center">
                <h2 className="font-script font-bold text-3xl">Create a Post</h2><br />
                <form onSubmit={handleSubmit} className='flex flex-col items-start w-4/5 px-1/10 mx-auto text-black'>
                    <label htmlFor="post-title">Title</label>
                    <input type="text" name="post-title" id="post-title"  className="bg-white border w-1/1 rounded-sm" value={newPost.title} onChange={(e) => {setNewPost(prev => ({...prev, title: e.target.value}))}}/><br />
                    <label htmlFor="post-body">Description</label>
                    <textarea name="post-body" id="post-body"  className="bg-white border w-1/1 h-20 rounded-sm" value ={newPost.body} onChange={(e) => {setNewPost(prev => ({...prev, body: e.target.value}))}}></textarea> <br />
                    <button type="submit" className="bg-[#0F344F] text-white hover:bg-[#0F344F]/40 hover:text-black border-b border-r p-2 w-30 cursor-pointer self-center rounded-lg">Add Post</button>
                </form>
                <p className="text-[#0F344F]/60 active:text-[#0F344F]/40"><Link to="/home">Return home</Link></p>
            </div>
        </div>
    )
}

export default CreatePost;