import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(

//);

 var slideIndex = 1;
   showSlides(slideIndex);

   function plusSlides(n) {
     showSlides(slideIndex += n);
   }

   function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slides[slideIndex-1].style.display = "block";
   }


 var slideIndexSecond = 1;
 showSlidesSecond(slideIndexSecond);

 function plusSlidesSecond(n) {
   showSlidesSecond(slideIndexSecond += n);
 }

 function showSlidesSecond(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides-second");
   if (n > slides.length) {slideIndexSecond = 1}
   if (n < 1) {slideIndexSecond = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slides[slideIndexSecond-1].style.display = "block";
 }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
