import React, { useState, useEffect } from "react";

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
         setFormData(prevState => ({
             ...prevState,
             [name]: value
         }));
     };

     if (error) {
         return <div>Error: {error}</div>;
     }

     // Extract address data if available
     const addressData = formData.addresses && formData.addresses.length > 0 ? formData.addresses[0] : {};

    const handleSaveChanges = () => {
        const token = sessionStorage.getItem('token');

        fetch("http://localhost:8080/Users", {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
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
            setError("Failed to update user data. Please try again later.");
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
                                        <div className="row">
                                            {/* Input for Username */}
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="username" className="form-label">
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
                                                <label htmlFor="password" className="form-label">
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
                                                <label htmlFor="birthDate" className="form-label">
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
                                                <label htmlFor="firstName" className="form-label">
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
                                                <label htmlFor="lastName" className="form-label">
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
                                                <label htmlFor="email" className="form-label">
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
                                                <label htmlFor="phone" className="form-label">
                                                    Phone
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phoneNumber || ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.phoneNumber}</span>
                                                )}
                                            </div>

                                            {/* Input for Country */}
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="country" className="form-label">
                                                    Country
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="country"
                                                        name="country"
                                                        value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].country : ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].country : ""}</span>
                                                )}
                                            </div>
                                            {/* Input for City */}
                                               <div className="mb-3 col-md-6">
                                                   <label htmlFor="city" className="form-label">
                                                       City
                                                   </label>
                                                   {editMode ? (
                                                       <input
                                                           type="text"
                                                           className="form-control"
                                                           id="city"
                                                           name="city"
                                                           value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].city : ""}
                                                           onChange={handleInputChange}
                                                       />
                                                   ) : (
                                                       <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].city : ""}</span>
                                                   )}
                                               </div>
                                            {/* Input for Address */}
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="address" className="form-label">
                                                    Address
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="address"
                                                        name="address"
                                                        value={formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].addressLine1 : ""}
                                                        onChange={handleInputChange}
                                                    />
                                                ) : (
                                                    <span className="form-control">{formData.addresses && formData.addresses.length > 0 ? formData.addresses[0].addressLine1 : ""}</span>
                                                )}
                                            </div>
                                            {/* Input for Post Code */}
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="postCode" className="form-label">
                                                    Post Code
                                                </label>
                                                {editMode ? (
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="postCode"
                                                        name="postCode"
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
