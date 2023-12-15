import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { Link } from 'react-router-dom'
export default function Index() {
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
                                <h3 class="card-title mb-lg-0 mb-3">My Customer</h3>
                                <div class="tabs-menu1 ms-auto border-0 p-0">
                                    <ul class="nav panel-tabs product-sale">
                                        <li><button type="button" class="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/agentform' style={{ color: 'white'}}>+ Add New Customer</Link></button></li>
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
                                                        <th scope="col" class="">Title</th>
                                                        <th scope="col" class="">First Name</th>
                                                        <th scope="col" class="">Last Name</th>
                                                        <th scope="col" class="">Gender</th>
                                                        <th scope="col" class="">DOB</th>
                                                        <th scope="col" class="">Passport</th>
                                                        <th scope="col" class="">Expriry</th>
                                                        <th scope="col" class="">Update</th>
                                                        <th scope="col" class="">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td>
                                                        <td>
                                                            <div class="d-flex">
                                                                
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Jhon</h6>
                                                            </div>
                                                        </td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Taylor</h6></td>
                                                        <td>Male</td>
                                                        <td><span class="fw-semibold">30 Aug 2023</span></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> N2352642</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 25 Aug 2026</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 10 Aug 2023</h6></td>
                                                        <td>
                                                            <div class="g-2">
                                                                <Link to='/agentedit' class="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fe fe-edit fs-14"></span></Link>
                                                                <Link to='' class="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fe fe-trash-2 fs-14"></span></Link>
                                                                <Link to='/agentview' class="btn text-dark btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fa-solid fa-eye"></span></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td>
                                                        <td>
                                                            <div class="d-flex">
                                                               
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Jhon</h6>
                                                            </div>
                                                        </td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Taylor</h6></td>
                                                        <td>Male</td>
                                                        <td><span class="fw-semibold">30 Aug 2023</span></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> N2352642</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 25 Aug 2026</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 10 Aug 2023</h6></td>
                                                        <td>
                                                        <div class="g-2">
                                                                <Link to='/agentedit' class="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fe fe-edit fs-14"></span></Link>
                                                                <Link to='' class="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fe fe-trash-2 fs-14"></span></Link>
                                                                <Link to='/agentview' class="btn text-dark btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fa-solid fa-eye"></span></Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Mr</h6></td>
                                                        <td>
                                                            <div class="d-flex">
                                                                <h6 class="ms-3 my-auto fs-14 fw-semibold">Jhon</h6>
                                                            </div>
                                                        </td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold">Taylor</h6></td>
                                                        <td>Male</td>
                                                        <td><span class="fw-semibold">30 Aug 2023</span></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> N2352642</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 25 Aug 2026</h6></td>
                                                        <td><h6 class="mb-0 fs-14 fw-semibold"> 10 Aug 2023</h6></td>
                                                        <td>
                                                        <div class="g-2">
                                                                <Link to='/agentedit' class="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span class="fe fe-edit fs-14"></span></Link>
                                                                <Link to='' class="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fe fe-trash-2 fs-14"></span></Link>
                                                                <Link to='/agentview' class="btn text-dark btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><span class="fa-solid fa-eye"></span></Link>
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
