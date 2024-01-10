import React, { useEffect } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
        <>
            <LoginForm></LoginForm>
            <UserRegistrationForm></UserRegistrationForm>
        </>
    );
};

export default Login_Register;
