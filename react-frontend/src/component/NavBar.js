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
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestedOptions, setSuggestedOptions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            $('#isshow').hide();
            setLoggedin(true);
        }else{
            setLoggedin(false);
        }
    }, []);

    useEffect(() => {
            if (searchQuery.trim() === '') {
                // Εάν η αναζήτηση είναι κενή, εμφάνισε τις προτεινόμενες επιλογές
                setShowSuggestions(true);
                setSuggestedOptions([]);
            } else {
                // Εάν η αναζήτηση δεν είναι κενή, κάνε αναζήτηση και εμφάνισε τις προτεινόμενες επιλογές
                // Προσοχή: Εδώ μπορείς να προσθέσεις τη λογική που αποφασίζει τις προτεινόμενες επιλογές
                // Για τώρα, ας υποθέσουμε ότι έχουμε μερικές σταθερές επιλογές
                const hardcodedOptions = ['Laptops', 'Smartphones', 'Τηλεοράσεις'];
                const filteredOptions = hardcodedOptions.filter(option =>
                    option.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSuggestedOptions(filteredOptions);
            }
        }, [searchQuery]);

        function handleSearchInputChange(event) {
            const { value } = event.target;
            setSearchQuery(value);
            setShowSuggestions(value.trim() === ''); // Εάν η αναζήτηση είναι κενή, εμφάνισε τις προτεινόμενες επιλογές
        }


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
                        <input
                            type="text"
                            placeholder="Ψάχνεις για..."
                            className="search-input"
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                        <div className="suggested-options">
                            {suggestedOptions.map((option, index) => (
                                <div key={index} className="suggested-option">
                                    {option === 'Laptops' && (
                                        <Link to="/Products/3">{option}</Link>
                                    )}
                                    {option === 'Smartphones' && (
                                        <Link to="/Products/1">{option}</Link>
                                    )}
                                    {option === 'Τηλεοράσεις' && (
                                        <Link to="/Products/2">{option}</Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="container" style={{justifyContent: "flex-end"}}>
                        <button className="rotate-on-hover">
                            <img src="/Media/wishlist.png" alt="Wishlist Icon" />
                        </button>
                        <button className="rotate-on-hover" onClick={toggleProfilePopup}>
                            <img src="/Media/profile.png" alt="Profile Icon" />
                        </button>
                        <Link to="/CartPage" className="rotate-on-hover">
                            <img src="/Media/Cart.png" alt="Cart Icon" />
                        </Link>
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

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
