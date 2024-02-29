import React, {useState,useEffect,useRef} from "react";
import { Link } from 'react-router-dom'
import Layout from '../../../../Component/Layout/Agent/AgentLayout';
import Indigo from '../../../../assets/images/indigo.png'
import {Modal, Button} from 'react-bootstrap'
import { useParams,useNavigate } from "react-router-dom";
import { FlightSearchService } from '../../../../Services/Agent/FlightSearch.Service';
import { Alert, Box, Grid, InputLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Moment from 'moment';
import axios from "axios";
import Sucssesloder from "../../../../Component/Loder/Sucssesloder";
import { Form, Formik } from "formik";
export default function BookingHold() {
  const [ticketDetails, setTicketDetails] = useState();
  const [listOfFlight, setListOfFlight] = useState([]);
  const [layover, setLayover] = useState([]);
  const { bookingId } = useParams();
  const [fareRule, setFareRule] = useState(false);
  const [fareDetails, setFareDetails] = useState();
  const [fareDetailsId, setFareDetailsId] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [details, setDetails] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));
  let currency = userData.data.currency;
  const [isOpen, setIsOpen] = useState(false);
  const[action,setAction]= useState("");
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const[testPnr, setTestPnr] = useState(false);
    const [unCofirmed,setUnCofirmed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const initialValues = {
    withPrice: false,
    withAgency: false,
    withGST: false,
    oldPrintCopy: false,
  }


  useEffect(() => {
    fetchBookingDeatils();
  }, [])
  
  const nameForm = useRef(null)
  const [reInitialValues, setReInitialValues] = useState(initialValues);

  const fetchBookingDeatils = async () => {
    let bookingData = {
      "bookingId": bookingId && bookingId,
      "passengerPricing": true
    }

    FlightSearchService.getTicketDetails(bookingData).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        setTicketDetails(result);
        setIsLoading(false)
        setFareDetailsId(result.bookingDetails.fareRuleId)
        setFareDetails(result.fareDetail);
        setListOfFlight(result.listOfFlight);
        setLayover(result.layover);
        let data = result.travellerInfos.pnrDetails;
        let pnrlist = "";
        var details = Object.entries(data);
        for (let i = 0; i < details.length; i++) {
          pnrlist += details[i][0] + "-" + details[i][1] + ",";
        }
      
        setDetails(pnrlist.split(","));
      } else {
       
        setFareDetails();
        setListOfFlight([]);
        setTicketDetails();
        setLayover([]);
      }
    }).catch((error) => {
      console.log(error)

    });
  }

  const fetchFareDetailsData = async () => {
    let bookingData = {
      "id": fareDetailsId,
      "flowType": "SEARCH"
    }

    FlightSearchService.SearchRule(bookingData).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        console.log(result)
      } else {
        setErrorMsg(response.data.message.message)

      }
    }).catch((error) => {
      console.log(error)

    });
  }
  const OpenFareRules = () => {
    setFareRule(true);
    fetchFareDetailsData();

  }
  const closeFareRules = () => {
    setFareRule(false);

  }

  const dowanloadModalClose = () => {
    setIsOpen(false);
  }
  
  const dowanloadModalOpen = (action) => {
    setIsOpen(true);
    setAction(action);
   
  };
  
  const handleOnSubmit = async (values, { resetForm }) => {
    console.log("evennt", values)
    switch (action) {
    case "DownloadPDF":
      navigate(`/agent/ticketpdf/${bookingId}`)
      break;
      case "PrintTicket":
      navigate("/agent/ticketpdf")
      break;
    case "EmailTicket":
      // Logic for emailing ticket
      break;
    case "SMSTicket":
      // Logic for sending ticket via SMS
      break;
    case "InvoiceForAgency":
      navigate(`/agent/invoice/${bookingId}`)
      break;
    case "InvoiceForCustomer":
      // Logic for showing invoice for customer
      break;
    case "GoToCartDetails":
      navigate(`/agent/manage-carts/cart-detail/${bookingId}`)
      break;
    default:
     
  }

     setTimeout(() => {
      // Navigate("/agent/ticketpdf")
      setIsOpen(false)
     }, 200);
     
  }



  let BASE_URL = '';
  if (process.env.REACT_APP_SERVER_ENV === 'Local') {
    BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
  } else if (process.env.REACT_APP_SERVER_ENV === 'Live') {
    BASE_URL = process.env.REACT_APP_LIVE_API_URL;
  }

  //let amount=5000
  const checkoutHandler = async () => {

   const bookingRequest =JSON.parse(localStorage.getItem('bookingRequest'))
    const userData = JSON.parse(localStorage.getItem('userData'));


    let getapiurl = `${BASE_URL}api/payment/getkey`;
    let checkoutapiurl = `${BASE_URL}api/payment/checkout`;
    const amount = bookingRequest.amount;


    const { data: { data } } = await axios.get(getapiurl)

    const { data: { order } } = await axios.post(checkoutapiurl, { amount })
const options = {
      key: data.RAZORPAY_API_KEY,
      amount: bookingRequest.amount,
      currency: "INR",
      name: "wizotrip booking",
      description: "Air Ticket Booking",
      image: "https://awsbizz.sgp1.cdn.digitaloceanspaces.com/wtl/wNOpEGI3mqLp8345L98sC6oII0OTsScUVEfjwegA.png",
      order_id: order.id,
      callback_url: `${BASE_URL}api/payment/paymentVerification/`,
      prefill: {
        name: userData?.data?.firstName + " " + userData?.data?.lastName,
        email: userData?.data?.email,
        contact: userData?.data?.mobileNumber,
      },
      notes: {
        "address": "Iswarkrupa Society, Hatkeshwar"
      },
      theme: {
        "color": "#121212"
      },
    };

    const razor = new window.Razorpay(options);
    razor.on('payment.failed', function (response) {
      let values = {
        bookingId: bookingRequest.bookingId,
        orderId: order.id, // Assuming order.id is available in the scope
        status: 2
      }
      FlightSearchService.UpdateTransactions(values).then(async (response) => {
        if (response.status === 200) {

          if (response.data.status === true) {
             setTimeout(() => {
              navigate("/Error")
            }, 200)

          } else {
            let errorMessage = response.data.message ? response.data.message : "someting wrong"
            console.log(errorMessage)
          }
        } else {
          let errorMessage = response.data.message;
          console.log(errorMessage)
        }

      }).catch((error) => {
        let errorMessage = error.message
        console.log(errorMessage)
      });

    });

    razor.open();

    // Event === "modal-close" ? alert("close") : alert("open");
  }

 const handleStatusChange = async()=>{
    const data = {
      bookingId:bookingId,
      status:"0"
    }
    if(testPnr && unCofirmed){
      FlightSearchService.ChangeBookingStatus(data).then(async (response) => {
        if (response.data.status === true) {
          const result = response.data.data;
          handleClose();
     }else{
         alert('Something went wrong');
        }
      }).catch((e) => {
        console.log(e);
      });
    }
 }
 
    
  return (
    <>
      <Layout />
      <div className="main-content app-content">
      {isLoading===true ? <div className='loader'> <Sucssesloder headers={"Booking Details"} /></div>  :(<>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-6 mt-3">
                    <h4 className='text-success'>
  Booking {unCofirmed ? <span style={{color:"red"}}>UNCONFIRMED</span> : bookingId==="CANCELLED"? <span style={{color:"red"}}>CANCELLED</span>: "OnHold"}
</h4>

                        <p>Booking ID :{bookingId && bookingId}</p>
                    </div>
                    <div className="col-6 mt-3">
                            
                            <button type="button" class="btn btn-primary dropdown-toggle float-end" data-bs-toggle="dropdown" aria-expanded="false">More Option</button>
                            <ul className="dropdown-menu">
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("DownloadPDF")}><i className="fa-solid fa-download"></i> Download as PDF</a></li>
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("PrintTicket")}><i className="fa-solid fa-print"></i> Print Ticket</a></li>
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("EmailTicket")}><i className="fa-solid fa-envelope"></i> Email Ticket</a></li>
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("SMSTicket")}><i className="fa-regular fa-envelope"></i> SMS Ticket</a></li>
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("InvoiceForAgency")}><i className="fa-solid fa-file-invoice"></i> Invoice For Agency</a></li>
  <li><a className="dropdown-item" href="#"  target="_blank" onClick={() => dowanloadModalOpen("InvoiceForCustomer")}><i className="fa-solid fa-file-invoice"></i> Invoice For Customer</a></li>
  <li><a className="dropdown-item" href="#"   onClick={() => dowanloadModalOpen("GoToCartDetails")}><i className="fa-solid fa-cart-shopping"></i> Go to Cart Details</a></li>
</ul>
                            <button className="btn btn-success float-end me-2" onClick={checkoutHandler}>Pay Now</button>
                            <Button className="btn btn-primary float-end me-2" onClick={handleShow}>Un Hold</Button>
                            <Modal size="md" show={showModal} onHide={handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Unhold Options</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={testPnr} id="flexCheckChecked" 
                                        onChange={(e)=>setTestPnr(e.target.checked)}

                                        />
                                        <label className="form-check-label fw-bold" for="flexCheckChecked">
                                            TESTPNR <span className="flightnumber">(BLR-DEL)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value={unCofirmed} id="flexCheckChecked" 
                                          onChange={(e)=>setUnCofirmed(e.target.checked)}
                                        />
                                        <label className="form-check-label fw-bold" for="flexCheckChecked">
                                            Confirm to proceed
                                        </label>
                                    </div>
                                </Modal.Body>
                            <Modal.Footer>
                                <Button type="submit" variant="primary" onClick={handleStatusChange}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                            </Modal>
                             
                    </div>
                </div>
                <hr></hr>
                <div className='card list-item'>
                  <div className='card-body'>
              <div className='row'>
                <div className='col-6'>
                  {listOfFlight && listOfFlight.length > 0 && listOfFlight[0].flightDetails && // Check if listOfFlight is defined and not empty, and if flightDetails exists
                    <p className='flightname mb-0'>
                      {listOfFlight[0].flightDetails.departureAirportInformation.city} <i className="fa-solid fa-arrow-right-long"></i> {listOfFlight[listOfFlight.length - 1].flightDetails.arrivalAirportInformation.city} <span className='flightnumber'>On {Moment(listOfFlight[0].departureDate).format('ddd, MMM DD YYYY')}</span>
                    </p>
                  }
                </div>
                {layover && layover.length !== 0 &&
                  <div className='col-6'>
                    <p className='float-end fs-12 fw-bold'><i className="fa-solid fa-clock me-2"></i>  {layover[0].totalTravellTime}</p>
                  </div>
                }

                </div>
                  
                    <hr></hr>
                    <div className='row'>
                    <div className='col-12'>
                  {listOfFlight && listOfFlight.map((flightValue, flightKey) => (
                    <div className='row' key={flightValue.flightDetails?.flightId}>
                      <div className='col-sm-2'>
                        <div className='d-flex'>
                          <img className='flight-flag' src={flightValue.flightDetails?.flightLogo} alt='' />
                          <div className=''>
                            <div className="flightname">{flightValue.flightDetails?.flightDescription.name}</div>
                            <div className="flightnumber">{`${flightValue.flightDetails?.flightCode}-${flightValue.flightDetails?.flightNumber}`}</div>
                          </div>
                        </div>
                      </div>

                      <div className='col-10 d-flex'>
                        <div className="text-center" style={{ width: "50%" }}>
                          <div className="coltime">{flightValue.flightDetails?.departureTime}</div>
                          <div className="graysmalltext">{flightValue.flightDetails?.departureAirportInformation?.code}</div>
                          <div className="graysmalltext">{flightValue.flightDetails?.departureAirportInformation?.terminal}</div>
                        </div>

                        <div className="text-center" style={{ width: "50%" }}>
                          <div className="nostops small">{flightValue.flightDetails.flightDuration}</div>
                          <div className="graysmalltext text-danger">{flightValue.flightDetails.flightStops ? flightValue.flightDetails.flightStops : 'Non Stop'}</div>
                        </div>

                        <div className="text-center" style={{ width: "50%" }}>
                          <div className="coltime">{flightValue.flightDetails?.arrivalTime}</div>
                          <div className="graysmalltext">{flightValue.flightDetails.arrivalAirportInformation.code}</div>
                          <div className="graysmalltext">{flightValue.flightDetails.arrivalAirportInformation.terminal}</div>
                        </div>
                      </div>

                      <div>
                        <h6>Baggage Information</h6>
                        <h6>Adult - <span className='graysmalltext'>Check-in: {flightValue?.passengerSSRDetails?.baggageInformation.iB}, Cabin: {flightValue.passengerSSRDetails.baggageInformation.cB} <Link to="/web-checkin">Click Here</Link> to Web Check-in</span></h6>
                      </div>

                      {listOfFlight && listOfFlight.length > 1 && flightKey < listOfFlight.length - 1 &&
                        <div className='re-layover mb-3' style={{ backgroundColor: "#e1dff7", padding: "4px 0", fontSize: "13px", borderRadius: "15px", marginTop: "8px" }}>
                          {parseInt(layover[flightKey].layover) < 2 ? <p className='text-center mb-0'>Layover {layover[flightKey].layover}</p> : <p className='text-center mb-0'>Require to change Plane {layover[flightKey].layover}</p>}
                        </div>
                      }
                    </div>
                  ))}
                </div>  
                    </div>  
                  </div>
                </div>
                {fareRule === true ? <button className='btn btn-info-ghost btn-wave waves-effect waves-light' onClick={closeFareRules}>Fare Rules -</button> : <button className='btn btn-info-ghost btn-wave waves-effect waves-light' onClick={OpenFareRules}>Fare Rules +</button>}

                {fareRule === true ?
                <div className='card mt-4'>
                <div class="card-body">
                <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>Detailed Rules</button></p>
                {listOfFlight && listOfFlight.length > 0 && listOfFlight[0].flightDetails && // Check if listOfFlight is defined and not empty, and if flightDetails exists
                  <p><button className='btn btn-info-ghost btn-wave waves-effect waves-light'>

                    {listOfFlight[0].flightDetails.departureAirportInformation.city} - {listOfFlight[listOfFlight.length - 1].flightDetails.arrivalAirportInformation.city} <span className='flightnumber'></span>
                  </button></p>
                }

                <p className='text-danger'>Mentioned fees are Per Pax Per Sector</p>
                <p className='text-danger'>Apart from airline charges, GST + RAF + applicable charges if any, will be charged. </p>

                {errorMsg ? errorMsg : <div className="table-responsive mt-5">
                  <table className="table text-nowrap w-100">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Cancellation Fee</th>
                        <th>Date Change Fee</th>
                        <th>No Show</th>
                        <th>Seat Chargeable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>All</td>
                        <td>
                          <p>3,000 +</p>
                          <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                          <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower </p>
                        </td>
                        <td>
                          <p>3,000 +</p>
                          <p>Cancellation permitted 25 Hrs before scheduled departure</p>
                          <p>Cancellation Penalty : INR 3,000/- or basic fare whichever is lower + Fare Difference </p>
                        </td>
                        <td>
                          <p>Fees As Per Airline Rule + Surcharges</p>
                        </td>
                        <td> As Per Airline</td>
                      </tr>
                    </tbody>
                  </table>
                </div>}

              </div>
                </div>: ""}
                <div className='card mt-4'>
                    <div class="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className="card-title">
                                    <h5 className='fw-bold'>Passenger Details</h5>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-5">
                            <table className="table text-nowrap w-100">
                              <thead>
                                <tr>
                                  <th>Sr.</th>
                                  <th>Print</th>
                                  <th>Name,DOB & Passport & FF</th>
                                  <th>PNR, Ticket No. & Status</th>
                                  <th>Meal, Baggage, Seat & Other Preference</th>
                                  <th>Document Id</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td><i class="fa-solid fa-print"></i></td>
                      <td className='fw-bold'>{ticketDetails && ticketDetails.travellerInfos.title},{ticketDetails && ticketDetails.travellerInfos.firstName}{ticketDetails && ticketDetails.travellerInfos.lastName}</td>
                      <td className='fw-bold'>
                        <td>{details && details.map((item, index) => (
                          <div key={index}>{item}</div>
                        ))}</td>
                      </td>
                      <td className='fw-bold'>DEL-BOM: <span className="graysmalltext">Seat- 55D,</span></td>
                      <td className='fw-bold'>NA</td>
                    </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='card mt-4 w-50'>
                  <div class="card-body ">
                    <h5 className='fw-bold'>Fare Summary</h5>
                    <hr></hr>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Base fare</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.baseFare}</span></p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Taxes and fees</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.texes}</span></p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Meal, Baggage & Seat</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.SSRP? fareDetails.SSRP:"0"}</span> </p>
                      </div>
                      <hr></hr>
                    </div>
                    <div className='row' >
                      <div className='col-6'>
                        <h6>Total</h6>
                      </div>
                      <div className='col-6 '> 
                      <p className='float-end'>{currency} <span style={{ marginLeft: "10px" }}>{fareDetails && fareDetails.totalFare}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card mt-4'>
                  <div class="card-body ">
                    <div>
                      <h4>Important Information</h4>
                      <div className='mt-4'>
                        <p>- You should carry a print-out of your booking and present for check-in.</p>
                        <p>- Date & Time is calculated based on the local time of city/destination.</p>
                        <p>- Use the Reference Number for all Correspondence with us.</p>
                        <p>- Use the Airline PNR for all Correspondence directly with the Airline</p>
                        <p>- For departure terminal please check with airline first.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Modal size="md" show={isOpen} onHide={dowanloadModalClose} centered>
        <Formik
  initialValues={reInitialValues}
  onSubmit={handleOnSubmit}
  enableReinitialize={true}
>
  {({ classes, errors, touched, values, handleChange, setFieldValue, handleSubmit }) => (
    <Form ref={nameForm}>
      <div className='container'>
        <div className=''>
          <div className="errmodal-header text-center">
            <h2 className="errmodal-title w-100 fw-bold">Download PDF</h2>
           
              <FormControlLabel
                control={<Checkbox checked={values.withPrice} onChange={handleChange} name="withPrice" />}
                label="With Price"
              />
              <FormControlLabel
                control={<Checkbox checked={values.withAgency} onChange={handleChange} name="withAgency" />}
                label="With Agency"
              />
              <FormControlLabel
                control={<Checkbox checked={values.withGST} onChange={handleChange} name="withGST" />}
                label="With GST"
              />
              <FormControlLabel
                control={<Checkbox checked={values.oldPrintCopy} onChange={handleChange} name="oldPrintCopy" />}
                label="Old Print Copy"
              />
             </div>
           <div className='errmodal-footer text-center'>
            <button type="submit" className="btn text-center btn-success print-ticket">OK</button>
          </div>
        </div>
      </div>
    </Form>
  )}
</Formik>

        </Modal>
        </>)}
            </div>
   
   
   
    </>
  )
}
