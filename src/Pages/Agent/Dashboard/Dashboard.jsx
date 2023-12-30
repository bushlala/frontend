import React from 'react'
import { Grid, Card, CardContent, Typography, Breadcrumbs, Link} from '@mui/material';
import ImageExample from '../../../assets/images/icon2.png';
import IconImage from '../../../assets/images/icon.svg';
import Icon2 from '../../../assets/images/icon2.svg';
import Icon3 from '../../../assets/images/icon2.svg';
import Icon4 from '../../../assets/images/icon4.svg';
import Icon5 from '../../../assets/images/icon5.svg';
import Icon6 from '../../../assets/images/icon6.svg';

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
                <div className="page-header">
                  <Typography variant="h5">Dashboard</Typography>
                    <div>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/">
                            Home
                            </Link>
                            <Typography color="textPrimary">Dashboard</Typography>
                        </Breadcrumbs>
                    </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}
                {/* <!-- ROW-1 --> */}
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
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
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash2">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Flight Booking</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">140</h2>
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
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash3">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Hotel Booking</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">180</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={Icon3} style={{width: '45px'}}  alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash4">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Pandding Flight</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">10</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={IconImage} style={{width: '45px'}}  alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash5">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Hotel Pandding</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">25</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={Icon5} style={{width: '45px'}}  alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash6">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">Total Enquiry </h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">125</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={Icon6} style={{width: '45px'}}  alt=""/>
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
