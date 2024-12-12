import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function AddProduct() {
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
          <h3 style={{ color: "whitesmoke" }}>Add Product</h3>
          <button type="button" className="btn btn-outline-secondary bg-white">
            <Link to="/admin-product">Back</Link>
          </button>
        </div>
        <div className="card-body shadow">
          <form>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
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
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="photo" className="col-form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  name="photo"
                  required=""
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="price" className="col-form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="Price"
                  required=""
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="description" className="col-form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="5"
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Add Product
                </button>
                &nbsp;
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
    </div>

     {/* Footer Start */}
        <Footer/>
     {/* Footer End */}

  </>
  
  );
}

export default AddProduct;
