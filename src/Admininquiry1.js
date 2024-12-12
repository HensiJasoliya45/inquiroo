import React, { useState } from "react";
import Header from './Adminheader';
import Footer from './Footer';
import Adminsidebar from './Adminsidebar';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const data = [
  {
    id: 1,
    name: 'Gohil Diya Shaileshbhai',
    email: 'gohildiyas@gmail.com',
    phone: '+91 8866576821',
    date: '19 Dec 2023, 06:12 PM'
  },
  {
    id: 2,
    name: 'Jasoliya Hensi Pravinbhai',
    email: 'hensi33@gmail.com',
    phone: '+91 8866576821',
    date: '19 Dec 2023, 06:12 PM'
  }
];

const columns = [
  {
    name: 'Sr.No',
    selector: (row, index) => index + 1,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Phone',
    selector: row => row.phone,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Actions',
    cell: row => (
      <div>
        <button className="btn btn-outline-secondary">
          <Link to="/admin-edit-inquiry">
            <i className="fa-solid fa-pen-to-square" />
          </Link>
        </button>
        <button className="btn btn-outline-secondary">
          <i className="fa-solid fa-trash-can" />
        </button>
        <button className="btn btn-outline-secondary">
          <Link to="/admin-followup">
            <i className="fa-solid fa-cloud-arrow-up fa-lg" />
          </Link>
        </button>
      </div>
    ),
  }
];

function Inquiry() {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    item =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email && item.email.toLowerCase().includes(filterText.toLowerCase()) ||
      item.phone && item.phone.includes(filterText) ||
      item.date && item.date.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <input
        type="text"
        placeholder="Search..."
        className="form-control"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
    );
  }, [filterText]);

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
        <Adminsidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="container">
              <div className="row my-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="card shadow">
                    <div className="card-header bg-primary text-white d-flex justify-content-between">
                      <h3 style={{ color: "whitesmoke" }}>Inquiry List</h3>
                      <div>
                        <button className="btn btn-primary " style={{ color: "whitesmoke" }} onClick="downloadCSV()">
                          <i className="fas fa-download" /> Download
                        </button>
                        &nbsp;
                        <button className="btn btn-primary " style={{ color: "whitesmoke" }} onClick="printPage()">
                          <i className="fas fa-print" /> Print
                        </button>
                      </div>
                    </div>
                    <div className="card-body shadow">
                      <div className="table-responsive">
                        <DataTable
                          columns={columns}
                          data={filteredItems}
                          pagination
                          highlightOnHover
                          responsive
                          subHeader
                          subHeaderComponent={subHeaderComponentMemo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inquiry;
