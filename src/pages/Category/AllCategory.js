// export default AllCategory;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Styles
const styles = {
  button: {
    color: "white",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    marginRight: "5px",
  },
  actionButton: {
    padding: "6px 12px",
    margin: "0 4px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
  },
  // tableHeader: {
  //   backgroundColor: "#f8f9fa",
  //   cursor: "pointer",
  //   userSelect: "none",
  //   position: "relative",
  // },
};

const AllCategory = () => {
  const navigate = useNavigate();

  // State management
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/api/category");
        if (response.data && response.data.categories) {
          setCategories(response.data.categories);
          setFilteredCategories(response.data.categories);
          
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/category/${categoryId}`
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to delete category");
      }

      alert(response.data.message);

      // Refresh category list after deletion
      setCategories(
        categories.filter((category) => category.category_id !== categoryId)
      );
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Search functionality
  useEffect(() => {
    const results = categories.filter((category) =>
      Object.values(category).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredCategories(results);
    setCurrentPage(1);
  }, [searchTerm, categories]);

  // Sorting functionality
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredCategories].sort((a, b) => {
      const aValue = a[key]?.toString().toLowerCase();
      const bValue = b[key]?.toString().toLowerCase();

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setFilteredCategories(sortedData);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading)
    return <div className="text-center mt-5">Loading categories...</div>;
  if (error)
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <div className="container mt-4">
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

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3>Category List</h3>
        </div>
        <div>
          <button
            className="btn btn-primary mb-3"
            onClick={() => navigate("/add/category")}
          >
            <i className="bx bx-plus"></i> Add Category
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="btn btn-outline-secondary"
                onClick={() => setSearchTerm("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th
                onClick={() => requestSort("category_id")}
                // style={styles.tableHeader}
              >
                ID{" "}
                {sortConfig.key === "category_id" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                onClick={() => requestSort("category_name")}
                // style={styles.tableHeader}
              >
                Category Name{" "}
                {sortConfig.key === "category_name" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                onClick={() => requestSort("created_at")}
                // style={styles.tableHeader}
              >
                Created At{" "}
                {sortConfig.key === "created_at" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th
                onClick={() => requestSort("updated_at")}
                // style={styles.tableHeader}
              >
                Updated At{" "}
                {sortConfig.key === "updated_at" &&
                  (sortConfig.direction === "ascending" ? "↑" : "↓")}
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((category) => (
                <tr key={category.category_id}>
                  <td>{category.category_id}</td>
                  <td>{category.category_name}</td>
                  <td>{formatDate(category.created_at)}</td>
                  <td>{formatDate(category.updated_at)}</td>
                  <td>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() =>
                        navigate(`/category/${category.category_id}`)
                      }
                      style={styles.actionButton}
                    >
                      <i class="bx bxs-show"></i>
                    </button>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        navigate(`/edit-category/${category.category_id}`)
                      }
                      style={styles.actionButton}
                    >
                      <i class="bx bxs-edit"></i>
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(category.category_id)}
                      style={styles.actionButton}
                    >
                      <i className="bx bxs-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {filteredCategories.length > itemsPerPage && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => {
              // Show limited page numbers with ellipsis
              if (
                index === 0 ||
                index === totalPages - 1 ||
                (index >= currentPage - 2 && index <= currentPage)
              ) {
                return (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              }
              return null;
            })}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Results Summary */}
      <div className="text-center mt-3">
        <p>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, filteredCategories.length)} of{" "}
          {filteredCategories.length} entries
        </p>
      </div>
    </div>
  );
};

export default AllCategory;
