import React from "react";

const AllProduct = () => {
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
                <th scope="col">Dis. Price</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Beef Lover</td>
                <td>350 tk</td>
                <td>300 tk</td>
                <td>Pizza</td>
                <td>Pizza Mafia</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Mini Burger</td>
                <td>120 tk</td>
                <td>100 tk</td>
                <td>Burger</td>
                <td>Pizza Zone</td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm ms-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
