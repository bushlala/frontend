import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import Indigo from '../../../../assets/images/indigo.png'
import './Flightbook.css'

export default function FlightBook() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content app-content flightreview">
          <div className="container-fluid">
               <div className='row'>
                    <div className='col-3'>
                        <div className='card'>
                            <div className=''>
                              <div className='list-group list-group-flush'>
                                  <div className='list-group-item'>
                                    <h5>Total Records</h5>
                                    <p className='mb-0'>Flights</p>
                                  </div>  
                                  <div className='list-group-item'>
                                    <h5>Price Range</h5>
                                    <p className='mb-0'>-----</p>
                                  </div>   
                                  <div className='list-group-item'>
                                    <h5>Net Fare</h5>
                                    <p className='mb-0'> <i className='fa fa-eye me-2 small'></i> Show Net Fare</p>
                                  </div> 
                                  <div className='list-group-item'>
                                    <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                      <input type="checkbox" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                      <label class="btn btn-outline-light" for="btnradio1">0 <br /> Non Stop</label>

                                      <input type="checkbox" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                      <label class="btn btn-outline-light" for="btnradio2">1 <br /> Non Stop</label>

                                      <input type="checkbox" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                      <label class="btn btn-outline-light" for="btnradio3">2+ <br /> Non Stop</label>
                                    </div>
                                  </div> 
                              </div>    
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='flight-item-list'>
                           <div className='card list-item'>
                              <div className='card-body'>
                                  <div className='row'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <div className='d-flex'>
                                                  <img className='flight-flag' src={Indigo} />
                                                  <div className=''>
                                                      <div className="flightname" id="">GoIndigo</div>
                                                      <div className="flightnumber" id="">6E-6114</div>
                                                  </div>
                                                </div>  
                                            </div>
                                            <div className='col-8 d-flex'>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 22:15</div>
                                                <div className="graysmalltext"> DEL</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="nostops small">0d:2h:10m</div>
                                                <div className="graysmalltext text-danger"> Non Stop</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 00:25</div>
                                                <div className="graysmalltext"> BOM</div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-6'>
                                              <button type="button" className="btn btn-outline-secondary btn-sm">View Details</button>
                                            </div>
                                            <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                                        </div>
                                    </div>
                                    <div className='col-6 pricelisttable d-flex flex-column'>
                                      <div className='' style={{overflow:"hidden"}}>
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100'>Booking</Link>
                                          </div>
                                        </div>  
                                      </div>  
                                    </div>
                                  </div>  
                              </div>
                           </div> 
                           <div className='card list-item'>
                              <div className='card-body'>
                                  <div className='row'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <div className='d-flex'>
                                                  <img className='flight-flag' src={Indigo} />
                                                  <div className=''>
                                                      <div className="flightname" id="">GoIndigo</div>
                                                      <div className="flightnumber" id="">6E-6114</div>
                                                  </div>
                                                </div>  
                                            </div>
                                            <div className='col-8 d-flex'>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 22:15</div>
                                                <div className="graysmalltext"> DEL</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="nostops small">0d:2h:10m</div>
                                                <div className="graysmalltext text-danger"> Non Stop</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 00:25</div>
                                                <div className="graysmalltext"> BOM</div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-6'>
                                              <button type="button" className="btn btn-outline-secondary btn-sm">View Details</button>
                                            </div>
                                            <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                                        </div>
                                    </div>
                                    <div className='col-6 pricelisttable d-flex flex-column'>
                                      <div className='' style={{height:"102px", overflow:"hidden"}}>
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100'>Booking</Link>
                                          </div>
                                        </div>  
                                        
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310 d-none" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100 d-none'>Booking</Link>
                                          </div>
                                        </div> 

                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310 d-none" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100 d-none'>Booking</Link>
                                          </div>
                                        </div>  
                                        
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100'>Booking</Link>
                                          </div>
                                        </div>  
                                      </div>  
                                      <div className='morefrebtnouter'>
                                           <Link className='morefrebt'>- More Fare</Link> 
                                      </div>
                                    </div>
                                  </div>  
                              </div>
                           </div> 
                           <div className='card list-item'>
                              <div className='card-body'>
                                  <div className='row'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-sm-4'>
                                                <div className='d-flex'>
                                                  <img className='flight-flag' src={Indigo} />
                                                  <div className=''>
                                                      <div className="flightname" id="">GoIndigo</div>
                                                      <div className="flightnumber" id="">6E-6114</div>
                                                  </div>
                                                </div>  
                                            </div>
                                            <div className='col-8 d-flex'>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 22:15</div>
                                                <div className="graysmalltext"> DEL</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="nostops small">0d:2h:10m</div>
                                                <div className="graysmalltext text-danger"> Non Stop</div>
                                              </div>
                                              <div className="text-center" style={{width:"30%"}}>
                                                <div className="coltime"> 00:25</div>
                                                <div className="graysmalltext"> BOM</div>
                                              </div>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-6'>
                                              <button type="button" className="btn btn-outline-secondary btn-sm">View Details</button>
                                            </div>
                                            <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                                        </div>
                                    </div>
                                    <div className='col-6 pricelisttable d-flex flex-column'>
                                      <div className='' style={{overflow:"hidden"}}>
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100'>Booking</Link>
                                          </div>
                                        </div>  
                                        
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310 d-none" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100 d-none'>Booking</Link>
                                          </div>
                                        </div> 

                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310 d-none" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100 d-none'>Booking</Link>
                                          </div>
                                        </div>  
                                        
                                        <div className='d-flex py-1 border-bottom'>
                                          <div className='me-4' style={{width:"2%"}}>
                                            <div class="form-check">
                                              <input class="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                            </div>
                                          </div>
                                          <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                            <div className='d-flex justify-content-between'>
                                              <div className=''>
                                                <span className="mainprice"> ₹ 11696 </span> 
                                                <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                  ₹ 11547
                                                </span> 
                                              </div> 
                                              <div className=''>
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value="" className="sck"  />
                                                  Share
                                                </span>
                                              </div> 
                                            </div>
                                            <div className=''>
                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                  ONLINE FARE                
                                                </span>
                                                <span className="label--text w-100"> Economy,  &nbsp;
                                                  <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                      <div className="ymessage ymsgclass5310" >
                                                        Online Fare                
                                                      </div>
                                                  </span>
                                                </span>
                                            </div>    
                                          </div>
                                          <div className='ms-4' style={{width:"34%"}}>
                                            <Link className='btn btn-danger w-100'>Booking</Link>
                                          </div>
                                        </div>  
                                      </div>  
                                      <div className='morefrebtnouter'>
                                           <Link className='morefrebt'>- Less Fare</Link> 
                                      </div>
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
