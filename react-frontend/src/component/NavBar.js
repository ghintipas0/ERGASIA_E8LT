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
                    <Col>
                        <Link to="/" className="text-light nav-item nav-link text-decoration-none"> Home </Link>
                    </Col>
                    <Col>
                        <Link to="/Register" className="text-light nav-item nav-link text-decoration-none">Profile</Link>
                        {isPopupOpen && (
                            <div className="popup">
                                Already Registered?
                                <button> Login </button>
                                New User?
                                <button> Register </button>
                            </div>
                        )}
                    </Col>
                    <Col>
                        <Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none">Orders</Link>
                    </Col>
                    <Col>
                        <div className="search-container">
                            <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
                        </div>
                    </Col>
                    <Col>
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
                    </Col>
                </Row>
                {isPopupOpen && (
<div className="popup">
    <p>Already Registered?</p>
    <button className="login-button"> Login </button>
    <p>New User?</p>
    <button className="register-button"> Register </button>
</div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
