import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row, Dropdown } from 'react-bootstrap';
import LogRegPopup from './LogRegPopup';
import './NavBar.css';
import $ from 'jquery';
import Logout from "./Logout";

const NavBar = () => {
    const navigate = useNavigate();
    const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
    const [isCartPopupOpen, setCartPopupOpen] = useState(false);
    const [isLoggedin, setLoggedin] = useState(false);
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState([]);
      const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            $('#isshow').hide();
            setLoggedin(true);
        }else{
            setLoggedin(false);
        }
    }, []);

    function toggleProfilePopup() {
        if (document.cookie.indexOf('token=') !== -1) {
            $('#isshow').hide();
        } else {
            $('#isshow').show();
        }
        if (!$('#isshow').length) {
            navigate('/MyProfile');
        } else {
            setProfilePopupOpen(!isProfilePopupOpen);
        }
    }

    function toggleCartPopup() {
        // Logic to toggle cart popup
        setCartPopupOpen(!isCartPopupOpen);
    }

    function addToCart(product) {
        const newCart = [...cart, product];
        const newTotalCost = totalCost + product.price;
        setCart(newCart);
        setTotalCost(newTotalCost);
    }


    return (
        <nav className="navbar navbar-dark bg-dark" style={{position: "sticky", top:"0"}}>
            <div className="nav nav-pills nav-justified" style={{width:"100%",}}>
                <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"auto",width:"100%"}}>
                    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gridTemplateRows:"auto",width:"100%"}}>
                        <Link to="/" className="text-light nav-item nav-link text-decoration-none" style={{height:"100%",display:"flex",alignItems:"center",justifyContent: "center"}}> Home </Link>
                        {isLoggedin && (<Link to="/MyProfile" className="text-light nav-item nav-link text-decoration-none" style={{height:"100%",display:"flex",alignItems:"center",justifyContent: "center"}}>Orders</Link>)}
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" className="text-light nav-item nav-link text-decoration-none" id="dropdown-basic" style={{height:"100%"}}>
                                Products
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link className="text-light nav-item nav-link text-decoration-none" to="Products/3">PC & Laptops</Link>
                                <Link className="text-light nav-item nav-link text-decoration-none" to="Products/1">Smartphones</Link>
                                <Link className="text-light nav-item nav-link text-decoration-none" to="Products/2">Τηλεοράσεις</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Ψάχνεις για..." className="search-input"/>
                    </div>

                    <div className="container" style={{justifyContent: "flex-end"}}>
                        <button className="rotate-on-hover">
                            <img src="/Media/wishlist.png" alt="Wishlist Icon" />
                        </button>
                        <button className="rotate-on-hover" onClick={toggleProfilePopup}>
                            <img src="/Media/profile.png" alt="Profile Icon" />
                        </button>
                        <button className="rotate-on-hover" onClick={toggleCartPopup}>
                            <img src="/Media/Cart.png" alt="Cart Icon" />
                        </button>
                    </div>
                </div>
                <div id="isshow">
                    {isProfilePopupOpen ? (
                        <div className="popup" id="regpopup">
                            {isLoggedin ? <Logout/> : (
                                <div id="regpopup">
                                    <div style={{color: "black", marginTop: "1em"}}>Already Registered?</div>
                                    <button className="login-button" onClick={toggleProfilePopup}><Link to="/Login"
                                                                                                 className="nav-item nav-link text-decoration-none"
                                                                                                 style={{color: "white"}}>Login</Link>
                                    </button>
                                    <div style={{color: "black", marginTop: "1em"}}>New User?</div>
                                    <button className="register-button" onClick={toggleProfilePopup}><Link to="/Register"
                                                                                                    className="nav-item nav-link text-decoration-none"
                                                                                                    style={{color: "black"}}>Register</Link>
                                    </button>
                                </div>)}
                        </div>
                    ) : null}
                    {isCartPopupOpen ? (
                        <div className="popup" id="cartpopup">
                            <div className="cart-summary">
                                <h2>Your Shopping Cart</h2>
                                <ul className="cart-items">
                                    {cart.map((product, index) => (
                                        <li key={index}>
                                            <div className="cart-item">
                                                <div className="item-image">
                                                    <img src={product.photo} alt={product.name} />
                                                </div>
                                                <div className="item-details">
                                                    <p className="item-name">{product.name}</p>
                                                    <p className="item-price">{product.price}€</p>
                                                    {/* Εδώ μπορείς να προσθέσεις περισσότερες λεπτομέρειες του προϊόντος, όπως ποσότητα, χρώμα, μέγεθος κλπ. */}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="cart-total">
                                    <p>Total: {totalCost}€</p>
                                </div>
                                <div className="cart-buttons">
                                    <Link to="/CartPage" className="checkout-button">Checkout</Link>
                                    <button className="continue-shopping-button" onClick={toggleCartPopup}>Continue Shopping</button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
