import React, {useEffect, useState} from "react";
import Login from "../component/LoginForm";
function UserAuth() {
    const [LoginContent, setLoginContent] = useState(null);
    useEffect(() => {
        if (sessionStorage.getItem('token')) { return_error_403(); }else{
            setLoginContent(
                <div className="layout-container">
                    <div className="layout-page" style={{ backgroundImage: "url(Media/regback.jpg)", backgroundSize: 'thumbnail' }}>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-5 ">
                                        <Login></Login>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-overlay layout-menu-toggle"></div>
                </div>
            )}
    }, []);

    function return_error_403() {
        setLoginContent(<div style={{ height: "100%", width: "100%", color: "black", fontSize:"25vw",textAlign:"center",fontFamily:"sans-serif"}}>403</div>);
    }
    return LoginContent;
}

export default UserAuth;
