import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Moment from "moment";
import Indigo from "../../../../assets/images/indigo.png";
import { FlightSearchService } from "../../../../Services/Agent/FlightSearch.Service";
import Sucssesloder from '../../../../Component/Loder/Sucssesloder';
import toast from "react-hot-toast";
export default function FlightDetailModel({ show, handleClose, currency, ruleId, already, viewListOfFlight }) {

  const [searchRule, setSearchRule] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [dateChangeList, setDateChangeList] = useState();
  const [cancellationList, setCancellationList] = useState();
  const [layover, setLayover] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [fareDetails, setFareDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [listOfFlight, setListOfFLight] = useState([]);
  const [routeInfo, setRouteInfo] = useState([]);
  const [journyPoints, setJournyPoints] = useState([])



  const handleClickGetSearchRule = () => {
    const requestParam = {
      id: fareDetails ? fareDetails.fareRuleId :already? already.fareRuleId:"",
      flowType: fareDetails ? fareDetails?.flowType : already?already.flowType:"",
    };
    FlightSearchService.SearchRule(requestParam)
      .then(async (response) => {
        if (response.status === 200) {
          if (response.data.status) {
            setSearchRule(response.data.data);
            setDateChangeList(response.data.data.DATECHANGE.DEFAULT);
            setCancellationList(response.data.data.CANCELLATION.DEFAULT);
          } else {
            setSearchRule();
          }
        } else {
          setSearchRule();
          setErrorMsg(response.data.message);
        }
      })
      .catch((e) => {
        setSearchRule();
        setErrorMsg(e.data.message);
      });
  };

  useEffect(() => {
    if (viewListOfFlight && Array.isArray(viewListOfFlight)) {
      let combineArray = [];
      viewListOfFlight.forEach(item => {
        if (item.departureAirportInformation && item.arrivalAirportInformation) {
          combineArray.push(item.departureAirportInformation.code, item.arrivalAirportInformation.code);
        }
      });
      let uniqueList = [...new Set(combineArray)];
      let journyPoint = uniqueList.join("-");
      setJournyPoints(journyPoint);
      console.log("journyPoint",journyPoint);
    } else {
      getBookingReviewData();

    }

  }, [])

  const getBookingReviewData = async () => {

    var requestData = {
      priceIds: ruleId,

    }

    FlightSearchService.BookingReview(requestData).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        setIsLoading(false)
        setLayover(result.layover);
        setBookingId(result.seasionDetail.bookingId);
        setFareDetails(result.fareDetail.fareDetails[0])
        setListOfFLight(result.listOfFlight);
        setRouteInfo(result.routeInfo);
        let toFlight = result.listOfFlight.map(item => item.arrivalAirportInformation.code);
        let fromFlight = result.listOfFlight.map(item => item.departureAirportInformation.code);
        let combineArray = fromFlight.concat(toFlight);
        let uniqueList = [... new Set(combineArray)];
        let value = uniqueList.toString()
        let journyPoint = value.replaceAll(",", "-");
        setJournyPoints(journyPoint);
        console.log("api",journyPoint);
      } else {
        toast.error('Something went wrong');
        //console.log("response", response.data)
      }
    }).catch((error) => {
      console.log(error);

    });
  }

  console.log("viewListOfFlight", viewListOfFlight);
  return (
    <>
      <Modal
        className="flight-item-flight-moodal"
        show={show}
        size="lg"
        onHide={handleClose}
        animation={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Flight Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={already ? "d-none" : "nav-link active"}
                id="nav-flight-details-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-flight-details"
                type="button"
                role="tab"
                aria-controls="nav-flight-details"
                aria-selected="true"
              >
                Flight Details
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={already ? "d-none" : "nav-link "}
                id="nav-fare-deatils-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-fare-deatils"
                type="button"
                role="tab"
                aria-controls="nav-fare-deatils"
                aria-selected="false"
              >
                Fare Details
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className={already ? "nav-link active " : "nav-link"}
                id="nav-baggage-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-baggage"
                type="button"
                role="tab"
                aria-controls="nav-baggage"
                aria-selected="false"
              >
                Baggage Info
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-fare-rules-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-fare-rules"
                type="button"
                role="tab"
                aria-controls="nav-fare-rules"
                aria-selected="false"
                onClick={() => handleClickGetSearchRule()}
              >
                Fare Rules
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="nav-cancellation-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-cancellation"
                type="button"
                role="tab"
                aria-controls="nav-cancellation"
                aria-selected="false"
                onClick={() => handleClickGetSearchRule()}
              >
                Cancellation Charges
              </button>
            </li>
          </ul>

          <div className="tab-content" id="nav-tabContent">
            <div
              className={already ? "d-none" : "tab-pane fade show active"}
              id="nav-flight-details"
              role="tabpanel"
              aria-labelledby="nav-flight-details-tab" >
              {isLoading === true ? <div className='loader'> <Sucssesloder headers={"FLight Details"} /></div> : (
                <div className="">
                  <div className="card-header">
                    <div className='row'>
                      <div className='col-6'>
                        <p className='flightname mb-0'>{routeInfo[0]?.fromCityOrAirport?.city} <i class="fa-solid fa-arrow-right-long"></i>  {routeInfo[0]?.toCityOrAirport?.city}  <span className='flightnumber'>On {Moment(routeInfo[0]?.travelDate).format('ddd, MMM DD YYYY')}</span></p>
                      </div>
                      {
                        layover && layover.length !== 0 &&
                        <div className='col-6'>
                          <p className='float-end fs-12 fw-bold'><i class="fa-solid fa-clock me-2"></i>  {layover[0].totalTravellTime}</p>
                        </div>
                      }

                    </div>
                  </div>
                  <hr />
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-12'>
                        {listOfFlight &&
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
                                <p className="small"><i class="fa-solid fa-suitcase fa-small me-1"></i> Baggage:{fareDetails?.baggageInformation?.checkInBaggage}, Cabin Baggage:{fareDetails?.baggageInformation?.cabinBaggage} Included</p>
                              </div>
                              {listOfFlight.length > 1 && (flightKey < listOfFlight.length - 1) &&
                                <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                                  {parseInt(layover[flightKey].layover) < 2 ? <p className='text-center mb-0'> Layover {layover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane  {layover[flightKey].layover}</p>}
                                </div>
                              }
                            </div>
                          ))
                        }

                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
            <div
              className={already ? "d-none" : "tab-pane fade show"}
              id="nav-fare-deatils"
              role="tabpanel"
              aria-labelledby="nav-fare-deatils-tab"
            >
              <div className="row">
                <div className="col-6">
                  <div style={{ marginBottom: "10px", fontSize: "16px" }}>
                    <strong>Fare Breakup</strong>
                  </div>
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    className="table text-nowrap table-bordered"
                  >
                    <tbody>
                      <tr>
                        <td width="33%" align="left">
                          <strong>Base Fare</strong>
                        </td>
                        <td width="33%" align="left">
                          {currency}
                          <span style={{ marginLeft: "10px" }}>
                            {fareDetails?.baseFare ? fareDetails.baseFare : 0}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          <strong>Surcharges &amp; Taxes</strong>
                        </td>
                        <td align="left">
                          {currency}
                          <span style={{ marginLeft: "10px" }}>
                            {fareDetails?.taxesAndFees ? fareDetails?.taxesAndFees : 0}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td align="left">
                          <strong>Pay Amount</strong>
                        </td>
                        <td align="left">
                          {currency}{" "}
                          <span style={{ marginLeft: "10px" }}>
                            {fareDetails?.payAmount ? fareDetails?.payAmount : 0}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div
              className={already ? "tab-pane fade show active" : "tab-pane fade"}
              id="nav-baggage"
              role="tabpanel"
              aria-labelledby="nav-baggage-tab"
            >
              <div className="table-responsive">
                <table className="table text-nowrap table-bordered">
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
                        <div className="d-flex">
                          <img
                            className="flight-flag"
                             src={viewListOfFlight? viewListOfFlight[0].flightLogo:listOfFlight ? listOfFlight[0]?.flightLogo:"0" }
                            alt=""
                          />
                          <div className="">
                            <div className="flightname" id="">
                              {fareDetails?.baggageInformation?.checkInBaggage}
                            </div>
                            <div className="flightnumber" id="">
                              Included
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>{fareDetails?.baggageInformation?.checkInBaggage ? fareDetails?.baggageInformation?.checkInBaggage : already?.baggageInformation?.checkInBaggage}</th>
                      <th>{fareDetails?.baggageInformation?.cabinBaggage ? fareDetails?.baggageInformation?.cabinBaggage : already?.baggageInformation?.cabinBaggage}</th>
                    </tr>
                    <tr>
                      <td colspan="3" align="left">
                        <ul>
                          <li>
                            Baggage information mentioned above is obtained from
                            airline's reservation system, WIZOTRIP LLP does{" "}
                            <br /> not guarantee the accuracy of this
                            information.
                          </li>
                          <li>
                            The baggage allowance may vary according to
                            stop-overs, connecting flights. changes in airline
                            rules. etc.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-fare-rules"
              role="tabpanel"
              aria-labelledby="nav-fare-rules-tab"
            >
              {searchRule && searchRule.DATECHANGE ? (
                <div className="table-responsive">
                  <table className="table text-nowrap table-bordered">
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
                        <th>{journyPoints ?journyPoints:"0"}  </th>
                        <th>Reissue</th>
                        <th>{routeInfo[0]?.fromCityOrAirport?.city ? routeInfo[0]?.fromCityOrAirport?.city : viewListOfFlight[0]?.departureAirportInformation?.city}</th>
                        <th>{routeInfo[0]?.toCityOrAirport?.city ? routeInfo[0]?.toCityOrAirport?.city : viewListOfFlight[viewListOfFlight.length - 1]?.arrivalAirportInformation?.city}</th>
                        <th></th>
                        <th>INR 0*</th>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <div className="table-responsive">
                      <table className="table text-nowrap table-bordered">
                        <thead>
                          <tr>
                            <td>Date Change Fee</td>
                            <td>AirlineRescheduleFeeTax</td>
                            <td>AirlineRescheduleFee</td>
                            <td>No Show</td>
                            <td>Seat Chargeable</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>{currency} {dateChangeList && dateChangeList.amount}</th>
                            <th>{currency} <span style={{ marginLeft: "10px" }}>  {dateChangeList.fareComponentsRelated.airlineRescheduleFeeTax}</span>

                            </th>
                            <th>{currency} <span style={{ marginLeft: "10px" }}> {dateChangeList.fareComponentsRelated.airlineRescheduleFee}</span>
                            </th>
                            <th></th>
                            <th>{currency}  0</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h5>PlicyInfo</h5>
                      <ul>
                        <li>{dateChangeList && dateChangeList.plicyInfo}</li>
                      </ul>
                    </div>
                    <div className="table-responsive">
                      <table className="table text-nowrap table-bordered">
                        <thead>
                          <tr>
                            <td>Cancellation Fee</td>
                            <td>AirlineRescheduleFeeTax</td>
                            <td>AirlineRescheduleFee</td>
                            <td>No Show</td>
                            <td>Seat Chargeable</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>{currency} <span style={{ marginLeft: "10px" }}>{cancellationList && dateChangeList.amount}</span></th>
                            <th>{currency}<span style={{ marginLeft: "10px" }}> {cancellationList.fareComponentsRelated.airlineCancellationFeeTax}</span>

                            </th>
                            <th>{currency}<span style={{ marginLeft: "10px" }}>  {cancellationList.fareComponentsRelated.airlineCancellationFee}</span>

                            </th>
                            <th></th>
                            <th>{currency}  0</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <h5>PlicyInfo</h5>
                      <ul>
                        <li>{cancellationList && dateChangeList.plicyInfo}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="record-not-found-rule">Recourd not found</div>
              )}
            </div>

            <div
              className="tab-pane fade"
              id="nav-cancellation"
              role="tabpanel"
              aria-labelledby="nav-cancellation-tab"
            >
              {searchRule && searchRule.CANCELLATION ? (
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
                          <td className="text-center">
                            {currency} {searchRule?.CANCELLATION ? searchRule.CANCELLATION.DEFAULT?.amount:"0"}
                          </td>
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
                          <td className="text-center">INR 0* </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="record-not-found-rule">Recourd not found</div>
              )}
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
  );
}
