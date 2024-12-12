import React from "react";
import Header from './Salesmanheader'
import Footer from './Footer'
import SalsemanSidebar from "./Salesmansidebar";
import {Link} from 'react-router-dom';



function Inquiry() {
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
    <div className="container">
  <div className="row mt-5">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="card shadow mt-5">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <h3 style={{ color: "whitesmoke" }}>Inquiry List</h3>
          <div>
            <button className="btn btn-primary " style={{ color: "whitesmoke" }} onclick="downloadCSV()">
              <i className="fas fa-download" /> Download
            </button>
            &nbsp;
            <button className="btn btn-primary " style={{ color: "whitesmoke" }} onclick="printPage()">
              <i className="fas fa-print" /> Print
            </button>
            &nbsp;
            <Link to="/Salesman-add-inquiry">
              {" "}
              <button className="btn btn-primary">
                <i className="fas fa-plus" />
                Add Inquiry
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body shadow">
          <div className="table-responsive">
            <table className="table table-bordered table-hover ">
              <thead className="bg-light">
                <tr>
                  <th className="text-nowrap">Sr.No</th>
                  <th className="text-nowrap">Name</th>
                  <th className="text-nowrap">Email</th>
                  <th className="text-nowrap">Phone</th>
                  <th className="text-nowrap">Date</th>
                  <th className="text-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>Gohil Diya Shaileshbhai</div>
                    </div>
                  </td>
                  <td>gohildiyas@gmail.com</td>
                  <td>+91 8866576821</td>
                  <td>19 Dec 2023, 06:12 PM</td>
                  <td>
                    <button className="btn btn-outline-secondary ">
                      <Link to="/Salesman-edit-inquiry">
                        <i className="fa-solid fa-pen-to-square" />
                      </Link>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>Jasoliya Hensi Pravinbhai</div>
                    </div>
                  </td>
                  <td>hensi33@gmail.com</td>
                  <td>+91 8866576821</td>
                  <td>19 Dec 2023, 06:12 PM</td>
                  <td>
                    <button className="btn btn-outline-secondary">
                      <Link to="/Salesman-edit-inquiry">
                        <i className="fa-solid fa-pen-to-square" />
                      </Link>
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

   {/* Footer Start */}
   <Footer/>
     {/* Footer End */}


    
  </>
  
  );
}

export default Inquiry;
