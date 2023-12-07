import React from "react";
import NavBar from "../component/NavBar";
function Home() {
    return(
        <div>
            <div className="search-container">
                <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
            </div>

            <div className="container">
                <button className="rotate-on-hover"><img src="Media/wishlist.png" alt="Wishlist Icon" /></button>
                <button
                    className="rotate-on-hover special-button"

                >
                    <img src="Media/profile.png" alt="Profile Icon" />
                    <div className="tooltip" id="tooltip">Συνδέσου τώρα</div>
                </button>

                <button className="rotate-on-hover"><img src="Media/cart.png" alt="Cart Icon" /></button>
            </div>
        </div>
    );
}





export default Home;
