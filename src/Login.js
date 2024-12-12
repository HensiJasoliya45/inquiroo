import React from "react";
import {Link} from 'react-router-dom';


function AdminLogin() {
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
                <span> <h2>Inquiroo</h2></span>
              </Link>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="d-flex align-items-center justify-content-end mb-4">
                <Link
                  className="text-primary fw-bold"
                  to="/forgot-password"
                >
                  Forgot Password ?
                </Link>
              </div>
              <div className="row">
                <div className="col-12">
                  <Link
                    to="/"
                    className="btn btn-primary w-100 py-8 fs-4 mb-2 rounded-2"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Link
                    to="/Salesman-inquiry"
                    className="btn btn-secondary w-100 py-8 fs-4 mb-4 rounded-2"
                  >
                    Sign In as Salesman
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-bold">New to Inquiroo?</p>
                <Link
                  className="text-primary fw-bold ms-2"
                  to="/register"
                >
                  Create an account
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

export default AdminLogin;
