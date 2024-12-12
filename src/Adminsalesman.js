import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import {Link} from 'react-router-dom';


function Salesman() {
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
      <div className="container mt-5">
  <div className="row">
    <div className="col-lg-12">
      <div className="card shadow">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h4 style={{color:"whitesmoke"}}>List Of Salesman</h4>
          <button className="btn btn-primary">
            <Link to="/admin-add-salesman" className="text-white" style={{ textDecoration: 'none' }}>
              <i className="fas fa-plus me-1"></i> Add Salesman
            </Link>
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead className="bg-light">
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Address</th>
                  <th scope="col">Emergency No</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Gohil Diya Shaileshbhai</td>
                  <td>Female</td>
                  <td>gohildiyas@gmail.com</td>
                  <td>8866576821</td>
                  <td>A+</td>
                  <td>Pitroda Trailer, state highway road, lakhtar, surendranagar</td>
                  <td>8866576821</td>
                  <td>
                    <button className="btn btn-outline-secondary">
                      <Link to="/admin-edit-salesman" className="text-decoration-none text-reset">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
               
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

export default Salesman;
