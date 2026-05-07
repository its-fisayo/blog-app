import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [ePassword, setEPassword] = useState([]);
    const [eEMail, setEEmail] = useState([]);
    const password = "hello"
    const eMail = "davidbabatundehbc@gmail.com"

    function handleSubmit(e){
        e.preventDefault();

        if((ePassword != password) || (eEMail != eMail)) {
            alert("Wrong email or password");
            setEPassword("");
            setEEmail("");
        } else (
            navigate("/home")
        )
    }
    return (
        <div className='sm:bg-[#0F344F]/10 h-screen'>
            <div className='bg-[url("images/image2.jpg")] no-repeat bg-cover bg-center sm:invisible w-screen h-screen'>
            <div className='bg-white/60 w-screen h-screen pt-30 sm:invisible'>
            <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 w-5/6 mx-auto text-black flex border-0 rounded-xl shadow-2xl visible'>
                <div className='sm:w-1/2 w-1/1 bg-white flex flex-col items-center h-1/1 py-10 rounded-l-xl rounded-r-xl sm:rounded-r-none'>
                <h1 className='font-script font-bold text-3xl'>Login</h1><br />
                <form onSubmit= {handleSubmit}className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={eEMail} onChange={(e) => {setEEmail(e.target.value)}} className="bg-[#0F344F]/20 w-1/1 rounded-sm"></input> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={ePassword} onChange={(e) => {setEPassword(e.target.value)}} className="bg-[#0F344F]/20 w-10/10 rounded-sm"/> <br />
                    <button type="submit" className="bg-[#0F344F] text-white hover:bg-[#0F344F]/40 hover:text-black border-b border-r p-2 w-20 cursor-pointer self-center rounded-lg">Login</button>     
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