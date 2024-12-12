import React from "react";
import Header from './Salesmanheader'
import Footer from './Footer'
import SalsemanSidebar from "./Salesmansidebar";
import {Link} from 'react-router-dom';



function AddInquiry() {
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
  <SalsemanSidebar/>
  {/*  Sidebar End */}

    {/*  Main wrapper */}
   <div className="body-wrapper">

    {/*  Header Start */}
    <Header/>
    {/*  Header End */}
    <br />{" "}
    <div className="container-fluid mt-5" style={{ fontSize: "medium" }}>
  <div className="row">
    <div className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1 offset-sm-0">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h3 style={{ color: "whitesmoke" }}>Add Inquiry</h3>
          <button type="button" className="btn btn-outline-secondary bg-white">
            <Link to="/Salesman-inquiry">Back</Link>
          </button>
        </div>
        <div className="card-body shadow">
          <form>
            <div className="row mb-3">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  required=""
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="email" className="col-form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="phone" className="col-form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  required=""
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="datetime" className="col-form-label">
                  Date &amp; Time
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="datetime"
                  name="datetime"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Add Inquiry
                </button>
              </div>
            </div>
          </form>
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

export default AddInquiry;
