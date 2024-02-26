// CartPage.js

import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Προϊόν 1', price: 10, photo: '/path/to/photo1.jpg', quantity: 1 },
        { id: 2, name: 'Προϊόν 2', price: 20, photo: '/path/to/photo2.jpg', quantity: 1 },
        { id: 3, name: 'Προϊόν 3', price: 15, photo: '/path/to/photo3.jpg', quantity: 1 },
    ]);

    const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleQuantityChange = (itemId, event) => {
        const newCartItems = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: parseInt(event.target.value) } : item
        );
        setCartItems(newCartItems);
    };

    const removeItem = (itemId) => {
        const newCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(newCartItems);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Καλάθι Αγορών</h1>
            <ul className="cart-items">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <div className="item-details">
                            <img src={item.photo} alt={item.name} className="item-photo" />
                            <div>
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">{item.price}€</p>
                            </div>
                        </div>
                        <div className="action-buttons">
                            <button onClick={() => removeItem(item.id)}>Αφαίρεση</button>
                            <div className="input-container">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={e => handleQuantityChange(item.id, e)}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                Συνολικό Κόστος: {totalCost}€
            </div>
        </div>
    );
};

export default CartPage;
