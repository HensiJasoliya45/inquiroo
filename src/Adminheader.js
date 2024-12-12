import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const userName = "Hensi Jasoliya"; 
  const userProfileImg = "./inquiroo/assets/images/profile/admin.jpeg"; 

  return (
    <>
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <Link
                className="nav-link sidebartoggler nav-icon-hover"
                id="headerCollapse"
                to="javascript:void(0)"
              >
                <i className="ti ti-menu-2" />
              </Link>
            </li>
          </ul>
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              {isLoggedIn && (
                <>
                  <strong>{userName}</strong>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav-icon-hover"
                      to="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={userProfileImg}
                        alt=""
                        width={35}
                        height={35}
                        className="rounded-circle"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          to="/admin-view-profile"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6" />
                          <p className="mb-0 fs-3">My Profile</p>
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
