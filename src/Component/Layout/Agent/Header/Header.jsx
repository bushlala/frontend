import React from 'react'
import { Link } from 'react-router-dom';
import { AuthAPI } from '../../../../Services/Auth.Service';
const profile =require('../../../../assets/images/profile.jpg');
const flag =require('../../../../assets/images/flag.jpg');
// import Button from '@mui/material/Button';
// import HomeIcon from '@mui/icons-material/Home';
// import HotelIcon from '@mui/icons-material/Hotel';
// import FlightIcon from '@mui/icons-material/Flight';
// import './Header.css';


export default function Header() {
    const logout = async () => {
        AuthAPI.logout();
        window.location.href = "/"
    }
    const userData = JSON.parse(localStorage.getItem('userData'));
    //console.log("userData",userData.data.token)
    const jwtToken = userData.data.token;
  return (
    <>
        
       {/* <!-- app-header --> */}
       <header className="app-header">
            {/* <!-- Start::main-header-container --> */}
            <div className="main-header-container container-fluid">
                {/* <!-- Start::header-content-left --> */}
                <div className="header-content-left">
                    {/* <div className='mt-3 header-icon'> 
                        <Button color="secondary" variant='outlined' startIcon={<HomeIcon />}>
                            Dashboard
                        </Button>   
                    </div>
                    <div className='mt-3 header-icon'> 
                        <Button color="success" variant='outlined' startIcon={<HotelIcon />}>
                            Hotels
                        </Button>   
                    </div>
                    <div className='mt-3 header-icon'> 
                        <Button color='primary' variant='outlined' startIcon={<FlightIcon />}>
                            Flights
                        </Button>   
                    </div>    */}
                </div>
                {/* <!-- End::header-content-left --> */}

                {/* <!-- Start::header-content-right --> */}
                <div className="header-content-right">
                    
                    <div className="header-element d-none">
                        <a aria-label="anchor" href={() => false} className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#sidebar-right">
                            <i className="fa fa-align-right header-link-icon"></i>
                        </a>
                    </div>
                    
                    <div className="header-element main-profile-user">
                        <a href={() => false} className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center">
                                <div className="me-xxl-2 me-0">
                                    <img src={profile} alt="img" width="32" height="32" className="rounded-circle" />
                                </div>
                                <div className="d-xxl-block d-none my-auto">
                                    <h6 className="fw-semibold mb-0 lh-1 fs-14">{`${userData.data.firstName} ${userData.data.lastName}`}</h6>
                                </div>
                            </div>
                        </a>
                        {/* <!-- End::header-link|dropdown-toggle --> */}
                        <ul className="main-header-dropdown dropdown-menu pt-0 header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li className="drop-heading d-xxl-none d-block">
                                 <div className="text-center">
                                    <h5 className="text-dark mb-0 fs-14 fw-semibold">{`${userData.data.firstName} ${userData.data.lastName}`}</h5>
                                    <small className="text-muted">Role:Agent</small>
                                </div>
                            </li>
                            <li className="dropdown-item"><Link className="d-flex w-100" to='/profile'><i className="fa fa-user fs-18 me-2 text-primary"></i>Profile</Link></li>
                            
                            <li className="dropdown-item" onClick={logout}><Link className="d-flex w-100" to='/'><i className="fa fa-info fs-18 me-2 text-primary"></i>Log Out</Link></li>
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
