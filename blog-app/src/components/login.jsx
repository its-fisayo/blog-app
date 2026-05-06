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
        <div className='bg-[url("images/image1.jpg")] bg-cover h-screen'>
            <div className='border-white rounded-lg md:w-3/5 lg:w-2/5 w-4/5 p-6 mx-auto my-20 bg-white/75 text-black'>
                <h1>Login</h1><br />
                <form onSubmit= {handleSubmit}className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={eEMail} onChange={(e) => {setEEmail(e.target.value)}} className="border-1 w-1/1"></input> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={ePassword} onChange={(e) => {setEPassword(e.target.value)}} className="border-1 w-10/10"/> <br />
                    <button type="submit" className="bg-blue-500 border-b border-r p-2 w-20 hover:bg-blue-200 cursor-pointer self-center rounded-lg">Login</button>     
                </form>
                <p className='text-xs'>Don't have an account yet? <Link to="/signup"><span className='text-blue-500 active:text-blue-200'>Sign Up</span></Link></p>
            </div>
        </div>
    )
}

export default Login;