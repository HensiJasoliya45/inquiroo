import React, { useState } from "react";
import {Link} from 'react-router-dom';


function AdminProfile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [dob, setDob] = useState("2004-08-01");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("21");
  const [photo, setPhoto] = useState(null);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle form submission and profile update logic here
    alert("Profile updated successfully!");
  };

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

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
                  <div className="card-body ">
                    <div className="d-flex align-items-center justify-content-center py-4">
                      <Link to="/" className="d-flex align-items-center">
                        <img src="favicon.ico" alt="" className="me-2" />
                        <span> <h2>Inquiroo</h2></span>
                      </Link>
                    </div>
                    <form onSubmit={handleUpdate}>
                      <div className="mb-3">
                        <label htmlFor="profileName" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="profileName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profileEmail" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="profileEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profileDob" className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          id="profileDob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profileGender" className="form-label">Gender</label>
                        <select
                          className="form-select"
                          id="profileGender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profileAge" className="form-label">Age</label>
                        <input
                          type="number"
                          className="form-control"
                          id="profileAge"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="profilePhoto" className="form-label">Photo</label>
                        <input
                          type="file"
                          className="form-control"
                          id="profilePhoto"
                          accept="image/*"
                          onChange={handlePhotoChange}
                        />
                      </div>
                      {photo && (
                        <div className="mb-3">
                          <img src={photo} alt="Profile" className="img-thumbnail" />
                        </div>
                      )}
                      <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                        Update Profile
                      </button>
                    </form>
                    <div className="d-flex align-items-center justify-content-center">
                      <Link to="/" className="text-primary fw-bold ms-2">
                        Back to Dashboard
                      </Link>
                    </div>
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

export default AdminProfile;
