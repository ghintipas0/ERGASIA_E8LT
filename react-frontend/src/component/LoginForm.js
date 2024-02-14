import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import  {useNavigate} from 'react-router-dom'
import $ from "jquery";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };
    $(document).ready(function() {
        if ( sessionStorage.getItem('token')){
            navigate('/');
        }
        $("#LoginAlert").hide();
    });
    function alert(to_display){
        let obj = $("#LoginAlert");
        obj.text(to_display);
        obj.show();
        window.scrollTo(0, 0);
        obj.delay(5000).fadeOut('slow');
    }
    function validation(){
        if(formData.username.length < 6){alert("Your Username and/or Password are/is incorrect!"); return false;}
        if(formData.password.length < 8){alert("Your Username and/or Password are/is incorrect!"); return false;}
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!validation()){return;}
        const apiUrl = 'http://localhost:8080/auth/login';


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {

                let token = await response.text();
                sessionStorage.setItem('token', token);
                navigate('/');
                setFormData({
                    username: '',
                    password: ''
                });
                window.location.reload();
            } else {
                alert("Your Username and/or Password are/is incorrect!");
                console.error('Failed to submit form');
            }
        } catch (error) {
            alert("Your Username and/or Password are/is incorrect!");
            console.error('Error submitting form:', error);
        }
    };

    function redirect_to_Login(){
        navigate('/Login');
    }
    return (
        <div id="loginform">
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className= "text-center font-weight-bold">LOGIN</h3>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                    <div className='alert alert-danger' role='alert' id="LoginAlert" > Your username or Password is incorrect!</div>
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="username_login">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your username"
                                                onChange={(e) => handleChange('username', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="password_login">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="********"
                                                onChange={(e) => handleChange('password', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit" className="btn btn-outline-info mb-6">
                                            SUBMIT
                                        </Button>
                                        <Button variant="primary" onClick={redirect_to_Login}>I dont have an account</Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
