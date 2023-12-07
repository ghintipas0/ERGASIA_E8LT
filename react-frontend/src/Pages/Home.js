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

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Εμφάνιση του επόμενου slide κάθε 4 δευτερόλεπτα
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Έναρξη της παρουσίασης των slides
showSlides();


function showTooltip() {
    document.getElementById("tooltip").style.display = "block";
}

function hideTooltip() {
    document.getElementById("tooltip").style.display = "none";
}


export default Home;
