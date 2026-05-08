import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Signup() {
    return (
        <div className='bg-[#0F344F]/10 h-screen'>
            <div className='bg-[url("images/image2.jpg")] no-repeat bg-cover bg-center sm:invisible w-screen h-screen'>
            <div className='bg-white/60 w-screen h-screen pt-20 sm:invisible'>
            <div className='lg:w-1/2 md:w-2/3 sm:w-3/4 w-5/6 mx-auto text-black flex flex-row-reverse border-0 rounded-xl shadow-2xl visible animate-in fade-in zoom-in duration-200'>
            <div  className='sm:w-1/2 w-1/1 bg-white h-1/1 flex flex-col items-center py-10 rounded-r-xl rounded-l-xl sm:rounded-l-none'>
                <h1 className='font-script font-bold text-3xl'>Sign Up</h1> <br />
                <form  className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto'>
                    <input type="text" name="fname" id="fname" placeholder="First Name" className="w-1/1 my-5 pl-2 rounded-sm border"/>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" className="w-1/1 mb-5 pl-2 rounded-sm border"/>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-1/1 mb-5 pl-2 rounded-sm border"></input>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-1/1 mb-5 pl-2 rounded-sm border"/>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" className="w-1/1 pl-2 rounded-sm border"/><br />
                    <button type="submit" className="bg-[#0F344F] text-white hover:bg-[#0F344F]/40 hover:text-black border-b border-r p-2 px-4 cursor-pointer self-center rounded-lg">Create Account</button>     
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