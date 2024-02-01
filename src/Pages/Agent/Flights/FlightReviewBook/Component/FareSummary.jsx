import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Moment from 'moment';
import Indigo from '../../../../../assets/images/indigo.png';
import { FlightSearchService } from '../../../../../Services/Agent/FlightSearch.Service'; 
import toast from 'react-hot-toast';
import FlightDetailModel from '../../Component/FlightDetailModel';
//import Moment from 'moment';
export default function FareSummary({totalPrices}) {
    //console.log('listOfFlight',listOfFlight);

    return (
        <>
            <div className='col-3 mt-5'>
                <div className='re-card'>
                    <div className=''>
                        <div className='list-group list-group-flush'>
                            <div className='list-group-item'>
                                <h6>Fare Summary</h6>
                            </div>
                            <div className='list-group-item'>

                                <div className='row d-flex'>
                                    <div className="col">
                                        <h6 className=''>Base fare</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className='float-end'>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{totalPrices.baseFarePrice}
                                        </h6>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='row d-flex'>
                                    <div className="col">
                                        <h6 className=''>Taxes and fees</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className='float-end'>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{totalPrices.taxesFee}
                                        </h6>
                                    </div>
                                </div>
                                {
                                    totalPrices.mealBaggageFee !== 0 && 
                                    <div className='row d-flex'>
                                        <div className="col">
                                            <h6 className=''>Extra Meals & Baggage</h6>
                                        </div>
                                        <div className="col">
                                            <h6 className='float-end'>
                                            <i className="fa-solid fa-indian-rupee-sign"></i>{totalPrices.mealBaggageFee}
                                            </h6>
                                        </div>
                                    </div>
                                }
                                <hr></hr>

                                <div className='row d-flex'>
                                    <div className="col">
                                        <h6 className=''>Amount to Pay</h6>
                                    </div>
                                    <div className="col">
                                        <h6 className='float-end'>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{totalPrices.total}
                                        </h6>
                                    </div>
                                </div>

                                <hr></hr>
                                <div className="graysmalltext text-danger mb-3"> 
                                    <i className="fa-solid fa-circle-info"></i> You dont't have sufficient balance
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className='re-card mt-3'>
                    <div className=''>
                        <div className='list-group list-group-flush'>
                            <div className='list-group-item'>
                                <h6>Select a Discount Coupan</h6>
                            </div>  
                            <div className='list-group-item'>
                                <div className='d-flex mt-2'>
                                    <input type="text" className="form-control " id="input-label"/>
                                    <button className='btn btn-danger btn-coupan'>Apply</button>
                                </div>
                                <p className='text-center graysmalltext mt-3'>No Discount Coupan Available</p>
                            </div>   
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}