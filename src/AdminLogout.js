import React from "react";
import {Link} from 'react-router-dom';


function AdminLogout() {
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center py-4">
                      <Link to="/" className="d-flex align-items-center">
                        <img src="favicon.ico" alt="" className="me-2" />
                        <span><h2>Inquiroo</h2></span>
                      </Link>
                    </div>
                    <form>
                      <div className="mb-4">
                        <h3 className="text-center">Are you sure you want to logout?</h3>
                      </div>
                      <div className="d-flex justify-content-around">
                        <Link
                          to="/"
                          className="btn btn-danger w-45 py-8 fs-4 mb-4 rounded-2"
                        >
                          Yes, Logout
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-secondary w-45 py-8 fs-4 mb-4 rounded-2"
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogout;
