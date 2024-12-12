import React from "react";
import Header from './Salesmanheader';
import Footer from './Footer';
import SalsemanSidebar from "./Salesmansidebar";
import Profile from "./Profile";


function SalesmanViewProfile() {

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
    {/* Admin View Profile Start */}
    <Profile 
             name="Hensi Jasoliya" 
             email="hensi70@gmail.com" 
             dob="08/01/2004" 
             gender="female" 
             age="20" 
            />
            {/* Admin View Profile End */}
     
       </div>
      
    </div>
    
       {/* Footer Start */}
       <Footer/>
         {/* Footer End */}
    
    
        
      </>
      
      );

}

export default SalesmanViewProfile;
