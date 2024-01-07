import React, { useState } from "react";
import UserRegistrationForm from "../component/UserRegistrationForm";
function Register() {
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        password: '**************',
        reEnterPassword: '**************',
        email: 'john.doe@example.com',
        phoneNumber: '202 555 0111',
        address: '',
        zipCode: '231465',
    });

    return (

        <div className="layout-container">

            <div className="layout-page" style={{ backgroundImage: "url(Media/regback.jpg)", backgroundSize: 'cover' }}>
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            <div className="col-md-5 offset-md-9">
                                <UserRegistrationForm></UserRegistrationForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
}

export default Register;
