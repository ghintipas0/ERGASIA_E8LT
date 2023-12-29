import React, { useEffect, useState } from "react";
import SlideshowComponent from '../component/SlideshowComponent'
function Home() {

    const [tooltipVisible, setTooltipVisible] = useState(false);



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
        setTooltipVisible(true);
    }

    function hideTooltip() {
        // Use React state to handle tooltip visibility
        setTooltipVisible(false);
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
                </button>
                {tooltipVisible && (
                    <div
                        className="tooltip-container"
                        onMouseEnter={showTooltip}
                        onMouseLeave={hideTooltip}
                        style={{
                            position: "relative",
                            display: "inline-block",
                            position: "absolute",
                            top: "16%", // Εδώ θέτουμε τη θέση κάτω από το profile icon
                            left: "95%",
                            transform: "translateX(-80%)",
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            backgroundColor: "#EEEEEE",
                            width: "300px", // Αλλαγή στο width
                            height: "220px", // Αλλαγή στο height
                        }}
                    >
                        <p style={{ fontSize: "19px", display: "flex", justifyContent: "center", textAlign: "left", marginLeft: "20px"  }}>
                            Συνδέσου με τα στοιχεία σου για γρήγορη αγορά
                        </p>

                       <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                           <button style={{ padding: "6px 110px", fontSize: "14px", backgroundColor: "white", color: "black"}}>Είσοδος</button>
                       </div>


                        <p style={{fontSize: "19px", display: "flex",textAlign: "left", marginLeft: "20px"  }}>
                        Δεν έχεις λογαριασμό;
                        </p>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                             <button style={{ padding: "6px 50px", fontSize: "10px", backgroundColor: "white", color: "black", fontSize: "15px"}}>Δημιουργία λογαριασμού</button>
                        </div>
                    </div>
                )}




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
