import React, { useState } from 'react';

//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import './FlightRoundSearchList.css';
import ShareFlightPop from './ShareFlightPop';
import FlightRoundDetailModel from './FlightRoundDetailModel';
import { Link } from 'react-router-dom';
export default function FlightRoundSearchList({ onwardTripList, returnTripList, currency }) {
  const [isActive, setIsActive] = useState(false);

  const [shareTrips, setShareTrips] = React.useState([]);
  const [tripDetail, setTripDetails] = React.useState({});
  const [onWardTripshow, setOnWardTripshow] = useState(false);
  const [returnTripshow, setReturnTripshow] = useState(false);
  const [onWardTrip, setOnWardTrip] = useState();
  const [onWardPayAmount, setOnWardPayAmount] = useState(100);
  const [returnTrip, setReturnTrip] = useState();
  const [returnPayAmount, setReturnPayAmount] = useState(100);
  const [selectedReturnDetails, setSelectedReturnDetails] = useState({});
  const [selectedOnwardDetails, setSelectedOnwardDetails] = useState({});
  const [onwardFareRuleId, setOnwardFareRuleId] = useState(0);
  const [returnFareRuleId, setReturnFareRuleId] = useState(0);
  const [totalpayment, setTotalpayment] = useState(0);
  // Concatenate the IDs with a custom delimiter
  const combinedIds = `${onwardFareRuleId},${returnFareRuleId}`;

  const onClickFlightReturnOnRadio = (returnIndex, fdKey, returnValue) => {
  
    // Deselect previously selected radio buttons in the same returnItem
 
    const updatedselectedReturnDetails = { ...selectedReturnDetails };
    Object.keys(updatedselectedReturnDetails).forEach(key => {
      if (key === returnIndex.toString()) return;
      delete updatedselectedReturnDetails[key];
    });
  
    // Select the clicked radio button
    setSelectedReturnDetails({
      ...updatedselectedReturnDetails,
      [returnIndex]: returnValue
    });
    
    setReturnFareRuleId(returnValue.fareRuleId);
    setReturnPayAmount(returnValue.payAmount)
    setReturnTrip(returnTripList[returnIndex].flightDatails);
    setTotalpayment(returnValue.payAmount + onWardPayAmount)
   
    
  };
  console.log("selectedReturnDetails",selectedReturnDetails);
  console.log(returnTrip)
  const onClickFlightOnwardOnRadio = (onwardIndex, fdKey, returnValue) => {
    const updatedselectedReturnDetails = { ...selectedReturnDetails };
    Object.keys(updatedselectedReturnDetails).forEach(key => {
      if (key === onwardIndex.toString()) return;
      delete updatedselectedReturnDetails[key];
    });

    // Select the clicked radio button
    setSelectedOnwardDetails({
      ...updatedselectedReturnDetails,
      [onwardIndex]: returnValue
    });
    setOnwardFareRuleId(returnValue.fareRuleId);
    setOnWardPayAmount(returnValue.payAmount);
    setOnWardTrip(onwardTripList[onwardIndex].flightDatails);
    // console.log()
    setTotalpayment(returnValue.payAmount + returnPayAmount)
  };

  // const onClickFlightONWardOnRadio = (tripKey, tripFareKey,fdValue) => {
  //   setOnWardPayAmount(fdValue.payAmount);  
  //   onwardTripList[tripKey].radioCheckKey = tripFareKey;
  //   setOnWardTrip(onwardTripList[tripKey].flightDatails);

  // }


  const handleClose = () => setOnWardTripshow(false);

  const handleShow = (tripDetail) => {
    console.log(tripDetail);
    setOnWardTripshow(true);
    setTripDetails(tripDetail);
  }
  const handleReturnShow = (tripDetail) => {
    setReturnTripshow(true)
    setTripDetails(tripDetail);
  }
  const handleReturnClose = () => {
    setReturnTripshow(false);
  }
  const handleChnageShareTrip = (checkedStatus, tripDetail) => {
    if (checkedStatus) {
      setShareTrips([
        ...shareTrips,
        {
          flightId: tripDetail?.fareDetail.flightId,
          flightCode: tripDetail?.fareDetail?.flightDescription?.code,
          flightNumber: tripDetail?.fareDetail?.flightNumber,
          flightName: tripDetail?.fareDetail?.flightDescription?.name,
          flightArrivalDate: tripDetail?.fareDetail?.arrivalDate,
          flightArrivalTime: tripDetail?.fareDetail?.arrivalTime,
          flightDepartureDate: tripDetail?.fareDetail?.departureDate,
          flightDepartureTime: tripDetail?.fareDetail?.departureTime,
        },
      ]);
    } else {
      // remove from list
      setShareTrips(
        shareTrips.filter((shareTrip) => shareTrip.flightId !== tripDetail.fareDetail.flightId),
      );
    }
  }
  const toggleStyle = () => {
    // Toggle between two sets of styles based on the current state
    setIsActive(!isActive);
  };
  const dynamicStyles = {
    // Define your styles here
    height: isActive ? '93px' : 'auto',
    overflow: isActive ? 'hidden' : 'hidden',
    transition: isActive ? 'height 4s' : 'height 4s',
    // Add other styles as needed
  };
  return (
    <>
      <div className="main-content px-0 main-top-padding" >
        <div className="container-fluid">
          <div className='row main-row'>
            <div className="col-lg-12 col-md-12 m-auto">
              <div className='flight-item-list'>
                <div className='row'>
                  <div className='col-6 flight-scroll'>
                    {
                      onwardTripList && onwardTripList.length != 0 && onwardTripList.map((onwardTrip, onwardIndex) => (
                        <div className='card list-item' key={onwardIndex}>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="d-flex">
                                      <img className="flight-flag" src={onwardTrip?.SearchData?.fromflightUrl} alt="" />
                                      <div className="">
                                        <div className="flightname" id="">{onwardTrip?.SearchData?.fromFightDetail?.name}</div>
                                        <div className="flightnumber" id="">
                                          {`${onwardTrip?.SearchData?.fromFightDetail?.code}-${onwardTrip?.SearchData?.formFlightNumber}`}</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8 d-flex">
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime"> {onwardTrip?.SearchData?.departureTime}</div>
                                      <div className="graysmalltext"> {onwardTrip?.SearchData?.fromCityDestination}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      {onwardTrip?.SearchData?.duration && onwardTrip.SearchData.duration.map((item, index) => (
                                        <div className="nostops small">{item.totalTravellTime}</div>
                                      ))}
                                      <div className="graysmalltext text-danger">
                                        {onwardTrip?.SearchData?.stop ? <span className='me-2'>{onwardTrip?.SearchData?.stop} Stop</span> : "Non Stop"} </div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime">{onwardTrip?.SearchData?.departureTime}</div>
                                      <div className="graysmalltext">  {onwardTrip?.SearchData?.toCityDestination}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-6">
                                    <button type="button" className="btn-sm btn btn-outline-secondary" onClick={() => handleReturnShow(onwardTrip)}>View Details</button>
                                  </div>
                                  <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{onwardTrip?.fareDetail?.seatRemains ? onwardTrip?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                </div>
                              </div>

                              <div className="col-6 pricelisttable d-flex flex-column">
                                <div className="">
                                  <div className="">
                                    {
                                      onwardTrip.fareDetail.fareDetails && onwardTrip.fareDetail.fareDetails.length!==0 && onwardTrip.fareDetail.fareDetails.map((fdValue, fdKey) => (
                                    
                                      
<div className="d-flex py-1" key={fdKey}>{fdValue.fareIdentifier ==="PUBLISHED" &&<> 
<div className="me-4" style={{ width: '2%' }}>
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                style={{height: '22px', width: '20px'}}
                                                name={`flight_detail_onwardIndex_radio${onwardIndex}`}
                                                id={`flight_detail_onwardIndex_radio${onwardIndex}_${fdKey}`}
                                                checked={selectedOnwardDetails[onwardIndex] === fdValue}
                                                onChange={() => onClickFlightOnwardOnRadio(onwardIndex, fdKey, fdValue)}
                                              />
                                            </div>
                                          </div>
                                          <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                            <div className="d-flex justify-content-between">
                                              <div className="">
                                                <span className="mainprice"> {currency} {fdValue?.payAmount} </span>
                                                {/* <span className="netpriceshow d-none" >₹ 11547</span> */}
                                              </div>
                                              <div className="">
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value={fdValue?.flightId} className="sck" onChange={(e) => handleChnageShareTrip(e.target.checked, onwardTrip)} />Share</span>
                                              </div>
                                            </div>
                                            <div className="">
                                              <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle mt-2" > {`${fdValue?.fareIdentifier} FARE`}   FARE</span>
                                              <span className="label--text w-100 mt-2"> {fdValue.CabinClass},  &nbsp;<span className="rdable">{fdValue.RefundType === 0 ? 'Non Refundable' : fdValue.RefundType === 1 ? 'Refundable' : 'Partial Refundable'}<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{ fontSize: "18px,", cursor: "pointer" }}></i></span>
                                                <div className="ymessage ymsgclassName5310 mt-4"> {`${fdValue?.fareIdentifier} FARE`}   </div>
                                              </span>
                                              </span>
                                            </div>
                                          </div>
                                          </>}

</div>
                                          
                                      ))
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className='col-6 flight-scroll'>
                    {
                      returnTripList && returnTripList.length != 0 && returnTripList.map((returnItem, returnIndex) => (
                        <div className='card list-item' key={returnIndex}>
                         <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="d-flex">
                                      <img className="flight-flag" src={returnItem?.SearchData?.fromflightUrl} alt="" />
                                      <div className="">
                                        <div className="flightname" id="">{returnItem?.SearchData?.fromFightDetail?.name}</div>
                                        <div className="flightnumber" id="">
                                          {`${returnItem?.SearchData?.fromFightDetail?.code}-${returnItem?.SearchData?.formFlightNumber}`}</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8 d-flex">
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime"> {returnItem?.SearchData?.departureTime}</div>
                                      <div className="graysmalltext"> {returnItem?.SearchData?.fromCityDestination}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>

                                      {returnItem?.SearchData?.duration && returnItem.SearchData.duration.map((item, index) => (
                                        <div className="nostops small">{item.totalTravellTime}</div>
                                      ))}

                                      <div className="graysmalltext text-danger">{returnTrip?.SearchData?.stop ? returnTrip?.SearchData?.stop : "Non Stop"}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime">{returnItem?.SearchData?.departureTime}</div>
                                      <div className="graysmalltext">  {returnItem?.SearchData?.toCityDestination}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-6">
                                    <button type="button" className="btn-sm btn btn-outline-secondary" onClick={() => handleShow(returnItem)}>View Details</button>
                                  </div>
                                  <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{returnItem?.fareDetail?.seatRemains ? returnItem?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                </div>
                              </div>

                              <div className="col-6 pricelisttable d-flex flex-column">
                                <div className="">
                                  <div className="">
                                    {
                                      returnItem.fareDetail.fareDetails && returnItem.fareDetail.fareDetails.length !== 0 && returnItem.fareDetail.fareDetails.map((returnValue, fdKey) => (
                                        <div className="d-flex py-1" key={fdKey}>
                                        {returnValue.fareIdentifier ==="PUBLISHED" &&<> <div className="me-4" style={{ width: '2%' }}>
                                            <div className="form-check">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name={`flight_detail_return_radio${returnIndex}`}
                                                id={`flight_detail_return_radio${returnIndex}_${fdKey}`}
                                                checked={selectedReturnDetails[returnIndex] === returnValue}
                                                onChange={() => onClickFlightReturnOnRadio(returnIndex, fdKey, returnValue)}
                                              />
                                            </div>
                                          </div>
                                          <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                            <div className="d-flex justify-content-between">
                                              <div className="">
                                                <span className="mainprice">{currency} <span style={{ marginLeft: "20px" }}>{returnValue?.payAmount}</span> </span>
                                                <span className="netpriceshow d-none" >{currency} 11547</span>
                                              </div>
                                              <div className="">
                                                <span className="sharechek">
                                                  <input type="checkbox" name="checkbox" value={returnValue?.flightId} className="sck" onChange={(e) => handleChnageShareTrip(e.target.checked, returnItem)} />Share</span>
                                              </div>
                                            </div>
                                            <div className="">
                                              <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" > {`${returnValue?.fareIdentifier} FARE`}   FARE</span>
                                              <span className="label--text w-100 mt-2"> {returnValue?.CabinClass},  &nbsp;<span className="rdable">{returnValue.RefundType === 0 ? 'Non Refundable' : returnValue.RefundType === 1 ? 'Refundable' : 'Partial Refundable'}<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{ fontSize: "18px,", cursor: "pointer" }}></i></span>
                                                <div className="ymessage ymsgclassName5310 mt-4"> {`${returnValue?.fareIdentifier} FARE`}   </div>
                                              </span>
                                              </span>
                                            </div>
                                          </div> </>}
                                         
                                        </div>
                                      ))
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            {
              shareTrips && shareTrips.length != 0 && <ShareFlightPop shareFlights={shareTrips} />
            }
          </div>
        </div>
        {selectedReturnDetails &&
          <section className='search-footer'>
            <div className='row bg-dark text-white p-3'>
              <div className='col-5'>
                <div className='row'>
                  <div className='col-3'>
                    <div className="d-flex">
                      <img className="flight-flag" src={onWardTrip && onWardTrip?.SearchData?.fromflightUrl} alt="" />
                      <div className="">
                        <div className="flightname" id="">{onWardTrip && onWardTrip?.SearchData?.fromFightDetail?.name}</div>
                        <div className="flightnumber" id="">{onWardTrip && onWardTrip?.SearchData?.fromFightDetail?.code}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex">
                    <div className="text-center" style={{ width: '30%' }}>
                      {/* <div className="coltime text-white">{onWardTrip && onWardTrip.departureTime}</div> */}
                      <div className="graysmalltext"> {onWardTrip && onWardTrip.SearchData?.fromCityDestination}</div>
                    </div>
                    <div className="text-center" style={{ width: '30%' }}>
                      {onWardTrip && onWardTrip.SearchData.duration.map((item, index) => (
                        <div className="nostops small">{item.totalTravellTime}</div>
                      ))}

                      <div className="graysmalltext text-danger">{onWardTrip && onWardTrip.SearchData?.stop ? onWardTrip.SearchData?.stop : "Non Stop"}</div>
                    </div>
                    <div className="text-center" style={{ width: '30%' }}>
                      <div className="coltime text-white">{onWardTrip && onWardTrip?.SearchData?.departureTime}</div>
                      <div className="graysmalltext"> {onWardTrip && onWardTrip?.SearchData?.toCityDestination}</div>
                    </div>
                  </div>
                  <div className='col-1' style={{ width: '20%' }}>
                    <h6 className="mainprice"> {currency}<span style={{ marginLeft: "10px" }}>{onWardPayAmount}</span></h6>
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
                      <img className="flight-flag" src={returnTrip?.SearchData?.fromflightUrl} alt="" />
                      <div className="">
                        <div className="flightname" id="">{returnTrip?.SearchData?.fromFightDetail?.name}</div>
                        <div className="flightnumber" id="">{returnTrip?.SearchData?.fromFightDetail?.code}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 d-flex">
                    <div className="text-center" style={{ width: '30%' }}>
                      <div className="coltime text-white">{returnTrip && returnTrip?.SearchData?.fromFightDetail?.departureTime}</div>
                      <div className="graysmalltext"> {returnTrip?.SearchData?.fromCityDestination}</div>
                    </div>
                    <div className="text-center" style={{ width: '30%' }}>
                      <div className="nostops small">
                        {returnTrip && returnTrip.SearchData.duration.map((item, index) => (
                          <div className="nostops small">{item.totalTravellTime}</div>
                        ))}</div>
                      <div className="graysmalltext text-danger">{returnTrip?.SearchData?.stop ? returnTrip?.SearchData?.stop : "Non Stop"}</div>
                    </div>
                    <div className="text-center" style={{ width: '30%' }}>
                      <div className="coltime text-white"> {returnTrip?.SearchData?.departureTime}</div>
                      <div className="graysmalltext">  {returnTrip?.SearchData?.toCityDestination}</div>
                    </div>
                  </div>
                  <div className='col-1' style={{ width: '20%' }}>
                    <h6 className="mainprice"> {currency}<span style={{ marginLeft: "10px" }}>{returnPayAmount && returnPayAmount}</span></h6>
                  </div>
                  <div className='col-1'>
                    <div class="vl vl-line">
                      <div className='' style={{ marginLeft: "10px" }}>
                        <h6 className="mainprice"> {currency}<span style={{ marginLeft: "10px" }}>{totalpayment && totalpayment}</span></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-2' >
                <Link to={`/agent/flight-review-book/${combinedIds}`}><button className='btn booking-btn' style={{ marginLeft: "50px" }}>Book</button></Link>
              </div>
            </div>
          </section>}

      </div>
      {onWardTripshow && <FlightRoundDetailModel
        show={onWardTripshow}
        currency={currency}
        handleClose={handleClose}
        flightDetail={tripDetail.flightDetails}
        layover ={tripDetail.flightLayover}
        fareDetail={tripDetail.fareDetail.fareDetails[tripDetail.radioCheckKey ? tripDetail.radioCheckKey : 0]}
      />
      }
      {returnTripshow && <FlightRoundDetailModel
        show={returnTripshow}
        currency={currency}
        handleClose={handleReturnClose}
        flightDetail={tripDetail.flightDetails}
        layover ={tripDetail.flightLayover}
        fareDetail={tripDetail.fareDetail.fareDetails[tripDetail.radioCheckKey ? tripDetail.radioCheckKey : 0]}
      />
      }
    </>
  )
}
