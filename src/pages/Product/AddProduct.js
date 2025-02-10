import axios from "axios";
import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [category, setCategory] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/category");
        if (response.data && response.data.categories) {
          setCategory(response.data.categories);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const productData = {
      name: productName,
      category_id: selectedCategory,
      price: price,
      description: description,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/product/create",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.product) {
        alert("Product created successfully!");

        // Clear the form fields after successful submission
        setProductName("");
        setPrice("");
        setDiscountPrice("");
        setDescription("");
        setSelectedCategory("");
      }
    } catch (err) {
      setError("Error creating product. Please try again.");
      console.error("Error creating product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">eCommerce</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="javascript:;">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Add New Product
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="card">
        <div className="card-body p-4">
          <h5 className="card-title">Add New Product</h5>
          <hr />
          <div className="form-body mt-4">
            <form onSubmit={handleProductSubmit}>
              <div className="row">
                <div className="col-lg-8">
                  <div className="border border-3 p-4 rounded">
                    <div className="mb-3">
                      <label htmlFor="inputProductTitle" className="form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputProductTitle"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter product title"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="inputProductDescription"
                        className="form-label"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="inputProductDescription"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="border border-3 p-4 rounded">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="inputPrice" className="form-label">
                          Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputPrice"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="00.00"
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="inputCompareatprice"
                          className="form-label"
                        >
                          Discount Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="inputCompareatprice"
                          value={discountPrice}
                          onChange={(e) => setDiscountPrice(e.target.value)}
                          placeholder="00.00"
                        />
                      </div>

                      <div className="col-12">
                        <label
                          htmlFor="inputProductType"
                          className="form-label"
                        >
                          Category Type
                        </label>
                        <select
                          className="form-select"
                          id="inputProductType"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="">Select Category</option>
                          {category.length > 0 ? (
                            category.map((item) => (
                              <option
                                key={item.category_id}
                                value={item.category_id}
                              >
                                {item.category_name}
                              </option>
                            ))
                          ) : (
                            <option value="">No categories available</option>
                          )}
                        </select>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            type="submit"
                            className="btn btn-primary px-4"
                            disabled={loading}
                          >
                            {loading ? "Product..." : "Add Product"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="alert alert-danger mt-3">{error}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
