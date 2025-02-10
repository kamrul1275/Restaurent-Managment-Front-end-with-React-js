import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!categoryName) {
      setError("Category name is required.");
      return;
    }
    setError(""); // Reset error if validation passes

    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:8000/api/category/create",
        {
          category_name: categoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response: ", response.data); // Debugging
      // Handle success response
      if (response.data.status === 200) {
        alert("Category created successfully!");
        setCategoryName(""); // Reset form field
      }
    } catch (err) {
      // Handle error response
      setError("Failed to create category. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="page-content">
      {/* Breadcrumb */}
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Category Profile</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Category Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container">
        <div className="main-body">
          <div className="row">
            {/* Right Side - User Details */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Category Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Category Name"
                          value={categoryName}
                          onChange={handleChange}
                        />

                        {/* Error message */}
                        {error && (
                          <div className="text-danger mb-3">{error}</div>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <button
                          className="btn btn-primary px-4"
                          disabled={loading}
                        >
                          {loading ? "Adding..." : "Add Category"}
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

export default CreateCategory;
