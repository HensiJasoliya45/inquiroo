import React from "react";
import { Link } from 'react-router-dom';

function Profile() {
    return (
      <div className="container mt-5">
        <div className="card shadow bg-body-secondary">
          <div className="card-body">
            <div className="text-center mb-4">
              <img
                src="Inquiroo/assets/images/profile/admin.jpeg"
                alt="Profile"
                className="img-thumbnail rounded-circle mb-3"
                style={{ width: '210px', height: '200px' }}
              />
              <h3 className="fw-bold">Hensi Jasoliya</h3>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <label className="form-label fw-bold mb-1">Email:</label>
                      <div className="fw-normal">hensijasoliya70@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <label className="form-label fw-bold mb-1">Date of Birth:</label>
                      <div className="fw-normal">01-08-2004</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <label className="form-label fw-bold mb-1">Gender:</label>
                      <div className="fw-normal">Female</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <label className="form-label fw-bold mb-1">Age:</label>
                      <div className="fw-normal">20</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-4">
                <Link to="/admin-profile" className="btn btn-primary">
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Profile;
