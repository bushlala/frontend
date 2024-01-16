import React from 'react'
import Layout from '../../../../Component/Layout/Admin/AdminLayout'
import { Link } from 'react-router-dom'

export default function PackageEnquiry() {
    const fontSizeValue = '30px'; 
  return (
    <>
        <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className="page-header">
                    <h1 className="page-title fw-bold my-auto">Package Enquiry</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/ad/dashboard`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Package Enquiry</li>
                        </ol>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card '>
                            <div class="card-body">
                                <div className="col-sm-12 col-lg-12">
                                    <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                        <div className='col-6 text-start'>
                                            <h5 className='fw-bold mt-3'>Package Enquiry List</h5>
                                        </div>
                                        <div className='col-6 text-end'>
                                           <Link><i class="fa-brands fa-youtube text-danger mt-3" style={{ fontSize: fontSizeValue }}></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="table-responsive">
                                    <table className="table text-nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Agent</th>
                                                <th>Package</th>
                                                <th>Destination</th>
                                                <th>Departure</th>
                                                <th>Departure Date</th>
                                                <th>Contact</th>
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
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-7">
                                        <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: <span className='fw-bold'>1-0 of 0</span> </div>
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
