import React, { useState, useEffect } from "react";
import { Col, Form, InputGroup, Row, Button } from 'react-bootstrap';
import $ from "jquery";
import {useNavigate} from "react-router-dom";

 const MyProfileInfo = () => {
     const [editMode, setEditMode] = useState(false);
     const [formData, setFormData] = useState({});
     const [error, setError] = useState(null);

     useEffect(() => {
         fetchUserData();
     }, []);

     const fetchUserData = () => {
         const token = sessionStorage.getItem('token');
         console.log("Token:", token); // Log the token

         if (!token) {
             setError("User token not found. Please log in again.");
             return;
         }

         fetch("http://localhost:8080/ShopNow/profile", {
             method: 'GET',
             headers: {
                 'Authorization': 'Bearer ' + token,
                 'content-type': 'application/json'
             }
         })
         .then(response => {
             if (!response.ok) {
                 throw new Error("Failed to fetch user data");
             }

             if (response.status === 204) {
                 // No content
                 return null;
             }
             const contentType = response.headers.get('Content-Type');
             console.log("contentType:", contentType); // Log the contentType

             if (contentType && contentType.includes('application/json')) {
                 return response.json();
             } else {
                 // Handle HTML response
                 return response.text().then(html => {
                     throw new Error('Server returned HTML instead of JSON:\n' + html);
                 });
             }
         })
         .then(data => {
             console.log("Fetched User Data:", data); // Log fetched data
             if (data !== null) {
                 setFormData(data);
             } else {
                 setFormData({});
             }
         })
         .catch(error => {
             console.error('Error fetching user data:', error);
             setError("Failed to fetch user data. Please try again later.");
         });
     };

     const toggleEditMode = () => {
         setEditMode(!editMode);
         formData.password = "";
     };

     const closeEditMode = () => {
         setEditMode(!editMode);
     };

     const handleInputChange = (e) => {
         const { name, value } = e.target;

         // Validate username length
       //  if (name === 'username' && (value.length < 8 || value.length > 32)) {
       //      setError("Username must be between 8 and 32 characters.");
        //     return;
        // }

         // Validate email format
         if (name === 'email' && !value.includes('@')) {
             setError("Please enter a valid email address.");
             return;
         }

         // Check if the field belongs to the addresses object
         if (name.startsWith("addresses")) {
             const addressField = name.split(".")[1]; // Extract the field name after "addresses"
             setFormData(prevState => ({
                 ...prevState,
                 addresses: [{ ...prevState.addresses[0], [addressField]: value }]
             }));
         } else {
             setFormData(prevState => ({
                 ...prevState,
                 [name]: value
             }));
         }

         // Clear error if validation passed
         setError(null);
     };

     $(document).ready(function() {
         $("#RegAlert").hide();
     });

     function popalert(toprint){
         $(document).ready(function() {
             if ($("#RegAlert").is(":hidden")) {
                 $("#RegAlert").text(toprint);
                 $("#RegAlert").show();
                 window.scrollTo(0, 0);
                 $('#RegAlert').delay(5000).fadeOut('slow');
             }
         });
     }

     function validationcheck(){
         if(formData.username.length < 6){popalert("Your username is too long. It needs to have more than 6 characters"); return false;}
         if(formData.username.length > 30){popalert("Your userame is too large. It needs to have less than 30 characters"); return false;}
         if(formData.firstName.length < 2){popalert("Your firstname is too short. It needs to have more than 2 characters"); return false;}
         if(formData.lastName.length < 2){popalert("Your lastname is too short. It needs to have more than 2 characters"); return false;}
         if(formData.firstName.length > 36){popalert("Your firstname is too long. It needs to have less than 36 characters"); return false;}
         if(formData.lastName.length > 36){popalert("Your lastname is too long. It needs to have less than 36 characters"); return false;}
         if(formData.addresses[0].postCode.length !== 5 ){popalert("Your postal code must be exactly 5 numbers"); return false;}
         return true;
     }

     const handleSaveChanges = () => {
         const token = sessionStorage.getItem('token');

        if (!validationcheck()){return;}

         fetch("http://localhost:8080/Users", {
             method: 'PUT',
             headers: {
                 'Authorization': 'Bearer ' + token,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(formData)
         })
         .then(response => {
             if (response.status === 409) {
                 throw new Error("User with this username or email already exists.");
             }
             if (!response.ok) {
                 throw new Error("Failed to update user data");
             }
             toggleEditMode();
             return response.json();
         })
         .then(data => {
             // Handle the response, e.g., extract token
             console.log("Updated User Data:", data);
         })
         .catch(error => {
             console.error('Error updating user data:', error);
             setError(error.message);
         });
     };




     return (
        <div className="layout-container">
            <div className="layout-page">
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card mb-4">
                                    <hr className="my-0" />
                                    <div className="card-body">
                                        <div className='alert alert-danger' role='alert' id="RegAlert"> Some of the fields you entered are incorrect or empty!</div>
                                        <div className="row">
                                            {/* Input for Username */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Username
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        name="username"
                                                        value={formData.username || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.username}</span>
                                                )}
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Password
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        value={formData.password || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">&nbsp;</span>
                                                )}
                                            </div>
                                            {/* Input for Birth Date */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Birth Date
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="birthDate"
                                                        name="birthDate"
                                                        value={formData.birthDate || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.birthDate}</span>
                                                )}
                                            </div>
                                            {/* Input for First Name */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    First Name
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="firstName"
                                                        name="firstName"
                                                        value={formData.firstName || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.firstName}</span>
                                                )}
                                            </div>
                                            {/* Input for Last Name */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Last Name
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastName"
                                                        name="lastName"
                                                        value={formData.lastName || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.lastName}</span>
                                                )}
                                            </div>
                                            {/* Input for Email */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Email
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.email}</span>
                                                )}
                                            </div>
                                            {/* Input for Phone */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">
                                                    Phone
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.phoneNumber}</span>
                                                )}
                                            </div>

                                          {/* Input for Country */}
                                          <div className="mb-3 col-md-6">
                                              <label className="form-label">Country</label>
                                              {editMode ? (
                                                  <input
                                                      type="text"
                                                      className="form-control"
                                                      id="country"
                                                      name="addresses.country"
                                                      value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].country : ""}
                                                      onChange={handleInputChange}
                                                  />
                                              ) : (
                                                  <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].country : ""}</span>
                                              )}
                                          </div>
                                            {/* Input for City */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">City</label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="city"
                                                        name="addresses.city"
                                                        value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].city : ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].city : ""}</span>
                                                )}
                                            </div>
                                            {/* Input for Address */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">Address</label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="address"
                                                        name="addresses.addressLine1"
                                                        value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].addressLine1 : ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].addressLine1 : ""}</span>
                                                )}
                                            </div>
                                            {/* Input for Post Code */}
                                            <div className="mb-3 col-md-6">
                                                <label className="form-label">Post Code</label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="postCode"
                                                        name="addresses.postCode"
                                                        value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].postCode : ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].postCode : ""}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-2">

                                                <button onClick={editMode ? handleSaveChanges : toggleEditMode} className="btn btn-outline-secondary">
                                                {editMode ? "Save" : "Edit"}
                                                </button>

                                        </div>
                                        <div className="mt-2">
                                              {editMode ? (
                                                    <button onClick={editMode ? closeEditMode : toggleEditMode} className="btn btn-outline-secondary">
                                                    {editMode ? "Cancel" : ""}
                                                    </button>
                                                    ) : (
                                                    <span>&nbsp;</span>
                                                    )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileInfo;
