import React, {useState} from "react";
import Layout from '../../../Component/Layout/Agent/AgentLayout'
import banner from '../../../assets/images/nobannerblue.png'
import {Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Packages.css'
import { Typography } from "@mui/material";
export default function Packages() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  return (
    <>
      <Layout />
        <div className="main-content app-content Packages">
            <div className="container-fluid">
                <div className='row'>
                     <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className="card-title">
                                            <h5 className='fw-bold'><i class="fa-solid fa-suitcase me-2"></i> My Packages</h5>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <Link to={'/agent/AddPackages'}><button className='btn btn-primary float-end'>Add Package</button></Link>
                                    </div>
                                    <hr className='mt-3'></hr>
                                </div>
                                <div className='col-4 d-flex'>
                                    <input type='search' className="form-control me-2" placeholder='Enter Package Name' />
                                    <button className='btn btn-success'><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div> 
                                <hr></hr>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap w-100">
                                            <thead>
                                                    <tr>
                                                    <th>--</th>
                                                    <th>Name</th>
                                                    <th>Destination</th>
                                                    <th>Nights / Days</th>
                                                    <th>ost</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='table-td'>
                                                        <img className='w-75' src={ banner } />
                                                    </td>
                                                    <td>
                                                        <Typography className="nextButton" onClick={handleShow}>
                                                        <div className='d-flex'>
                                                            <div className=''>
                                                                <div className="hedding-text" id="">Untitl</div>
                                                                <div className="hedding-text2" id="">Theme: Adventure Trips</div>
                                                            </div>
                                                        </div> 
                                                        </Typography>
                                                        <Modal size="lg" show={showModal} onHide={handleClose} centered>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>View Quotation - #QT202568005</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                            </Modal.Body>
                                                        </Modal> 
                                                    </td>
                                                    <td>--</td>
                                                    <td>2 Nights: / 3 Days</td>
                                                    <td>0 INR / PP</td>
                                                    <td><button className='btn btn-success'>Active</button></td>
                                                    <td>26/12/2023</td>
                                                    <td>
                                                        <button className='btn btn-info me-1'><i class="fa-solid fa-eye"></i></button>
                                                        <Link to={'/agent/AddPackages'}><button className='btn btn-primary me-1'><i class="fa-solid fa-pen-to-square"></i></button></Link>
                                                        <button className='btn btn-success'><i class="fa-brands fa-whatsapp"></i></button>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
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
