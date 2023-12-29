import React, { useState } from "react";
import UserRegistrationForm from "../component/UserRegistrationForm";

function MyProfileInfo() {
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
            <div className="layout-page">
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        {/* Empty card body */}
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <UserRegistrationForm></UserRegistrationForm>
                                            </div>
                                            <div className="mt-2">
                                                <button type="reset" className="btn btn-outline-secondary">
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
}

export default MyProfileInfo;
