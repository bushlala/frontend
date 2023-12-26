import React from 'react'
import IconImage from '../../../assets/images/icon.svg';
import Icon2 from '../../../assets/images/icon2.svg';
import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
export default function AgentDashboard() {
  return (
    <>
    <div class="page">
        <AgentLayout/>
        {/* <!-- Start::app-content --> */}
        <div class="main-content app-content">
            <div class="container-fluid">
                {/* <!-- PAGE-HEADER --> */}
                <div class="page-header">
                  <h1 class="page-title my-auto">Dashboard</h1>
                  <div>
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item">
                        <a href={() => false}>Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}
                {/* <!-- ROW-1 --> */}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
                        <div class="card overflow-hidden">
                            <div class="card-body dash1">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Customers</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">20</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={IconImage} style={{width: '45px'}} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
                        <div class="card overflow-hidden">
                            <div class="card-body dash2">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Bookings</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">40</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={Icon2} style={{width: '45px'}}  alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <!-- End::app-content --> */}
    </div>

    </>
  )
}
