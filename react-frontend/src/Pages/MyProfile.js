import React, { useState, useEffect } from "react";

function MyProfile() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [productsInfo, setProductsInfo] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await fetch("http://localhost:8080/orders", {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrderData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order data:", error);
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [token]);

  const calculateTotalPrice = (order) => {
    let totalPrice = 0;
    let totalProducts = 0;

    order.quantities.forEach(quantity => {
      totalProducts += quantity.quantity;
      totalPrice += quantity.quantity * quantity.productId.price;
    });

    return { totalPrice, totalProducts };
  };

  const handleViewAllProducts = (order) => {
    const allProductsInfo = [];
    order.quantities.forEach(quantity => {
      const productInfo = {
        name: quantity.productId.name,
        quantity: quantity.quantity,
        price: quantity.productId.price
      };
      allProductsInfo.push(productInfo);
    });
    setProductsInfo(allProductsInfo);
    setSelectedOrder(order);
    setPopupVisible(true);
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-12">
                  {orderData.map((order, index) => (
                    <div key={index}>
                      <div className="card mb-4">
                        <div className="card-body"></div>
                        <hr className="my-0" />
                        <div className="card-body">
                          <div className="card">
                            <div className="table-responsive text-nowrap">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Αρ. παραγγελίας</th>
                                    <th>Αριθμός προϊόντων</th>
                                    <th>Σύνολο</th>
                                    <th>View all Products</th>
                                  </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                  <tr>
                                    <td>
                                      <i className="fab fa-bootstrap fa-lg text-primary me-3"></i>{" "}
                                      <strong>{order.id}</strong>
                                    </td>
                                    <td>{calculateTotalPrice(order).totalProducts}</td>
                                    <td>{calculateTotalPrice(order).totalPrice}$</td>
                                    <td>
                                      <button className="btn btn-secondary" type="button" onClick={() => handleViewAllProducts(order)}>
                                        View all Products
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Check if the current order is selected and show the corresponding popup */}
                      {selectedOrder && selectedOrder.id === order.id && popupVisible && (
                        <div className="popup-container">
                          <div className="popup2" style={{ padding: '20px' }}> {/* Add inline style for padding */}
                            <h2>All Products</h2>
                            <table>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                {productsInfo.map((product, index) => (
                                  <tr key={index}>
                                    <td>{product.name}</td>
                                    <td style={{ paddingRight: '20px' }}>{product.quantity}</td> {/* Adjust the spacing between quantity and price */}
                                    <td>{product.price}$</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <button className="btn btn-secondary" onClick={() => setPopupVisible(false)}>Close</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default MyProfile;
