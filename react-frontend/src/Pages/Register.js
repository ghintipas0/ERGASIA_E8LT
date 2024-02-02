import React, { useState } from "react";
import Register from "../component/UserRegistrationForm";
function UserAuth() {

    return (

        <div className="layout-container">

            <div className="layout-page" style={{ backgroundImage: "url(Media/regback.jpg)", backgroundSize: 'thumbnail' }}>
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 ">
                                <Register></Register>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    );
}

export default UserAuth;
