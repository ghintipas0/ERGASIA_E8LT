import React, { useState, useEffect } from 'react';
import './SlideshowComponent.css';

const SlideshowComponent = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const slideshowInterval = setInterval(showSlides, 5000);

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
            <div className="mySlides">
            <p>HP 250 G8 15.6" FHD (i3-1005G1/8GB/256GB SSD/W10 Home) Silver (GR Keyboard) </p>
            <img src="Media/HP.png" alt="Image" />
            <p>Το HP 255 G8 απευθύνεται σε φοιτητές που θα χρειαστούν ένα οικονομικό Laptop για τις εργασίες τους, σε μαθητές και καθηγητές για τηλεκπαίδευση καθώς διαθέτει ποιοτικό μικρόφωνο, ηχεία και κάμερα, σε μαθητευόμενους προγραμματιστές καθώς και σε ανθρώπους όλων των ηλικιών που επιθυμούν ένα αξιόπιστο και πρακτικό Laptop για την καθημερινότητα τους.</p>
            <p> 609,00 € </p>
            </div>
            <div className="mySlides">
            <p>Lenovo IdeaPad 1 15AMN7 15.6" IPS FHD (Ryzen 5-7520U/8GB/256GB SSD/Radeon 610M/W11 S) Cloud Grey (GR Keyboard) </p>
            <img src="Media/LENOVO.png" alt="Image" />
            <p> Το Lenovo IdeaPad 1 15AMN7 απευθύνεται σε αυτούς που αναζητούν ένα οικονομικό φορητό υπολογιστή με ικανοποιητικά χαρακτηριστικά για εργασίες γραφείου, web browsing και multimedia αναπαραγωγή. Είναι κατάλληλο για φοιτητές, μαθητές και γενικά για καθημερινή χρήση σε σπίτι και γραφείο. </p>
            <p> 469,00 € </p></div>
            <div className="mySlides">
            <p>Asus Expertbook B1 B1500CBA-GR31C0X 15.6" FHD (i3-1215U/8GB/512GB SSD/W11 Pro) Star Black (GR Keyboard)</p>
            <img src="Media/ASUS.png" alt="Image" />
            <p>Το ASUS ExpertBook B1 είναι προσαρμοσμένο για εργασία, καθιστώντας το έξυπνη επιλογή για φιλόδοξες νεοσύστατες επιχειρήσεις, καθιερωμένους εκπαιδευτικούς οργανισμούς και αναπτυσσόμενες επιχειρήσεις όλων των μεγεθών.</p>
            <p> 635,40 € </p>
            </div>




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
