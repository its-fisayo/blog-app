import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div>
            <form >
                <h1>Login</h1>
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" id="email"  className="border-1"></input> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" id="password" className="border-1"/> <br /><br />
                <button type="submit" className="bg-blue-200 border-b border-r">Login</button>     
            </form>
            <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}

export default Login;