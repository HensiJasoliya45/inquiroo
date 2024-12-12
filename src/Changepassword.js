import React from "react";



function changepass() {
  return (
    <>
    <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-12 col-lg-8 offset-lg-2">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h3 style={{ color: "whitesmoke" }}>Change Password</h3>
        </div>
        <div className="card-body shadow">
          <form>
            <div className="row mb-3">
              <label
                htmlFor="currentPassword"
                className="col-sm-2 col-form-label"
              >
                Current Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Enter current password"
                  required=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="newPassword" className="col-sm-2 col-form-label">
                New Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter new password"
                  required=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="confirmPassword"
                className="col-sm-2 col-form-label"
              >
                Confirm Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 offset-sm-2 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
  
  );
}

export default changepass;
