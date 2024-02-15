import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
// import './PC.css';
const Products = () => {
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      // Κάνετε fetch τα δεδομένα από τον server
      console.log(id);
      const response = await fetch('http://localhost:8080/ShopNow/' + id);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      // Θέτετε τα προϊόντα στο state

      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
      <div className="products-container">
        {products.map(product => (
            <div key={product.id} className="product-box">
              <div className="b-container">
                <button className="small-square-button">
                  <img src={product.image} alt="Product" />
                </button>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default Products;