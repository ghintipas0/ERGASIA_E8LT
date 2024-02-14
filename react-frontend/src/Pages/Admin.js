import React, {useEffect, useState} from "react";
import './Admin.css';
import Admin_Add_User from "../component/Admin_Add_User";
import $ from "jquery";
import Admin_Add_Product from "../component/Admin_Add_Product";
import Admin_Remove_Product from "../component/Admin_Remove_Product";
import Admin_Remove_User from "../component/Admin_Remove_User";
import {useNavigate} from "react-router-dom";
function Admin() {
    const [showFields, setShowFields] = useState({
        add_user: true,
        remove_user: false,
        add_product: false,
        remove_product: false
    });
    const toggleField = (field) => {
        setShowFields((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === field;
                return acc;
            }, {})
        }));
    };
    const GetAdminStatus = async (e) => {
        const apiUrl = 'http://localhost:8080/admin';
        try {
            console.log('Bearer ' + sessionStorage.getItem('token'));
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            });

            if (response.ok) {
                let isAdmin = await response.text();
                if(isAdmin === "false"){
                    navigate('/');
                }
            }else{
                console.log("There was an error, please contact developer")
                navigate('/');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    const navigate = useNavigate();
    $(document).ready(function() {
        if (!sessionStorage.getItem('token')){
            navigate('/');
        }
        GetAdminStatus();
        $("#LoginAlert").hide();
    });
    return (
        <div>
            <div className="sticky_top"
                 style={{
                     background: "black",
                     position: "sticky",
                     top: "8em",
                     display: "flex",
                     height: "5vh",
                     width: "100%",
                     zIndex: "1"
                 }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    gridTemplateRows: "auto",
                    width: "100%",
                    zIndex: "1"
                }}>
                    <button onClick={() => toggleField("add_user")}>Add user</button>
                    <button onClick={() => toggleField("remove_user")}>Remove User</button>
                    <button onClick={() => toggleField("add_product")}>Add Product</button>
                    <button onClick={() => toggleField("remove_product")}>Remove Product</button>

                </div>
            </div>
            <div style={{
                marginTop: "2vh",
                width: "100vw",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                {showFields.add_user && <Admin_Add_User />}
                {showFields.add_product && <Admin_Add_Product />}
                {showFields.remove_product && <Admin_Remove_Product />}
                {showFields.remove_user && <Admin_Remove_User />}
            </div>

        </div>
    );
}

export default Admin;
