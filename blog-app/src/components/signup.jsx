import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function Signup() {
    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <label htmlFor="fname">First Name</label><br />
                <input type="text" name="fname" id="fname" className="border-1"/><br />
                <label htmlFor="lname">Last Name</label> <br />
                <input type="text" name="lname" id="lname" className="border-1"/><br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id="email" className="border-1"></input> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="password" className="border-1"/> <br />
                <label htmlFor="cpassword">Confirm Password</label> <br />
                <input type="password" name="cpassword" id="cpassword" className="border-1"/> <br /><br />
                <button type="submit" className="bg-blue-200 border-b border-r button-shadow">Create Account</button>     

                <p>ALready have an account? <Link to="/">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;