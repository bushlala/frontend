import React from 'react'
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const profile =require('../assets/images/profile.jpg');
const flag =require('../assets/images/flag.jpg');


export default function Header() {
  return (
    <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
       {/* <!-- app-header --> */}
       <header className="app-header">
            {/* <!-- Start::main-header-container --> */}
            <div className="main-header-container container-fluid">
                {/* <!-- Start::header-content-left --> */}
                <div className="header-content-left">
                    {/* <!-- Start::header-element --> */}
                    {/* <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                                <img src="../assets/images/brand-logos/toggle-logo.png" alt="logo" className="toggle-logo" />
                                <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                                <img src="../assets/images/brand-logos/toggle-dark.png" alt="logo" className="toggle-dark" />
                                <img src="../assets/images/brand-logos/desktop-white.png" alt="logo" className="desktop-white" />
                                <img src="../assets/images/brand-logos/toggle-white.png" alt="logo" className="toggle-white" />
                            </a>
                        </div>
                    </div> */}
                    {/* <!-- End::header-element --> */}
                    {/* <!-- Start::header-element --> */}
                    <div className="header-element">
                        {/* <!-- Start::header-link --> */}
                        <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href={() => false}><span></span></a>
                        {/* <!-- End::header-link --> */}
                    </div>
                    {/* <!-- End::header-element --> */}
                    {/* <!-- Start::header-element --> */}
                    <div className="main-header-center  d-none d-lg-block header-link">
                        <input type="text" className="form-control" id="typehead" placeholder="Search for results..."
                            autocomplete="off" />
                        <button type="button"  aria-label="button" className="btn pe-1"><i className="fa fa-search" aria-hidden="true"></i></button>
                        <div id="headersearch" className="header-search">
                            <div className="p-3">
                                <div className="">
                                    <p className="fw-semibold text-muted mb-2 fs-13">Recent Searches</p>
                                    <div className="ps-0">
                                        <a  href={() => false} className="search-tags"><i className="fa fa-search me-2"></i>People<span></span></a>
                                        <a  href={() => false} className="search-tags"><i className="fa fa-search me-2"></i>Pages<span></span></a>
                                        <a  href={() => false} className="search-tags"><i className="fa fa-search me-2"></i>Articles<span></span></a>
                                    </div>
                                </div>
                                 <div className="mt-3">
                                    <p className="fw-semibold text-muted mb-3 fs-13">Apps and pages</p>
                                    <ul className="ps-0">
                                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                            <a className="d-inline-flex align-items-center" href="full-calendar.html"><i className="fa fa-calendar me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Calendar</span></a>
                                        </li>
                                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                            <a className="d-inline-flex align-items-center" href="mail.html"><i className="fa fa-mail me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Mail</span></a>
                                        </li>
                                        <li className="p-1 d-flex align-items-center text-muted mb-3 search-app">
                                            <a className="d-inline-flex align-items-center" href="buttons.html"><i className="fa fa-globe me-2 fs-14 bg-primary-transparent p-2 rounded-circle"></i><span>Buttons</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-3">
                                   <p className="fw-semibold text-muted mb-2 fs-13">Links</p>
                                   <ul className="ps-0 list-unstyled mb-0">
                                        <li className="p-1 align-items-center text-muted mb-1 search-app">
                                                <a href={() => false} className="text-primary"><u>http://spruko/spruko.com</u></a>
                                        </li>
                                        <li className="p-1 align-items-center text-muted mb-0 pb-0 search-app">
                                                <a href={() => false} className="text-primary"><u>http://spruko/spruko.com</u></a>
                                        </li>
                                    </ul>
                               </div>
                            </div>
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
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element country-selector d-none">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a href={() => false} className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <img src={flag} alt="img" className="rounded-circle" />
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/us_flag.jpg" alt="img" /> 
                                    </span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/spain_flag.jpg" alt="img" />
                                    </span>
                                    Spanish
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/french_flag.jpg" alt="img" />
                                    </span>
                                    French
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/germany_flag.jpg" alt="img" />
                                    </span>
                                    German
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/italy_flag.jpg" alt="img" />
                                    </span>
                                    Italian
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item d-flex align-items-center" href={() => false}>
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src="../assets/images/flags/russia_flag.jpg" alt="img" />
                                    </span>
                                    Russian
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element header-theme-mode d-none">
                        {/* <!-- Start::header-link|layout-setting --> */}
                        <a aria-label="anchor" href={() => false} className="header-link layout-setting">
                            <span className="light-layout">
                                {/* <!-- Start::header-link-icon --> */}
                            <i className="fa fa-moon header-link-icon"></i>
                                {/* <!-- End::header-link-icon --> */}
                            </span>
                            <span className="dark-layout">
                                {/* <!-- Start::header-link-icon --> */}
                            <i className="fa fa-sun header-link-icon"></i>
                                {/* <!-- End::header-link-icon --> */}
                            </span>
                        </a>
                        {/* <!-- End::header-link|layout-setting --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element cart-dropdown d-none">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a href={() => false} className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                            <i className="fa fa-shopping-cart header-link-icon"></i>
                            <span className="badge bg-secondary rounded-pill header-icon-badge" id="cart-icon-badge">4</span>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        {/* <!-- Start::main-header-dropdown --> */}
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-16 fw-semibold">My Shopping Cart</p>
                                    <span className="badge bg-danger-transparent fs-14" id="cart-data">Hurry Up!</span>
                                </div>
                            </div>
                            <div><hr className="dropdown-divider" /></div>
                            <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img src="../assets/images/ecommerce/orders/11.jpg" alt="img" className="avatar avatar-xl br-5 me-3" />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start mb-0">
                                                <div>
                                                    <a className="mb-0 fs-13 text-dark fw-semibold" href="cart.html">Flower Pot for Home Decor</a>
                                                    <div className="min-w-fit-content">
                                                        <span>Status: <span className="text-success">In Stock</span></span>
                                                        <p className="fs-13 text-muted mb-0">Quantity: 01</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto text-end d-flex fs-16">
                                                    <span className="fs-16 text-dark mb-1">$438</span>
                                                    <a aria-label="anchor" href={() => false} className="header-cart-remove dropdown-item-close btn"><i className="ti ti-trash"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img src="../assets/images/ecommerce/orders/1.jpg" alt="img" className="avatar avatar-xl br-5 me-3" />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start mb-0">
                                                <div>
                                                    <a className="mb-0 fs-13 text-dark fw-semibold" href="cart.html">Black Digital Camera</a>
                                                    <div className="min-w-fit-content">
                                                        <span>Status: <span className="text-danger">Out Stock</span></span>
                                                        <p className="fs-13 text-muted mb-0">Quantity: 06</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto text-end d-flex fs-16">
                                                    <span className="fs-16 text-dark mb-1">$867</span>
                                                    <a aria-label="anchor" href={() => false} className="header-cart-remove dropdown-item-close btn"><i className="ti ti-trash"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img src="../assets/images/ecommerce/orders/15.jpg" alt="img" className="avatar avatar-xl br-5 me-3" />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start mb-0">
                                                <div>
                                                    <a className="mb-0 fs-13 text-dark fw-semibold" href="cart.html">Stylish Rockerz 255 Ear Pods</a>
                                                    <div className="min-w-fit-content">
                                                        <span>Status: <span className="text-success">In Stock</span></span>
                                                        <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto text-end d-flex fs-16">
                                                    <span className="fs-16 text-dark mb-1">$323</span>
                                                    <a aria-label="anchor" href={() => false} className="header-cart-remove dropdown-item-close btn"><i className="ti ti-trash"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img src="../assets/images/ecommerce/orders/12.jpg" alt="img" className="avatar avatar-xl br-5 me-3" />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start mb-0">
                                                <div>
                                                    <a className="mb-0 fs-13 text-dark fw-semibold" href="cart.html">Women Party Wear Dress</a>
                                                    <div className="min-w-fit-content">
                                                        <span>Status: <span className="text-success">In Stock</span></span>
                                                        <p className="fs-13 text-muted mb-0">Quantity: 05</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto text-end d-flex fs-16">
                                                    <span className="fs-16 text-dark mb-1">$867</span>
                                                    <a aria-label="anchor" href={() => false} className="header-cart-remove dropdown-item-close btn"><i className="ti ti-trash"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item border-top d-flex">
                                <a href="checkout.html" className="btn btn-primary btn-pill w-sm btn-sm  fs-16"><i className="fa fa-check-circle me-2 d-inline-flex"></i>checkout</a>
                                <h6 className="ms-auto fs-17 fw-semibold my-auto">Total: $6789</h6>
                            </div>
                            <div className="p-5 empty-item d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                    <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                    <a href="products.html" className="btn btn-primary btn-wave m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End::main-header-dropdown --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element notifications-dropdown" >
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                            <i className="fa fa-bell header-link-icon"></i>
                            <span className="w-9 h-9 p-0 bg-success rounded-pill header-icon-badge pulse pulse-success" id="notification-icon-badge"></span>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        {/* <!-- Start::main-header-dropdown --> */}
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                                    <span className="badge bg-secondary-transparent" id="notifiation-data">5 Unread</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                             <span className="avatar avatar-md bg-primary avatar-rounded"><i className="fa fa-mail fs-18"></i></span>
                                         </div>
                                         <div className="flex-grow-1 d-flex align-items-center my-auto">
                                            <div>
                                                <p className="mb-0 fw-semibold"><Link to='/'>New Application received</Link></p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">3 days ago</span>
                                            </div>
                                            <div className="ms-auto my-auto">
                                                <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                            </div>
                                         </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                             <span className="avatar avatar-md bg-secondary avatar-rounded"><i className="fa fa-check-circle fs-18"></i></span>
                                         </div>
                                         <div className="flex-grow-1 d-flex align-items-center my-auto">
                                            <div>
                                                <p className="mb-0 fw-semibold"><Link to='/'>Project has been approved</Link></p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">2 hours ago</span>
                                            </div>
                                            <div className="ms-auto my-auto">
                                                <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                            </div>
                                         </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                             <span className="avatar avatar-md bg-success avatar-rounded"><i className="fa fa-shopping-cart fs-18"></i></span>
                                         </div>
                                         <div className="flex-grow-1 d-flex align-items-center my-auto">
                                            <div>
                                                <p className="mb-0 fw-semibold"><Link to='/'>Your Product Delivered</Link></p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">30 min ago</span>
                                            </div>
                                            <div className="ms-auto my-auto">
                                                <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                            </div>
                                         </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                             <span className="avatar avatar-md bg-pink avatar-rounded"><i className="fa fa-shopping-cart fs-18"></i></span>
                                         </div>
                                         <div className="flex-grow-1 d-flex align-items-center my-auto">
                                            <div>
                                                <p className="mb-0 fw-semibold"><Link to='/'>Friend Requests</Link></p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">10 min ago</span>
                                            </div>
                                            <div className="ms-auto my-auto">
                                                <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close1"><i className="ti ti-x fs-16"></i></a>
                                            </div>
                                         </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item1 border-top text-center">
                                <Link to='/' className="">View All Notifications</Link>
                            </div>
                            <div className="p-5 empty-item1 d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i className="ri-notification-off-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End::main-header-dropdown --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element message-dropdown">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown2" aria-expanded="false">
                            <i className="fa-solid fa-envelope header-link-icon"></i>
                            <span className="w-9 h-9 p-0 bg-danger rounded-pill header-icon-badge pulse pulse-danger" id="message-icon-badge"></span>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        {/* <!-- Start::main-header-dropdown --> */}
                        <div className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-semibold">Messages</p>
                                    <span className="badge bg-secondary-transparent" id="message-data">5 Unread</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <ul className="list-unstyled mb-0" id="header-message-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                            <img src={profile} alt="img" className="avatar avatar-md avatar-rounded" />
                                         </div>
                                         <div className="w-100">
                                            <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                <div>
                                                    <h6 className="mb-0 fw-semibold fs-14"><Link to='/'>Shannon Shaw</Link></h6>
                                                </div>
                                                <div className="ms-auto text-end">
                                                    <p className="text-muted mb-0">7:55pm</p>
                                                </div>
                                             </div>
                                             <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                <div>
                                                    <span className="text-muted fw-normal fs-12">New Product Realease......</span>
                                                </div>
                                                <div className="ms-auto text-end">
                                                    <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close2"><i className="ti ti-x fs-16"></i></a>
                                                </div>
                                             </div>
                                         </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                         <div className="pe-2">
                                            <img src={profile} alt="img" className="avatar avatar-md avatar-rounded" />
                                         </div>
                                         <div className="w-100">
                                            <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                <div>
                                                    <h6 className="mb-0 fw-semibold fs-14"><Link to='/'>Cherry Blossom</Link></h6>
                                                </div>
                                                <div className="ms-auto text-end">
                                                    <p className="text-muted mb-0">7:55pm</p>
                                                </div>
                                             </div>
                                             <div className="flex-grow-1 d-flex align-items-centermy-auto">
                                                <div>
                                                    <span className="text-muted fw-normal fs-12">You have appointment on......</span>
                                                </div>
                                                <div className="ms-auto text-end">
                                                    <a aria-label="anchor" href={() => false} className="min-w-fit-content text-muted me-1 dropdown-item-close2"><i className="ti ti-x fs-16"></i></a>
                                                </div>
                                             </div>
                                         </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item2 border-top text-center">
                                <Link to='/' className="">View All Messages</Link>
                            </div>
                            <div className="p-5 empty-item2 d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-danger-transparent">
                                        <i className="ri-message-2-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Messages</h6>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End::main-header-dropdown --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element header-fullscreen d-none">
                        {/* <!-- Start::header-link --> */}
                        <a aria-label="anchor" onclick="openFullscreen();" href={() => false} className="header-link">
                            <i className="fa fa-minimize full-screen-open header-link-icon"></i>
                            <i className="fa fa-minimize-2 full-screen-close header-link-icon d-none"></i>
                        </a>
                        {/* <!-- End::header-link --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element d-none">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#sidebar-right">
                            <i className="fa fa-align-right header-link-icon"></i>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element main-profile-user">
                        {/* <!-- Start::header-link|dropdown-toggle --> */}
                        <a href={() => false} className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <div className="me-xxl-2 me-0">
                                    <img src={profile} alt="img" width="32" height="32" className="rounded-circle" />
                                </div>
                                <div className="d-xxl-block d-none my-auto">
                                    <h6 className="fw-semibold mb-0 lh-1 fs-14">Json Taylor</h6>
                                    {/* <span className="op-7 fw-normal d-block fs-11 text-muted">Web Designer</span> */}
                                </div>
                            </div>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li className="drop-heading d-xxl-none d-block">
                                 <div className="text-center">
                                    <h5 className="text-dark mb-0 fs-14 fw-semibold">Json Taylor</h5>
                                    <small className="text-muted">Web Designer</small>
                                </div>
                            </li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/profile'><i className="fa fa-user fs-18 me-2 text-primary"></i>Profile</Link></li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/'><i className="fa fa-mail fs-18 me-2 text-primary"></i>Inbox <span className="badge bg-danger ms-auto">25</span></Link></li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/'><i className="fa fa-settings fs-18 me-2 text-primary"></i>Settings</Link></li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/'><i className="fa fa-headphones fs-18 me-2 text-primary"></i>Support</Link></li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/'><i className="fa fa-lock fs-18 me-2 text-primary"></i>Lockscreen</Link></li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/'><i className="fa fa-info fs-18 me-2 text-primary"></i>Log Out</Link></li>
                        </ul>
                    </div>
                    {/* <!-- End::header-element --> */}

                    {/* <!-- Start::header-element --> */}
                    <div className="header-element d-none">
                        {/* <!-- Start::header-link|switcher-icon --> */}
                        <a aria-label="anchor" href={() => false} className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                            <i className="bx bx-cog header-link-icon"></i>
                        </a>
                        {/* <!-- End::header-link|switcher-icon --> */}
                    </div>
                    {/* <!-- End::header-element --> */}

                </div>
                {/* <!-- End::header-content-right --> */}

            </div>
            {/* <!-- End::main-header-container --> */}

        </header>
    </>
  )
}
