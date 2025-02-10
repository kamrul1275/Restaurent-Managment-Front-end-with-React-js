import React, { useEffect, useState } from "react";
import axios from "axios";

// const useEffect [manu,setMenu]=  useState([]);

const AllMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const menuData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/items");
        if (response.data && response.data.menu) {
          setMenu(response.data.menu);
          setFilteredMenus(response.data.menu);
          console.log("Menu data ckeck", response.data.menu);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    menuData();
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
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.length > 0 ? (
                menu.map((item, index) => (
                  <tr key={item.menu_id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.category_id}</td>
                    <td>{item.price} tk</td>
                    <td>{item.description ? item.description : "N/A"}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-danger btn-sm ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No menu items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
