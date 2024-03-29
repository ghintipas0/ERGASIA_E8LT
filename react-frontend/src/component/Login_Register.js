import React, { useEffect } from 'react';
import LoginForm from "./LoginForm.js";
import UserRegistrationForm from "./UserRegistrationForm.js";
import $ from "jquery";

const Login_Register = () => {
    useEffect(() => {
        $("#registerform").hide();
        $("#hideLoginFormBtn").click(function () {
            $("#loginform").hide();
            $("#registerform").show();
        });
        $("#hideregforbutton").click(function () {
            $("#registerform").hide();
            $("#loginform").show();
        });
    }, []);

    return (
        <div>
            <LoginForm></LoginForm>
            <UserRegistrationForm></UserRegistrationForm>
        </div>
    );
};

export default Login_Register;
