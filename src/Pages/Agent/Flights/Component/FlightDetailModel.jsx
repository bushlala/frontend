import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import Indigo from '../../../../assets/images/indigo.png';
export default function FlightDetailModel({show,handleClose,tripDetail}) {
    console.log('tripDetail',tripDetail);
    return (
        <>
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
                                            <div className="flightname" id="">{tripDetail?.flightDatails?.flightDescription?.name}</div>
                                            <div className="flightnumber" id="">{tripDetail?.flightDatails?.flightDescription?.code}</div>
                                        </div>
                                    </div>  
                                </div>
                                <div className='col-10 d-flex'>
                                    <div className="text-center" style={{width:"50%"}}>
                                    <div className="coltime"> {tripDetail?.flightDatails?.departureTime}</div>
                                    <div className="graysmalltext"> {tripDetail?.flightDatails?.departureAirportInformation?.code}</div>
                                    <div className="graysmalltext"> {tripDetail?.flightDatails?.departureAirportInformation?.terminal}</div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                    <div className="nostops small">{tripDetail?.flightDatails?.flightDuration}</div>
                                    <div className="graysmalltext text-danger">
                                    {tripDetail?.flightDatails?.flightStops ? tripDetail?.flightDatails?.flightStops : "Non Stop" }
                                    </div>
                                    </div>
                                    <div className="text-center" style={{width:"50%"}}>
                                    <div className="coltime"> {tripDetail?.flightDatails?.arrivalTime}</div>
                                    <div className="graysmalltext"> {tripDetail?.flightDatails?.flightDescription?.code}</div>
                                    <div className="graysmalltext"> {tripDetail?.flightDatails?.flightDescription?.code}</div>
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
                                                        >{tripDetail?.fareDetail?.baggageInformation?.checkInBaggage}</div>
                                                        <div 
                                                            className="flightnumber" 
                                                            id=""
                                                        >Included</div>
                                                    </div>
                                                </div>  
                                            </th>
                                            <th>{tripDetail?.fareDetail?.baggageInformation?.checkInBaggage}</th>
                                            <th>{tripDetail?.fareDetail?.baggageInformation?.cabinBaggage}</th>
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