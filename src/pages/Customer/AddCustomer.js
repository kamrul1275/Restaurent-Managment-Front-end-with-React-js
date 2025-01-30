import React, { useState } from "react";
import axios from "axios";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationErrors({ ...validationErrors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.address.trim()) errors.address = "Address is required";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:8000/api/customer/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Customer added successfully!");
      setFormData({ name: "", email: "", phone: "", address: "" });
      setValidationErrors({});
    } catch (err) {
      setError("Failed to add customer. Please try again.");
    }
  };

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Add Customer</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Customer Profile
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
                  {message && (
                    <div className="alert alert-success">{message}</div>
                  )}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleAddCustomer}>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter full name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {validationErrors.name && (
                          <div className="text-danger">
                            {validationErrors.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {validationErrors.email && (
                          <div className="text-danger">
                            {validationErrors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        {validationErrors.phone && (
                          <div className="text-danger">
                            {validationErrors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Enter address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                        {validationErrors.address && (
                          <div className="text-danger">
                            {validationErrors.address}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <button type="submit" className="btn btn-primary px-4">
                          Add Customer
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
