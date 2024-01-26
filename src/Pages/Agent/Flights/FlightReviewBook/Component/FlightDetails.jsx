import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
import FlightDetailModel from '../../Component/FlightDetailModel';
//import Moment from 'moment';
export default function FlightDetail({listOfFlight,fareDetail}) {
    //console.log('listOfFlight',listOfFlight);
    //console.log('fareDetail',fareDetail);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (test) => {
        setShow(true);
        //setTripDetails(listOfFlight);
    }
    return (
        <>
            <div className='flight-item-list card'>
                <div className="card-header">
                    <p className='flightname mb-0'>{listOfFlight[0]?.departureAirportInformation?.city} <i class="fa-solid fa-arrow-right-long"></i>  {listOfFlight[0]?.arrivalAirportInformation?.city}  <span className='flightnumber'>On {Moment(listOfFlight[0]?.departureDate).format('ddd, MMM DD YYYY')}</span></p>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-12'>
                            {
                                listOfFlight.map((flightValue, flightKey) => (
                                    <div className='row'>
                                        <div className='col-sm-2'>
                                            <div className='d-flex'>
                                                <img className='flight-flag' src={flightValue?.flightLogo} alt=''/>
                                                <div className=''>
                                                    <div className="flightname" id="">{flightValue?.flightDescription?.name}</div>
                                                    <div className="flightnumber" id="">{`${flightValue?.flightCode}-${flightValue?.flightNumber}`}</div>
                                                </div>
                                            </div>  
                                        </div>

                                        <div className='col-10 d-flex'>
                                            <div className="text-center" style={{width:"50%"}}>
                                                <div className="coltime"> {flightValue?.departureTime}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.terminal}</div>
                                            </div>

                                            <div className="text-center" style={{width:"50%"}}>
                                                <div className="nostops small">{flightValue?.flightDuration}</div>
                                                <div className="graysmalltext text-danger"> {flightValue?.flightStops ? flightValue?.flightStops : 'Non Stop'}</div>
                                            </div>

                                            <div className="text-center" style={{width:"50%"}}>
                                                <div className="coltime"> {flightValue?.arrivalTime}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.code}</div>
                                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.terminal}</div>
                                            </div>
                                        </div>

                                        <div className='d-flex'>
                                            <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:{fareDetail?.baggageInformation?.checkInBaggage}, Cabin Baggage:{fareDetail?.baggageInformation?.cabinBaggage} Included</p>
                                        </div>
                                        {
                                            flightValue?.flightStops !==0 &&
                                            <div className='re-layover mb-3' style={{backgroundColor:"#e1dff7", padding:"4px 0", fontSize:"13px", borderRadius:"15px", marginTop:"8px"}}>
                                                <p className='text-center mb-0'>Layover 02H 05M</p>
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
                                        onClick={()=>handleShow(1)}
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
                show && <FlightDetailModel
                    show={show}
                    handleClose={handleClose}
                    flightDetail = {listOfFlight[0]}
                    fareDetail = {fareDetail}
                />
            }
        </>
    )
}