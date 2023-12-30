import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import './Flightreview.css'
export default function Flightreview() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="main-content app-content flightreview">
        <div className="container-fluid">
            <div className="page-header">
                    <h1 className="page-title my-auto">Flight Details</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Flight Details</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-header">
                                <div className="card-title">
                                    Delhi Mumbai <span className='font-weight-normal fs-11'>on Fri, Dec 29 2023</span>
                                </div>
                            </div>
                            <div className="card-header d-block">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12">
                                        <div className='row'>
                                            <div className='col-3 d-flex'>
                                                <sapn><i class="fa-solid fa-plane-up flight-icon"></i></sapn>
                                                <div className=''>
                                                <h6 className=' m-2 font-weight-bold'>Indigo</h6>
                                                {/* <p className='fs-11'>6E 6016</p> */}
                                                </div>
                                            </div>
                                            <div className='col-3 text-center'>
                                                <p className="flight-text">Fri, Dec 29 2023 </p>
                                                <span className="f-9">Delhi,India (DEL)</span>
                                            </div>
                                            <div className='col-3 text-center'>
                                                <spna className="flight-text">2H ,20M</spna>
                                                <hr />
                                                <p className="f-9">Delhi,India (DEL)</p>
                                            </div>
                                            <div className='col-3 text-center'>
                                                <p className="flight-text">Fri, Dec 29 2023</p>
                                                <span className="f-9">Mumbai,India (BOM)</span>
                                            </div>
                                            <p></p>
                                        </div>
                                    </div>
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
