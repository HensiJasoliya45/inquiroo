import React from "react";
import Header from './Salesmanheader'
import Footer from './Footer'
import SalsemanSidebar from "./Salesmansidebar";




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
 <SalsemanSidebar/>
  {/*  Sidebar End */}
  {/*  Main wrapper */}
  <div className="body-wrapper">

    {/*  Header Start */}
    <Header/>
    {/*  Header End */}
    <br />{" "}
    <div className="container mt-5" style={{ fontSize: "medium" }}>
  <div className="row">
    <div className="col-lg-10 offset-1 mt-5 col-md-12 col-sm-12">
      <div className="card shadow">
        <div className="card-header bg-primary text-white ">
          <h4 style={{ color: "whitesmoke" }}>Follow-Up Details</h4>
        
        </div>
        <div className="card-body shadow">
          <form>
            <div className="mb-3 row">
              <label htmlFor="name" className="col-md-3 col-form-label">
                <strong>Name:</strong>
              </label>
              <div className="col-md-9 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="phone" className="col-md-3 col-form-label">
                <strong>Phone No:</strong>
              </label>
              <div className="col-md-9 col-sm-12">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Mobile No"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="email" className="col-md-3 col-form-label">
                <strong>Email:</strong>
              </label>
              <div className="col-md-9 col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your email"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="datetime" className="col-md-3 col-form-label">
                <strong>Date &amp; Time:</strong>
              </label>
              <div className="col-md-9 col-sm-12">
                <input
                  type="datetime-local"
                  className="form-control"
                  id="datetime"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="details" className="col-md-3 col-form-label">
                <strong>Details:</strong>
              </label>
              <div className="col-md-9 col-sm-12">
                <textarea
                  className="form-control"
                  id="details"
                  rows={3}
                  placeholder="Enter Your Details..."
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary ">
                Save
              </button>
              &nbsp;
              <button type="reset" className="btn btn-secondary ">
                Cancel
              </button>
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

export default FollowUp;
