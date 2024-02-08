import React from 'react';

//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import Header from '../../../../../Component/Layout/Agent/Header/SearchHeader'
import './FlightRoundSearchList.css'
export default function FlightRoundSearchList() {
  return (
    <>
      <Header />
      <div className="main-content px-0 main-top-padding mt-5" >
        <div className="container-fluid">
          <div className='row main-row'>
            <div className="col-10 m-auto">
              <div className='flight-item-list'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
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
                  <div className='col-6'>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card list-item'>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="d-flex">
                                  <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                                  <div className="">
                                    <div className="flightname" id="">SpiceJet</div>
                                    <div className="flightnumber" id="">SG-8536</div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8 d-flex">
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 06:15</div>
                                  <div className="graysmalltext"> DEL</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="nostops small">3h - 05m</div>
                                  <div className="graysmalltext text-danger">Non Stop</div>
                                </div>
                                <div className="text-center" style={{ width: '30%' }}>
                                  <div className="coltime"> 09:20</div>
                                  <div className="graysmalltext"> BLR</div>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6">
                                <button type="button" className="btn-sm btn btn-outline-secondary">View Details</button>
                              </div>
                              <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">1</span> </div>
                            </div>
                          </div>
                          <div className="col-6 pricelisttable d-flex flex-column">
                            <div className=""><div className="" >
                              <div className="d-flex py-1 border-bottom">
                                <div className="me-4" style={{ width: '2%' }}>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flight_detail_on_radio0" id="flight_detail_on_radio0" checked="" />
                                  </div>
                                </div>
                                <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                  <div className="d-flex justify-content-between">
                                    <div className="">
                                      <span className="mainprice"> ₹ 14672 </span>
                                      <span className="netpriceshow d-none" >₹ 11547</span>
                                    </div>
                                    <div className="">
                                      <span className="sharechek">
                                        <input type="checkbox" name="checkbox" className="sck" value="357" />Share</span>
                                    </div>
                                  </div>
                                  <div className="">
                                    <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" >PUBLISHED FARE</span>
                                    <span className="label--text w-100"> Economy,  &nbsp;<span className="rdable">Partial Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" ></i></span>
                                      <div className="ymessage ymsgclassName5310">PUBLISHED FARE</div>
                                    </span>
                                    </span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='search-footer'>
          <div className='row bg-dark text-white p-3'>
            <div className='col-5'>
              <div className='row'>
                <div className='col-3'>
                  <div className="d-flex">
                    <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                    <div className="">
                      <div className="flightname" id="">SpiceJet</div>
                      <div className="flightnumber" id="">SG-8536</div>
                    </div>
                  </div>
                </div>
                <div className="col-5 d-flex">
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="coltime text-white"> 06:15</div>
                    <div className="graysmalltext"> DEL</div>
                  </div>
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="nostops small">3h - 05m</div>
                    <div className="graysmalltext text-danger">Non Stop</div>
                  </div>
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="coltime text-white"> 09:20</div>
                    <div className="graysmalltext"> BLR</div>
                  </div>
                </div>
                <div className='col-1' style={{ width: '20%' }}>
                  <h6 className="mainprice"> ₹ 14672</h6>
                </div>
                <div className='col-1'>
                  <div class="vl vl-line"></div>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <div className='row'>
                <div className='col-3'>
                  <div className="d-flex">
                    <img className="flight-flag" src="https://apitest.tripjack.com/img/airlineLogo/v1/SG.png" alt="" />
                    <div className="">
                      <div className="flightname" id="">SpiceJet</div>
                      <div className="flightnumber" id="">SG-8536</div>
                    </div>
                  </div>
                </div>
                <div className="col-5 d-flex">
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="coltime text-white"> 06:15</div>
                    <div className="graysmalltext"> DEL</div>
                  </div>
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="nostops small">3h - 05m</div>
                    <div className="graysmalltext text-danger">Non Stop</div>
                  </div>
                  <div className="text-center" style={{ width: '30%' }}>
                    <div className="coltime text-white"> 09:20</div>
                    <div className="graysmalltext"> BLR</div>
                  </div>
                </div>
                <div className='col-1' style={{ width: '20%' }}>
                  <h6 className="mainprice"> ₹ 14672</h6>
                </div>
                <div className='col-1'>
                  <div class="vl vl-line"></div>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <button className='btn booking-btn'>Book</button>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}
