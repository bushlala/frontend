import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { Link } from 'react-router-dom'
export default function List() {
  return (
    <>
       <Header />
       <Sidebar />
       <div class="main-content app-content">
            <div class="container-fluid">

      {/* <!-- PAGE-HEADER --> */}
                <div class="page-header">
                  <h1 class="page-title my-auto">Dashboard</h1>
                  <div>
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}

                <div class="row">
                    <div class="col-12 col-sm-12">
                        <div class="card">
                            <div class="card-header d-lg-flex">
                                <h3 class="card-title mb-lg-0 mb-3">Agent List</h3>
                                <div class="tabs-menu1 ms-auto border-0 p-0">
                                    <ul class="nav panel-tabs product-sale">
                                        <li><button type="button" class="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/AdForm' style={{ color: 'white'}}>+ Add New Agent</Link></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body product-table">
                                <div class="tab-content">
                                    <div class="tab-pane border-0 p-0 active" id="tab5">
                                        <div class="table-responsive">
                                            <table class="table table-bordered text-nowrap mb-0">
                                                <thead class="border-top">
                                                    <tr>
                                                        <th scope="col" class="">Company</th>
                                                        <th scope="col" class="">Agent</th>
                                                        <th scope="col" class="text-center">Agent Group</th>
                                                        <th scope="col" class="">Location</th>
                                                        <th scope="col" class="text-center">Wallet</th>
                                                        <th scope="col" class="text-center">Total Sale</th>
                                                        <th scope="col" class="text-center">Status</th>
                                                        <th scope="col" class="">Register</th>
                                                        <th scope="col" class="">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {/* <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td> */}
                                                        <td>
                                                            <div class="d-flex">
                                                                
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Demo</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Johan Taylor</h6>
                                                            <h6 class="fs-14 fw-semibold">8520147963</h6>
                                                            <h6 class="fs-14 fw-semibold">Johantaylor@info.com</h6>
                                                        </td>
                                                        <td className='text-center'>
                                                            <span class="fw-semibold text-center">B2B</span>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Indore, Madhaya Pradesh, India </h6>
                                                        </td>
                                                      
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">35600 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">23560 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">30-08-2023</h6></td>
                                                        <td className='text-center'><button type='button' className='btn btn-success p-1'>Active</button></td>
                                                        <td>
                                                            <div class="g-2 d-flex justify-content-between">
                                                            <Link to='/adedit' className=''><button class="btn text-primary p-1 bg-success text-white">Balance Sheet</button></Link>
                                                            <Link to='/adedit' class="btn text-primary btn-sm bg-danger" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fa fa-edit fs-14 text-white"></span></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td> */}
                                                        <td>
                                                            <div class="d-flex">
                                                                
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Demo</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Johan Taylor</h6>
                                                            <h6 class="fs-14 fw-semibold">8520147963</h6>
                                                            <h6 class="fs-14 fw-semibold">Johantaylor@info.com</h6>
                                                        </td>
                                                        <td className='text-center'>
                                                            <span class="fw-semibold text-center">B2B</span>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Indore, Madhaya Pradesh, India </h6>
                                                        </td>
                                                      
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">35600 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">23560 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">30-08-2023</h6></td>
                                                        <td className='text-center'><button type='button' className='btn btn-success p-1'>Active</button></td>
                                                        <td>
                                                            <div class="g-2 d-flex justify-content-between">
                                                            <Link to='/adedit' className=''><button class="btn text-primary p-1 bg-success text-white">Balance Sheet</button></Link>
                                                            <Link to='/adedit' class="btn text-primary btn-sm bg-danger" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fa fa-edit fs-14 text-white"></span></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td> */}
                                                        <td>
                                                            <div class="d-flex">
                                                                
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Demo</h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Johan Taylor</h6>
                                                            <h6 class="fs-14 fw-semibold">8520147963</h6>
                                                            <h6 class="fs-14 fw-semibold">Johantaylor@info.com</h6>
                                                        </td>
                                                        <td className='text-center'>
                                                            <span class="fw-semibold text-center">B2B</span>
                                                        </td>
                                                        <td>
                                                            <h6 class="fs-14 fw-semibold">Indore, Madhaya Pradesh, India </h6>
                                                        </td>
                                                      
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">35600 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">23560 INR</h6></td>
                                                        <td className='text-center'><h6 class="mb-0 fs-14 fw-semibold">30-08-2023</h6></td>
                                                        <td className='text-center'><button type='button' className='btn btn-success p-1'>Active</button></td>
                                                        <td>
                                                            <div class="g-2 d-flex justify-content-between">
                                                            <Link to='/adedit' className=''><button class="btn text-primary p-1 bg-success text-white">Balance Sheet</button></Link>
                                                            <Link to='/adedit' class="btn text-primary btn-sm bg-danger" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fa fa-edit fs-14 text-white"></span></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-sm-12 col-md-6 my-auto">
                                        <span>Total Records: 1-1 of 1</span>
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
