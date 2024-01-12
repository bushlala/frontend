import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../../../Component/Layout/Admin/AdminLayout';

export default function OfflineFlightBooking() {
    const style = { borderRadius: '50px' }
  return (
    <>
    <Layout />
       <div className="main-content app-content">
            <div className="container-fluid">
                <div className="page-header">
                    <h1 className="page-title fw-bold my-auto">Offline Flight Booking</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/ad/dashboard`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Offline Flight Booking</li>
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
                                            <h5 className='fw-bold mt-3'>Offline Flight Booking </h5>
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
                                <div className='row'>
                                    <div className='col-2'>
                                        <div className='d-flex p-2'>
                                            <button className='btn btn-primary me-2 w-50' style={style}>0</button>
                                            <span className='mt-1'>Confirmed</span>
                                        </div>
                                    </div>
                                    <div className='col-2 p-2'>
                                        <div className='d-flex'>
                                            <button className='btn btn-danger me-2 w-50' style={style}>0</button>
                                            <span className='mt-1'>Cencel</span>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='d-flex p-2'>
                                            <button className='btn btn-danger me-2 w-50' style={style}>0</button>
                                            <span className='mt-1'>Rejected</span>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <div className='d-flex p-2'>
                                            <button className='btn btn-info me-2 w-50' style={style}>0</button>
                                            <span className='mt-1'>Pending</span>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='p-2 float-end'>
                                           <p className='mt-1'>Flight API Balance:  <span className='text-danger fw-bold'>₹1,284.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Booking Date</th>
                                                <th>Sector</th>
                                                <th>Journey Date </th>
                                                <th>Passanger </th>
                                                <th>Agent/Travller</th>
                                                <th>PNR</th>
                                                <th>Statement</th>
                                                <th>Action</th>
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
                                                <td>
                                                    <button className='btn btn-info me-2'><i class="fa-solid fa-file"></i></button>
                                                    <button className='btn btn-primary'><i class="fa-solid fa-info"></i></button>
                                                </td>
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
