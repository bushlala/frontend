import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import FareSummary from './FareSummary';
import BookingTimerOff from './BookingTimerOff';

//import Moment from 'moment';
export default function BookingReview({ seasionDetail, listOfFlight, fareDetail, reInitialValues, totalPrices, layover,BookingCheckValidationOfBookingId}) {
  //console.log('listOfFlight',listOfFlight);
  //console.log('fareDetail',fareDetail);
  //console.log('reInitialValues',reInitialValues);
  //const paxInfo = seasionDetail.paxInfo;
  let listOfTravellerInfo = [];
  //console.log("kopiouuiouioiuouio", layover)
  reInitialValues.travellerInfo.forEach((passanger, passangerKey) => {
    let tmp = {
      fullName: `${passanger.title} ${passanger.firstName} ${passanger.lastName}`,
      flightNameWithSeat: [],
      flightWithBaggae: [],
      flighWithMeal: []
    };
    reInitialValues.extraInfo.forEach((extraInfo, extraInfoKey) => {
      //passanger.passangerTypeName
      //extraInfo.mealBaggageInfo 
      //console.log("passanger.passangerTypeName",passanger.passangerTypeName);
      //console.log("extraInfo.mealBaggageInfo",extraInfo.mealBaggageInfo);
      //console.log("extraInfo.mealBaggageInfo",extraInfo.mealBaggageInfo);
      let flightFormTo = `${extraInfo.from} - ${extraInfo.to} :`;
      const ifFoundTraveller = extraInfo.mealBaggageInfo.find(mealBaggage => {
        return (mealBaggage.memberName == passanger.passangerTypeName)
      });
      const listOfMeals = extraInfo.mealList;
      const listOfBaggage = extraInfo.baggageList;
      //console.log("ifFoundTraveller",ifFoundTraveller);
      if (reInitialValues.extraInfo.length) {// Here check count is equal to index
        // Here check traveller check
        if (ifFoundTraveller) {
          // here check meal 
          const ifFoundMeals = listOfMeals.find(meal => {
            return (meal.code == ifFoundTraveller.meals)
          });
          if (ifFoundMeals) {
            tmp.flighWithMeal.push(`${flightFormTo} ${ifFoundMeals.desc}`);
          }

          // here check baggae 
          const ifFoundBaggage = listOfBaggage.find(baggage => {
            return (baggage.code == ifFoundTraveller.baggage)
          });

          if (ifFoundBaggage) {
            tmp.flightWithBaggae.push(`${flightFormTo} ${ifFoundBaggage.desc}`);
          }

          tmp.flightNameWithSeat.push(`${flightFormTo} ${ifFoundTraveller.seat}`);
        } else {
          tmp.flightNameWithSeat.push(`${flightFormTo}`);
        } 
      }
    });
    listOfTravellerInfo.push(tmp);
    //console.log("listOfTravellerInfo",listOfTravellerInfo);
  });
  //const [listOfTravellerInfo]
  //console.log("listOfTravellerInfo",listOfTravellerInfo);
  return (
    <>
      <div className=''>
        <div className="container">
          <div className="page-header">
            <h4 className="my-auto">Review</h4>
            <div>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={`/`}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Review</li>
              </ol>
            </div>
          </div>
          <div className='row'>
            <div className='col-9'>
              <div className='card list-item'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-6'>
                      <h6>{listOfFlight[0]?.departureAirportInformation?.city} <i class="fa-solid fa-arrow-right-long me-1"></i> {listOfFlight[0]?.arrivalAirportInformation?.city} <span className="graysmalltext"> on
                        {Moment(listOfFlight[0]?.departureDate).format('ddd, MMM DD YYYY')}</span> </h6>
                    </div>
                    {
                      layover && layover.length !==0 &&
                        <div className='col-6'>
                        <p className='float-end fs-12 fw-bold'><i class="fa-solid fa-clock me-2"></i>  {layover[0].totalTravellTime}</p>
                        </div>
                    }
                  </div>

                  <hr></hr>
                  <div className='row'>
                    <div className='col-12'>
                      {
                        listOfFlight.map((flightValue, flightKey) => (
                          <div className='row'>
                            <div className='col-2'>
                              <div className='d-flex'>
                                <img className='flight-flag' src={flightValue?.flightLogo} alt='' />
                                <div className=''>
                                  <div className="flightname" id="">{flightValue?.flightDescription?.name}</div>
                                  <div className="flightnumber" id="">{`${flightValue?.flightCode}-${flightValue?.flightNumber}`}</div>
                                </div>
                              </div>
                            </div>
                            <div className='col-10 d-flex'>
                              <div className="" style={{ width: "30%" }}>
                                {/* <div className="coltime"> Jan 14, San, 20:20</div>
                                        <div className="graysmalltext">Delhi,India</div>
                                        <div className="graysmalltext">Delhi Indira Gandhi Intl</div>
                                        <div className="graysmalltext">Terminal 3</div> */}

                                <div className="coltime">{Moment(flightValue?.departureDate).format(' MMM DD, ddd')}, {flightValue?.departureTime}</div>
                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.city}</div>
                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.name}</div>
                                <div className="graysmalltext"> {flightValue?.departureAirportInformation?.terminal}</div>
                              </div>

                              <div className="mt-3 me-5" style={{ width: "30%" }}>
                                <div className="nostops fw-bold">{flightValue?.flightStops ? flightValue?.flightStops : 'Non Stop'}</div>
                              </div>

                              <div className="" style={{ width: "30%" }}>
                                <div className="coltime"> {Moment(flightValue?.arrivalDate).format(' MMM DD, ddd')},{flightValue?.arrivalTime}</div>
                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.city}</div>
                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.name}</div>
                                <div className="graysmalltext"> {flightValue?.arrivalAirportInformation?.terminal}</div>
                              </div>

                              <div className="" style={{ width: "30%" }}>
                                <div className="coltime"> {flightValue?.flightDuration}</div>
                                <div className="graysmalltext">Economy,Free</div>
                                <div className="graysmalltext">Meal,Refundable</div>
                              </div>
                            </div>
                            <div className='w-25'>
                              <p className='bg-warning text-dark rounded w-25 text-center p-1 fw-bold' style={{ fontSize: '8px' }}>{fareDetail?.fareIdentifier}</p>
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
                        {/* <div className='w-50'>
                          <p className='bg-warning text-dark rounded w-25 text-center'>{fareDetail?.fareIdentifier}</p>
                        </div> */}
                        <div>
                          <p><i class="fa-solid fa-suitcase me-1"></i>: (Adult), Baggage:{fareDetail?.baggageInformation?.checkInBaggage}, Cabin Baggage:{fareDetail?.baggageInformation?.cabinBaggage} Included</p>
                        </div>
                      </div>

                      <div className='mt-4'>
                        <h5>Passenger Details</h5>
                        <div className="table-responsive">
                          <table className="table text-nowrap w-100">
                            <thead>
                              <tr>
                                <th>Sr.</th>
                                <th>Name,Age & Passport</th>
                                <th>Seat Booking</th>
                                <th>Meal & Baggage Preference</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                listOfTravellerInfo.map((flightValue, flightKey) => (
                                  <tr>
                                    <td className='fw-bold'>{flightKey + 1}</td>
                                    <td className='fw-bold'>{flightValue.fullName}</td>
                                    <td className='fw-bold'>{flightValue.flightNameWithSeat.toString()}</td>
                                    <td>
                                      {
                                        flightValue.flightWithBaggae && flightValue.flightWithBaggae.length!==0 &&
                                        <div className='graysmalltext'>
                                          <i class="fa-solid fa-suitcase me-1"></i>{flightValue.flightWithBaggae.toString()}
                                        </div>
                                      }

                                      {
                                        flightValue.flighWithMeal && flightValue.flighWithMeal.length !==0 &&
                                        <div className='graysmalltext'>
                                          <i class="fa-solid fa-utensils"></i> {flightValue.flighWithMeal.toString()}
                                        </div>
                                      }
                                    </td>
                                  </tr>
                                ))
                              }

                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className='mt-4'>
                        <h5>Contact Details</h5>
                        <div className='mt-3'>Email : <span className='fw-bold'>{reInitialValues.personalEmail}</span></div>
                        <div>Mobile : <span className='fw-bold'>{reInitialValues.personalPhone}</span></div>
                      </div>

                      <hr></hr>
                      <div className='d-flex justify-content-between'>
                        <Link className='btn btn-danger'>Back</Link>
                        <div className='d-flex'>
                          <div class="form-check me-2 mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                              I Accept <Link className='text-danger'>Terms & Conditions</Link>
                            </label>
                          </div>
                          <Link to={'/BookingHold'}>
                            <button className='btn btn-dark float-end mx-2'> Block</button>
                          </Link>
                          <button className='btn btn-danger float-end' onClick={()=>BookingCheckValidationOfBookingId()}> Proceed To Pay</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FareSummary
              totalPrices={totalPrices}
            />
          </div>
        </div>
        {/* <BookingTimerOff/> */}
      </div>
    </>
  )
}