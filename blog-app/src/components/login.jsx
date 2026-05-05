import React from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
   /* const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    }*/
    return (
        <div>
            <div>
                <form >
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" id="email"></input> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="password"/> <br /><br />
                    <button type="submit">Login</button>     
                </form>
                <p>Don't have an account yet? <a href='signup.jsx'>Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login;