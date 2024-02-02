import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Dropdown } from 'react-bootstrap';
import LogRegPopup from './LogRegPopup';
import './NavBar.css';
import $ from 'jquery';

const NavBar = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        if (document.cookie.indexOf('token=') !== -1) {
            $('#isshow').hide();
        }
    }, []);

    function togglepopup() {
        if (document.cookie.indexOf('token=') !== -1) {
            $('#isshow').hide();
        } else {
            $('#isshow').show();
        }
        if (!$('#isshow').length) {
            navigate('/MyProfile');
        } else {
            setPopupOpen(!isPopupOpen);
        }
    }

    return (
        <nav className="navbar navbar-dark bg-dark" style={{position: "sticky", top:"0"}}>
            <div className="nav nav-pills nav-justified" style={{width:"100%",}}>
                <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"auto",width:"100%"}}>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"auto",width:"100%"}}>
                        <Link to="/" className="text-light nav-item nav-link text-decoration-none" style={{height:"100%",display:"flex",alignItems:"center",justifyContent: "center"}}> Home </Link>
                        <Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none" style={{height:"100%",display:"flex",alignItems:"center",justifyContent: "center"}}>Orders</Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" className="text-light nav-item nav-link text-decoration-none" id="dropdown-basic" style={{height:"100%"}}>
                                Products
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to="/PC_Laptops" className="text-light nav-item nav-link text-decoration-none"> PC & Laptops </Link>
                                <Dropdown.Item className="text-light nav-item nav-link text-decoration-none" href="category2">Smartphones</Dropdown.Item>
                                <Dropdown.Item className="text-light nav-item nav-link text-decoration-none" href="category3">Τηλεοράσεις</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Ψάχνεις για..." className="search-input"/>
                    </div>

                    <div className="container" style={{justifyContent: "flex-end"}}>
                        <button className="rotate-on-hover">
                            <img src="Media/wishlist.png" alt="Wishlist Icon" />
                        </button>
                        <button className="rotate-on-hover" onClick={togglepopup}>
                            <img src="Media/profile.png" alt="Profile Icon" />
                        </button>
                        <button className="rotate-on-hover">
                            <img src="Media/Cart.png" alt="Cart Icon" />
                        </button>
                    </div>
                </div>
                <div id="isshow">
                    {isPopupOpen &&
                        <div className="popup" id="regpopup">
                            <LogRegPopup />
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
