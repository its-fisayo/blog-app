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
    }

    return (
        <div>
            <h2>Create a Post</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="post-title">Title</label><br />
            <input type="text" name="post-title" id="post-title"  className="border-1" value={newPost.title} onChange={(e) => {setNewPost(prev => ({...prev, title: e.target.value}))}}/><br />
            <label htmlFor="post-body">Body</label><br />
            <textarea name="post-body" id="post-body"  className="border-1" value ={newPost.body} onChange={(e) => {setNewPost(prev => ({...prev, body: e.target.value}))}}></textarea> <br /><br />
            <button type="submit" className="bg-blue-200 border-b border-r">Add Post</button>
            </form>

            <p><Link to="/">Return home</Link></p>
        </div>
    )
}

export default CreatePost;