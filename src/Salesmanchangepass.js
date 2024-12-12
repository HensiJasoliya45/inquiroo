import React from "react";
import Header from './Salesmanheader'
import Footer from './Footer'
import SalsemanSidebar from "./Salesmansidebar";
import Changepassword from './Changepassword';



function Salesmanchangepass() {
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

    
 <Changepassword/>
    
   </div>
  
</div>

   {/* Footer Start */}
   <Footer/>
     {/* Footer End */}


    
  </>
  
  );
}

export default Salesmanchangepass;
