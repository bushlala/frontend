import React from 'react'
//import { Link } from 'react-router-dom'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import Indigo from '../../../../assets/images/indigo.png'
import './Flightreview.css'
export default function Flightreview() {
  return (
    <>
    <Header />
    <Sidebar />
    <div className="main-content app-content flightreview mb-5">
      <div className="container-fluid">
        <div className="row">
          <div className='col-9'>
              <div className="page-header">
                  <h4 className="my-auto">Flight Details</h4>
                  <div>
                    <p className="my-auto text-danger">Back to Search</p> 
                  </div>
              </div>
              <div className='flight-item-list'>
                <div className='card-body'>
                    <div className="card-title">
                        <p className='flightname'>Delhi <i class="fa-solid fa-arrow-right-long"></i>  NA  <span className='flightnumber'>On Mon,Jan 01 2024</span></p>
                    </div>
                    <hr></hr>
                        <div className='row'>
                          <div className='col-12'>
                              <div className='row'>
                                  <div className='col-sm-2'>
                                      <div className='d-flex'>
                                        <img className='flight-flag' src={Indigo} alt=''/>
                                        <div className=''>
                                            <div className="flightname" id="">IndiGo</div>
                                            <div className="flightnumber" id="">6E-6114</div>
                                        </div>
                                      </div>  
                                  </div>
                                  <div className='col-10 d-flex'>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="coltime"> 22:15</div>
                                      <div className="graysmalltext"> DEL</div>
                                      <div className="graysmalltext"> Terminal 1</div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="nostops small">0d:2h:10m</div>
                                      <div className="graysmalltext text-danger"> Non Stop</div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="coltime"> 00:25</div>
                                      <div className="graysmalltext"> BOM</div>
                                      <div className="graysmalltext"> Terminal 2</div>
                                    </div>
                                  </div>
                              </div>
                              <div className='d-flex'>
                                <p className="coltime"><i class="fa-solid fa-suitcase"></i> 15 KG  | <i class="fa-solid fa-suitcase"></i> 17 KG  | <i class="fa-solid fa-money-bill-1"></i> Refundable</p>
                              </div>
                              <div className='re-layover'>
                                <p className='text-center'>Layover 02H 05M</p>
                              </div>
                              <div className='row'>
                                  <div className='col-sm-2'>
                                      <div className='d-flex'>
                                        <img className='flight-flag' src={Indigo} alt='' />
                                        <div className=''>
                                            <div className="flightname" id="">IndiGo</div>
                                            <div className="flightnumber" id="">6E-6114</div>
                                        </div>
                                      </div>  
                                  </div>
                                  <div className='col-10 d-flex'>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="coltime"> 22:15</div>
                                      <div className="graysmalltext"> DEL</div>
                                      <div className="graysmalltext"> Terminal 1</div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="nostops small">0d:2h:10m</div>
                                      <div className="graysmalltext text-danger"> Non Stop</div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                      <div className="coltime"> 00:25</div>
                                      <div className="graysmalltext"> BOM</div>
                                      <div className="graysmalltext"> Terminal 2</div>
                                    </div>
                                  </div>
                              </div>
                              <div className='d-flex'>
                              <p className="coltime"><i class="fa-solid fa-suitcase"></i> 15 KG  | <i class="fa-solid fa-suitcase"></i> 17 KG  | <i class="fa-solid fa-money-bill-1"></i> Refundable</p>
                              </div>
                                <div className='row mt-3'>
                                  <div className='col-6'>
                                    {/* <button type="button" className="btn btn-outline-secondary btn-md">Show Fare Rules</button> */}
                                    <p>
                                        <a class="btn btn-outline-secondary btn-md" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Show Fare Rules
                                        </a>
                                    </p>
                                    <div class="collapse" id="collapseExample">
                                      <div class="card card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>  
                </div>
              </div> 
              <div className="page-header">
                  <h4 className="my-auto">Passenger Details</h4>
                  <div className=''>
                      <button type='button' className='btn btn-danger re-butoon'>Clear</button>
                      <button type='button' className='btn btn-danger'>Import</button>
                  </div>
              </div>
              <div className='flight-item-list'>
                <div className='card-body'>
                    <div className="card-title">
                        <p className='flightname'>Adult 1 (12 + yrs)</p>
                    </div>
                    <hr></hr>
                    <div className="row gy-4">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">Title*</label> 
                            <select class="form-select" aria-label="Default select example">
                                    <option selected="">Select
                                    </option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                    <option value="3">Ms.</option>
                            </select>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">First Name*</label>
                            <input type="text" class="form-control" id="input-label" />
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-placeholder" class="form-label">Last Name*</label>
                            <input type="text" class="form-control" id="input-label" />
                        </div>
                    </div>
                    <div className="card-title re-card-mib">
                        <p className='flightname p-3'>Onward - SSR Details (Optional)</p>
                    </div>
                    <div className="row gy-4">
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">Select Excess Baggage <span className='font-weight-bold fs-10'>(DEL - BOM)</span></label> 
                            <select class="form-select" aria-label="Default select example">
                                    <option selected="">--Select Baggage--
                                    </option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                    <option value="3">Ms.</option>
                            </select>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">Meal <span className='font-weight-bold fs-10'>(DEL - BOM)</span></label>
                            <select class="form-select" aria-label="Default select example">
                                    <option selected="">--Meal Preferences--
                                    </option>
                                    <option value="1">Mr.</option>
                                    <option value="2">Mrs.</option>
                                    <option value="3">Ms.</option>
                            </select>
                        </div>
                        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <label  class="fs-12 from-label d-flex">Seat</label>
                            <button className='btn btn-danger re-seat'>View Seat</button>
                        </div>
                        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                            <label  class="fs-12 from-label d-flex">Seat</label>
                            <button className='btn btn-danger re-seat'>View Seat</button>
                        </div>
                    </div>
                </div>
              </div>
              <div className='flight-item-list mt-3'>
                <div className='card-body'>
                    <div className="card-title">
                        <p className='flightname'>Contact Details</p>
                    </div>
                    <hr></hr>
                    <div className="row gy-4">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">Email*</label> 
                            <input type="email" class="form-control" id="input-label" placeholder='demo@gmail.com' />
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <label for="input-label" class="form-label">Phone*</label>
                            <input type="text" class="form-control" id="input-label" placeholder='7845120369' />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="" />
                                <label class="form-check-label" for="checkebox-sm">
                                    I have a GST Number
                                </label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='card-title'>
                        <button className='btn btn-danger'>Proceed To Pay</button>
                    </div>
                </div>
              </div>
                                 
        </div>
            <div className='col-3 mt-5'>
                <div className='re-card'>
                    <div className=''>
                    <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                            <h6>Fare Summary</h6>
                        </div>  
                        <div className='list-group-item'>
                            <div className='row d-flex'>
                              <div className="col">
                              <h6 className=''>Base fare</h6>
                              </div>
                              <div className="col">
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                            <hr></hr>
                            <div className='row d-flex'>
                              <div className="col">
                              <h6 className=''>Taxes and fees</h6>
                              </div>
                              <div className="col">
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                            <hr></hr>
                            <div className='row d-flex'>
                              <div className="col">
                              <h6 className=''>Amount to Pay</h6>
                              </div>
                              <div className="col">
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                          <hr></hr>
                          <div className="graysmalltext text-danger mb-3"> <i class="fa-solid fa-circle-info"></i> You dont't have sufficient balance</div>
                        </div>   
                      </div>   
                    </div>
                </div>
                <div className='re-card mt-3'>
                    <div className=''>
                    <div className='list-group list-group-flush'>
                        <div className='list-group-item'>
                            <h6>Select a Discount Coupan</h6>
                        </div>  
                        <div className='list-group-item'>
                             <div className='d-flex mt-2'>
                                <input type="text" class="form-control " id="input-label"/>
                                <button className='btn btn-danger btn-coupan'>Apply</button>
                             </div>
                             <p className='text-center graysmalltext mt-3'>No Discount Coupan Available</p>
                        </div>   
                      </div>   
                    </div>
                </div>
            </div>
        </div>
        <div className="open-button text-center">
        Your session will expire in
        <p>00:00 min</p>
        </div>
      </div>
    </div>
    </>
  )
}
