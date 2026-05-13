import { useState } from "react";
import api from "../services/intersectors";
import toast from "react-hot-toast";

function Edit({post, setPost}) {
    const [showModal, setShowModal] = useState(false);
    const [edittedPost, setEdittedPost] = useState({
        title: post.title,
        description: post.description,
    });
    const [loading, setLoading] = useState(false);

    function handleModal() {
        if(showModal == false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    async function handleEdit() {
        if(edittedPost.title == "" || edittedPost.description == ""){
            toast.error("Please enter a post title and description");
            console.log("Please enter a post title and description")
        } else {
            try {
                setLoading(true);
            const res = await api.put(`/blog/${post._id}`, edittedPost);
            toast.success('Post editted successfully');
            console.log('Post editted successfully');
        } catch {
            toast.error("Unable to edit post, try again!");
            console.log("Error editting post, try again");
        } finally {
            setLoading(false);
        }
        setPost(prev => prev.map(
            item => item._id === post._id ? {
                ...item,
                title: edittedPost.title,
                description: edittedPost.description
            } : item
        ));

        setShowModal(false);
        }
    }

    return(
        <div>
            <img src="edit3.png" alt="" className="w-5 h-5" onClick={handleModal}/>
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-[#CFCFCF]/50 cursor-default">
                    <div className="w-1/1 h-1/1" onClick={handleModal}></div>
                    <div className="bg-white h-100 w-70 md:w-100 rounded-xl fixed inset-0 my-auto mx-auto flex flex-col justify-around items-center">
                        <div className="h-100 w-6/7 flex flex-col justify-around items-center">
                        <h1 className='font-script font-bold text-3xl self-start'>Edit Post</h1>
                        <form action="" className="flex flex-col justify-between w-6/7">
                            <label htmlFor="new-title" className="self-start text-bold">Title</label>
                        <input type="text" name="new-title" id="new-title" value={edittedPost.title} onChange={(e) => {setEdittedPost(prev => ({...prev, title: e.target.value}))}} placeholder="New title..." className="border-2 border-gray-200 w-1/1 px-2 h-10 rounded-sm"/>
                        <br />
                        <label htmlFor="new-description" className="self-start text-bold">Description</label>
                        <textarea name="new-description" id="new-description" value={edittedPost.description} onChange={(e) => {setEdittedPost(prev => ({...prev, description: e.target.value}))}} className="border-2 border-gray-200 w-1/1 h-30 px-2 rounded-sm resize-none" placeholder="New description..."></textarea>
                        </form>
                        <div className="w-1/1 flex justify-end self-end gap-5">
                            <button className="h-10 w-20 bg-gray-200 rounded-lg cursor-pointer"onClick={handleModal} disabled={loading}>Cancel</button>
                            <button className="h-10 w-30 bg-blue-500 rounded-lg mr-5 cursor-pointer text-white" onClick={handleEdit} disabled={loading}>{loading ? "Saving" : "Save Changes"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Edit;