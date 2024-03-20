import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const Logout = () => {
    function myprofileinfo(){
        window.location.href = "/MyProfileInfo";
    }

    function logout(){
        if(sessionStorage.getItem('token')){
            sessionStorage.removeItem("token");
            window.location.reload();
        }
    }
    return (
        <div id="regpopup">
            <button className="login-button" onClick={myprofileinfo}>My Profile</button>
            <button className="login-button" onClick={logout}> Logout </button>
        </div>

    );


};



export default Logout;
