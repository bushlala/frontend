import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
export default function FlightDetail({listOfFlight}) {
    console.log('listOfFlight',listOfFlight);
    return (
        <>
            <div className='flight-item-list card'>
                <div className="card-header">
                    <p className='flightname mb-0'>Delhi <i class="fa-solid fa-arrow-right-long"></i>  NA  <span className='flightnumber'>On Mon,Jan 01 2024</span></p>
                </div>
                <div className='card-body'>
                    <div className='row'>
                    <div className='col-12'>
                        
                        {
                            listOfFlight.map((value, key) => (
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

                                    <div className='d-flex'>
                                        <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:15 KG, Cabin Baggage: Included</p>
                                    </div>

                                    <div className='re-layover mb-3' style={{backgroundColor:"#e1dff7", padding:"4px 0", fontSize:"13px", borderRadius:"15px", marginTop:"8px"}}>
                                        <p className='text-center mb-0'>Layover 02H 05M</p>
                                    </div>
                                </div>
                            ))
                        }
                        
                        <div className='row'>
                            <div className='col-sm-2'>
                                <div className='d-flex'>
                                    <img className='flight-flag' src={Indigo} alt='' />
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

                        <div className='d-flex'>
                            <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i>  Baggage:15 KG, Cabin Baggage: Included</p>
                        </div>

                        <div className='row mt-3'>
                            <div className='col-6'>
                            {/* <button type="button" className="btn btn-outline-secondary btn-md">Show Fare Rules</button> */}
                            <p>
                                <a class="btn btn-outline-secondary btn-md" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
        </>
    )
}