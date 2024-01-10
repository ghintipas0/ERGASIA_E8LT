import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Assuming you have an API endpoint to handle the form data.
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
                console.log('Form submitted successfully');
                setFormData({
                    username: '',
                    password: ''
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div id="loginform">
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className= "text-center font-weight-bold">LOGIN</h3>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="username">
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
                                        <Form.Group className="mb-3" controlId="password">
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
                                        <Button variant="primary" id = "hideLoginFormBtn">I dont have an account</Button>
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
