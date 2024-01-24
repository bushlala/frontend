import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../../Component/Layout/Agent/Header/SearchHeader';
import Indigo from '../../../../assets/images/indigo.png'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
export default function Review() {
return (
<>
  <Header />
  <div className="main-content px-0 main-top-padding">
   
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
        <div className='apt-section'>
            <div className='container'>
                <Nav variant="pills" className="row bookingTop-row-positionHandle">
                  <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                    <Nav.Link eventKey="first" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>FIRST
                            STEP</span></span>
                        <h4 class="apt-flightiti"><span>Flight Itinerary</span></h4></Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                    <Nav.Link eventKey="second" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>SECOND STEP</span></span>
                    <h4 class="apt-flightiti"><span>Passenger Details</span></h4></Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                    <Nav.Link eventKey="third" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>THIRD STEP</span></span>
                    <h4 class="apt-flightiti"><span>Review</span></h4></Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                    <Nav.Link eventKey="fourth" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>FINISH STEP</span></span>
                    <h4 class="apt-flightiti"><span>Payments</span></h4></Nav.Link>
                  </Nav.Item>
                </Nav>
            </div>  
        </div>  
        <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className='bg-white'>
                <div className="container">
                  <div className="page-header">
                    <h1 className="page-title fw-bold my-auto">Review</h1>
                    <div>
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link to={`/`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Review</li>
                      </ol>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-9'>
                      <div className='card list-item'>
                        <div className='card-body'>
                          <h6>Delhi <i class="fa-solid fa-arrow-right-long me-1"></i> Mumbai <span className="graysmalltext"> on
                              Sun, Jan 14th 2024</span> </h6>
                          <hr>
                          </hr>
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
                                  <div className="" style={{ width: "30%" }}>
                                    <div className="coltime"> Jan 14, San, 20:20</div>
                                    <div className="graysmalltext">Delhi,India</div>
                                    <div className="graysmalltext">Delhi Indira Gandhi Intl</div>
                                    <div className="graysmalltext">Terminal 3</div>
                                  </div>
                                  <div className="mt-3 me-5" style={{ width: "30%" }}>
                                    <div className="nostops fw-bold">Non-Stop</div>
                                  </div>
                                  <div className="" style={{ width: "30%" }}>
                                    <div className="coltime"> Jan 14, San, 20:20</div>
                                    <div className="graysmalltext">Delhi,India</div>
                                    <div className="graysmalltext">Delhi Indira Gandhi Intl</div>
                                    <div className="graysmalltext">Terminal 3</div>
                                  </div>
                                  <div className="" style={{ width: "30%" }}>
                                    <div className="coltime"> 2h:5m</div>
                                    <div className="graysmalltext">Economy,Free</div>
                                    <div className="graysmalltext">Meal,Refundable</div>
                                  </div>
                                </div>
                              </div>
                              <div className='row mt-3'>
                                <div className='w-50'>
                                  <p className='bg-warning text-dark rounded w-25 text-center'>Published</p>
                                </div>
                                <div>
                                  <p><i class="fa-solid fa-suitcase me-1"></i>: (Adult), Cabin : 7 Kg</p>
                                </div>
                              </div>
                              <div className='mt-4'>
                                <h5>Passenger Details</h5>
                                <div className="table-responsive">
                                  <table className="table text-nowrap w-100">
                                    <thead>
                                      <tr>
                                        <th>Sr.</th>
                                        <th>Name,Age & Passport</th>
                                        <th>Seat Booking</th>
                                        <th>Meal & Baggage Preference</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className='fw-bold'>1</td>
                                        <td className='fw-bold'>Mr Rajat Patidar</td>
                                        <td className='fw-bold'>BLR-BOM: 10B</td>
                                        <td>
                                          <div className='graysmalltext'><i class="fa-solid fa-suitcase me-1"></i> - BLR-BOM : + 5
                                            kg Xcess Baggage</div>
                                          <div className='graysmalltext'><i class="fa-solid fa-utensils"></i> - BLR-BOM: Chicken
                                            Ghee Roast with Siracha Fried Rice</div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className='mt-4'>
                                <h5>Contact Details</h5>
                                <div className='mt-3'>Email : <span className='fw-bold'>info@gmail.com</span></div>
                                <div>Mobile : <span className='fw-bold'>8745120369</span></div>
                              </div>
                              <hr>
                              </hr>
                              <div className='d-flex justify-content-between'>
                                <Link className='btn btn-danger'>Back</Link>
                                <div className='d-flex'>
                                  <div class="form-check me-2 mt-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label class="form-check-label" for="flexCheckChecked">
                                      I Accept <Link className='text-danger'>Terms & Conditions</Link>
                                    </label>
                                  </div>
                                  <Link to={'/BookingHold'}><button className='btn btn-dark float-end mx-2'> Block</button> </Link>
                                  <button className='btn btn-danger float-end'> Proceed To Pay</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='card'>
                        <div class="card-body ">
                          <h5 className='fw-bold'>Fare Summary</h5>
                          <hr>
                          </hr>
                          <div className='row'>
                            <div className='col-6'>
                              <h6>Base fare</h6>
                            </div>
                            <div className='col-6 '>
                              <p className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i> 3,000.85</p>
                            </div>
                            <hr>
                            </hr>
                          </div>
                          <div className='row'>
                            <div className='col-6'>
                              <h6>Taxes and fees</h6>
                            </div>
                            <div className='col-6 '>
                              <p className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i> 3,000.85</p>
                            </div>
                            <hr>
                            </hr>
                          </div>
                          <div className='row'>
                            <div className='col-8'>
                              <h6>Meal, Baggage & Seat</h6>
                            </div>
                            <div className='col-4 '>
                              <p className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i> 3,000.85</p>
                            </div>
                            <hr>
                            </hr>
                          </div>
                          <div className='row'>
                            <div className='col-6'>
                              <h6>Amount To Pay</h6>
                            </div>
                            <div className='col-6 '>
                              <p className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i> 3,000.85</p>
                            </div>
                            <hr>
                            </hr>
                          </div>
                          <div className='row'>
                            <div className='col-5'>
                              <div className='d-flex'>
                                <div className=''>
                                  <div className="flightname" id="">TJ Coins :</div>
                                  <div className="fs-13" id="">10 Coins = 1 Rs.</div>
                                </div>
                              </div>
                            </div>
                            <div className='col-4'>
                              <input className="form-control" type='text' />
                            </div>
                            <div className='col-3'>
                              <button className='btn btn-dark float-end'>Redeem</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
        </Tab.Content>
    </Tab.Container>

      
  </div>


</>
)
}