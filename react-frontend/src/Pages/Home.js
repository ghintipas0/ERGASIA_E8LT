import React from "react";

function Home() {
    return(
        <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li>
                    <a href="#Κατηγορίες">Κατηγορίες</a>
                    <div className="subcategories">
                        <a href="#pc-laptops" className="subcategory">PC & Laptops</a>
                        <a href="#smartphones" className="subcategory">Smartphones</a>
                        <a href="#tv" className="subcategory">Τηλεοράσεις</a>
                    </div>
                </li>
                <li><a href="#Προιόντα">Προιόντα</a></li>
            </ul>

            <div className="search-container">
                <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
            </div>

            <div className="container">
                <button className="rotate-on-hover"><img src="Media/wishlist.png" alt="Wishlist Icon" /></button>
                <button
                    className="rotate-on-hover special-button"
                    onMouseOver={showTooltip}
                    onMouseOut={hideTooltip}
                >
                    <img src="Media/profile.png" alt="Profile Icon" />
                    <div className="tooltip" id="tooltip">Συνδέσου τώρα</div>
                </button>

                <button className="rotate-on-hover"><img src="Media/cart.png" alt="Cart Icon" /></button>
            </div>

            {/* ... Rest of your code ... */}

        </div>
    );
}





export default Home;
