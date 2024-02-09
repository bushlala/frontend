import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service';
import toast from 'react-hot-toast';
import FlightDetailModel from '../../Component/FlightDetailModel';
//import Moment from 'moment';
export default function FlightDetail({ listOfFlight, fareDetail, layover }) {
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    console.log('layover', layover);

    // console.log(listOfFlight.length,"################################################");
    listOfFlight.map((flightValue, flightKey, index) => {
        // console.log(flightKey,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    });

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
                    <div className='row'>
                        <div className='col-6'>
                            <p className='flightname mb-0'>{listOfFlight[0]?.departureAirportInformation?.city} <i class="fa-solid fa-arrow-right-long"></i>  {listOfFlight[0]?.arrivalAirportInformation?.city}  <span className='flightnumber'>On {Moment(listOfFlight[0]?.departureDate).format('ddd, MMM DD YYYY')}</span></p>
                        </div>
                        {
                            layover && layover.length !==0 &&
                            <div className='col-6'>
                                <p className='float-end fs-12 fw-bold'><i class="fa-solid fa-clock me-2"></i>  {layover[0].totalTravellTime}</p>
                            </div>
                        }
                        
                    </div>

                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-12'>
                            {
                                listOfFlight.map((flightValue, flightKey) =>

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
                                            <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:{fareDetail?.baggageInformation?.checkInBaggage}, Cabin Baggage:{fareDetail?.baggageInformation?.cabinBaggage} Included</p>
                                        </div>

                                        {listOfFlight.length > 1 && (flightKey < listOfFlight.length - 1) &&
                                            <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                                                {parseInt(layover[flightKey].layover) < 2 ? <p className='text-center mb-0'> Layover {layover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane  {layover[flightKey].layover}</p>}
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
                                            onClick={() => handleShow(1)}
                                        >
                                            Show Fare Rules
                                        </a>
                                    </p>
                                    <Button onClick={handleShow1}>Base fare alert</Button>
                                    <Modal size="md" show={showModal1} onHide={handleClose1} centered>
                                        <Modal.Header>
                                            <div className='text-center'>
                                                <h3>CONFIRM TO PROCEED</h3>
                                                <h6>Fare have changed</h6>
                                            </div>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div>
                                                <h4>Old Fare was - $1254.54</h4>
                                                <h4>New Fare is <spna></spna></h4>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className='row'>
                                                <div></div>
                                            </div>
                                            <Button variant="" onClick={handleClose1}>
                                                Back
                                            </Button>
                                            <Button variant="dark" onClick={handleClose1}>
                                                Continue
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
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
                    flightDetail={listOfFlight[0]}
                    fareDetail={fareDetail}
                />
            }
        </>
    )
}