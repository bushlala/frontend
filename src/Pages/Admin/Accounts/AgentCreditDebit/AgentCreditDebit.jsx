import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../../../Component/Layout/Admin/AdminLayout';
export default function AgentCreditDebit() {
  const style = { display: 'grid' };
  return (
    <>
      <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className="page-header">
                    <h1 className="page-title fw-bold my-auto">Agent Credit/Debit</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/ad/dashboard`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Agent Credit/Debit</li>
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
                                            <h5 className='fw-bold mt-3'>Agent Credit/Debit</h5>
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
                                                <option>All Agents</option>
                                                <option>WIZOTRIP LLP</option>
                                                <option>Wizotrip LLP</option>
                                                <option>Gloria Holidays</option>
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
                                                <th>Date</th>
                                                <th>Agent</th>
                                                <th>Reference No.</th>
                                                <th>Description</th>
                                                <th>Method</th>
                                                <th>Credit</th>
                                                <th>Debit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa-solid fa-calendar-days me-1"></i>11/01/2024 - 02:40 PM</td>
                                                <td>
                                                    <div className='' style={style}> 
                                                        <span className='fw-bold'>Wizotrip LLP</span>
                                                        <spna><i class="fa-solid fa-phone me-1"></i>7410258963</spna>
                                                        <spna><i class="fa-solid fa-envelope me-1"></i>demo@gmail.com</spna>
                                                    </div>
                                                </td>
                                                <td><p className='fw-bold'>FLY202566501</p></td>
                                                <td>--</td>
                                                <td><span className='bg-secondary text-white text-center p-1 rounded' >B2C</span></td>
                                                <td>20 INR </td>
                                                <td>3 INR</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td></td>
                                              <td><span className='fw-bold'>Total :</span></td>
                                              <td><span className='fw-bold'>707609 INR</span></td>
                                              <td><span className='fw-bold'>0 INR</span></td>
                                            </tr>
                                        </tfoot>
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
