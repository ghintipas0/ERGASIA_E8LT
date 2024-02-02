import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const LogRegPopup = () => {
    return (
                    <div id="regpopup">
                        <span style={{color:"black"}}>Already Registered?</span>
                        <button className="login-button"> <Link to="/Login" className="nav-item nav-link text-decoration-none" style={{color:"white"}}>Login</Link> </button>
                        <span style={{color:"black"}}>New User?</span>
                        <button className="register-button"> <Link to="/Register" className="nav-item nav-link text-decoration-none" style={{color:"black"}}>Register</Link> </button>
                    </div>

    );
};

export default LogRegPopup;
