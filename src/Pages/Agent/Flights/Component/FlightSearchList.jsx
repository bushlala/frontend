import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Indigo from '../../../../assets/images/indigo.png';
import './FlightSearchList.css';
import ShareFlightPop from './ShareFlightPop';
import Button from 'react-bootstrap/Button';
import FlightDetailModel from './FlightDetailModel';
import Moment from 'moment';

export default function FlightSearchList({ dateForHorizontal, tripList, reInitialValues, handleChangeDate, currency }) {
    const [shareTrips, setShareTrips] = React.useState([]);
    const [tripDetail, setTripDetails] = React.useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [isActive, setIsActive] = useState(false);
// console.log(tripList.map(item =>item.SearchData.duration))

const[ruleId,setRuleId]= useState("");

    const handleShow = (data) => {
        let dataId =data.map(item=>item.fareRuleId);
        setRuleId(dataId)
   setShow(true);
    }
   
    const handleChnageShareTrip = (checkedStatus, tripDetail) => {
        if (checkedStatus) {
            setShareTrips([
                ...shareTrips,
                {
                    flightId: tripDetail?.flightDatails.flightId,
                    flightCode: tripDetail?.flightDatails?.flightDescription?.code,
                    flightNumber: tripDetail?.flightDatails?.flightNumber,
                    flightName: tripDetail?.flightDatails?.flightDescription?.name,
                    flightArrivalDate: tripDetail?.flightDatails?.arrivalDate,
                    flightArrivalTime: tripDetail?.flightDatails?.arrivalTime,
                    flightDepartureDate: tripDetail?.flightDatails?.departureDate,
                    flightDepartureTime: tripDetail?.flightDatails?.departureTime,
                },
            ]);
        } else {
            // remove from list
            setShareTrips(
                shareTrips.filter((shareTrip) => shareTrip.flightId !== tripDetail.flightDatails.flightId),
            );
        }
    }

    const onClickFlightDetailOnRadio = (tripKey, tripFareKey) => {
        tripList[tripKey].radioCheckKey = tripFareKey;
    }

    const toggleStyle = () => {
        setIsActive(!isActive);
    };

    const dynamicStyles = {
        height: isActive ? '93px' : 'auto',
        overflow: isActive ? 'hidden' : 'hidden',
        transition: isActive ? 'height 4s' : 'height 4s',
    };

    return (
        <>
            <div className="col-sm-12 container-fluid">
                <div className='row'>
                    {/* <div className='col-3'>
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
                                        <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                                        <input type="checkbox" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                                        <label className="btn btn-outline-light" htmlFor="btnradio1">0 <br /> Non Stop</label>

                                        <input type="checkbox" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                                        <label className="btn btn-outline-light" htmlFor="btnradio2">1 <br /> Non Stop</label>

                                        <input type="checkbox" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                                        <label className="btn btn-outline-light" htmlFor="btnradio3">2+ <br /> Non Stop</label>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>  */}
                    <div className='col-9 m-auto'>
                        <div className='flight-search-calouter mb-4 mt-2'>
                            <div className='btn-group'>

                                {reInitialValues.dateArr && reInitialValues.dateArr.length != 0 && reInitialValues.dateArr.map((value, key) => (
                                    <div className=''>
                                        <input type="radio" class="btn-check" onChange={() => handleChangeDate(value)} autocomplete="off" name="travellersClass.adults" id={`datesbox${key}`} value="1"
                                            checked={dateForHorizontal == value ? 'checked' : ''}
                                        />
                                        <label class="btn search-check-box" for={`datesbox${key}`}>{value}</label>
                                    </div>
                                ))
                                }
                            </div>
                        </div>


                        <div className='flight-item-list'>
                            {
                                tripList && tripList.length != 0 && tripList.map((value, key) => (
                                    <div className='card list-item'>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-sm-4'>
                                                            <div className='d-flex'>
                                                                <img className='flight-flag' src={value?.SearchData?.fromflightUrl} alt='' />
                                                                <div className=''>
                                                                    <div
                                                                        className="flightname"
                                                                        id=""
                                                                    >{value?.SearchData?.fromFightDetail?.name}</div>
                                                                    <div
                                                                        className="flightnumber"
                                                                        id=""
                                                                    >{`${value?.SearchData?.fromFightDetail?.code}-${value?.SearchData?.formFlightNumber}`}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-8 d-flex'>
                                                            <div className="text-center" style={{ width: "30%" }}>
                                                                <div className="coltime"> {value?.SearchData?.departureTime}</div>
                                                                <div className="graysmalltext">{value?.SearchData?.fromCityDestination}</div>
                                                            </div>
                                                            <div className="text-center" style={{ width: "30%" }}>
                                                            {value?.SearchData?.duration && value.SearchData.duration.map((item, index)=>(
                                                                <div className="nostops small">{item.totalTravellTime}</div>
                                                            ))}
                                                               
                                                                <div className="graysmalltext text-danger">
                                                                    {value?.SearchData?.stop ? <span className='me-2'>{value?.SearchData?.stop} Stop</span> : "Non Stop"}
                                                                </div>
                                                            </div>
                                                            <div className="text-center" style={{ width: "30%" }}>
                                                                <div className="coltime"> {value?.SearchData?.todpartureTime}</div>
                                                                <div className="graysmalltext"> {value?.SearchData?.toCityDestination}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-6'>
                                                            <Button variant='outline-secondary' onClick={() => handleShow(value.fareDetail.fareDetails)} className="btn-sm">View Details</Button>
                                                        </div>
                                                        <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{value?.fareDetail?.seatRemains ? value?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                                    </div>
                                                </div>
                                                <div className='col-6 pricelisttable d-flex flex-column'>
                                                    <div className='' >
                                                        <div className='' style={dynamicStyles}>
                                                            {
                                                                value.fareDetail.fareDetails && value.fareDetail.fareDetails.length !== 0 && value.fareDetail.fareDetails.map((fdValue, fdKey) => (
                                                                    <div key={fdKey} className='d-flex py-1 border-bottom'>
                                                                        <div className='me-4' style={{ width: "2%" }}>
                                                                            <div className="form-check">
                                                                                <input className="form-check-input"
                                                                                    type="radio"
                                                                                    name={`flight_detail_on_radio${key}`}
                                                                                    id={`flight_detail_on_radio${key}`}
                                                                                    checked
                                                                                    //checked={fdKey===0 && 'checked'}
                                                                                    onClick={() => onClickFlightDetailOnRadio(key, fdKey)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="pricelistright position-relative text-left d-inline-block" style={{ width: "64%" }}>
                                                                            <div className='d-flex justify-content-between'>
                                                                                <div className=''>
                                                                                    <span className="mainprice"> {currency} {fdValue?.payAmount} </span>
                                                                                    <span className="netpriceshow d-none" style={{ color: "#009933" }}>
                                                                                        {currency} 11547
                                                                                    </span>
                                                                                </div>

                                                                                <div className=''>
                                                                                    <span className="sharechek">
                                                                                        <input type="checkbox" name="checkbox" value={value?.flightDatails?.flightId} className="sck" onChange={(e) => handleChnageShareTrip(e.target.checked, value)} />
                                                                                        Share
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className=''>
                                                                                <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{ backgroundColor: "#0099e0", color: "#FFFFFF" }}>
                                                                                    {`${fdValue?.fareIdentifier} FARE`}
                                                                                </span>
                                                                                <span className="label--text w-100"> {fdValue.cabinClass},  &nbsp;
                                                                                    <span className="rdable">{fdValue.RefundType === 0 ? 'Non Refundable' : fdValue.RefundType === 1 ? 'Refundable' : 'Partial Refundable'}<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{ fontSize: "18px,", cursor: "pointer" }}></i></span>
                                                                                        <div className="ymessage ymsgclass5310" >
                                                                                            {`${fdValue?.fareIdentifier} FARE`}
                                                                                        </div>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div className='ms-4' style={{ width: "34%" }}>
                                                                            <Link to={`/agent/flight-review-book/${fdValue.fareRuleId}`} className='btn btn-danger w-100'>Booking</Link>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        {
                                                            value.fareDetail.fareDetails && value.fareDetail.fareDetails.length > 1 &&
                                                            <div className='morefrebtnouter'>
                                                                <Link className='morefrebt' onClick={toggleStyle} >+ More Fare</Link>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {
                    shareTrips && shareTrips.length != 0 && <ShareFlightPop shareFlights={shareTrips} />
                }

            </div>
            {
                show && <FlightDetailModel
                    show={show}
                    handleClose={handleClose}
                    currency={currency}
                    ruleId={ruleId}
                    // flightDetail={tripDetail.flightDetails}
                    // layover={tripDetail.SearchData.duration}
                    // fareDetail={tripDetail.fareDetail.fareDetails[tripDetail.radioCheckKey ? tripDetail.radioCheckKey : 0]}
                />
            }
        </>
    )
}