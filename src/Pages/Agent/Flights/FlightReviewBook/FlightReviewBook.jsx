import React,{useState} from 'react'
//import { Link } from 'react-router-dom'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import Indigo from '../../../../assets/images/indigo.png'
import './FlightReviewBook.css'
import {Link,useNavigate,useParams } from 'react-router-dom';
import { FlightSearchService } from '../../../../Services/Agent/FlightSearch.Service'
import toast, { Toaster } from 'react-hot-toast';
import FlightDetail from './Component/FlightDetails'
import { Button } from 'react-bootstrap'
import axios from "axios";

export default function AgentFlightReviewBook() {
  let BASE_URL = '';
if(process.env.REACT_APP_SERVER_ENV==='Local'){
    BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
}else if(process.env.REACT_APP_SERVER_ENV==='Live'){
    BASE_URL = process.env.REACT_APP_LIVE_API_URL;
}

   let amount=5000
  const checkoutHandler = async (amount) => {
    console.log('######################',amount)


    let getapiurl=`${BASE_URL}api/payment/getkey`
    let checkoutapiurl=`${BASE_URL}api/payment/checkout`

    const { data: { data } } = await axios.get(getapiurl)
    const { data: { order } } = await axios.post(checkoutapiurl, {
        amount 
    })
    console.log(data)

    const options = {
        key:data.RAZORPAY_API_KEY,
        amount: order.amount,
        currency: "INR",
        name: "wizotrip booking",
        description: "Air Ticket Booking",
        image: "https://awsbizz.sgp1.cdn.digitaloceanspaces.com/wtl/wNOpEGI3mqLp8345L98sC6oII0OTsScUVEfjwegA.png",
        order_id: order.id,
        callback_url: `${BASE_URL}api/payment/paymentVerification/`,
        prefill: {
            name: "Nishit",
            email: "nishitengineer0@gmail.com",
            contact: "9662989748"
        },
        notes: {
            "address": "Iswarkrupa Society, Hatkeshwar"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
 }

  const navigate = useNavigate();
  const { ruleId } = useParams();
  console.log('ruleIds',ruleId);
  const [bookingReviewData, setBookingReviewData] = useState();
  // for timers
  const [countdown, setcountdown] = React.useState(60 * 5);
  const [runtimer, setruntimer] = React.useState(true);

  React.useEffect(() => {
    let timerid;

    if (runtimer) {
      setcountdown(60 * 5);
      timerid = setInterval(() => {
        setcountdown((countdown) => countdown - 1);
      }, 1000);
    } else {
      clearInterval(timerid);
    }

    return () => clearInterval(timerid);
  }, [runtimer]);

  React.useEffect(() => {
    if (countdown < 0 && runtimer) {
      console.log("expired");
      setruntimer(false);
      setcountdown(0);
    }
  }, [countdown, runtimer]);
  
  //const seconds = (countdown % 60).String().padstart(2, 0);
  //const minutes = string(math.floor(countdown / 60)).padstart(2, 0);

  React.useEffect(() => {
    if(ruleId){
      getBookingReviewData(ruleId);
    }
  }, [ruleId])
  

  const getBookingReviewData = async (ruleId) => {
    console.log("ruleId",ruleId);
    var requestData = {
      priceIds : [ruleId]
    }
    FlightSearchService.BookingReview(requestData).then(async (response) => {
        if(response.data.status){
          console.log("response",response.data.data);
          setBookingReviewData(response.data.data);
        }else{
          toast.error('Something went wrong');
        }
    }).catch((e) => {
        console.log(e);
        toast.error('Something went wrong');
    });
  };
  return (
    <>
    <Header />
    <Sidebar />
    <div className="main-content app-content flightreview mb-5">
      <div className="container-fluid">
        <div className="row">
          <div className='col-9'>
              <div className="page-header">
                  <h4 className="my-auto">Flight Details</h4>
                  <div>
                    <Link onClick={() => navigate(-1)} className="my-auto text-danger" >Back to Search</Link>
                    
                  </div>
              </div>
              {
                bookingReviewData &&
                bookingReviewData.listOfFlight &&
                bookingReviewData.listOfFlight.length !=0 &&
                <FlightDetail
                  listOfFlight={bookingReviewData.listOfFlight}
                />
              }
              <div className="page-header">
                  <h4 className="my-auto">Passenger Details</h4>
                  <div className=''>
                      <button type='button' className='btn btn-danger re-butoon'>Clear</button>
                      <button type='button' className='btn btn-danger'>Import</button>
                  </div>
              </div>
              <div className='flight-item-list'>
                <div className='card'> 
                  <div className="card-header">
                      <p className='flightname mb-0'>Adult 1 (12 + yrs)</p>
                  </div>
                  <div className='card-body'>
                      <div className="row gy-4">
                          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">Title*</label> 
                              <select class="form-select" aria-label="Default select example">
                                      <option selected="">Select
                                      </option>
                                      <option value="1">Mr.</option>
                                      <option value="2">Mrs.</option>
                                      <option value="3">Ms.</option>
                              </select>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">First Name*</label>
                              <input type="text" class="form-control" id="input-label" />
                          </div>
                          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-placeholder" class="form-label">Last Name*</label>
                              <input type="text" class="form-control" id="input-label" />
                          </div>
                      </div>
                      <div className="card-title re-card-mib">
                          <p className='flightname p-3'>Onward - SSR Details (Optional)</p>
                      </div>
                      <div className="row gy-4">
                          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">Select Excess Baggage <span className='font-weight-bold fs-10'>(DEL - BOM)</span></label> 
                              <select class="form-select" aria-label="Default select example">
                                      <option selected="">--Select Baggage--
                                      </option>
                                      <option value="1">Mr.</option>
                                      <option value="2">Mrs.</option>
                                      <option value="3">Ms.</option>
                              </select>
                          </div>
                          <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">Meal <span className='font-weight-bold fs-10'>(DEL - BOM)</span></label>
                              <select class="form-select" aria-label="Default select example">
                                      <option selected="">--Meal Preferences--
                                      </option>
                                      <option value="1">Mr.</option>
                                      <option value="2">Mrs.</option>
                                      <option value="3">Ms.</option>
                              </select>
                          </div>
                          <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                              <label  class="fs-12 from-label d-flex">Seat</label>
                              <button className='btn btn-danger re-seat'>View Seat</button>
                          </div>
                          <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                              <label  class="fs-12 from-label d-flex">Seat</label>
                              <button className='btn btn-danger re-seat'>View Seat</button>
                          </div>
                      </div>
                  </div>
                </div>  
              </div>
              <div className='flight-item-list mt-3'>
                <div className='card'>
                    <div className="card-header">
                        <p className='flightname mb-0'>Contact Details</p>
                    </div>
                    <div className='card-body'>
                      <div className="row gy-4">
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">Email*</label> 
                              <input type="email" class="form-control" id="input-label" placeholder='demo@gmail.com' />
                          </div>
                          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <label for="input-label" class="form-label">Phone*</label>
                              <input type="text" class="form-control" id="input-label" placeholder='7845120369' />
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="" />
                                  <label class="form-check-label" for="checkebox-sm">
                                      I have a GST Number
                                  </label>
                          </div>
                      </div>
                      <hr></hr>
                      <div className='card-title'>
                          <Button className='btn btn-danger' onClick={() => checkoutHandler(amount)}>5000 Pay Now</Button>
                      </div>
                    </div>  
                </div>
              </div>
                                 
        </div>
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
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                            <hr></hr>
                            <div className='row d-flex'>
                              <div className="col">
                              <h6 className=''>Taxes and fees</h6>
                              </div>
                              <div className="col">
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                            <hr></hr>
                            <div className='row d-flex'>
                              <div className="col">
                              <h6 className=''>Amount to Pay</h6>
                              </div>
                              <div className="col">
                              <h6 className='float-end'><i class="fa-solid fa-indian-rupee-sign"></i>35,000</h6>
                              </div>
                            </div>
                          <hr></hr>
                          <div className="graysmalltext text-danger mb-3"> <i class="fa-solid fa-circle-info"></i> You dont't have sufficient balance</div>
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
                                <input type="text" class="form-control " id="input-label"/>
                                <button className='btn btn-danger btn-coupan'>Apply</button>
                             </div>
                             <p className='text-center graysmalltext mt-3'>No Discount Coupan Available</p>
                        </div>   
                      </div>   
                    </div>
                </div>
            </div>
        </div>
        <div className="open-button text-center">
        Your session will expire in
        <p>{`${countdown}`} min</p>
        </div>
      </div>
    </div>
    
    </>
  )
}
