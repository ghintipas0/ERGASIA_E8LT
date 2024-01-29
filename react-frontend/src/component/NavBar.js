import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import LogRegPopup from './LogRegPopup';
import './NavBar.css';
import $ from 'jquery';

const NavBar = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setPopupOpen] = useState(false);
    useEffect(() => {
        if(document.cookie.indexOf('token=') !== -1){
            $('#isshow').hide();
        }
    }, []);

    function togglepopup(){
        if(document.cookie.indexOf('token=') !== -1) {
                $('#isshow').hide();
        }else{
                $('#isshow').show();
        }
        if(!$('#isshow').length){
            navigate('/MyProfile');
        }else {
            setPopupOpen(!isPopupOpen);
        }
    }

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
                            <button className="rotate-on-hover" onClick={togglepopup}>
                                <img src="Media/profile.png" alt="Profile Icon" />
                            </button>
                            <button className="rotate-on-hover">
                                <img src="Media/Cart.png" alt="Cart Icon" />
                            </button>
                        </div>
                    </div>
                </Row>
                <div id="isshow">
                {isPopupOpen &&
                <div className = "popup" id="regpopup">
                     <LogRegPopup />
                </div>
                }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
