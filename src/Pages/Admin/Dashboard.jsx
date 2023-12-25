import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import Icon from '../../assets/images/icon.svg';
import Icon2 from '../../assets/images/icon2.svg';
// import Icon3 from '../assets/images/icon3.svg';
// import Icon4 from '../assets/images/icon4.svg';
import Icon5 from '../../assets/images/icon5.svg';
// import Icon6 from '../../assets/images/icon6.svg';
// import Icon9 from '../../assets/images/icon9.svg';
import Icon8 from '../../assets/images/icon8.svg';
export default function Dashboard() {
  return (
    <>
    <div class="page">
        <Header />
        <Sidebar />
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
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-4">
                        <div class="card overflow-hidden">
                            <div class="card-body dash1">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">CONFIRMED FLIGHTS</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">95</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                            <img src={Icon} style={{width: '45px'}} alt=""/>
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
                                        <h6 class="fw-normal text-white">CENCELED FLIGHTS </h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">40</h2>
                                    </div>
                                    <div class="ms-auto">
                                        <div class="chart-wrapper mt-3">
                                          <img src={Icon8} style={{width: '45px'}} alt="" />
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
                                        <h6 class="fw-normal text-white">PANDING FLIGHTS</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">25</h2>
                                    </div>
                                    <div class="ms-auto">
                                    <div class="chart-wrapper mt-3">
                                          <img src={Icon5} style={{width: '45px'}} alt="" />   
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
                                        <h6 class="fw-normal text-white">HOTEL BOOKINGS</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">126</h2>
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
                            <div class="card-body dash5">
                                <div class="d-flex">
                                    <div class="mt-2">
                                        <h6 class="fw-normal text-white">CENCELED HOTEL BOOKING</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">10</h2>
                                    </div>
                                    <div class="ms-auto">
                                    <div class="chart-wrapper mt-3">
                                            <img src={Icon8} style={{width: '45px'}} alt="" />
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
                                        <h6 class="fw-normal text-white">PACKAGE ENQUIRY</h6>
                                        <h2 class="mb-0 text-dark fw-semibold text-white">12</h2>
                                    </div>
                                    <div class="ms-auto">
                                    <div class="chart-wrapper mt-3">
                                            {/* <img src={Icon9} style={{width: '45px'}} /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            {/* <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash7">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white text-white">TOTAL CANCEL BUS</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">10</h2>
                                            </div>
                                            <div class="ms-auto">
                                            <div class="chart-wrapper mt-3">
                                                    <img src={Icon8} style={{width: '45px'}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
                                <div class="card overflow-hidden">
                                    <div class="card-body dash8">
                                        <div class="d-flex">
                                            <div class="mt-2">
                                                <h6 class="fw-normal text-white">TOTAL REJECT FLIGHT</h6>
                                                <h2 class="mb-0 text-dark fw-semibold text-white">16</h2>
                                            </div>
                                            <div class="ms-auto">
                                            <div class="chart-wrapper mt-3">
                                                    <img src={Icon8} style={{width: '45px'}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    
                </div>
            </div>
        </div>

        {/* <!-- End::app-content --> */}
      

    </div>

    </>
  )
}
