import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const LogRegPopup = () => {
    return (
                    <div id="regpopup">
                        <p>Already Registered?</p>
                        <button className="login-button"> <Link to="/Login" className="text-light nav-item nav-link text-decoration-none">Login</Link> </button>
                        <p>New User?</p>
                        <button className="register-button"> <Link to="/Register" className="text-light nav-item nav-link text-decoration-none">Register</Link> </button>
                    </div>

    );
};

export default LogRegPopup;
