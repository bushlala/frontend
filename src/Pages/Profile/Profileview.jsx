import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Sidebar'
import { Link } from 'react-router-dom'

const profile =require('../../assets/images/profile.jpg');
export default function Profileview() {
    return (
        <>
            <Header />
            <Sidebar />
            <div class="main-content app-content">
                <div class="container-fluid">

                    {/* <!-- PAGE-HEADER --> */}
                    <div class="page-header">
                        <h1 class="page-title my-auto">Profile</h1>
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
                        <div class="col-xxl-9 m-auto">
                            <div class="card custom-card overflow-hidden">
                                <div class="card-body border-bottom">
                                    <div class="d-sm-flex  main-profile-cover">
                                        <span class="avatar avatar-xxl online me-3">
                                            <img src={profile} alt="" class="avatar avatar-xxl" />
                                        </span>
                                        <div class="flex-fill main-profile-info my-auto">
                                            <h5 class="fw-semibold mb-1 ">Json Taylor</h5>
                                            <div>
                                                <p class="mb-1 text-muted">Agent</p>
                                                <p class="fs-12 op-7 mb-0">
                                                    <span class="me-3 d-inline-flex align-items-center"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
                                                    <span class="d-inline-flex align-items-center"><i class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                                                </p>
                                                <button type="button" class="btn btn-success mt-3">Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-0 main-profile-info">
                                    <div class="d-flex align-items-center justify-content-between w-100">
                                        <div class="py-3 border-end w-100 text-center">
                                            <p class="fw-bold fs-20  text-shadow mb-0">113</p>
                                            <p class="mb-0 fs-12 text-muted ">Booking</p>
                                        </div>
                                        <div class="py-3 border-end w-100 text-center">
                                            <p class="fw-bold fs-20  text-shadow mb-0">12.2k</p>
                                            <p class="mb-0 fs-12 text-muted ">Followers</p>
                                        </div>
                                        <div class="py-3 w-100 text-center">
                                            <p class="fw-bold fs-20  text-shadow mb-0">128</p>
                                            <p class="mb-0 fs-12 text-muted ">Following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card custom-card">
                                <div class="p-4  border-bottom border-block-end-dashed">
                                    <p class="fs-15 mb-2 me-4 fw-semibold">Personal Info :</p>
                                    <ul class="list-group">
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Name :
                                                </div>
                                                <span class="fs-12 text-muted">Sonya Taylor</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Email :
                                                </div>
                                                <span class="fs-12 text-muted">sonyataylor231@gmail.com</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Phone :
                                                </div>
                                                <span class="fs-12 text-muted">+(555) 555-1234</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Designation :
                                                </div>
                                                <span class="fs-12 text-muted">Agent</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Age :
                                                </div>
                                                <span class="fs-12 text-muted">28</span>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2 fw-semibold">
                                                    Experience :
                                                </div>
                                                <span class="fs-12 text-muted">10 Years</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="p-4 border-bottom border-block-end-dashed">
                                    <p class="fs-15 mb-2 me-4 fw-semibold">Contact Information :</p>
                                    <div class="text-muted">
                                        <p class="mb-3">
                                            <span class="avatar avatar-sm avatar-rounded me-2 bg-info-transparent">
                                                <i class="ri-mail-line align-middle fs-14"></i>
                                            </span>
                                            sonyataylor2531@gmail.com
                                        </p>
                                        <p class="mb-3">
                                            <span class="avatar avatar-sm avatar-rounded me-2 bg-warning-transparent">
                                                <i class="ri-phone-line align-middle fs-14"></i>
                                            </span>
                                            +(555) 555-1234
                                        </p>
                                        <div class="d-flex">
                                            <p class="mb-0">
                                                <span class="avatar avatar-sm avatar-rounded me-2 bg-success-transparent">
                                                    <i class="ri-map-pin-line align-middle fs-14"></i>
                                                </span>
                                            </p>
                                            <p class="mb-0">
                                                MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071 </p>

                                        </div>
                                    </div>
                                </div>
                               
                                <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                                    <p class="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
                                    <div class="btn-list mb-0">
                                        <button class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light">
                                            <i class="ri-facebook-line"></i>
                                        </button>
                                        <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                            <i class="ri-twitter-line"></i>
                                        </button>
                                        <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                            <i class="ri-instagram-line"></i>
                                        </button>
                                        <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                            <i class="ri-github-line"></i>
                                        </button>
                                        <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                            <i class="ri-youtube-line"></i>
                                        </button>
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
