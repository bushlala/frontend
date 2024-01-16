import React from 'react'
import { Link } from 'react-router-dom';
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
export default function Sidebar() {
    const myStyle = { width: '16%' };
  return (
    <>
      <aside class="app-sidebar sticky" id="sidebar">

{/* <!-- Start::main-sidebar-header --> */}
<div class="main-sidebar-header">
    {/* <a href="index.html" class="header-logo">
        <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
        <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo" />
        <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
        <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark" />
        <img src="../assets/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white" />
        <img src="../assets/images/brand-logos/toggle-white.png" alt="logo" class="toggle-white" />
    </a> */}
    <h3 style={{fontSize:"23px"}}>Admin</h3>
</div>
{/* <!-- End::main-sidebar-header --> */}

{/* <!-- Start::main-sidebar --> */}
<div class="main-sidebar" id="sidebar-scroll">

    {/* <!-- Start::nav --> */}
    <nav class="main-menu-container nav nav-pills flex-column sub-open">
        <div class="slide-left" id="slide-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
        </div>
        <ul class="main-menu">
            {/* <!-- Start::slide__category --> */}
            <li class="slide__category d-none"><span class="category-name">User</span></li>
            {/* <!-- End::slide__category --> */}

            {/* <!-- Start::slide --> */}
                        <li class="slide">
                            <Link to='/ad/dashboard' class="side-menu__item">
                                <i class="fa-solid fa-gauge side-menu__icon"></i>
                                <span class="side-menu__label">Dashboard</span>
                            </Link>
                        </li>
                        <li class="slide">
                            <Link to='/admin/agentlist' class="side-menu__item">
                                <i class="fa-solid fa-user side-menu__icon"></i>
                                {/* <!-- <span class="side-menu__label">Widgets<span class="badge bg-danger-transparent ms-2">Hot</span></span> --> */}
                                <span class="side-menu__label">Agent List</span>
                            </Link>
                        </li>
                        <li class="slide">
                            <Link to='/admin/country' class="side-menu__item">
                                <i class="fa-solid fa-globe side-menu__icon"></i>
                                {/* <!-- <span class="side-menu__label">Widgets<span class="badge bg-danger-transparent ms-2">Hot</span></span> --> */}
                                <span class="side-menu__label">Contry List</span>
                            </Link>
                        </li>

                        <li class="slide">
                            <Link to='/admin/state' class="side-menu__item">
                                <i class="fa-solid fa-city side-menu__icon"></i>
                                {/* <!-- <span class="side-menu__label">Widgets<span class="badge bg-danger-transparent ms-2">Hot</span></span> --> */}
                                <span class="side-menu__label">State List</span>
                            </Link>
                        </li>
                        
                        <li class="slide">
                            <Link to='/admin/city' class="side-menu__item">
                                <i class="fa-solid fa-city side-menu__icon"></i>
                                {/* <!-- <span class="side-menu__label">Widgets<span class="badge bg-danger-transparent ms-2">Hot</span></span> --> */}
                                <span class="side-menu__label">City List</span>
                            </Link>
                        </li>
                        <li class="slide has-sub open">
                            <Link to="" class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">All Bookings</span>
                            </Link>
                            <ul class="slide-menu child1 d-block">
                                <li class="slide">
                                    <Link to="/admin/FlightOnlineBooking" class="side-menu__item">Flight Online Bookings</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/FlightOfflineBooking" class="side-menu__item">Flight Offline Bookings</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/HotelBooking" class="side-menu__item">Hotel Bookings</Link>
                                    
                                </li>
                                <li class="slide">
                                    <Link to="/admin/ActivityBooking" class="side-menu__item">Activity Bookings</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub open">
                            <Link to="" class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">Accounts</span>
                            </Link>
                            <ul class="slide-menu child1 d-block">
                                <li class="slide">
                                    <Link to="/admin/FlightInvoice" class="side-menu__item">Flight Invoice</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/HotelInvoice" class="side-menu__item">Hotel Invoice</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/BalanceSheet" class="side-menu__item">Admin Balance Sheet</Link>
                                    
                                </li>
                                <li class="slide">
                                    <Link to="/admin/AgentCredit-Debit" class="side-menu__item">Agent Credit/Debit</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub open">
                            <Link to="" class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">All Query</span>
                            </Link>
                            <ul class="slide-menu child1 d-block">
                                <li class="slide">
                                    <Link to="/admin/All-Queries" class="side-menu__item">Query</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/HotelEnquiry" class="side-menu__item">Hotel Enquiry</Link>
                                </li>
                                <li class="slide">
                                    <Link to="/admin/PackageEnquiry" class="side-menu__item">Package Enquiry</Link>                                    
                                </li>
                                <li class="slide">
                                    <Link to="/admin/Package-Itinerary" class="side-menu__item">Itinerary Download List(B2C)</Link>
                                </li>
                                <li class="slide">
                                    <Link to="" class="side-menu__item">Group Enquiry</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub open">
                            <Link to="" class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">ltinerary</span>
                            </Link>
                            <ul class="slide-menu child1 d-block">
                                <li class="slide">
                                    <Link to="/admin/allbooking" class="side-menu__item">Manage Itinerary</Link>
                                </li>
                                <li class="slide">
                                    <Link to="" class="side-menu__item">Manage Destination</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="slide has-sub open select-form" >
                            <Link to="" class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label ">Agents</span>
                            </Link>
                            <ul class="slide-menu child1 d-block">
                                <li class="slide">
                                    <Link to="/admin/allbooking" class="side-menu__item">Agents Master</Link>
                                </li>
                                <li class="slide">
                                    <Link to="" class="side-menu__item">Agent & Statement</Link>
                                </li>
                                <li class="slide">
                                    <Link to="" class="side-menu__item">User List</Link>
                                    
                                </li>
                                <li class="slide">
                                    <Link to="" class="side-menu__item">Flight Search Log</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="slide">
                            <Link to='/' class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">Flight Cancellation</span>
                            </Link>
                        </li>
                        <li class="slide">
                            <Link to='/' class="side-menu__item">
                                <i class="fa-regular fa-user side-menu__icon"></i>
                                <span class="side-menu__label">Cancel Reg.</span>
                            </Link>
                        </li>
                        
                    </ul>
            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
                </nav>
            </div>
            {/* <!-- End::main-sidebar --> */}

        </aside>
    </>
  )
}
