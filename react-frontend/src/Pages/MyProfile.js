import React, { useEffect, useState } from "react";

function MyProfile () {
 return (



<div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">

        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo">
                    </span>
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Skroutz</span>
                </a>

                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1 overflow-auto">
                <li className="menu-item">
                    <a href=".html" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Home</div>
                    </a>
                </li>


                <li className="menu-item">
                    <a href="javascript:void(0);" className="menu-link menu-toggle">
                        <i className="menu-icon tf-icons bx bx-category"></i>
                        <div data-i18n="Layouts">Categories</div>
                    </a>

                    <ul className="menu-sub">
                        <li className="menu-item">
                            <a href=".html" className="menu-link">
                                <div data-i18n="Without navbar">Laptops</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href=".html" className="menu-link">
                                <div data-i18n="Container">TV</div>
                            </a>
                        </li>
                        <li className="menu-item">
                            <a href=".html" className="menu-link">
                                <div data-i18n="Fluid">Smarthpones</div>
                            </a>
                        </li>
                    </ul>
                </li>



                <li className="menu-item">
                    <a href=".html" className="menu-link">
                        <i className="menu-icon tf-icons bx bxs-shopping-bags"></i>
                        <div data-i18n="Analytics">All Products</div>
                    </a>
                </li>


            </ul>
        </aside>
        <div className="layout-page">
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                              type="text"
                              className="form-control"
                              id="firstName"
                              name="firstName"
                              value="John"
                              autoFocus
                            />

                            <input
                              className="form-control"
                              type="password"
                              id="firstName"
                              name="firstName"
                              value="**************"
                              autoFocus
                              />
                        </div>
                    </div>
                       <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item lh-1 me-3">
                            <button type="button" className="btn btn-icon btn-primary">
                                <span className="tf-icons bx bx-cart"></span>
                            </button>
                        </li>

                        <li className="nav-item lh-1 me-3">
                            <button type="button" className="btn btn-icon btn-primary">
                                <span className="tf-icons bx bx-heart"></span>
                            </button>
                        </li>
                        <li className="nav-item lh-1 me-3">
                            <span></span>
                        </li>
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div className="btn btn-icon btn-primary">
                                    <span className="tf-icons bx bx-smile"></span>
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">My Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Orders</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="auth-login-basic.html">
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div className="btn btn-icon btn-primary">
                                    <span className="tf-icons bx bx-smile"></span>
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalToggle">
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">Register</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalCenter">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Log In</span>

                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content-wrapper">

                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">

                        <div className="row">
                            <div className="col-md-12">
                                <ul className="nav nav-pills flex-column flex-md-row mb-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="myProfile.html"><i className=" bx bx-user me-1"></i> Account</a>
                                    </li>
                                    <li className="nav-item">

                                        <a className="nav-link active" href="javascript:void(0);"><i className="bx bxs-package"></i> Ordes</a>
                                    </li>
                                </ul>

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
                                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1"></i> View Oder Info</a>
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1"></i> Cancel Order</a>
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
                                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a>
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a>
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
                                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a>
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a>
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
                                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                                    </button>
                                                                    <div className="dropdown-menu">
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-2"></i> View Oder Info</a>
                                                                        <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-2"></i> Cancel Order</a>
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

