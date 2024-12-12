import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function AddSalseman() {
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
      {/* Sidebar Start */}
         <Adminsidebar/>
      {/*  Sidebar End */}
   
      {/* Navbar Start */}
      <div className="body-wrapper">
        <Header/>
      <div className="container-fluid">
      {/* Navbar End */}
     

      <div className="container">
  <div className="row">
    <div className="col-lg-8 col-md-10 col-sm-12 mx-auto mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h3 style={{ color: "whitesmoke" }}>Add Salesman</h3>
          <button type="button" className="btn btn-outline-secondary bg-white">
            <Link to="/admin-salesman" className="text-decoration-none text-dark">Back</Link>
          </button>
        </div>
        <div className="card-body shadow">
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-md-6 col-sm-12 my-4">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <div>
                <input type="radio" defaultValue="Male" name="gender" /> <strong>Male</strong>
                &nbsp;
                <input type="radio" defaultValue="Female" name="gender" /> <strong>Female</strong>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group
              </label>
              <select className="form-control" id="bloodGroup">
              <option>Select your blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="emergencyNo" className="form-label">
                Emergency No
              </label>
              <input type="tel" className="form-control" id="emergencyNo" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-8 col-sm-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea className="form-control" id="address" rows="3" required></textarea>
            </div>
            <div className="col-md-4 col-sm-12 d-flex align-items-end mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Add Salesman
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>

    

     {/* Footer Start */}
        <Footer/>
     {/* Footer End */}

  </>
  
  );
}

export default AddSalseman;
