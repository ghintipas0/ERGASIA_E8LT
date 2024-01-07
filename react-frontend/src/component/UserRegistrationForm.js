import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        birthDate: '',
        country: '',
        city : '',
        addressLine : '',
        postCode : ''
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
        const apiUrl = 'http://localhost:8080/auth/register';

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
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    birthDate: '',
                    country: '',
                    city : '',
                    addressLine : '',
                    postCode : ''
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div>
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className= "text-center font-weight-bold">REGISTRATION</h3>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your First Name"
                                                onChange={(e) => handleChange('firstName', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your Last Name"
                                                onChange={(e) => handleChange('lastName', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="birthDate">
                                            <Form.Label>Birth Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                placeholder="00-00-0000"
                                                onChange={(e) => handleChange('birthDate', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your username"
                                                onChange={(e) => handleChange('username', e.target.value)}
                                                aria-describedby="usernamehelp"
                                            />
                                            <Form.Text id="usernamehelp" muted>
                                                8-32 Characters.
                                            </Form.Text>
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
                                                aria-describedby="passwordHelpBlock"
                                            />
                                            <Form.Text id="passwordHelpBlock" muted>
                                                Your password must be 6-32 characters long, contain at least one uppercase letter, a symbol and a number.
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="passwdval">
                                            <Form.Label>Confirm your Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="********"
                                                onChange={(e) => handleChange('passwdval', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                onChange={(e) => handleChange('email', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="phoneNumber">
                                            <Form.Label>Phone</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Text id="inputGroupPrepend">+30</InputGroup.Text>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Enter your phone number"
                                                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="addressLine">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your address"
                                                onChange={(e) => handleChange('addressLine', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="postCode">
                                            <Form.Label>ZIP</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter your ZIP"
                                                onChange={(e) => handleChange('postCode', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="city">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="City"
                                                onChange={(e) => handleChange('city', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit" className="btn btn-outline-info mb-6">
                                            SUBMIT
                                        </Button>
                                        <Link to="/login" className="link-info">I already have an account</Link>
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

export default UserRegistrationForm;
