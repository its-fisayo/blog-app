import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Signup() {
    return (
        <div className='bg-[url("images/image2.jpg")] bg-cover bg-no-repeat bg-center w-full h-screen'>
            <div className='border-white rounded-lg md:w-3/5 lg:w-2/5 w-4/5 p-6 mx-auto my-10 bg-white/75 text-black'>
                <h1>Sign Up</h1>
                <form  className='flex flex-col items-start w-6/7 md:w-3/5 mx-auto'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" className="border-1 w-1/1"/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" className="border-1 w-1/1"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border-1 w-1/1"></input>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="border-1 w-1/1"/>
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" name="cpassword" id="cpassword" className="border-1 w-1/1"/><br />
                    <button type="submit" className="bg-blue-500 border-b border-r p-2 hover:bg-blue-200 cursor-pointer self-center rounded-lg">Create Account</button>     
                </form>
                <p className="text-xs">ALready have an account? <Link to="/"><span className='text-blue-500 active:text-blue-200'>Login</span></Link></p>
            </div>
        </div>
    )
}

export default Signup;