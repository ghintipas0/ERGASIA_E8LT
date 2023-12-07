import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";

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

            <div className="slideshow-container">
                <div className="mySlides">
                    <img src="Media/lenovoidea.png" alt="Περιγραφή φωτογραφίας" style={{ width: "300px", height: "300px", borderRadius: "15px", position: "absolute", left: "50px", zIndex: "1" }} />
                    <div className="text" style={{ fontSize: "18px", top: "90px", left: "160px", fontWeight: "bold" }}>Lenovo IdeaPad Gaming 3 15IHU6 15.6" IPS FHD</div>
                    <div className="text" style={{ fontSize: "28px", top: "130px", left: "160px", fontWeight: "bold" }}>648,99€</div>
                    <div className="content" style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div className="mySlides">
                    <div className="content" style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div className="mySlides">
                    <div style={{ width: "800px", height: "300px", backgroundColor: "#f7f7f7", margin: "auto", borderRadius: "15px" }}></div>
                </div>

                <div style={{ textAlign: "center" }}>
                    <span className="dot" onClick={() => currentSlide(1)}></span>
                    <span className="dot" onClick={() => currentSlide(2)}></span>
                    <span className="dot" onClick={() => currentSlide(3)}></span>
                </div>
            </div>

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
