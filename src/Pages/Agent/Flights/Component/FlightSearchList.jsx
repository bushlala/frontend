import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Indigo from '../../../../assets/images/indigo.png';
import './FlightSearchList.css';
import ShareFlightPop from './ShareFlightPop';
import Button from 'react-bootstrap/Button';
import FlightDetailModel from './FlightDetailModel';

export default function FlightSearchList({dateForHorizontal,tripList,reInitialValues,handleChangeDate}) {
    //console.log("departureDate",departureDate);
    //departureDate = Moment(departureDate).format('DD-MM-YYYY');
    //console.log("departureDate1",departureDate);
    //console.log("tripList",tripList);
    //console.log("reInitialValues",reInitialValues);
    const [shareTrips, setShareTrips] = React.useState([]);
    const [tripDetail, setTripDetails] = React.useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (tripDetail) => {
        setShow(true);
        setTripDetails(tripDetail);
    }
    
    const handleChnageShareTrip = (checkedStatus,tripDetail) => {
        console.log("checked",checkedStatus);
        if (checkedStatus) {
            setShareTrips([
              ...shareTrips,
              {
                flightId            : tripDetail?.flightDatails.flightId,
                flightCode          : tripDetail?.flightDatails?.flightDescription?.code,
                flightNumber          : tripDetail?.flightDatails?.flightNumber,
                flightName          : tripDetail?.flightDatails?.flightDescription?.name,
                flightArrivalDate   : tripDetail?.flightDatails?.arrivalDate,
                flightArrivalTime   : tripDetail?.flightDatails?.arrivalTime,
                flightDepartureDate   : tripDetail?.flightDatails?.departureDate,
                flightDepartureTime   : tripDetail?.flightDatails?.departureTime,
              },
            ]);
          } else {
            // remove from list
            setShareTrips(
                shareTrips.filter((shareTrip) => shareTrip.flightId !== tripDetail.flightDatails.flightId),
            );
          }
        console.log("shareTrips",shareTrips);
        
       
    }
    const onClickFlightDetailOnRadio=(tripKey,tripFareKey)=>{
        tripList[tripKey].radioCheckKey = tripFareKey;
        console.log(tripList[tripKey]);
        //console.log("fareDetail",fareDetail);
    }

    /********/
    const [isActive, setIsActive] = useState(false);

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
                        <div className='flight-search-calouter mb-4'>
                            <div className='btn-group'>

                                {
                                    reInitialValues.dateArr && reInitialValues.dateArr.length!=0  && reInitialValues.dateArr.map((value, key) => (
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
                            {
                                tripList && tripList.length!=0 && tripList.map((value, key) => (
                                    <div className='card list-item'>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-sm-4'>
                                                            <div className='d-flex'>
                                                            <img className='flight-flag' src={value?.flightDatails?.flightLogo} alt=''/>
                                                            <div className=''>
                                                                <div 
                                                                    className="flightname" 
                                                                    id=""
                                                                >{value?.flightDatails?.flightDescription?.name}</div>
                                                                <div 
                                                                    className="flightnumber" 
                                                                    id=""
                                                                >{`${value?.flightDatails?.flightDescription?.code}-${value?.flightDatails?.flightNumber}`}</div>
                                                            </div>
                                                            </div>  
                                                        </div>
                                                        <div className='col-8 d-flex'>
                                                        <div className="text-center" style={{width:"30%"}}>
                                                            <div className="coltime"> {value?.flightDatails?.departureTime}</div>
                                                            <div className="graysmalltext"> {value?.flightDatails?.departureAirportInformation?.code}</div>
                                                        </div>
                                                        <div className="text-center" style={{width:"30%"}}>
                                                            <div className="nostops small">{value?.flightDatails?.flightDuration}</div>
                                                            <div className="graysmalltext text-danger"> 
                                                            {value?.flightDatails?.flightStops ? value?.flightDatails?.flightStops : "Non Stop" }
                                                            </div>
                                                        </div>
                                                        <div className="text-center" style={{width:"30%"}}>
                                                            <div className="coltime"> {value?.flightDatails?.arrivalTime}</div>
                                                            <div className="graysmalltext"> {value?.flightDatails?.arrivalAirportInformation?.code}</div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-6'>
                                                             <Button variant='outline-secondary' onClick={()=>handleShow(value)} className="btn-sm">View Details</Button>
                                                        </div>
                                                        <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{value?.fareDetail?.seatRemains ? value?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                                    </div>
                                                </div>
                                                <div className='col-6 pricelisttable d-flex flex-column'>
                                                <div className='' >
                                                    <div className=''  style={dynamicStyles}>
                                                        {
                                                            value.fareDetail.fareDetails && value.fareDetail.fareDetails.length!==0 && value.fareDetail.fareDetails.map((fdValue, fdKey) => (
                                                                <div key={fdKey} className='d-flex py-1 border-bottom'>
                                                                    <div className='me-4' style={{width:"2%"}}>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" 
                                                                                type="radio"
                                                                                name={`flight_detail_on_radio${key}`}
                                                                                id={`flight_detail_on_radio${key}`}
                                                                                checked
                                                                                //checked={fdKey===0 && 'checked'}
                                                                                onClick={() =>onClickFlightDetailOnRadio(key,fdKey)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                                                        <div className='d-flex justify-content-between'>
                                                                        <div className=''>
                                                                            <span className="mainprice"> ₹ {fdValue?.payAmount} </span> 
                                                                            <span className="netpriceshow d-none" style={{color:"#009933"}}>
                                                                            ₹ 11547
                                                                            </span> 
                                                                        </div> 

                                                                        <div className=''>
                                                                            <span className="sharechek">
                                                                            <input type="checkbox" name="checkbox" value={value?.flightDatails?.flightId} className="sck" onChange={(e)=>handleChnageShareTrip(e.target.checked,value)}  />
                                                                            Share
                                                                            </span>
                                                                        </div> 
                                                                        </div>
                                                                        <div className=''>
                                                                            <span className="label label-warning ars-flightlabel ars-refunsleft ars-flightlabel-positionHandle" style={{backgroundColor:"#0099e0", color:"#FFFFFF"}}>
                                                                            {`${fdValue?.fareIdentifier} FARE`}                
                                                                            </span>
                                                                            <span className="label--text w-100"> Economy,  &nbsp;
                                                                            <span className="rdable">{fdValue.RefundType ===0 ? 'Non Refundable':fdValue.RefundType ===1? 'Refundable' : 'Partial Refundable'  }<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                                                <div className="ymessage ymsgclass5310" >
                                                                                {`${fdValue?.fareIdentifier} FARE`}                
                                                                                </div>
                                                                            </span>
                                                                            </span>
                                                                        </div>    
                                                                    </div>
                                                                    <div className='ms-4' style={{width:"34%"}}>
                                                                        <Link to={`/agent/flight-review-book/${fdValue.fareRuleId}`} className='btn btn-danger w-100'>Booking</Link>
                                                                    </div>
                                                                </div>
                                                            ))  
                                                        }
                                                    </div>    
                                                    {
                                                        value.fareDetail.fareDetails && value.fareDetail.fareDetails.length>1 &&
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
                    shareTrips && shareTrips.length !=0 && <ShareFlightPop shareFlights={shareTrips}/>
                }
                
            </div>
            {
                show && <FlightDetailModel
                    show={show}
                    handleClose={handleClose}
                    flightDetail={tripDetail.flightDatails}
                    fareDetail={tripDetail.fareDetail.fareDetails[tripDetail.radioCheckKey? tripDetail.radioCheckKey : 0]}
                />
            }
        </>
    )
}