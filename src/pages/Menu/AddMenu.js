import axios from "axios";
import React, { useEffect, useState } from "react";

const AddMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // Initial state as an empty array

  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/category");
        setCategories(response.data.categories); // Ensure this is an array
        console.log("Fetched categories:", response.data.categories);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch categories.");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Debugging: Log current values before validation
    console.log("Menu Name:", menuName);
    console.log("Category:", category);
    console.log("Price:", price);
    console.log("Description:", description);

    // Trim input values to prevent empty spaces causing false negatives
    if (
      !menuName.trim() ||
      !category.trim() ||
      !price.trim() ||
      !description.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    const formData = {
      name: menuName, // Change from "menu_name" to "name"
      category_id: parseInt(category), // Ensure it's a number
      price: parseFloat(price), // Convert price to a valid float number
      description: description.trim(),
    };

    console.log("FormData being sent:", JSON.stringify(formData, null, 2));

    try {
      const response = await axios.post(
        "http://localhost:8000/api/item/create",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response from API:", response.data);
      alert("Menu item added successfully!");

      // Reset form
      setMenuName("");
      setCategory("");
      setPrice("");
      setDescription("");
    } catch (err) {
      console.error("Error adding menu:", err);
      setError("Failed to add menu. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Add Menu</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Menu Profile
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
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    {/* Menu Name */}
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                          value={menuName}
                          onChange={(e) => setMenuName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Category</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <select
                          className="form-select mb-3"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Select Category</option>
                          {categories.map((cat) => (
                            <option
                              key={cat.category_id}
                              value={cat.category_id}
                            >
                              {cat.category_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Price</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Description</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <textarea
                          className="form-control"
                          placeholder="Enter Description"
                          rows="3"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="row">
                      <div className="col-sm-3"></div>
                      <div className="col-sm-9 text-secondary">
                        <button
                          type="submit"
                          className="btn btn-primary px-4"
                          disabled={loading}
                        >
                          {loading ? "Adding..." : "Add Menu"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
