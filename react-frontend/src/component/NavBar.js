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
                    </div>
                    <div className="col col-md-3">
                        <Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none">Orders</Link>
                    </div>
                    <div className="col col-md-3">
                        <div>
                            <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
                        </div>
                    </div>
                    <div className="col col-md-3 text-right">
                        <div className="container">
                            <button className="rotate-on-hover">
                                <img src="Media/wishlist.png" alt="Wishlist Icon" />
                            </button>
                            <button className="rotate-on-hover">
                                <Link to="/UserAuth" className="text-dark text-decoration-none"> <img src="Media/profile.png" alt="Profile Icon" /></Link>
                            </button>
                            <button className="rotate-on-hover">
                                <img src="Media/Cart.png" alt="Cart Icon" />
                            </button>
                        </div>
                    </div>
                </Row>
            </div>
        </nav>
    );
};

export default NavBar;
