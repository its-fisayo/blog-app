import React from "react";

function Signup() {
    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <label htmlFor="fname">First Name</label><br />
                <input type="text" name="fname" id="fname"/><br />
                <label htmlFor="lname">Last Name</label> <br />
                <input type="text" name="lname" id="lname"/><br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id="email"></input> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="password"/> <br />
                <label htmlFor="cpassword">Confirm Password</label> <br />
                <input type="password" name="cpassword" id="cpassword"/> <br /><br />
                <button type="submit">Create Account</button>     

                <p>ALready have an account? <a href="/login.jsx">Login</a></p>
            </div>
        </div>
    )
}

export default Signup;