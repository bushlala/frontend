import React, { useState } from 'react';

//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import Header from '../../../../Component/Layout/Agent/Header/SearchHeader'
import './FlightRoundSearchList.css';
import ShareFlightPop from './ShareFlightPop';
import FlightDetailModel from './FlightDetailModel';
export default function FlightRoundSearchList({ dateForHorizontal, onwardTripList, returnTripList, reInitialValues, handleChangeDate,currency }) {
  console.log(dateForHorizontal, returnTripList, reInitialValues, handleChangeDate);
  const [selectedValue, setSelectedValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const [shareTrips, setShareTrips] = React.useState([]);
  const [tripDetail, setTripDetails] = React.useState({});
  const [show, setShow] = useState(false);
  const[onWardTrip,setOnWardTrip]= useState();
  const[onWardPayAmount,setOnWardPayAmount]= useState(100);
  const[returnTrip,setReturnTrip]= useState();
  const[returnPayAmount,setReturnPayAmount]= useState(100);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleClose = () => setShow(false);

  const handleShow = (tripDetail) => {
    setShow(true);
    setTripDetails(tripDetail);
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
  const onClickFlightONWardOnRadio = (tripKey, tripFareKey,fdValue) => {
    setOnWardPayAmount(fdValue.payAmount);  
    onwardTripList[tripKey].radioCheckKey = tripFareKey;
    setOnWardTrip(onwardTripList[tripKey].flightDatails);
  
  }
  // console.log(onWardTrip.departureTime)
  const onClickFlightReturnOnRadio = (tripKey, tripFareKey,fdValue) => {
    console.log("tripKey, tripFareKey",tripKey, tripFareKey)
    setSelectedOption(tripFareKey);
    setReturnPayAmount(fdValue.payAmount);  
    returnTripList[tripKey].radioCheckKey = tripFareKey;
    setReturnTrip(returnTripList[tripKey].flightDatails);
   }

  const dynamicStyles = {
    // Define your styles here
    height: isActive ? '93px' : 'auto',
    overflow: isActive ? 'hidden' : 'hidden',
    transition: isActive ? 'height 4s' : 'height 4s',
    // Add other styles as needed
  };
  return (
    <>
      <Header />
      <div className="main-content px-0 main-top-padding mt-5" >
        <div className="container-fluid">
          <div className='row main-row'>
           <div className="col-lg-12 col-md-12 m-auto"> 
           <div className='flight-search-calouter mb-4 mt-2'>
               <div className='btn-group'>
                   
               {  reInitialValues.dateArr && reInitialValues.dateArr.length!=0  && reInitialValues.dateArr.map((value, key) => (
                       <div className=''>
                           <input type="radio" class="btn-check" onChange={()=>handleChangeDate(value)} autocomplete="off" name="travellersClass.adults" id={`datesbox${key}`} value="1" 
                           checked={dateForHorizontal==value ? 'checked':''}
                            />
                           <label class="btn search-check-box"  for={`datesbox${key}`}>{value}</label>
                       </div>
                   ))
               }
               </div>
           </div>
              <div className='flight-item-list'>
                <div className='row'>
                  <div className='col-6 flight-scroll'>
                    {
                      onwardTripList && onwardTripList.length != 0 && onwardTripList.map((value, key) => (
                        <div className='card list-item'>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="d-flex">
                                      <img className="flight-flag" src={value?.flightDatails?.flightLogo} alt="" />
                                      <div className="">
                                        <div className="flightname" id="">{value?.flightDatails?.flightDescription?.name}</div>
                                        <div className="flightnumber" id="">
                                          {`${value?.flightDatails?.flightDescription?.code}-${value?.flightDatails?.flightNumber}`}</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8 d-flex">
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime"> {value.flightDatails.departureTime}</div>
                                      <div className="graysmalltext"> {value?.flightDatails?.departureAirportInformation?.code}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="nostops small">{value?.flightDatails?.flightDuration}</div>
                                      <div className="graysmalltext text-danger">{value?.flightDatails?.flightStops ? value?.flightDatails?.flightStops : "Non Stop"}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime">{value?.flightDatails?.arrivalTime}</div>
                                      <div className="graysmalltext">  {value?.flightDatails?.arrivalAirportInformation?.code}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-6">
                                    <button type="button" className="btn-sm btn btn-outline-secondary" onClick={() => handleShow(value)}>View Details</button>
                                  </div>
                                  <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{value?.fareDetail?.seatRemains ? value?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                </div>
                              </div>

                              <div className="col-6 pricelisttable d-flex flex-column">
                                <div className="">
                                  <div className="">
                                  {
                                    value.fareDetail.fareDetails && value.fareDetail.fareDetails.length!==0 && value.fareDetail.fareDetails.map((fdValue, fdKey) => (
                                    <div className="d-flex py-1 border-bottom"  key={fdKey}>
                                      <div className="me-4" style={{ width: '2%' }}>
                                        <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio"
                                        name={`flight_detail_on_radio${key}`}
                                        id={`flight_detail_on_radio${key}`}
                                        checked
                                        //checked={fdKey===0 && 'checked'}
                                        onClick={() =>onClickFlightONWardOnRadio(key,fdKey,fdValue)}
                                    />
                                        </div>
                                      </div>
                                      <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                        <div className="d-flex justify-content-between">
                                          <div className="">
                                          <span className="mainprice"> {currency} {fdValue?.payAmount} </span> 
                                            <span className="netpriceshow d-none" >₹ 11547</span>
                                          </div>
                                          <div className="">
                                            <span className="sharechek">
                                              <input type="checkbox" name="checkbox" value={fdValue?.flightId} className="sck" onChange={(e) => handleChnageShareTrip(e.target.checked, value)} />Share</span>
                                          </div>
                                        </div>
                                        <div className="">
                                          <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" > {`${fdValue?.fareIdentifier} FARE`}   FARE</span>
                                          <span className="label--text w-100"> {fdValue.cabinClass},  &nbsp;<span className="rdable">{fdValue.RefundType === 0 ? 'Non Refundable' : fdValue.RefundType === 1 ? 'Refundable' : 'Partial Refundable'}<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{ fontSize: "18px,", cursor: "pointer" }}></i></span>
                                            <div className="ymessage ymsgclassName5310"> {`${fdValue?.fareIdentifier} FARE`}   </div>
                                          </span>
                                          </span>
                                        </div>
                                      </div>


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
                      returnTripList && returnTripList.length != 0 && returnTripList.map((returnItem, key) => (
                        <div className='card list-item'>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-6">
                                <div className="row">
                                  <div className="col-sm-4">
                                    <div className="d-flex">
                                      <img className="flight-flag" src={returnItem?.flightDatails?.flightLogo} alt="" />
                                      <div className="">
                                        <div className="flightname" id="">{returnItem?.flightDatails?.flightDescription?.name}</div>
                                        <div className="flightnumber" id="">
                                          {`${returnItem?.flightDatails?.flightDescription?.code}-${returnItem?.flightDatails?.flightNumber}`}</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8 d-flex">
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime"> {returnItem.flightDatails.departureTime}</div>
                                      <div className="graysmalltext"> {returnItem?.flightDatails?.departureAirportInformation?.code}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="nostops small">{returnItem?.flightDatails?.flightDuration}</div>
                                      <div className="graysmalltext text-danger">{returnItem?.flightDatails?.flightStops ? returnItem?.flightDatails?.flightStops : "Non Stop"}</div>
                                    </div>
                                    <div className="text-center" style={{ width: '30%' }}>
                                      <div className="coltime">{returnItem?.flightDatails?.arrivalTime}</div>
                                      <div className="graysmalltext">  {returnItem?.flightDatails?.arrivalAirportInformation?.code}</div>
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
                                    returnItem.fareDetail.fareDetails && returnItem.fareDetail.fareDetails.length!==0 && returnItem.fareDetail.fareDetails.map((returnValue, fdKey) => (
                                    <div className="d-flex py-1 border-bottom"  key={fdKey}>
                                      <div className="me-4" style={{ width: '2%' }}>
                                        <div className="form-check">
                                        <input className="form-check-input" 
                                        type="radio"
                                        name={`flight_detail_return_radio${key}`}
                                        id={`flight_detail_return_radio${key}`}
                                        checked
                                        // checked={fdKey===0 && 'checked'}
                                        onClick={() =>onClickFlightReturnOnRadio(key,fdKey,returnValue)}
                                    />
                                        </div>
                                      </div>
                                      <div className="pricelistright position-relative text-left d-inline-block" style={{ width: '64%' }}>
                                        <div className="d-flex justify-content-between">
                                          <div className="">
                                          <span className="mainprice">{currency} <span style={{marginLeft:"20px"}}>{returnValue?.payAmount}</span> </span> 
                                            <span className="netpriceshow d-none" >₹ 11547</span>
                                          </div>
                                          <div className="">
                                            <span className="sharechek">
                                              <input type="checkbox" name="checkbox" value={returnValue?.flightId} className="sck" onChange={(e) => handleChnageShareTrip(e.target.checked, returnItem)} />Share</span>
                                          </div>
                                        </div>
                                        <div className="">
                                          <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" > {`${returnValue?.fareIdentifier} FARE`}   FARE</span>
                                          <span className="label--text w-100"> {returnValue.cabinClass},  &nbsp;<span className="rdable">{returnValue.RefundType === 0 ? 'Non Refundable' : returnValue.RefundType === 1 ? 'Refundable' : 'Partial Refundable'}<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{ fontSize: "18px,", cursor: "pointer" }}></i></span>
                                            <div className="ymessage ymsgclassName5310"> {`${returnValue?.fareIdentifier} FARE`}   </div>
                                          </span>
                                          </span>
                                        </div>
                                      </div>


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

 {returnTrip &&
  <section className='search-footer'>
  <div className='row bg-dark text-white p-3'>
    <div className='col-5'>
      <div className='row'>
        <div className='col-3'>
          <div className="d-flex">
            <img className="flight-flag" src={onWardTrip && onWardTrip.flightLogo} alt="" />
            <div className="">
              <div className="flightname" id="">{onWardTrip&& onWardTrip.flightDescription?.name}</div>
              <div className="flightnumber" id="">{onWardTrip&& onWardTrip.flightDescription?.code}</div>
            </div>
          </div>
        </div>
        <div className="col-5 d-flex">
          <div className="text-center" style={{ width: '30%' }}>
            <div className="coltime text-white">{onWardTrip && onWardTrip.departureTime}</div>
            <div className="graysmalltext"> {onWardTrip &&  onWardTrip.departureAirportInformation.code}</div>
          </div>
          <div className="text-center" style={{ width: '30%' }}>
            <div className="nostops small">{onWardTrip && onWardTrip.flightDuration}</div>
            <div className="graysmalltext text-danger">{onWardTrip && onWardTrip.flightStops ? onWardTrip.flightStops: "Non Stop"}</div>
          </div>
          <div className="text-center" style={{ width: '30%' }}>
            <div className="coltime text-white">{onWardTrip && onWardTrip.arrivalTime}</div>
            <div className="graysmalltext"> {onWardTrip&& onWardTrip.arrivalAirportInformation.code}</div>
          </div>
        </div>
        <div className='col-1' style={{ width: '20%' }}>
          <h6 className="mainprice"> {currency}<span style={{marginLeft:"10px"}}>{onWardPayAmount}</span></h6>
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
            <img className="flight-flag" src={returnTrip?.flightLogo} alt="" />
            <div className="">
              <div className="flightname" id="">{returnTrip?.flightDescription?.name}</div>
              <div className="flightnumber" id="">{returnTrip?.flightDescription?.code}</div>
            </div>
          </div>
        </div>
        <div className="col-5 d-flex">
          <div className="text-center" style={{ width: '30%' }}>
            <div className="coltime text-white">{returnTrip&& returnTrip.departureTime}</div>
            <div className="graysmalltext"> {returnTrip?.departureAirportInformation?.code}</div>
          </div>
          <div className="text-center" style={{ width: '30%' }}>
            <div className="nostops small">{returnTrip?.flightDuration}</div>
            <div className="graysmalltext text-danger">{returnTrip?.flightStops ? returnTrip?.flightStops: "Non Stop"}</div>
          </div>
          <div className="text-center" style={{ width: '30%' }}>
            <div className="coltime text-white"> {returnTrip?.arrivalTime}</div>
            <div className="graysmalltext">  {returnTrip?.arrivalAirportInformation.code}</div>
          </div>
        </div>
        <div className='col-1' style={{ width: '20%' }}>
          <h6 className="mainprice"> {currency}<span style={{marginLeft:"10px"}}>{returnPayAmount}</span></h6>
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
</section>}
       
      </div>

    </>
  )
}