import React from 'react'
import Header from '../../../Component/Header'
import Sidebar from '../../../Component/Sidebar'


export default function View() {
  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-content app-content">
                <div class="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div class="page-header">
                      <h1 class="page-title my-auto">Customer Form View</h1>
                      <div>
                        {/* <ol class="breadcrumb mb-0">
                          <li class="breadcrumb-item">
                            <a href="javascript:void(0)">Form Elements</a>
                          </li>
                          <li class="breadcrumb-item active" aria-current="page">Inputs</li>
                        </ol> */}
                      </div>
                    </div>
                    {/* <!-- PAGE-HEADER END --> */}


                    {/* <!-- Start:: row-1 --> */}
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                    Account Information
                                    </div>
                                    {/* <div class="prism-toggle">
                                        <button class="btn btn-sm btn-primary-light"><i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                    </div> */}
                                </div>
                                <div class="card-body">
                                    <div class="row gy-4">
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">First Name:</label>
                                            <input type="text" class="form-control"  id="input" disabled value="Json" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Last Name:</label>
                                            <input type="text" class="form-control" id="input" disabled value="Taylor" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Mobile Number:</label>
                                            <input type="text" class="form-control" id="input" disabled value="8521473690"/>
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Email Address:</label>
                                            <input type="text" class="form-control" id="input" disabled value="jhon@info.com" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Password:</label>
                                            <input type="text" class="form-control" id="input" disabled value="**********" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Conform Password:</label>
                                            <input type="text" class="form-control" id="input" disabled value="**********" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Address:</label>
                                            <input type="text" class="form-control" id="input" disabled value="Indore" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Country:</label>
                                            <input type="text" class="form-control" id="input" disabled value="India" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">State:</label>
                                            <input type="text" class="form-control" id="input" disabled value="Madhya Pradesh" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">City:</label>
                                            <input type="text" class="form-control" id="input" disabled value="Indore"/>
                                        </div>
                                    </div> 
                                </div> 
                                <div class="card-header justify-content-between">
                                            <div class="card-title">
                                                Agnecy Infromation 
                                            </div>
                                            {/* <div class="prism-toggle">
                                                <button class="btn btn-sm btn-primary-light"><i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                                            </div> */}
                                        </div> 
                                <div className='card-body'>
                                    <div className='row gy-4'>  
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Company Name:</label>
                                            <input type="text" class="form-control" id="input" disabled value="Dummy" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Pan Number:</label>
                                            <input type="text" class="form-control" id="input" disabled value="NQAP2536Q" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">Bussinees Type:</label>
                                            <input type="text" class="form-control" id="input" disabled value="E-Commerce" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">GST Number:</label>
                                            <input type="text" class="form-control" id="input" disabled value="GSTID253621498" />
                                        </div>
                                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                            <label for="input-label" class="form-label">WebSite:</label>
                                            <input type="text" class="form-control" id="input" disabled value="www.dummy.com" />
                                        </div>
                                    </div>
                                    {/* <div className='registerbtn mt-5' >
                                        <button className='btn btn-primary'>Register</button>
                                    </div> */}
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
