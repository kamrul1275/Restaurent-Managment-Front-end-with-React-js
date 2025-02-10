import React, { useEffect, useState } from "react";
import axios from "axios";

const AllCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/customers");
        setCustomers(response.data.customers);
        setFilteredCustomers(response.data.customers); // Initialize with all data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch customers.");
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // Search functionality
  useEffect(() => {
    const results = customers.filter((customer) =>
      Object.values(customer).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredCustomers(results);
    setCurrentPage(1);
  }, [searchTerm, customers]);

  // Sorting functionality
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredCustomers].sort((a, b) => {
      const aValue = a[key]?.toString().toLowerCase();
      const bValue = b[key]?.toString().toLowerCase();

      if (aValue < bValue) return direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setFilteredCustomers(sortedData);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Delete customer
  const handleCustomerDelete = async (customerId) => {
    if (!window.confirm("Are you sure you want to delete this customer?"))
      return;

    try {
      await axios.delete(`http://localhost:8000/api/customer/${customerId}`);

      // Remove the deleted customer from the list
      setCustomers(
        customers.filter((customer) => customer.customer_id !== customerId)
      );
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="page-content">
      <h6 className="mb-0 text-uppercase">Customer List</h6>
      <hr />
      <div className="card">
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Search Bar */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Data Table */}
          <table className="table mb-0 table-hover">
            <thead>
              <tr>
                <th scope="col" onClick={() => requestSort("customer_id")}>
                  No{" "}
                  {sortConfig.key === "customer_id"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
                <th scope="col" onClick={() => requestSort("name")}>
                  Name{" "}
                  {sortConfig.key === "name"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
                <th scope="col" onClick={() => requestSort("email")}>
                  Email{" "}
                  {sortConfig.key === "email"
                    ? sortConfig.direction === "ascending"
                      ? "▲"
                      : "▼"
                    : ""}
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((customer, index) => (
                  <tr key={customer.customer_id}>
                    <th scope="row">
                      {index + 1 + (currentPage - 1) * itemsPerPage}
                    </th>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleCustomerDelete(customer.customer_id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {filteredCustomers.length > itemsPerPage && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => paginate(1)}>
                First
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
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
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
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
          {Math.min(indexOfLastItem, filteredCustomers.length)} of{" "}
          {filteredCustomers.length} entries
        </p>
      </div>
    </div>
  );
};

export default AllCustomer;
