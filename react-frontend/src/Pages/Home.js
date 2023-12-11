import React, { useEffect, useState } from "react";
import SlideshowComponent from '../component/SlideshowComponent'
function Home() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            showSlides();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    function showSlides() {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex > 3) {
                newIndex = 1;
            }
            return newIndex;
        });
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showTooltip() {
        // Use React state to handle tooltip visibility
    }

    function hideTooltip() {
        // Use React state to handle tooltip visibility
    }

    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder="Ψάχνεις για..." className="search-input" />
            </div>

            <div className="container">
                <button className="rotate-on-hover">
                    <img src="Media/wishlist.png" alt="Wishlist Icon" />
                </button>
                <button
                    className="rotate-on-hover special-button"
                    onMouseOver={showTooltip}
                    onMouseOut={hideTooltip}
                >
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

            <SlideshowComponent />

            <div className="slideshow-container-second">
                <div className="mySlides-second">
                    <div style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div className="mySlides-second">
                    <div style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div className="mySlides-second">
                    <div style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div className="text-second">Top Offers</div>
            </div>
        </div>
    );
}

export default Home;
