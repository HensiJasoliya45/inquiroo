import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function EditSalseman() {
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
          
      <div className="container-fluid mt-5" style={{ fontSize: "medium" }}>
   <div className="row">
    <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h4 style={{ color: "whitesmoke" }}>Edit Salesman</h4>
          <button type="button" className="btn btn-outline-secondary bg-white">
            <Link to="/admin-salesman">Back</Link>
          </button>
        </div>
        <div className="card-body shadow">
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required="" />
            </div>
            <div className="col-md-6 col-sm-12 mt-1">
              <label htmlFor="gender" className="form-label">Gender</label>
              <div>
                <input type="radio" value="Male" name="gender" /> <strong>Male</strong> &nbsp;
                <input type="radio" value="Female" name="gender" /> <strong>Female</strong>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" required="" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
              <select className="form-select" id="bloodGroup">
                <option value="0">None</option>
                <option value="1">A+</option>
                <option value="2">A-</option>
                <option value="3">B+</option>
                <option value="4">B-</option>
                <option value="5">O+</option>
                <option value="6">O-</option>
                <option value="7">AB+</option>
                <option value="8">AB-</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="emergencyNo" className="form-label">Emergency No</label>
              <input type="tel" className="form-control" id="emergencyNo" required="" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="Address" className="form-label">Address</label>
              <textarea rows="2"   placeholder="Enter Your Address.." className="form-control" id="Address" required=""></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 offset-sm-2 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">Submit</button>
              &nbsp;
              <button type="reset" className="btn btn-secondary">Reset</button>
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

export default EditSalseman;
