import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service';
import toast from 'react-hot-toast';
import FlightDetailModel from '../../Component/FlightDetailModel';

function ReturnFlightDetails({listOfFlight,onwordLayover,returnLayover,routeInfo,currency}) {
 
 let onwardFlightList = listOfFlight?.Onword?.FlightList;
 let returnFlightList = listOfFlight?.Return?.FlightList;
 let onWardFareDetail = listOfFlight?.Onword?.fareDetail?.fareDetails[0];
 let  returnFareDetail = listOfFlight?.Return?.fareDetail?.fareDetails[0];

    onwardFlightList?.map((flightValue, flightKey, index) => {
        // console.log(flightKey,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    });

    const [onwardShow, setOnWardShow] = useState(false);
    const [returnShow, setReturnShow] = useState(false);

    const handleOnWardClose = () => setOnWardShow(false);
    const handleReturnClose = () => setOnWardShow(false);
    const handleOnwardShow = () => {
        setOnWardShow(true);
        //setTripDetails(listOfFlight);
    }
    const handleReturnShow = () => {
        setReturnShow(true);
        //setTripDetails(listOfFlight);
    }
 
  return (
    <div>
       <div className='flight-item-list card'>
                <div className="card-header">
                    <div className='row'>
                        <div className='col-6'>
                            <p className='flightname mb-0'>{routeInfo[0]?.fromCityOrAirport?.city} <i className="fa-solid fa-arrow-right-long"></i>  {routeInfo[0]?.toCityOrAirport?.city}  <span className='flightnumber'>On {Moment(routeInfo[0]?.travelDate).format('ddd, MMM DD YYYY')}</span></p>
                        </div>
                        {
                            onwordLayover && onwordLayover.length !==0 &&
                            <div className='col-6'>
                                <p className='float-end fs-12 fw-bold'><i class="fa-solid fa-clock me-2"></i>  {onwordLayover[0].totalTravellTime}</p>
                            </div>
                        }
                        
                    </div>

                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-12'>
                            {
                                onwardFlightList.map((flightValue, flightKey) =>

                                (

                                    <div className='row'>
                                        <div className='col-sm-2'>
                                            <div className='d-flex'>
                                                <img className='flight-flag' src={flightValue?.flightLogo} alt='' />
                                                <div className=''>
                                                    <div className="flightname" id="">{flightValue?.flightDescription?.name}</div>
                                                    <div className="flightnumber" id="">{`${flightValue?.flightCode}-${flightValue?.flightNumber}`}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-10 d-flex'>
                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="coltime"> {flightValue?.departureTime}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.terminal}</div>
                                            </div>

                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="nostops small">{flightValue?.flightDuration}</div>
                                                <div className="graysmalltext text-danger"> {flightValue?.flightStops ? flightValue?.flightStops : 'Non Stop'}</div>
                                            </div>

                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="coltime"> {flightValue?.arrivalTime}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.terminal}</div>
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:{onWardFareDetail?.baggageInformation?.checkInBaggage}, Cabin Baggage:{onWardFareDetail?.baggageInformation?.cabinBaggage} Included</p>
                                        </div>

                                        {onwardFlightList.length > 1 && (flightKey < onwardFlightList.length - 1) &&
                                            <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                                                {parseInt(onwordLayover[flightKey].layover) < 2 ? <p className='text-center mb-0'> Layover {onwordLayover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane  {onwordLayover[flightKey].layover}</p>}
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    {/* <button type="button" className="btn btn-outline-secondary btn-md">Show Fare Rules</button> */}
                                    <p>
                                        <a
                                            class="btn btn-outline-secondary btn-md"
                                            data-toggle="collapse"
                                            href="#collapseExample"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                            onClick={() => handleOnwardShow(1)}
                                        >
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
            <div className='flight-item-list card'>
                <div className="card-header">
                    <div className='row'>
                        <div className='col-6'>
                            <p className='flightname mb-0'>{routeInfo[1]?.fromCityOrAirport?.city} <i className="fa-solid fa-arrow-right-long"></i>  {routeInfo[1]?.toCityOrAirport?.city}  <span className='flightnumber'>On {Moment(returnFlightList[0]?.travelDate).format('ddd, MMM DD YYYY')}</span></p>
                        </div>
                        {
                            returnLayover && returnLayover.length !==0 &&
                            <div className='col-6'>
                                <p className='float-end fs-12 fw-bold'><i className="fa-solid fa-clock me-2"></i>  {returnLayover[0].totalTravellTime}</p>
                            </div>
                        }
                        
                    </div>

                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-12'>
                            {
                                returnFlightList.map((flightValue, flightKey) =>

                                (

                                    <div className='row'>
                                        <div className='col-sm-2'>
                                            <div className='d-flex'>
                                                <img className='flight-flag' src={flightValue?.flightLogo} alt='' />
                                                <div className=''>
                                                    <div className="flightname" id="">{flightValue?.flightDescription?.name}</div>
                                                    <div className="flightnumber" id="">{`${flightValue?.flightCode}-${flightValue?.flightNumber}`}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-10 d-flex'>
                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="coltime"> {flightValue?.departureTime}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.terminal}</div>
                                            </div>

                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="nostops small">{flightValue?.flightDuration}</div>
                                                <div className="graysmalltext text-danger"> {flightValue?.flightStops ? flightValue?.flightStops : 'Non Stop'}</div>
                                            </div>

                                            <div className="text-center" style={{ width: "50%" }}>
                                                <div className="coltime"> {flightValue?.arrivalTime}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.terminal}</div>
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:{returnFareDetail?.baggageInformation?.checkInBaggage}, Cabin Baggage:{returnFareDetail?.baggageInformation?.cabinBaggage} Included</p>
                                        </div>

                                        {returnFlightList.length > 1 && (flightKey < returnFlightList.length - 1) &&
                                            <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                                                {parseInt(returnLayover[flightKey].layover) < 2 ? <p className='text-center mb-0'> Layover {returnLayover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane  {returnLayover[flightKey].layover}</p>}
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    {/* <button type="button" className="btn btn-outline-secondary btn-md">Show Fare Rules</button> */}
                                    <p>
                                        <a
                                            class="btn btn-outline-secondary btn-md"
                                            data-toggle="collapse"
                                            href="#collapseExample"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                            onClick={() => handleOnwardShow(1)}
                                        >
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
            {
                onwardShow && <FlightDetailModel
                    show={onwardShow}
                    handleClose={handleOnWardClose}
                    flightDetail={onwardFlightList[0]}
                    fareDetail={onWardFareDetail}
                    currency={currency}
                />
            }
            {
                returnShow && <FlightDetailModel
                    show={returnShow}
                    handleClose={handleReturnClose}
                    flightDetail={returnFlightList[0]}
                    fareDetail={returnFareDetail}
                    currency={currency}
                />
            }

    </div>
  )
}

export default ReturnFlightDetails
