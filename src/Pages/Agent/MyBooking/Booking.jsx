import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../Component/Layout/Agent/AgentLayout'
import './Booking.css';

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
                <div className="row">
                <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">
                                   <button className='btn btn-outline-primary '><i className="fa-solid fa-plane-up"></i>  Flight</button>
                                    <button className='btn btn-outline-success Icon-btn'><i className="fa-solid fa-hotel"></i>  Hotel</button>
                                </div>
                            </div>
                            <div className="card-header d-block">
                                <div className="row">
                                    <div className='col-lg-5 d-flex align-items-center'>
                                        <div className="card-title">
                                            Flight Booking
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-7">
                                        <div id="responsiveDataTable_filter" className="dataTables_filter row">
                                                <div className='col-3 text-start'>
                                                    <label>From Date</label>
                                                    <input type="date" className="form-control" placeholder='From Date'
                                                        aria-label="date"  />
                                                </div>
                                                <div className='col-3 text-start'>
                                                    <label>To Date</label>
                                                    <input type="date" className="form-control"
                                                        aria-label="date" />
                                                </div>
                                                <div className='col-3 text-start'>
                                                    <label>Status</label>
                                                   <select className='form-control'>
                                                        <option>Select Status</option>
                                                        <option>Pandding</option>
                                                        <option>Confirm</option>
                                                        <option>Cancelled</option>
                                                        <option>Rejected</option>
                                                    </select>
                                                </div>
                                                <div className='col-3 text-start'>
                                                    <label>Search</label>
                                                    <input type="search" className="form-control" placeholder="Search..." aria-controls="responsiveDataTable"/>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
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
                                                <td>25/12/2023</td>
                                                <td>TE2536210478</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>25/12/2023</td>
                                                <td>29/12/2023</td>
                                                <td>26/12/2023</td>
                                                <td>Pandding</td>
                                                <td>--</td>
                                                <td>--</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_paginate paging_simple_numbers d-flex flex-row-reverse" id="datatable-basic_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="datatable-basic_previous"><a href="#" aria-controls="datatable-basic" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li>
                                                    <li className="paginate_button page-item active"><a href="#" aria-controls="datatable-basic" data-dt-idx="1" tabindex="0" className="page-link">1</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="datatable-basic" data-dt-idx="2" tabindex="0" className="page-link">2</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="datatable-basic" data-dt-idx="3" tabindex="0" className="page-link">3</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="datatable-basic" data-dt-idx="4" tabindex="0" className="page-link">4</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="datatable-basic" data-dt-idx="5" tabindex="0" className="page-link">5</a></li>
                                                    <li className="paginate_button page-item "><a href="#" aria-controls="datatable-basic" data-dt-idx="6" tabindex="0" className="page-link">6</a></li>
                                                    <li className="paginate_button page-item next" id="datatable-basic_next"><a href="#" aria-controls="datatable-basic" data-dt-idx="7" tabindex="0" className="page-link">Next</a></li>
                                                    </ul>
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