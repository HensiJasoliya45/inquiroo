import React from "react";
import {Link} from 'react-router-dom';



function Forgetpassword() {
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
              <Link
                to="/"
                className=" d-flex align-items-center justify-content-center py-4"
              >
                  <img src="favicon.ico" alt="" className="me-2" />
                  <span> <h2>Inquiroo</h2></span>
              </Link>
              <p className="text-center" />
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email  
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email and get otp..!"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required=""
                  />
                </div>
                <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                  Send OTP
                </button>
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

export default Forgetpassword;
