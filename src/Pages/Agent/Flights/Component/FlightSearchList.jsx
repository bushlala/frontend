import React from 'react';
import { Link } from 'react-router-dom';
import Indigo from '../../../../assets/images/indigo.png';
import './FlightSearchList.css';
import ShareFlightPop from './ShareFlightPop';

export default function FlightSearchList({tripList}) {
    console.log("tripList",tripList)
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
    return (
        <>
            <div className="flightreview col-sm-12 container-fluid">
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
                    </div>
                    <div className='col-9'>
                        <div className='flight-search-calouter'>
                            <div className='btn-group'>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox" value="1" />
                                    <label class="btn search-check-box" for="datesbox">04-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox2" value="2" />
                                    <label class="btn search-check-box" for="datesbox2">05-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox3" value="3" />
                                    <label class="btn search-check-box" for="datesbox3">06-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox4" value="4" />
                                    <label class="btn search-check-box" for="datesbox4">07-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox5" value="5" />
                                    <label class="btn search-check-box" for="datesbox5">08-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox6" value="6" />
                                    <label class="btn search-check-box" for="datesbox6">09-01-2024</label>
                                </div>
                                <div className=''>
                                    <input type="radio" class="btn-check" autocomplete="off" name="travellersClass.adults" id="datesbox7" value="7" />
                                    <label class="btn search-check-box" for="datesbox7">10-01-2024</label>
                                </div>
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
                                                        <button type="button" className="btn btn-outline-secondary btn-sm">View Details</button>
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
                    shareTrips && shareTrips.length && <ShareFlightPop shareFlights={shareTrips}/>
                }
                
            </div>
        </>
    )
}