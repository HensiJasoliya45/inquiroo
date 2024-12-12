import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function AdminHome() {
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
    <div className="col-lg-12">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 style={{ color: "whitesmoke" }}>Product Detail</h4>
          <div>
            <button className="btn btn-primary ">
              <Link to="/admin-add-product" style={{ color: "whitesmoke" }}>
                <i className="fas fa-plus" />
                Add Product
              </Link>
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover ">
              <thead className="bg-light">
                <tr>
                  <th className="text-nowrap">ID</th>
                  <th className="text-nowrap">Product Name</th>
                  <th className="text-nowrap">Product Photo</th>
                  <th className="text-nowrap">Product Price</th>
                  <th className="text-nowrap">Description</th>
                  <th className="text-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Product Row Start */}
                <tr>
                  <td>1</td>
                  <td>Maruti Fronx</td>
                  <td>
                    <img
                        src="Inquiroo/assets/images/products/car2.jpeg"
                      alt="Maruti Fronx"
                      width={150}
                    />
                  </td>
                  <td>7.51 Lakh</td>
                  <td>
                    The Fronx is part of Maruti’s SUV and crossover lineup and it sits
                    below the Brezza and the Jimny. Naturally it’s got all the butch
                    design ingredients to make it look more substantial than the Baleno.
                    Let’s take a deep dive into the positioning of the new Fronx.
                  </td>
                  <td>
                    <button className="btn btn-outline-secondary ">
                      <Link to="/admin-edit-product">
                        <i className="fa-solid fa-pen-to-square" />
                      </Link>
                    </button>
                    <button className="btn btn-outline-secondary ">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </td>
                </tr>
                {/* Product Row End */}
                {/* Product Row Start */}
                <tr>
                  <td>2</td>
                  <td>Hyundai Creta</td>
                  <td>
                    <img
                       src="Inquiroo/assets/images/products/car1.jpeg"
                      alt="Hyundai Creta"
                      width={150}
                    />
                  </td>
                  <td>10.16 Lakh</td>
                  <td>
                    The Hyundai Creta is a compact SUV that comes with a range of 
                    powerful and efficient engines. It's known for its bold design, 
                    advanced features, and comfortable interiors, making it a popular 
                    choice in its segment.
                  </td>
                  <td>
                    <button className="btn btn-outline-secondary ">
                      <Link to="/admin-edit-product">
                        <i className="fa-solid fa-pen-to-square" />
                      </Link>
                    </button>
                    <button className="btn btn-outline-secondary ">
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </td>
                </tr>
                {/* Product Row End */}
              </tbody>
            </table>
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

export default AdminHome;
