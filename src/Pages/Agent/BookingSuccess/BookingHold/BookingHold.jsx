import React, {useState} from "react";
import { Link } from 'react-router-dom'
import Layout from '../../../../Component/Layout/Agent/AgentLayout';
import Indigo from '../../../../assets/images/indigo.png'
import {Modal, Button} from 'react-bootstrap'
export default function BookingHold() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
  return (
    <>
      <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-6 mt-3">
                        <h4 className='text-success'>Booking On Hold</h4>
                        <p>Booking ID :</p>
                    </div>
                    <div className="col-6 mt-3">
                            
                            <button type="button" class="btn btn-primary dropdown-toggle float-end" data-bs-toggle="dropdown" aria-expanded="false">More Option</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-download"></i> Download as PDF</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-print"></i> Print Ticket</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-envelope"></i> Email Ticket</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-regular fa-envelope"></i> SMS Ticket</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-file-invoice"></i> Invoice For Agency</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-file-invoice"></i> Invoice For Customer</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);"><i class="fa-solid fa-cart-shopping"></i> Go to Cart Details</a></li>
                            </ul> 
                            <button className="btn btn-success float-end me-2">Pay Now</button>
                            <Button className="btn btn-primary float-end me-2" onClick={handleShow}>Un Hold</Button>
                            <Modal size="md" show={showModal} onHide={handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Unhold Options</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label fw-bold" for="flexCheckChecked">
                                            TESTPNR <span className="flightnumber">(BLR-DEL)</span>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label fw-bold" for="flexCheckChecked">
                                            Confirm to proceed
                                        </label>
                                    </div>
                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                            </Modal>
                             
                    </div>
                </div>
                <hr></hr>
                <div className='card list-item'>
                  <div className='card-body'>
                    <h6>Delhi  <i class="fa-solid fa-arrow-right-long me-1"></i>  Mumbai <span className="graysmalltext"> on Sun, Jan 14th 2024</span> </h6>
                    <hr></hr>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='row'>
                          <div className='col-2'>
                            <div className='d-flex'>
                              <img className='flight-flag' src={Indigo} />
                              <div className=''>
                              <div className="flightname" id="">GoIndigo</div>
                              <div className="flightnumber" id="">6E-6114</div>
                            </div>
                          </div>  
                        </div>
                        <div className='col-10 d-flex'>
                            <div className="" style={{width:"30%"}}>
                              <div className="coltime"> Jan 14, San, 20:20</div>
                              <div className="graysmalltext">Delhi,India</div>
                              <div className="graysmalltext">Delhi Indira Gandhi Intl</div>
                              <div className="graysmalltext">Terminal 3</div>
                            </div>
                            <div className="mt-3 me-5" style={{width:"30%"}}>
                              <div className="nostops">Non-Stop</div>
                            </div>
                            <div className="" style={{width:"30%"}}>
                            <div className="coltime"> Jan 14, San, 20:20</div>
                              <div className="graysmalltext">Delhi,India</div>
                              <div className="graysmalltext">Delhi Indira Gandhi Intl</div>
                              <div className="graysmalltext">Terminal 3</div>
                            </div>
                            <div className="" style={{width:"30%"}}>
                              <div className="coltime"> 2h:5m</div>
                              <div className="graysmalltext">Economy,Free</div>
                              <div className="graysmalltext">Meal,Refundable</div>
                            </div>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='w-25'>
                              <p className='bg-warning text-dark rounded w-25 text-center'>Published</p>
                          </div> 
                          <div>
                            <h6>Baggage Information</h6>
                            <h6>Adult - <span className='graysmalltext'>Check-in: 25 Kg (01 Piece Only), Cabin : 7 Kg <Link>Click Here</Link> to Web Check-in</span></h6>
                          </div>
                        </div>
                      </div>   
                    </div>  
                  </div>
                </div>
                <button className='btn btn-info-ghost btn-wave waves-effect waves-light'>Fare Rules +</button>
                <div className='card mt-4'>
                  <div class="card-body">
                      <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>Detailed Rules</button></p>
                      <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>DEL-BOM</button></p>
                      <p className='text-danger'>Mentioned fees are Per Pax Per Sector</p>
                      <p className='text-danger'>Apart from airline charges, GST + RAF + applicable charges if any, will be charged. </p>
                      <div className="table-responsive mt-5">
                            <table className="table text-nowrap w-100">
                              <thead>
                                <tr>
                                  <th>Type</th>
                                  <th>Cancellation Fee</th>
                                  <th>Date Change Fee</th>
                                  <th>No Show</th>
                                  <th>Seat Chargeable</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>All</td>
                                  <td>
                                    <p>3,000 +</p>
                                    <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                                    <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower </p>
                                  </td>
                                  <td>
                                    <p>3,000 +</p>
                                    <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                                    <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower + Fare Difference </p>
                                  </td>
                                  <td>
                                    <p>Fees As Per Airline Rule + Surcharges</p>
                                  </td>
                                  <td> As Per Airline</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                  </div>
                </div>
                <div className='card mt-4'>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className="card-title">
                                    <h5 className='fw-bold'>Passenger Details</h5>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-5">
                            <table className="table text-nowrap w-100">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>Print</th>
                                  <th>Name,DOB & Passport & FF</th>
                                  <th>PNR, Ticket No. & Status</th>
                                  <th>Meal, Baggage, Seat & Other Preference</th>
                                  <th>Document Id</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td><i class="fa-solid fa-print"></i></td>
                                  <td className='fw-bold'>Mr Rajat Patidar (A)</td>
                                  <td className='fw-bold'>DEL-BOM: TESTPNR (11111111111)</td>
                                  <td className='fw-bold'>DEL-BOM: <span className="graysmalltext">Seat- 55D,</span></td>
                                  <td className='fw-bold'>NA</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='card mt-4 w-50'>
                  <div class="card-body ">
                    <h5 className='fw-bold'>Fare Summary</h5>
                    <hr></hr>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Base fare</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>3,000.85</p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Taxes and fees</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>3,000.85</p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Meal, Baggage & Seat</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>3,000.85</p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Total</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>3,000.85</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mt-4'>
                  <div class="card-body ">
                    <div>
                      <h4>Important Information</h4>
                      <div className='mt-4'>
                        <p>- You should carry a print-out of your booking and present for check-in.</p>
                        <p>- Date & Time is calculated based on the local time of city/destination.</p>
                        <p>- Use the Reference Number for all Correspondence with us.</p>
                        <p>- Use the Airline PNR for all Correspondence directly with the Airline</p>
                        <p>- For departure terminal please check with airline first.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
