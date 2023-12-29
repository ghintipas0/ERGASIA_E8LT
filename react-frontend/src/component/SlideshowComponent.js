import React, { Component } from 'react';

class SlideshowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }

    componentDidMount() {
        this.slideshowInterval = setInterval(this.showSlides, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.slideshowInterval);
    }

    showSlides = () => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        this.setState((prevState) => {
            let newIndex = prevState.slideIndex + 1;

            if (newIndex > slides.length) {
                newIndex = 1;
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[newIndex - 1].style.display = "block";
            dots[newIndex - 1].className += " active";

            return { slideIndex: newIndex };
        });
    };

    currentSlide = (n) => {
        this.setState({ slideIndex: n });
    };

    showTooltip = () => {
        document.getElementById("tooltip").style.display = "block";
    };

    hideTooltip = () => {
        document.getElementById("tooltip").style.display = "none";
    };

    render() {
        return (
            <div className="slideshow-container">
                {/* Your slideshow content goes here */}
                <div className="mySlides">Slide 1 Content</div>
                <div className="mySlides">Slide 2 Content</div>
                <div className="mySlides">Slide 3 Content</div>

                {/* Dots for navigation */}
                <div style={{ textAlign: 'center' }}>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    <span className="dot" onClick={() => this.currentSlide(3)}></span>
                </div>
            </div>
        );
    }
}

export default SlideshowComponent;
