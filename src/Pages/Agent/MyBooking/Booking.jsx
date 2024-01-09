import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../Component/Layout/Agent/AgentLayout'

  export default function Index() {

  return (
    <>
       <Layout />
       <div className="main-content app-content booking">
            <div className="container-fluid">
      {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                  <h1 className="page-title my-auto">My Booking</h1>
                  <div>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                      <Link to={`/`}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">My Booking</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END--> */}

                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active border btn-primary" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-plane-up me-1"></i> Flight Booking </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link border btn-info" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-hotel me-1"></i> Hotel Booking </button>
                                    </li>
                                </ul>
                                <hr></hr>
                                <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                 <div className="col-sm-12 col-lg-12">
                                        <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                                <div className='col-4 text-start'>
                                                    <h5 className='fw-bold mt-3'> Flight Booking </h5>
                                                </div>
                                                <div className='col-2 text-start'>
                                                    <label>From Date</label>
                                                    <input type="date" className="form-control" placeholder='From Date'
                                                        aria-label="date"  />
                                                </div>
                                                <div className='col-2 text-start'>
                                                    <label>To Date</label>
                                                    <input type="date" className="form-control"
                                                        aria-label="date" />
                                                </div>
                                                <div className='col-2 text-start'>
                                                    <label>Status</label>
                                                   <select className='form-control'>
                                                        <option>Select Status</option>
                                                        <option>Pandding</option>
                                                        <option>Confirm</option>
                                                        <option>Cancelled</option>
                                                        <option>Rejected</option>
                                                    </select>
                                                </div>
                                                <div className='col-2 text-start float-end'>
                                                    <label>Search</label>
                                                    <input type="search" className="form-control" placeholder="Search..." aria-controls="responsiveDataTable"/>
                                                </div>
                                        </div>
                                    </div>
                                <hr></hr>
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Booking Date</th>
                                                <th>Ref. No</th>
                                                <th>PNR</th>
                                                <th>Flight</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Journey Date</th>
                                                <th>Status</th>
                                                <th>Total Fare</th>
                                                <th>Commission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
                                    </div>
                                </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="col-sm-12 col-lg-12">
                                        <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                                <div className='col-6 text-start'>
                                                    <h5 className='fw-bold mt-3'> Hotel Booking </h5>
                                                </div>
                                                <div className='col-2 text-start'>
                                                    <label>From Date</label>
                                                    <input type="date" className="form-control" placeholder='From Date'
                                                        aria-label="date"  />
                                                </div>
                                                <div className='col-2 text-start'>
                                                    <label>To Date</label>
                                                    <input type="date" className="form-control"
                                                        aria-label="date" />
                                                </div>
                                                <div className='col-2 text-start float-end'>
                                                    <label>Search</label>
                                                    <input type="search" className="form-control" placeholder="Search..." aria-controls="responsiveDataTable"/>
                                                </div>
                                        </div>
                                    </div>
                                <hr></hr>
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Booking ID</th>
                                                <th>Hotel</th>
                                                <th>Date</th>
                                                <th>Room Type</th>
                                                <th>Pax</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
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
            
       
    </>

  )

}