import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const LogRegPopup = () => {
    return (
                    <div id="regpopup">
                        <div style={{color:"black", marginTop:"1em"}}>Already Registered?</div>
                        <button className="login-button"> <Link to="/Login" className="nav-item nav-link text-decoration-none" style={{color:"white"}}>Login</Link> </button>
                        <div style={{color:"black", marginTop:"1em"}}>New User?</div>
                        <button className="register-button"> <Link to="/Register" className="nav-item nav-link text-decoration-none" style={{color:"black"}}>Register</Link> </button>
                    </div>

    );
};

export default LogRegPopup;
