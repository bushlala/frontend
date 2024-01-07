import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Indigo from '../../../../assets/images/indigo.png';
import './FlightSearchList.css';
import ShareFlightPop from './ShareFlightPop';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Moment from 'moment';

export default function FlightSearchList({tripList,reInitialValues,handleChangeDate}) {
    console.log("tripList",tripList);
    console.log("reInitialValues",reInitialValues);
    

    const [shareTrips, setShareTrips] = React.useState([]);
    
    const handleChnageShareTrip = (checkedStatus,tripDetail) => {
        console.log("checked",checkedStatus);
        if (checkedStatus) {
            setShareTrips([
              ...shareTrips,
              {
                flightId            : tripDetail?.flightDatails.flightId,
                flightCode          : tripDetail?.flightDatails?.flightDescription?.code,
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

     //****/

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return (
        <>
            <div className="flightreview col-sm-12 container-fluid">
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
                                        <input type="checkbox" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
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
                    </div> */}
                    <div className='col-9 m-auto'>
                        <div className='flight-search-calouter mb-4'>
                            <div className='btn-group'>

                                {
                                    reInitialValues.dateArr && reInitialValues.dateArr.map((value, key) => (
                                        <div className=''>
                                            <input type="radio" class="btn-check" onChange={()=>handleChangeDate(value)} autocomplete="off" name="travellersClass.adults" id={`datesbox${key}`} value="1" />
                                            <label class="btn search-check-box"  for={`datesbox${key}`}>{value}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        
                        <div className='flight-item-list'>
                            {
                                tripList && tripList.map((value, key) => (
                                    <div className='card list-item'>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <div className='row'>
                                                        <div className='col-sm-4'>
                                                            <div className='d-flex'>
                                                            <img className='flight-flag' src={Indigo} alt=''/>
                                                            <div className=''>
                                                                <div 
                                                                    className="flightname" 
                                                                    id=""
                                                                >{value?.flightDatails?.flightDescription?.name}</div>
                                                                <div 
                                                                    className="flightnumber" 
                                                                    id=""
                                                                >{value?.flightDatails?.flightDescription?.code}</div>
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
                                                             <Button variant='outline-secondary' onClick={handleShow} className="btn-sm">View Details</Button>
                                                        </div>
                                                        <div className="col-6 text-center text-danger fw-normal h6 small"> Seats left: <span id="seatleft5310">{value?.fareDetail?.seatRemains ? value?.fareDetail?.seatRemains : 'Not Available'}</span> </div>
                                                    </div>
                                                </div>
                                                <div className='col-6 pricelisttable d-flex flex-column'>
                                                <div className='' style={{overflow:"hidden"}}>
                                                    <div className='d-flex py-1 border-bottom'>
                                                    <div className='me-4' style={{width:"2%"}}>
                                                        <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
                                                        </div>
                                                    </div>
                                                    <div  className="pricelistright position-relative text-left d-inline-block" style={{width:"64%"}}>
                                                        <div className='d-flex justify-content-between'>
                                                        <div className=''>
                                                            <span className="mainprice"> ₹ {value?.fareDetail?.payAmount} </span> 
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
                                                            {`${value?.fareDetail?.fareIdentifier} FARE`}                
                                                            </span>
                                                            <span className="label--text w-100"> Economy,  &nbsp;
                                                            <span className="rdable">Refundable<span> &nbsp; <i className="fa fa-info-circle fa-info-circle5310" aria-hidden="true" style={{fontSize:"18px,", cursor: "pointer"}}></i></span>
                                                                <div className="ymessage ymsgclass5310" >
                                                                {`${value?.fareDetail?.fareIdentifier} FARE`}                
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
                                ))
                            }
                                

                            {/* <div className='card list-item'>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='row'>
                                                <div className='col-sm-4'>
                                                    <div className='d-flex'>
                                                    <img className='flight-flag' src={Indigo} alt='' />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                    <img className='flight-flag' src={Indigo} alt=''/>
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                                                <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" checked id="flexRadioDefault1" />
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
                            </div>  */}
                        </div>
                    </div>
                </div>
                {
                    shareTrips && shareTrips.length !=0 && <ShareFlightPop shareFlights={shareTrips}/>
                }
                
            </div>

            
                                                             
            <Modal className='flight-item-flight-moodal' show={show} size='lg' onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-vcenter"  centered>
                                                                <Modal.Header closeButton>
                                                                <Modal.Title>Flight Details </Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link active" id="nav-flight-details-tab" data-bs-toggle="tab" data-bs-target="#nav-flight-details" type="button" role="tab" aria-controls="nav-flight-details" aria-selected="true">Flight Details</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="nav-fare-deatils-tab" data-bs-toggle="tab" data-bs-target="#nav-fare-deatils" type="button" role="tab" aria-controls="nav-fare-deatils" aria-selected="false">Fare Details</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="nav-baggage-tab" data-bs-toggle="tab" data-bs-target="#nav-baggage" type="button" role="tab" aria-controls="nav-baggage" aria-selected="false">Baggage Info</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="nav-fare-rules-tab" data-bs-toggle="tab" data-bs-target="#nav-fare-rules" type="button" role="tab" aria-controls="nav-fare-rules" aria-selected="false">Fare Rules</button>
                                                                        </li>
                                                                        <li className="nav-item" role="presentation">
                                                                            <button className="nav-link" id="nav-cancellation-tab" data-bs-toggle="tab" data-bs-target="#nav-cancellation" type="button" role="tab" aria-controls="nav-cancellation" aria-selected="false">Cancellation Charges</button>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="tab-content" id="nav-tabContent">
                                                                    <div className="tab-pane fade show active" id="nav-flight-details" role="tabpanel" aria-labelledby="nav-flight-details-tab">
                                                                        <div className=''>
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
                                                                            <div className='re-layover' style={{backgroundColor:"#e1dff7", padding:"4px 0", fontSize:"13px", borderRadius:"15px", marginTop:"8px"}}>
                                                                                <p className='text-center mb-0'>Layover 02H 05M</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="nav-fare-deatils" role="tabpanel" aria-labelledby="nav-fare-deatils-tab">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <div style={{marginBottom:"10px", fontSize:"16px"}}><strong>Fare Breakup</strong></div>
                                                                            <table border="0" cellpadding="0" cellspacing="0" className="table text-nowrap table-bordered">
                                                                            
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="33%" align="left"><strong>Base Fare</strong></td>
                                                                                        <td width="33%" align="left">₹ 9761</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left"><strong>Surcharges &amp; Taxes</strong></td>
                                                                                        <td align="left">₹ 1170</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left"><strong>Pay Amount</strong></td>
                                                                                        <td align="left">₹ 10931</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane fade" id="nav-baggage" role="tabpanel" aria-labelledby="nav-baggage-tab">
                                                                        <div className='table-responsive'>
                                                                            <table className='table text-nowrap table-bordered'>
                                                                                <thead>
                                                                                        <tr>
                                                                                            <td>Airline</td>
                                                                                            <td>Check-in Baggage</td>
                                                                                            <td>Cabin Baggage</td>
                                                                                        </tr>
                                                                                </thead> 
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <th>
                                                                                                <div className='d-flex'>
                                                                                                    <img className='flight-flag' src={Indigo} alt=''/>
                                                                                                    <div className=''>
                                                                                                        <div 
                                                                                                            className="flightname" 
                                                                                                            id=""
                                                                                                        >15 KG</div>
                                                                                                        <div 
                                                                                                            className="flightnumber" 
                                                                                                            id=""
                                                                                                        >Included</div>
                                                                                                    </div>
                                                                                                </div>  
                                                                                            </th>
                                                                                            <th>15 KG</th>
                                                                                            <th>Included</th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td colspan="3" align="left">
                                                                                                <ul>
                                                                                                    <li>Baggage information mentioned above is obtained from airline's reservation system, WIZOTRIP LLP does <br/> not guarantee the accuracy of this information.</li>
                                                                                                    <li>The baggage allowance may vary according to stop-overs, connecting flights. changes in airline rules. etc.</li>
                                                                                                </ul>
                                                                                            </td>
                                                                                        </tr>    
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>    
                                                                    <div className="tab-pane fade" id="nav-fare-rules" role="tabpanel" aria-labelledby="nav-fare-rules-tab">
                                                                        <div className='table-responsive'>
                                                                            <table className='table text-nowrap table-bordered'>
                                                                                <thead>
                                                                                        <tr>
                                                                                            <td>Journey Points</td>
                                                                                            <td>Type</td>
                                                                                            <td>From</td>
                                                                                            <td>To</td>
                                                                                            <td>Unit</td>
                                                                                            <td>Details</td>
                                                                                        </tr>
                                                                                </thead> 
                                                                                <tbody>
                                                                                        <tr>
                                                                                            <th>
                                                                                                DEL-MAA-BOM
                                                                                            </th>
                                                                                            <th>Reissue</th>
                                                                                            <th></th>
                                                                                            <th></th>
                                                                                            <th></th>
                                                                                            <th>INR 499*</th>
                                                                                        </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div className="tab-pane fade" id="nav-cancellation" role="tabpanel" aria-labelledby="nav-cancellation-tab">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <table className="table table-hover table-bordered bg-light">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        
                                                                                        <td className="text-center">Cancellation</td>
                                                                                        
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        
                                                                        
                                                                                                                            <tr>
                                                                                    
                                                                                        <td className="text-center">INR 1998* </td>
                                                                                        </tr>
                                                                                                                            
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                    <table className="table table-hover table-bordered bg-light">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            
                                                                                            <td className="text-center">Reissue</td>
                                                                                            
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            
                                                                                        
                                                                                                                                <tr>
                                                                                        <td className="text-center">INR 499* </td>
                                                                                            </tr>
                                                                                                                                
                                                                                        </tbody>
                                                                                    </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </Modal.Body>
                                                                {/* <Modal.Footer>
                                                                    <Button variant="secondary" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                    <Button variant="primary" onClick={handleClose}>
                                                                        Save Changes
                                                                    </Button>
                                                                </Modal.Footer> */}
                                                            </Modal>
        </>
    )
}