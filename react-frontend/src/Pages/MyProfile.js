import React, { useEffect, useState } from "react";

function MyProfile () {
 return (



<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
        <div className="layout-page">
            <div className="content-wrapper">

                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">

                        <div className="row">
                            <div className="col-md-12">
                                <ul_myProf className="nav nav-pills flex-column flex-md-row mb-3">
                                    <li_myProf className="nav-item">
                                        <a_myProf className="nav-link" href="myProfile.html"><i className=" bx bx-user me-1"></i> Account</a_myProf>
                                    </li_myProf>
                                    <li_myProf className="nav-item">

                                        <a_myProf className="nav-link active" href="javascript:void(0);"><i className="bx bxs-package"></i> Ordes</a_myProf>
                                    </li_myProf>
                                </ul_myProf>

                                <div className="card mb-4">
                                    <div className="card-body">
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body">

                                        <div className="card">
                                            <div className="table-responsive text-nowrap">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Αρ. παραγγελίας</th>
                                                            <th>Αριθμός προϊόντων</th>
                                                            <th>Σύνολο</th>
                                                            <th>Status</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="table-border-bottom-0">
                                                        <tr>
                                                            <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>1993923</strong></td>
                                                            <td>12</td>
                                                            <td>14$</td>
                                                            <td><span className="badge bg-label-info me-1">SHIPPED</span></td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button_myProf type="button_myProf" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button_myProf>
                                                                    <div className="dropdown-menu">
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Oder Info</a_myProf>
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Cancel Order</a_myProf>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="fab fa-react fa-lg text-info me-3"></i> <strong>1993923</strong></td>
                                                            <td>1</td>
                                                            <td>
                                                                14$
                                                            </td>
                                                            <td><span className="badge bg-label-success me-1">Delivred</span></td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button_myProf type="button_myProf" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button_myProf>
                                                                    <div className="dropdown-menu">
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a_myProf>
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a_myProf>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><i className="fab fa-vuejs fa-lg text-success me-3"></i> <strong>1993923</strong></td>
                                                            <td>2</td>
                                                            <td>14$</td>
                                                            <td><span className="badge bg-label-info me-1">SHIPPED</span></td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button_myProf type="button_myProf" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button_myProf>
                                                                    <div className="dropdown-menu">
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a_myProf>
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a_myProf>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <i className="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>1993923</strong>
                                                            </td>
                                                            <td>4</td>
                                                            <td>14$ </td>
                                                            <td><span className="badge bg-label-warning me-1">CANCELED</span></td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button_myProf type="button_myProf" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button_myProf>
                                                                    <div className="dropdown-menu">
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a_myProf>
                                                                        <a_myProf className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a_myProf>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-backdrop fade"></div>
            </div>
        </div>
    </div>
    <div className="layout-overlay layout-menu-toggle"></div>
</div>







);
} export default MyProfile;

