import { useState } from "react";

function Delete({post, setPost}) {
    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        if(showModal == false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    function handleDelete() {
        setPost(prev => prev.filter(item => item.id !== post.id));
    }

    return(
        <div>
            <img src="delete.png" alt="" className="w-8 h-5" onClick={handleModal}/>
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-[#EFEFEF]/50 cursor-default">
                    <div className="w-1/1 h-1/1" onClick={handleModal}></div>
                    <div className="bg-gray-100 h-60 w-100 rounded-xl fixed inset-0 my-auto mx-auto flex flex-col justify-around items-center border">
                        <h1 className='font-script font-bold text-3xl'>Delete this post?</h1>
                        <p>Are you sure you want to delete this post?</p>
                        <div className="w-1/1 flex justify-end gap-5">
                            <button className="h-10 w-20 bg-red-500 rounded-lg cursor-pointer"onClick={handleModal}>Cancel</button>
                            <button className="h-10 w-20 bg-green-500 rounded-lg mr-5 cursor-pointer" onClick={handleDelete}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Delete;