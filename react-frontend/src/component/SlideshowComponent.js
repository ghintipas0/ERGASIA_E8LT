import React, { useState, useEffect } from 'react';

const SlideshowComponent = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slideshowInterval = setInterval(showSlides, 3000);

        return () => {
            clearInterval(slideshowInterval);
        };
    }, [slideIndex]);

    const showSlides = () => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + 1;

            if (newIndex > slides.length) {
                newIndex = 1;
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[newIndex - 1].style.display = "block";
            dots[newIndex - 1].className += " active";

            return newIndex;
        });
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    const showTooltip = () => {
        document.getElementById("tooltip").style.display = "block";
    };

    const hideTooltip = () => {
        document.getElementById("tooltip").style.display = "none";
    };

    return (
        <div className="slideshow-container">
            {/* Your slideshow content goes here */}
            <div className="mySlides">Slide 1 Content</div>
            <div className="mySlides">Slide 2 Content</div>
            <div className="mySlides">Slide 3 Content</div>

            {/* Dots for navigation */}
            <div style={{ textAlign: 'center' }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    );
};

export default SlideshowComponent;
