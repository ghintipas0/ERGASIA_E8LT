import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './NavBar.css';


const NavBar = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="nav nav-pills nav-justified">
                <Row>
                    <div className="col col-md-3">
                        <Link to="/" className="text-light nav-item nav-link text-decoration-none"> Home </Link>
                        <Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none">Orders</Link>
                    </div>
                    <div className="col col-md-3">
                        <div className="search-container">
                            <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
                        </div>
                    </div>
                    <div className="col col-md-3 text-right">
                        <div className="container">
                            <button className="rotate-on-hover">
                                <img src="Media/wishlist.png" alt="Wishlist Icon" />
                            </button>
                            <button className="rotate-on-hover" onClick={togglePopup}>
                                <img src="Media/profile.png" alt="Profile Icon" />
                            </button>
                            <button className="rotate-on-hover">
                                <img src="Media/Cart.png" alt="Cart Icon" />
                            </button>
                        </div>
                    </div>
                </Row>
                               {isPopupOpen && (
                <div className="popup">
                    <p>Already Registered?</p>
                    <button className="login-button"> <Link to="/Login" className="text-light nav-item nav-link text-decoration-none">Login</Link> </button>
                    <p>New User?</p>
                    <button className="register-button"> <Link to="/Register" className="text-light nav-item nav-link text-decoration-none">Register</Link> </button>
                </div>
                                )}
            </div>
        </nav>
    );
};

export default NavBar;
