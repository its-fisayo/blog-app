import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${import.meta.env.VITE_APP_URL}/user/login`, {
                email: userData.email,
                password: userData.password
        }); 
        if (res.status === 200) {
            localStorage.setItem("token", res.data.user.token)
            localStorage.setItem("user", JSON.stringify(res.data.user));
            toast.success(res.data.message || "Login Successful!");
            console.log(res.data);
            navigate("/home");
        }
        } catch(error) {
            console.log("Full error: ", error.response?.data);
            toast.error(error.response?.data?.message || "Login failed!")
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className='sm:bg-[#fdfdfd] h-screen'>
            <div className='bg-[url("images/image2.jpg")] no-repeat bg-cover bg-center sm:invisible w-screen h-screen'>
            <div className='bg-white/60 w-screen h-screen pt-20 sm:invisible'>
            <div className='lg:w-2/3 md:w-2/3 sm:w-3/4 w-5/6 mx-auto text-black flex border-0 rounded-xl shadow-2xl visible'>
                <div className='sm:w-1/2 w-1/1 bg-white flex flex-col items-center h-1/1 py-20 rounded-l-xl rounded-r-xl sm:rounded-r-none'>
                <h1 className='font-script font-bold text-3xl'>Login</h1><br />
                <form onSubmit= {handleSubmit} className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  value={userData.email} onChange={(e) => setUserData(prev => ({...prev, email: e.target.value}))} className="w-1/1 rounded-sm border"></input> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={userData.password} onChange={(e) => setUserData(prev => ({...prev, password: e.target.value}))} className="w-10/10 rounded-sm border"/> <br />
                    <button type="submit" className="bg-[#0F344F] text-white hover:bg-[#0F344F]/40 hover:text-black border-b border-r p-2 w-1/1 cursor-pointer self-center rounded-lg" disabled={loading}>{loading ? "Logging in" : "Login"}</button>     
                </form>
                <p className='text-xs'>Don't have an account yet? <Link to="/signup"><span className='text-[#0F344F]/60 active:text-[#0F344F]/40'>Sign Up</span></Link></p>
            </div>
            <div className='w-1/2 bg-[url("images/image2.jpg")] bg-center bg-top rounded-r-xl hidden sm:block'></div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Login;