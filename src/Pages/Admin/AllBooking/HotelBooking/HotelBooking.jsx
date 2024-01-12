import React from 'react'
import Layout from '../../../../Component/Layout/Admin/AdminLayout'
import { Link } from 'react-router-dom';


export default function HotelBooking() {
  return (
    <>
      <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className="page-header">
                    <h1 className="page-title fw-bold my-auto">Hotel Booking</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/ad/dashboard`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Hotel Booking</li>
                        </ol>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <div className="col-sm-12 col-lg-12">
                                    <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                        <div className='col-4 text-start'>
                                            <h5 className='fw-bold mt-3'>Hotel Booking</h5>
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
                                                <th>Booking ID</th>
                                                <th>Agent</th>
                                                <th>Hotel</th>
                                                <th>Date</th>
                                                <th>Room Type</th>
                                                <th>Pax</th>
                                                <th>Buying</th>
                                                <th>Selling</th>
                                                <th>Profit</th>
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
    </>
  )
}
