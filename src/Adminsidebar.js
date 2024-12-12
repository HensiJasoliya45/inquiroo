import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Assuming false by default

  return (
    <>
      <aside className="left-sidebar">
        {/* Sidebar scroll */}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img d-flex align-items-center">
              <img src="favicon.ico" alt="Logo" className="me-2" />
              <span className="ms-2">
                <h2>Inquiroo</h2>
              </span>
            </Link>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8" />
            </div>
          </div>

          {/* Sidebar navigation */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/" aria-expanded="false">
                  <span>
                    <i className="fa-brands fa-windows fa-lg" />
                  </span>
                  <span className="hide-menu" style={{ fontSize: "medium" }}>
                    Dashboard
                  </span>
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin-salesman" aria-expanded="false">
                      <span>
                        <i className="fa fa-address-book fa-lg" aria-hidden="true" />
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Salesman
                      </span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin-product" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-boxes-packing fa-lg" />
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Product
                      </span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin-inquiry" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-circle-check fa-lg" />
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Inquiry
                      </span>
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/login" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-right-to-bracket fa-lg" />
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Login
                      </span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/register" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-user-plus fa-lg" />{" "}
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Register
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin-change-password" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-key fa-lg" />{" "}
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Change Password
                      </span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link className="sidebar-link" to="/admin-logout" aria-expanded="false">
                      <span>
                        <i className="fa-solid fa-right-from-bracket fa-lg" />{" "}
                      </span>
                      <span className="hide-menu" style={{ fontSize: "medium" }}>
                        Logout
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll */}
      </aside>
    </>
  );
}

export default Sidebar;
