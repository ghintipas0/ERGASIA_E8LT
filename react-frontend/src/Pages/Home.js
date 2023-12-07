import React from "react";
import NavBar from "../component/NavBar";

function Home() {
  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
      </div>

      <div className="container">
        <button className="rotate-on-hover">
          <img src="Media/wishlist.png" alt="Wishlist Icon" />
        </button>
        <button className="rotate-on-hover special-button">
          <img src="Media/profile.png" alt="Profile Icon" />
          <div className="tooltip" id="tooltip">
            Συνδέσου τώρα
          </div>
        </button>
        <button className="rotate-on-hover">
          <img src="Media/cart.png" alt="Cart Icon" />
        </button>
      </div>

      <div className="button-container">
        <button className="button">
          <img src="Media/laptop.png" alt="Image" />
          PC & Laptops
        </button>
        <button className="button">
          <img src="Media/phones.png" alt="Image" />
          Smartphones
        </button>
        <button className="button">
          <img src="Media/tv.png" alt="Image" />
          Τηλεοράσεις
        </button>
      </div>

      {/* First Slideshow */}
      <div className="slideshow-container">
        {/* Your slideshow content here */}
      </div>

      {/* Second Slideshow */}
      <div className="slideshow-container-second">
        {/* Your second slideshow content here */}
        <div className="text-second">Top Offers</div>
      </div>
    </div>
  );
}

export default Home;
