import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        passwd: '',
        passwdval: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
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
                // Optionally, you can reset the form data after a successful submission
                setFormData({
                    FirstName: '',
                    LastName: '',
                    passwd: '',
                    passwdval: '',
                    email: '',
                    phone: '',
                    address: '',
                    zip: '',
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-6" controlId="FirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your First Name"
                            onChange={(e) => handleChange('FirstName', e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-6" controlId="LastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Last Name"
                            onChange={(e) => handleChange('LastName', e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="passwd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => handleChange('passwd', e.target.value)}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="passwdval">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm your password"
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
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">+30</InputGroup.Text>
                            <Form.Control
                                type="number"
                                placeholder="Enter your phone number"
                                onChange={(e) => handleChange('phone', e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your address"
                            onChange={(e) => handleChange('address', e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="zip">
                        <Form.Label>ZIP</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter your ZIP"
                            onChange={(e) => handleChange('zip', e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit" className="btn btn-outline-secondary">
                EDIT
            </Button>
        </Form>
    );
};

export default UserRegistrationForm;
