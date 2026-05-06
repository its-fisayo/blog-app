import { useState } from "react";
import { Link } from "react-router-dom";
import PostCards from "./postCards";

function CreatePost({posts, setPost}) {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
        id: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        const PostToAdd = {...newPost, id: posts.length + 1};

        setPost(prev => [...prev, PostToAdd])

        setNewPost({title: "", body: "", id: ""});

        /*if(PostToAdd.title.trim() == "") {

        }*/
    }

    return (
        <div>
            <div className="md:w-3/5 lg:w-2/5 w-4/5 mx-auto bg-gray-100 border-b p-6 m-20">
                <h2>Create a Post</h2>
                <form onSubmit={handleSubmit} className='flex flex-col items-start w-4/5 px-1/10 mx-auto text-black'>
                    <label htmlFor="post-title">Title</label>
                    <input type="text" name="post-title" id="post-title"  className="border-1 w-1/1" value={newPost.title} onChange={(e) => {setNewPost(prev => ({...prev, title: e.target.value}))}}/><br />
                    <label htmlFor="post-body">Body</label>
                    <textarea name="post-body" id="post-body"  className="border-1 w-1/1" value ={newPost.body} onChange={(e) => {setNewPost(prev => ({...prev, body: e.target.value}))}}></textarea> <br />
                    <button type="submit" className="bg-blue-500 border-b border-r p-2 hover:bg-blue-200 cursor-pointer rounded-lg self-center">Add Post</button>
                </form>
                <p className="text-blue-500 text-xs hover:text-blue-200"><Link to="/home">Return home</Link></p>
            </div>
        </div>
    )
}

export default CreatePost;