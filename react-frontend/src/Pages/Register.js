import React, {useEffect, useState} from "react";
import Register from "../component/UserRegistrationForm";
function UserAuth() {
    const [RegisterContent, setRegisterContent] = useState(null);
    useEffect(() => {
        if (sessionStorage.getItem('token')) { return_error_403(); }else{
            setRegisterContent(
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
    )}
    });

    function return_error_403() {
        setRegisterContent(<div style={{ height: "100%", width: "100%", color: "black", fontSize:"25vw",textAlign:"center",fontFamily:"sans-serif"}}>403</div>);
    }
    return RegisterContent;
}

export default UserAuth;
