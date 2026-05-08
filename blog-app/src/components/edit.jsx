import { useState } from "react";

function Edit({post, setPost}) {
    const [showModal, setShowModal] = useState(false);
    const [edittedPost, setEdittedPost] = useState({
        title: "",
        body: "",
        id: ""
    });

    function handleModal() {
        if(showModal == false) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }

    function handleEdit() {
        setPost(prev => prev.map(
            item => item.id === post.id ? {
                ...item,
                title: edittedPost.title,
                body: edittedPost.body
            } : item
        ));

        setShowModal(false);
    }

    return(
        <div>
            <img src="edit.png" alt="" className="w-5 h-5" onClick={handleModal}/>
            {showModal && (
                <div className="w-screen h-screen fixed inset-0 bg-[#EFEFEF]/50 cursor-default">
                    <div className="w-1/1 h-1/1" onClick={handleModal}></div>
                    <div className="bg-gray-100 h-80 w-100 rounded-xl fixed inset-0 my-auto mx-auto flex flex-col justify-around items-center border">
                        <h1 className='font-script font-bold text-3xl'>Edit</h1>
                        <input type="text" name="new-title" id="new-title" onChange={(e) => {setEdittedPost(prev => ({...prev, title: e.target.value}))}} placeholder="New title..." className="border w-5/7 px-2"/>
                        <textarea name="new-body" id="new-body"  onChange={(e) => {setEdittedPost(prev => ({...prev, body: e.target.value}))}} className="border w-5/7 h-30 px-2" placeholder="New description..."></textarea>
                        <div className="w-1/1 flex justify-end gap-5">
                            <button className="h-10 w-20 bg-gray-500 rounded-lg cursor-pointer"onClick={handleModal}>Cancel</button>
                            <button className="h-10 w-20 bg-green-500 rounded-lg mr-5 cursor-pointer" onClick={handleEdit}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Edit;