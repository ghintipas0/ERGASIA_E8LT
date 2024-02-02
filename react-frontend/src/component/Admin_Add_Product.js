import React, { useState } from 'react';
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import {useNavigate} from "react-router-dom";



const Admin_Add_Product = () => {
    const [formData, setFormData] = useState({
    });
    const navigate = useNavigate();
    const handleChange = (field, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [field]: value,
        }));
    };



    function validationcheck(){
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Assuming you have an API endpoint to handle the form data.
        if (!validationcheck()){return;}
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
                setFormData({
                });
            } else {
                popalert("There was an error. Please wait or contact developer;");
                console.error('Failed to submit form');
            }
        } catch (error) {
            popalert("There was an error. Please wait or contact developer");
            console.error('Error submitting form:', error);
        }
    };

    return (
       <>
       </>
    );
};


export default Admin_Add_Product;
