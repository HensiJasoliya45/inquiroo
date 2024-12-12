import React from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar'

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
          
          {/*  Row 1 */}
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4">

                  {/* Weekly Breakup */}
                  <div className="card overflow-hidden">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-9 fw-semibold">
                        Weekly Inquiry
                      </h5>
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="fw-semibold mb-3">400</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                            <p className="fs-3 mb-0">last year</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2023</span>
                            </div>
                            <div>
                              <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-lg-4">
                  {/* Monthly Earnings */}
                  <div className="card overflow-hidden">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-9 fw-semibold">
                        Monthly Inquiry
                      </h5>
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="fw-semibold mb-3">1000</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark me-1 fs-3 mb-0">+19%</p>
                            <p className="fs-3 mb-0">last year</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2023</span>
                            </div>
                            <div>
                              <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-center"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">


                  {/* Yearly Earnings */}
                  
                  <div className="card overflow-hidden">
                    <div className="card-body p-4">
                      <h5 className="card-title mb-9 fw-semibold">
                        Yearly Inquiry
                      </h5>
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h4 className="fw-semibold mb-3">36,358</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark me-1 fs-3 mb-0">+15%</p>
                            <p className="fs-3 mb-0">last year</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2023</span>
                            </div>
                            <div>
                              <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                              <span className="fs-2">2024</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="d-flex justify-content-center"></div>
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
    </div>

     {/* Footer Start */}
        <Footer/>
     {/* Footer End */}

  </>
  
  );
}

export default AdminHome;
