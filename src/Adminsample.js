import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';


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
