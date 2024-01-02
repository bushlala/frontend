import React from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import './QueriesAdd.css';
export default function QueriesAdd() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content app-content queriesadd">
          <div className="container-fluid">
            {/* <!-- PAGE-HEADER --> */}
              <div className="page-header">
                  <h1 className="page-title my-auto">Add Query</h1>
              </div>
              <div className='row'>
                  <div class="col-xl-12">
                      <div class="card-body">
                          <div className="card-title">
                              <h6 className=''>Customer Details</h6>
                          </div>
                          <hr></hr>
                          <div class="row">
                              <div class="col-md-6 mb-3">
                                  <label class="form-label">First Name</label>
                                  <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label class="form-label">Last Name</label>
                                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label class="form-label">Gender</label>
                                  <input type="text" class="form-control" placeholder="Gender" />
                              </div>
                              <div class="col-md-6 mb-3">
                                  <label class="form-label">D.O.B</label>
                                      <input type="date" class="form-control" aria-label="dateofbirth" />
                              </div>
                              <div class="col-md-12">
                                  <button type="submit" class="btn btn-primary">Create Customer</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
