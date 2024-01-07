import React, {useState} from "react";
import Layout from '../../../Component/Layout/Agent/AgentLayout';
import {Modal, Button} from 'react-bootstrap';
export default function AgentProfile() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  return (
    <>
      <Layout />
      <div className="main-content app-content myprofile">
            <div className="container-fluid">
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <h5 className='fw-bold'>Account Information</h5>
                                            <div class="table-responsive mt-3">
                                                <table class="table text-nowrap table-bordered border-primary">
                                                    <tbody>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>First Name</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Rajat</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Last Name</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Patidar</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Email</span>
                                                            </th>
                                                            <td>
                                                                <span class="">rajat@gmail.com</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Contact No.</span>
                                                            </th>
                                                            <td>
                                                                <span class="">+91 8745120369</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>City</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Indore</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>State</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Madhya Pradesh</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Country</span>
                                                            </th>
                                                            <td>
                                                                <span class="">India</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Address</span>
                                                            </th>
                                                            <td>
                                                                <span class="">IT Park ,Indore</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Pin Code</span>
                                                            </th>
                                                            <td>
                                                                <span class="">452001</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                    </div>
                                    <div className='col-6'>
                                        <h5 className='fw-bold'>Agency Information</h5>
                                            <div class="table-responsive mt-3">
                                                <table class="table text-nowrap table-bordered border-primary">
                                                    <tbody>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Logo</span>
                                                            </th>
                                                            <td>
                                                                <span class=""></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Agent ID:</span>
                                                            </th>
                                                            <td>
                                                                <span class="">#4953</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Company Name</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Gloria Holidays</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Business Type</span>
                                                            </th>
                                                            <td>
                                                                <span class="">Proprietorship</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>PAN</span>
                                                            </th>
                                                            <td>
                                                                <span class="">DDUPB0752C</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Agency GSTIN</span>
                                                            </th>
                                                            <td>
                                                                <span class=""></span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w-25'>
                                                                <span className='fw-bold p-1'>Website</span>
                                                            </th>
                                                            <td>
                                                                <span class=""></span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <Button className="nextButton" onClick={handleShow}>
                                                Change Password
                                        </Button>
                                        <Modal size="sm" show={showModal} onHide={handleClose} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Change Password</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label class="form-label">Old Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control" id="inlineFormInputGroupUsername" />
                                                            </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label class="form-label">New Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control" id="inlineFormInputGroupUsername" />
                                                            </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label class="form-label">Confirm Password</label>
                                                            <div class="input-group">
                                                                <input type="password" class="form-control" id="inlineFormInputGroupUsername" />
                                                            </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-4">
                                                    <p className=""><Button variant="primary" onClick={handleClose}> Close </Button></p>
                                                    <p className=""><Button variant="primary" onClick={handleClose}><i class="fa-solid fa-bookmark"></i> Save </Button></p>
                                                </div>
                                                
                                            </Modal.Body>
                                            
                                        </Modal>
                                       
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
