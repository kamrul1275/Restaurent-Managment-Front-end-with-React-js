import React, { useState } from "react";
import axios from "axios";

const AddOrder = () => {
  // Define state for the form inputs
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [status, setStatus] = useState("");

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before validation
    setError({});

    // Input validation
    let errors = {};

    if (!customerId || isNaN(customerId)) {
      errors.customerId = "Customer ID must be a valid number";
    }

    if (!productId || isNaN(productId)) {
      errors.productId = "Product ID must be a valid number";
    }

    if (!quantity || isNaN(quantity) || quantity <= 0) {
      errors.quantity = "Quantity must be a positive number";
    }

    if (!totalAmount || isNaN(totalAmount) || totalAmount <= 0) {
      errors.totalAmount = "Total amount must be a positive number";
    }

    if (!paymentStatus) {
      errors.paymentStatus = "Payment status is required";
    }

    if (!status) {
      errors.status = "Order status is required";
    }

    // If there are validation errors, show them and stop submission
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const orderData = {
      customer_id: customerId,
      product_id: productId,
      quantity: quantity,
      total_amount: totalAmount,
      payment_status: paymentStatus,
      status: status,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/create/order",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success response
      setSuccessMessage(response.data.message);
      setError({});
    } catch (err) {
      // Handle error response
      setError({ api: "Failed to create order. Please try again." });
      setSuccessMessage("");
    }
  };

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Add Order</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  {error.api && (
                    <div className="alert alert-danger">{error.api}</div>
                  )}
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Customer ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="number"
                        className={`form-control ${
                          error.customerId ? "is-invalid" : ""
                        }`}
                        placeholder="Enter customer ID"
                        value={customerId}
                        onChange={(e) => setCustomerId(e.target.value)}
                      />
                      {error.customerId && (
                        <div className="invalid-feedback">
                          {error.customerId}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Product ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="number"
                        className={`form-control ${
                          error.productId ? "is-invalid" : ""
                        }`}
                        placeholder="Enter product ID"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                      />
                      {error.productId && (
                        <div className="invalid-feedback">
                          {error.productId}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Quantity</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="number"
                        className={`form-control ${
                          error.quantity ? "is-invalid" : ""
                        }`}
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      {error.quantity && (
                        <div className="invalid-feedback">{error.quantity}</div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Total Amount</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className={`form-control ${
                          error.totalAmount ? "is-invalid" : ""
                        }`}
                        placeholder="Enter total amount"
                        value={totalAmount}
                        onChange={(e) => setTotalAmount(e.target.value)}
                      />
                      {error.totalAmount && (
                        <div className="invalid-feedback">
                          {error.totalAmount}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Payment Status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className={`form-control ${
                          error.paymentStatus ? "is-invalid" : ""
                        }`}
                        placeholder="Enter payment status"
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                      />
                      {error.paymentStatus && (
                        <div className="invalid-feedback">
                          {error.paymentStatus}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Order Status</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className={`form-control ${
                          error.status ? "is-invalid" : ""
                        }`}
                        placeholder="Enter order status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      />
                      {error.status && (
                        <div className="invalid-feedback">{error.status}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="button"
                        className="btn btn-primary px-4"
                        value="Add Order"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
