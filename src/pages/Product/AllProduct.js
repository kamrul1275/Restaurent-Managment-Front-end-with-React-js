import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");

        if (response.data && response.data.products) {
          setProduct(response.data.products);
          setFilteredProducts(response.data.products);
          console.log("Product data ckeck", response.data.products);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  });
  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Tables</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="#">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Table
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <h6 className="mb-0 text-uppercase">DataTable Example</h6>
      <hr />

      <div className="card">
        <div className="card-body">
          <table className="table mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((item) => (
                  <tr>
                    <td>{item.product_id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.categories.category_name}</td>
                    <td>{item.description}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
