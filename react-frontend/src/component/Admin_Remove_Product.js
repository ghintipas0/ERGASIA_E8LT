import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import {useNavigate} from "react-router-dom";



const Admin_Remove_Product = () => {
    const [formData, setFormData] = useState({
        productId: ''
    });
    const [regAlert, setRegAlert] = useState('');
    const [sucAlert, setSucAlert] = useState('');
    const navigate = useNavigate();
    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };

    $(document).ready(function() {
        $("#RegAlert").hide();
        $("#SucAlert").hide();
    });
    const popalert = (toprint) => {
        setRegAlert(toprint);
        setTimeout(() => {
            setRegAlert('');
        }, 5000);
    };
    const SucAlert = (toprint) => {
        setSucAlert(toprint);
        setTimeout(() => {
            setSucAlert('');
        }, 5000);
    };
    function validationcheck(){
        if(formData.productId.length < 1){popalert("The id is invalid"); return false;}
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assuming you have an API endpoint to handle the form data.
        if (!validationcheck()){return;}
        const apiUrl = 'http://localhost:8080/Products/'+ formData.productId;
        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    productId: ''
                });
                SucAlert("Product deleted successfully!");
                e.target.reset();
            } else {
                popalert("Product was not found!");
            }
        } catch (error) {
            popalert("There was an error. Please wait or contact developer");
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div id="registerform">
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className= "text-center font-weight-bold">DELETE PRODUCT</h3>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                    {regAlert && <div className='alert alert-danger' role='alert'>{regAlert}</div>}
                    {sucAlert && <div className='alert alert-success' role='alert'>{sucAlert}</div>}
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-6" controlId="productId">
                                            <Form.Label>Product ID</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="001"
                                                onChange={(e) => handleChange('productId', e.target.value)}
                                            />
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit" className="btn btn-outline-info mb-6">
                                            SUBMIT
                                        </Button>
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


export default Admin_Remove_Product;
