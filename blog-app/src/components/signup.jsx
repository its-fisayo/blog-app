import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: ""
    });
    const [loading, setLoading] = useState(false);

    async function handleSubtmit(e) {
        e.preventDefault();
        if(userData.password.length < 8){
            toast.error("Your password must have at least 8 characters")
        }
        else if(userData.cPassword != userData.password){
            toast.error("Your password doesn't match. Kindly reconfirm")
        }
        else {
            try{
            setLoading(true);
            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/user/register`, {
                name: userData.name,
                email: userData.email,
                password: userData.password

        });
            if (res.status === 201) {
                    toast.success("Registration Successful!");
                    navigate("/");
                }
            console.log(res.data)
        } catch(error) {
            console.log("Full error: ", error);
            toast.error(error.response?.data?.message || "Registration failes!")
        } finally {
            setLoading(false);
        }
        }
       
    }
    return (
        <div className='bg-[#fdfdfd] h-screen'>
            <div className='bg-[url("images/image2.jpg")] no-repeat bg-cover bg-center sm:invisible w-screen h-screen'>
            <div className='bg-white/60 w-screen h-screen pt-20 sm:invisible'>
            <div className='lg:w-2/3 md:w-2/3 sm:w-3/4 w-5/6 mx-auto text-black flex flex-row-reverse border-0 rounded-xl shadow-2xl visible animate-in fade-in zoom-in duration-200'>
            <div  className='sm:w-1/2 w-1/1 bg-white h-1/1 flex flex-col items-center py-10 rounded-r-xl rounded-l-xl sm:rounded-l-none'>
                <h1 className='font-script font-bold text-3xl'>Sign Up</h1> <br />
                <form  className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto' onSubmit={handleSubtmit}>
                    <input type="text" name="fname" id="fname" placeholder="Full Name" className="w-1/1 my-5 pl-2 rounded-sm border" required/>
                    <input type="text" name="uname" id="uname" placeholder="Username" className="w-1/1 mb-5 pl-2 rounded-sm border" required value={userData.name} onChange={(e) => setUserData(prev => ({...prev, name: e.target.value}))}/>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-1/1 mb-5 pl-2 rounded-sm border" required value={userData.email} onChange={(e) => setUserData(prev => ({...prev, email: e.target.value}))}></input>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-1/1 mb-5 pl-2 rounded-sm border" required value={userData.password} onChange={(e) => setUserData(prev => ({...prev, password: e.target.value}))}/>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" className="w-1/1 pl-2 rounded-sm border" required value={userData.cPassword} onChange={(e) => setUserData(prev => ({...prev, cPassword: e.target.value}))}/><br />
                    <button type="submit" className="bg-[#0F344F] text-white hover:bg-[#0F344F]/40 hover:text-black border-b border-r p-2 px-4 cursor-pointer self-center rounded-lg w-1/1" disabled={loading}>{loading ? "Registering" : "Register"}</button>     
                </form>
                <p className="text-xs">ALready have an account? <Link to="/"><span className='text-[#0F344F]/60 active:text-[#0F344F]/40'>Login</span></Link></p>
            </div>
            <div className='w-1/2 bg-[url("images/image2.jpg")] bg-center bg-top rounded-l-xl bg-no-repeat hidden sm:block'></div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Signup;