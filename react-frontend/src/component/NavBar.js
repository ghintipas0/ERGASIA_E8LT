import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className = "nav nav-pills nav-justified">
                <Row>
                    <Col>
                        <Link to="/" className="text-light nav-item nav-link text-decoration-none"> Home </Link>
                    </Col>
                    <Col>
                        <Link to="/MyProfileInfo" className="text-light nav-item nav-link text-decoration-none">Profile</Link>
                    </Col>
                    <Col>
                        <Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none">Orders</Link>
                    </Col>
                </Row>
            </div>
        </nav>
    );
};

export default NavBar;
