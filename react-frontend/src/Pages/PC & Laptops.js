import React, { useEffect, useState } from "react";
import axios from 'axios';
import './PC.css';

function PC & Laptops() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    // Εδώ μπορείτε να καλέσετε ένα API για να φορτώσετε τα δεδομένα των laptops
    // ή να χρησιμοποιήσετε τα δικά σας δεδομένα
    axios.get('your_api_endpoint')
      .then(response => {
        setLaptops(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Το δεύτερο όρισμα της useEffect είναι ένα άδειο array, έτσι ώστε να καλείται μόνο μια φορά σαν componentDidMount

  return (
    <div>
      <h1>Προϊόντα - Laptops</h1>
      <div>
        {laptops.map(laptop => (
          <div key={laptop.id} className="laptop-container">
            <img src={laptop.image} alt={laptop.name} />
            <h2>{laptop.name}</h2>
            <p>{laptop.description}</p>
            <p>Τιμή: {laptop.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PC & Laptops;
