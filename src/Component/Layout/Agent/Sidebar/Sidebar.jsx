import React from 'react'
import { Link } from 'react-router-dom'
//import Icon from '../../../../assets/icon/setting.svg'
export default function Sidebar() {
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
    <h3 style={{fontSize:"23px"}}>B2B</h3>
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
                    <Link to='/agent/dashboard' class="side-menu__item">
                        <i class="fa-solid fa-house side-menu__icon"></i>
                        <span class="side-menu__label">Dashboard</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/customer' class="side-menu__item">
                        <i class="fa-solid fa-user side-menu__icon"></i>
                        <span class="side-menu__label">My Customers</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/booking' class="side-menu__item">
                        <i class="fa-solid fa-book side-menu__icon"></i>
                        <span class="side-menu__label">My Bookings</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/Queries' class="side-menu__item">
                        <i class="fa-solid fa-clipboard-question side-menu__icon"></i>
                        <span class="side-menu__label"> Queries</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/Packages' class="side-menu__item">
                        <i class="fa-solid fa-box side-menu__icon"></i>
                        <span class="side-menu__label">My Packages</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/MannualHotel' class="side-menu__item">
                        <i class="fa-solid fa-hotel side-menu__icon"></i>
                        <span class="side-menu__label">Mannual Hotel</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/ManageMarkup' class="side-menu__item">
                        <i class="fa-solid fa-list-check side-menu__icon"></i>
                        <span class="side-menu__label">Manage Markup</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/WebCheck-In' class="side-menu__item">
                        <i class="fa-solid fa-file side-menu__icon"></i>
                        <span class="side-menu__label">Web Check-in</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='/agent/ReminderWebCheck-in' class="side-menu__item">
                        <i class="fa-solid fa-file side-menu__icon"></i>
                        <span class="side-menu__label">Reminder Web Checkin</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='*' class="side-menu__item">
                        <i class="fa-solid fa-globe side-menu__icon"></i>
                        <span class="side-menu__label">Online Recharge</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='*' class="side-menu__item">
                        <i class="fa-solid fa-file-invoice side-menu__icon"></i>
                        <span class="side-menu__label">Invoice</span>
                    </Link>
                </li>  
                <li class="slide">
                    <Link to='*' class="side-menu__item">
                        <i class="fa-solid fa-file-invoice side-menu__icon"></i>
                        <span class="side-menu__label">Generate Invoice</span>
                    </Link>
                </li>
                <li class="slide">
                    <Link to='*' class="side-menu__item">
                        <i class="fa-solid fa-gear side-menu__icon"></i>
                        <span class="side-menu__label">Setting</span>
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
