import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function FollowUp() {
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
         
          
      <div className="container mt-5" style={{ fontSize: "medium" }}>
      <div className="row">
      <div className="col-lg-12 col-md-10 col-sm-12 mx-auto ">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h4 style={{ color: "whitesmoke" }}>Follow-Up Details</h4>
          <button type="button" className="btn btn-outline-secondary bg-white">
            <Link to="/admin-inquiry">Back</Link>
          </button>
        </div>
        <div className="card-body shadow">
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>ID:</strong>
            </div>
            <div className="col-md-9 col-sm-12">1</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>Name:</strong>
            </div>
            <div className="col-md-9 col-sm-12">Hensi Jasoliya</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>Phone No:</strong>
            </div>
            <div className="col-md-9 col-sm-12">(+91) 456-7890</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>Email:</strong>
            </div>
            <div className="col-md-9 col-sm-12">hensi12@gmail.com</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>Date & Time:</strong>
            </div>
            <div className="col-md-9 col-sm-12">2024-07-04 14:30</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 col-sm-12">
              <strong>Details:</strong>
            </div>
            <div className="col-md-9 col-sm-12">
              give your details into this field...
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

export default FollowUp;
