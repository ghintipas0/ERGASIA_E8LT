import React, { useState } from "react";

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
                  <div class="card mb-4">
                    <div class="card-body">
                      {/* Empty card body */}
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                      <div class="row">
                       <div className="mb-3 col-md-6">
                                              <label htmlFor="firstName" className="form-label">
                                                First Name
                                              </label>
                                              <input
                                                className="form-control"
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                autoFocus
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="lastName" className="form-label">
                                                Last Name
                                              </label>
                                              <input
                                                className="form-control"
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={formData.lastName}
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="password" className="form-label">
                                                Password
                                              </label>
                                              <input
                                                className="form-control"
                                                type="password"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="reEnterPassword" className="form-label">
                                                Re-Enter Password
                                              </label>
                                              <input
                                                className="form-control"
                                                type="password"
                                                id="reEnterPassword"
                                                name="reEnterPassword"
                                                value={formData.reEnterPassword}
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="email" className="form-label">
                                                E-mail
                                              </label>
                                              <input
                                                className="form-control"
                                                type="text"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder="john.doe@example.com"
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label className="form-label" htmlFor="phoneNumber">
                                                Phone Number
                                              </label>
                                              <div className="input-group input-group-merge">
                                                <span className="input-group-text">GR (+30)</span>
                                                <input
                                                  type="text"
                                                  id="phoneNumber"
                                                  name="phoneNumber"
                                                  className="form-control"
                                                  placeholder="202 555 0111"
                                                  value={formData.phoneNumber}
                                                />
                                              </div>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="address" className="form-label">
                                                Address
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                placeholder="Address"
                                                value={formData.address}
                                              />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                              <label htmlFor="zipCode" className="form-label">
                                                Zip Code
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                id="zipCode"
                                                name="zipCode"
                                                placeholder="231465"
                                                maxLength="6"
                                                value={formData.zipCode}
                                              />
                                            </div>
                                          </div>


                      <div className="mt-2">
                        <button type="reset" className="btn btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                    </div>
                    <div class="content-backdrop fade"></div>
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
