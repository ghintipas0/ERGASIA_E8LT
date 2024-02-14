import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const Logout = () => {
    function logout(){
        if(sessionStorage.getItem('token')){
            sessionStorage.removeItem("token");
            window.location.reload();
        }
    }
    return (
        <div id="regpopup">
            <button className="login-button" onClick={logout}> Logout </button>
        </div>

    );
};

export default Logout;
