import React, { useEffect } from 'react'
import axios from 'axios';
import "../assets/styles/login-page.css"
import login_icon from '../assets/svgs/login_icon.svg'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const handleLogin = () => {
        window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/reachinbox/onebox/list";
    };

    return (
        <div className='login_container' style={{ width: "100%", height: "100vh", background: "#000000" }}>
            <header id='header_style'>
                <img src={login_icon} alt="logo" />
            </header>
            <main id="main_style">
                <div id='main_sub_style'>
                    <h3>Create a new account</h3>
                    <button onClick={handleLogin} id='signup_google'><FcGoogle style={{ marginRight: "10px" }} /> Sign Up with Google</button>
                    <button id="createAccBtn">Create an Account</button>
                    <p style={{
                        marginTop: "30px",
                        fontSize: "14px",
                        color: "#707172",
                        textAlign: "center"
                    }}>Already have an account? <span style={{ cursor: "pointer" }}>Sign In</span></p>
                </div>
            </main>
            <footer id='login_footer'> © 2023 Reachinbox. All rights reserved. </footer>
        </div>
    )
}

export default Login