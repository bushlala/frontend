import * as React from 'react';
import '../../Component/Home/header.css';
import suitcase from '../../assets/images/suitcase.svg'
import { Link } from "@mui/material";


function ResponsiveAppBar() {


  return (
   <>
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand me-4" to={'/'}>Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/'}>Flights </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/'}>Hotel</Link>
                        </li>
                    </ul>
                    <div className='d-flex'>
                       <div className='agent-login-btn d-flex align-items-center'>
                            <div className='flight-icon me-2'>
                                <img src={suitcase} />
                            </div>
                            <div className=''>
                                <p className='business-label mb-0'>Business</p>   
                                <Link to={''} className='nav-link'>Agent Login</Link>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    </div>    
   </>
  );
}
export default ResponsiveAppBar;