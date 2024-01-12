import React from 'react'
import { Link } from 'react-router-dom';
const profile =require('../../../../assets/images/user.png');
const flag =require('../../../../assets/images/flag.jpg');
export default function Header() {
  return (
    <>
       {/* <!-- app-header --> */}
       <header className="app-header">
            {/* <!-- Start::main-header-container --> */}
            <div className="main-header-container container-fluid">
                {/* <!-- Start::header-content-left --> */}
                <div className="header-content-left">
                    <div className="main-header-center  d-none d-lg-block header-link">
                        <div id="headersearch" className="header-search">
                            <div className="py-3 border-top px-0">
                                <div className="text-center">
                                    <a href={() => false} className="text-primary text-decoration-underline fs-15">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End::header-element --> */}
                </div>
                {/* <!-- End::header-content-left --> */}
                {/* <!-- Start::header-content-right --> */}
                <div className="header-content-right">
                    {/* <!-- Start::header-element --> */}
                    <div className="header-element header-search d-lg-none d-block">
                        {/* <!-- Start::header-link --> */}
                        <a aria-label="anchor" href={() => false} className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i className="fa fa-search header-link-icon"></i>
                        </a>
                        {/* <!-- End::header-link --> */}
                    </div>
                    <div className="header-element notifications-dropdown" >
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a aria-label="anchor"  className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                            <i className="fa fa-bell header-link-icon"></i>
                            
                        </a>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element message-dropdown">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown2" aria-expanded="false">
                            <i className="fa-solid fa-envelope header-link-icon"></i>
                        </a>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element header-fullscreen d-none">
                        {/* <!-- Start::header-link --> */}
                        <a aria-label="anchor" onclick="openFullscreen();" href={() => false} className="header-link">
                            <i className="fa fa-minimize full-screen-open header-link-icon"></i>
                            <i className="fa fa-minimize-2 full-screen-close header-link-icon d-none"></i>
                        </a>
                    </div>
                    <div className="header-element d-none">
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#sidebar-right">
                            <i className="fa fa-align-right header-link-icon"></i>
                        </a>
                    </div>
                    <div className="header-element main-profile-user">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a href={() => false} className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <div className="me-xxl-2 me-0">
                                    <img src={profile} alt="img" width="32" height="32" className="rounded-circle" />
                                </div>
                                <div className="d-xxl-block d-none my-auto">
                                    <h6 className="fw-semibold mb-0 lh-1 fs-14">Admin</h6>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li className="dropdown-item">
                                <Link className="d-flex w-100 text-black fw-bold" to='*'>
                                    <i className="fa fa-user fs-18 me-2 side-menu__icon profile-icon"></i>Profile
                                </Link>
                            </li>
                            <li className="dropdown-item">
                                <Link className="d-flex w-100 text-black fw-bold" to='/'>
                                    <i class="fa-solid fa-right-from-bracket fs-18 me-2 side-menu__icon profile-icon"></i>Log Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
