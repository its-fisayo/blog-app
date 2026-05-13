import { useState } from "react";
import api from "../services/intersectors";
import toast from "react-hot-toast";

function Delete({post, setPost}) {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleModal() {
        if(showModal == false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    async function handleDelete() {
        try {
            setLoading(true);
            const res = await api.delete(`/blog/${post._id}`);
            toast.success("Post deleted successfully!")
            console.log("Post deleted successfully!");
        } catch(error){
            toast.error("Error deleting post, try again");
            console.log("Error deleting post, try again", error)
        } finally {
            setLoading(false);
        }
        setPost(prev => prev.filter(item => item._id !== post._id));
    }

    return(
        <div>
            <img src="delete.png" alt="" className="w-8 h-5" onClick={handleModal}/>
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-[#CFCFCF]/50 cursor-default">
                    <div className="w-1/1 h-1/1" onClick={handleModal}></div>
                    <div className="bg-white h-80 w-100 rounded-xl fixed inset-0 my-auto mx-auto flex flex-col justify-around items-center">
                        <div className="h-20 w-20 bg-red-200 rounded-full flex justify-center">
                            <img src="/delete.png" alt="" className="mx-auto my-auto h-8"/>
                        </div>
                        <h1 className='font-script font-bold text-3xl'>Delete Post?</h1>
                        <div className="text-center">
                            <p>Are you sure you want to delete this post?</p>
                            <p>This action cannot be undone.</p>
                        </div>
                        <div className="w-1/1 flex justify-center gap-5">
                            <button className="h-10 w-30 bg-gray-200 rounded-lg cursor-pointer"onClick={handleModal} disabled={loading}>Cancel</button>
                            <button className="h-10 w-30 bg-red-500 rounded-lg cursor-pointer" onClick={handleDelete} disabled={loading}>{loading ? "Deleting" : "Delete"}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Delete;