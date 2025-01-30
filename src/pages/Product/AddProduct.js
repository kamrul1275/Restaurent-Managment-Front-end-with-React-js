import React from "react";

const AddProduct = () => {
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
            <div className="row">
              <div className="col-lg-8">
                <div className="border border-3 p-4 rounded">
                  <div className="mb-3">
                    <label for="inputProductTitle" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputProductTitle"
                      placeholder="Enter product title"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="inputProductDescription" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="inputProductDescription"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="inputProductDescription" className="form-label">
                      Product Images
                    </label>
                    <input
                      id="image-uploadify"
                      type="file"
                      accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                      multiple
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border border-3 p-4 rounded">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label for="inputPrice" className="form-label">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputPrice"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="inputCompareatprice" className="form-label">
                        Discount Price
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputCompareatprice"
                        placeholder="00.00"
                      />
                    </div>

                    <div className="col-12">
                      <label for="inputProductType" className="form-label">
                        Category Type
                      </label>
                      <select className="form-select" id="inputProductType">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary">
                          Save Product
                        </button>
                      </div>
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

export default AddProduct;
