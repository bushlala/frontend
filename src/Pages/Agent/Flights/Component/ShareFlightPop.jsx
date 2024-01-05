import React from 'react'
import { Link } from 'react-router-dom'
import Indigo from '../../../../assets/images/indigo.png'
import './FlightSearchList.css'
export default function ShareFlightPop({shareFlights}) {
    console.log("shareFlights",shareFlights)
   
    return (
        <>
            <div className='sharefooterbox'>
                <div class="heading">Share Flights <span style={{cursor:"pointer"}} className='float-right'>Reset</span></div>
                <div className='loadshareflightbox'></div>
                { 
                    shareFlights && shareFlights.map((shareFlight, key) => (
                        <div className='d-flex'>
                            <img className='flight-flag' src={Indigo} />
                            <div className=''>
                                <div className="flightname" id="">{shareFlight.flightName}</div>
                                <div className="flightnumber" id="">
                                    <span> {`${shareFlight.flightCode} - ${shareFlight.flightId}`} </span><br/> <span>({`${shareFlight.flightDepartureTime}, ${shareFlight.flightDepartureDate} - ${shareFlight.flightArrivalTime}, ${shareFlight.flightArrivalDate}`})</span> 
                                    <div className='d-flex mt-2'>
                                        <div style={{width:"100px"}} className='me-'> Price - Rs.</div>
                                        <div contenteditable="true" style={{width: "100%",  borderBottom:"1px solid #ddd", height:"28px", lineHeight: "35px", fontWeight:"600"}}></div>    
                                    </div>    
                                    <div className='d-flex'>
                                        <div style={{width:"100px"}} className='me-'> Description </div>
                                        <div contenteditable="true" style={{width: "100%",  borderBottom:"1px solid #ddd", height:"28px", lineHeight: "35px", fontWeight:"600"}}></div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                  
            </div>    
        </>
    )
}