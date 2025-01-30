import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
 const [userName, setUserName] = useState("");
  const searchRef = useRef(null);
  const notificationRef = useRef(null);
  const messageRef = useRef(null);
  const appsRef = useRef(null);
  const userMenuRef = useRef(null);
  const notificationListRef = useRef(null);
  const messageListRef = useRef(null);

  const navigate = useNavigate();


    useEffect(() => {
      const name = localStorage.getItem("name");
      if (name) {
        setUserName(name);
      }
    }, []);

 

  // Toggle functions
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsMessageOpen(false);
    setIsAppsOpen(false);
    setIsUserMenuOpen(false);
  };
  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
    setIsNotificationOpen(false);
    setIsAppsOpen(false);
    setIsUserMenuOpen(false);
  };
  const toggleApps = () => {
    setIsAppsOpen(!isAppsOpen);
    setIsNotificationOpen(false);
    setIsMessageOpen(false);
    setIsUserMenuOpen(false);
  };
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationOpen(false);
    setIsMessageOpen(false);
    setIsAppsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">
          <div className="mobile-toggle-menu">
            <i className="bx bx-menu"></i>
          </div>

          {/* Search Bar */}
          <div className="search-bar flex-grow-1" ref={searchRef}>
            <div className="position-relative search-bar-box">
              <input
                type="text"
                className={`form-control search-control ${
                  isSearchOpen ? "active" : ""
                }`}
                placeholder="Type to search..."
              />
              <span
                className="position-absolute top-50 search-show translate-middle-y"
                onClick={toggleSearch}
              >
                <i className="bx bx-search"></i>
              </span>
              <span
                className="position-absolute top-50 search-close translate-middle-y"
                onClick={toggleSearch}
              >
                <i className="bx bx-x"></i>
              </span>
            </div>
          </div>

          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item mobile-search-icon">
                <a className="nav-link" href="#">
                  <i className="bx bx-search"></i>
                </a>
              </li>

              {/* Apps Dropdown */}
              <li className="nav-item dropdown dropdown-large" ref={appsRef}>
                <a
                  className={`nav-link dropdown-toggle dropdown-toggle-nocaret ${
                    isAppsOpen ? "show" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleApps();
                  }}
                >
                  <i className="bx bx-category"></i>
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    isAppsOpen ? "show" : ""
                  }`}
                >
                  <div className="row row-cols-3 g-3 p-3">
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-cosmic text-white">
                        <i className="bx bx-group"></i>
                      </div>
                      <div className="app-title">Teams</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-burning text-white">
                        <i className="bx bx-atom"></i>
                      </div>
                      <div className="app-title">Projects</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-lush text-white">
                        <i className="bx bx-shield"></i>
                      </div>
                      <div className="app-title">Tasks</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-kyoto text-dark">
                        <i className="bx bx-notification"></i>
                      </div>
                      <div className="app-title">Feeds</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-blues text-dark">
                        <i className="bx bx-file"></i>
                      </div>
                      <div className="app-title">Files</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-moonlit text-white">
                        <i className="bx bx-filter-alt"></i>
                      </div>
                      <div className="app-title">Alerts</div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Notifications Dropdown */}
              <li
                className="nav-item dropdown dropdown-large"
                ref={notificationRef}
              >
                <a
                  className={`nav-link dropdown-toggle dropdown-toggle-nocaret position-relative ${
                    isNotificationOpen ? "show" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleNotification();
                  }}
                >
                  <span className="alert-count">7</span>
                  <i className="bx bx-bell"></i>
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    isNotificationOpen ? "show" : ""
                  }`}
                >
                  <a href="javascript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">Notifications</p>
                      <p className="msg-header-clear ms-auto">
                        Marks all as read
                      </p>
                    </div>
                  </a>
                  <div
                    className="header-notifications-list"
                    ref={notificationListRef}
                  >
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary">
                          <i className="bx bx-group"></i>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            New Customers
                            <span className="msg-time float-end">
                              14 Sec ago
                            </span>
                          </h6>
                          <p className="msg-info">5 new user registered</p>
                        </div>
                      </div>
                    </a>
                    {/* Add more notification items here */}
                  </div>
                  <a href="javascript:;">
                    <div className="text-center msg-footer">
                      View All Notifications
                    </div>
                  </a>
                </div>
              </li>

              {/* Messages Dropdown */}
              <li className="nav-item dropdown dropdown-large" ref={messageRef}>
                <a
                  className={`nav-link dropdown-toggle dropdown-toggle-nocaret position-relative ${
                    isMessageOpen ? "show" : ""
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMessage();
                  }}
                >
                  <span className="alert-count">8</span>
                  <i className="bx bx-comment"></i>
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    isMessageOpen ? "show" : ""
                  }`}
                >
                  <a href="javascript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">Messages</p>
                      <p className="msg-header-clear ms-auto">
                        Marks all as read
                      </p>
                    </div>
                  </a>
                  <div className="header-message-list" ref={messageListRef}>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="user-online">
                          <img
                            src="assets/images/avatars/avatar-1.png"
                            className="msg-avatar"
                            alt="user avatar"
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">
                            Daisy Anderson{" "}
                            <span className="msg-time float-end">
                              5 sec ago
                            </span>
                          </h6>
                          <p className="msg-info">
                            The standard chunk of lorem
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* Add more message items here */}
                  </div>
                  <a href="javascript:;">
                    <div className="text-center msg-footer">
                      View All Messages
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* User Profile Dropdown */}
          <div className="user-box dropdown" ref={userMenuRef}>
            <a
              className={`d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret ${
                isUserMenuOpen ? "show" : ""
              }`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleUserMenu();
              }}
            >
              <img
                src="images/avatars/avatar-2.png"
                className="user-img"
                alt="user avatar"
              />
              <div className="user-info ps-3">
                <p className="user-name mb-0">{userName}</p>
                <p className="designattion mb-0">Web Designer</p>
              </div>
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                isUserMenuOpen ? "show" : ""
              }`}
            >
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-user"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-cog"></i>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="javascript:;">
                  <i className="bx bx-home-circle"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  <i className="bx bx-dollar-circle"></i>
                  <span>Earnings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  <i className="bx bx-download"></i>
                  <span>Downloads</span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider mb-0"></div>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  <i className="bx bx-log-out-circle"></i>
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
