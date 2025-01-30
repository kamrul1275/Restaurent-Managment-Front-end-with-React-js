import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the open state
    }));
  };

  return (
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img
            src="images/logo-icon.png"
            className="logo-icon"
            alt="logo icon"
          />
        </div>
        <div>
          <h4 className="text-black fw-bold fs-6 mt-2 mb-0">
            Hello Coders{" "}
            <span className="fw-bold fs-6 mt-2 mb-0  bg bg-danger"> BD</span>{" "}
          </h4>
        </div>
        <div className="toggle-icon ms-auto">
          <i className="bx bx-arrow-to-left"></i>
        </div>
      </div>

      <ul className="metismenu" id="menu">
        <li>
          <Link to="/dashboard">
            <div class="parent-icon">
              <i className="bx bx-home-circle"></i>
            </div>
            <div class="menu-title">Dashboard</div>
          </Link>
        </li>

        {/* Manage Order */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.ManageOrder ? "open" : ""}`}
            onClick={() => toggleItem("ManageOrder")}
          >
            <div className="parent-icon">
              <i class="bx bx-cog"></i>
            </div>
            <div className="menu-title">Manage Order</div>
          </a>
          {openItems.ManageOrder && (
            <ul className="submenu">
              <li>
                <Link to="/order/pos_invoice">
                  <i className="bx bx-right-arrow-alt"></i>POS Invoice
                </Link>
              </li>
              <li>
                <Link to="/order/list">
                  <i className="bx bx-right-arrow-alt"></i>Order List
                </Link>
              </li>
              <li>
                <Link to="/pending/order">
                  <i className="bx bx-right-arrow-alt"></i>Pending Order
                </Link>
              </li>
              <li>
                <Link to="/complete/order">
                  <i className="bx bx-right-arrow-alt"></i>Complete Order
                </Link>
              </li>

              <li>
                <Link to="/order/details">
                  <i className="bx bx-right-arrow-alt"></i>Order Details
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Category  */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.category ? "open" : ""}`}
            onClick={() => toggleItem("category")}
          >
            <div className="parent-icon">
              <i class="bx bx-category"></i>
            </div>
            <div className="menu-title">Category</div>
          </a>
          {openItems.category && (
            <ul className="submenu">
              <li>
                <Link to="/add/category">
                  <i className="bx bx-right-arrow-alt"></i>Add Category
                </Link>
              </li>
              <li>
                <Link to="/all/category">
                  <i className="bx bx-right-arrow-alt"></i>All Category
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Customer */}

        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.customer ? "open" : ""}`}
            onClick={() => toggleItem("customer")}
          >
            <div className="parent-icon">
              <i class="bx bx-user-circle"></i>
            </div>
            <div className="menu-title">Customer</div>
          </a>
          {openItems.customer && (
            <ul className="submenu">
              <li>
                <Link to="/add/customer">
                  <i className="bx bx-right-arrow-alt"></i>Add Customer
                </Link>
              </li>
              <li>
                <Link to="/all/customer">
                  <i className="bx bx-right-arrow-alt"></i>All Customer
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Menu */}

        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.menu ? "open" : ""}`}
            onClick={() => toggleItem("menu")}
          >
            <div className="parent-icon">
              <i className="bx bx-menu"></i>
            </div>
            <div className="menu-title">menu</div>
          </a>
          {openItems.menu && (
            <ul className="submenu">
              <li>
                <Link to="/add/menu">
                  <i className="bx bx-right-arrow-alt"></i>Add Menu
                </Link>
              </li>
              <li>
                <Link to="/all/menu">
                  <i className="bx bx-right-arrow-alt"></i>All Menu
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Product Menu */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.product ? "open" : ""}`}
            onClick={() => toggleItem("product")}
          >
            <div className="parent-icon">
              <i class="bx bx-cube"></i>
            </div>
            <div className="menu-title">Product</div>
          </a>
          {openItems.product && (
            <ul className="submenu">
              <li>
                <Link to="/add/product">
                  <i className="bx bx-right-arrow-alt"></i>Add Product
                </Link>
              </li>
              <li>
                <Link to="/all/product">
                  <i className="bx bx-right-arrow-alt"></i>All Product
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Order  */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.order ? "open" : ""}`}
            onClick={() => toggleItem("order")}
          >
            <div className="parent-icon">
              <i class="bx bx-cart"></i>
            </div>
            <div className="menu-title">Order</div>
          </a>
          {openItems.order && (
            <ul className="submenu">
              <li>
                <Link to="/add/order">
                  <i className="bx bx-right-arrow-alt"></i>Add Order
                </Link>
              </li>
              <li>
                <Link to="/all/order">
                  <i className="bx bx-right-arrow-alt"></i>All Order
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* OrderItem Menu */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.components ? "open" : ""}`}
            onClick={() => toggleItem("components")}
          >
            <div className="parent-icon">
              <i class="bx bx-cart-alt"></i>
            </div>
            <div className="menu-title">OrderItem</div>
          </a>
          {openItems.components && (
            <ul className="submenu">
              <li>
                <Link to="/add/order/item">
                  <i className="bx bx-right-arrow-alt"></i>Add OrderItem
                </Link>
              </li>
              <li>
                <Link to="/all/order/item">
                  <i className="bx bx-right-arrow-alt"></i>All OrderItem
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Content Menu */}
        <li>
          <a
            href="#"
            className={`has-arrow ${openItems.content ? "open" : ""}`}
            onClick={() => toggleItem("content")}
          >
            <div className="parent-icon">
              <i class="bx bx-group"></i>
            </div>
            <div className="menu-title">Staff</div>
          </a>
          {openItems.content && (
            <ul className="submenu">
              <li>
                <Link to="/add/staff">
                  <i className="bx bx-right-arrow-alt"></i>Add Staff
                </Link>
              </li>
              <li>
                <Link to="/all/staff">
                  <i className="bx bx-right-arrow-alt"></i>All Staff
                </Link>
              </li>
              <li>
                <Link to="/staff/profile">
                  <i className="bx bx-right-arrow-alt"></i> Staff Profile
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
