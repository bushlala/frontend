import React,{useState} from 'react';
//import { Link } from 'react-router-dom';
import Header from '../../../../Component/Layout/Agent/Header/Header';
import {Modal, Button} from 'react-bootstrap';
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar';
import Indigo from '../../../../assets/images/indigo.png';
import './FlightReviewBook.css';
import {Link,useNavigate,useParams } from 'react-router-dom';
import { FlightSearchService } from '../../../../Services/Agent/FlightSearch.Service'
import toast, { Toaster } from 'react-hot-toast';
import FlightDetail from './Component/FlightDetails'
import axios from "axios";
import { FieldArray,Form, Formik } from "formik";
import * as Yup from "yup";
import SeatMapModel from './Component/SeatMapModel';

export default function AgentFlightReviewBook() {
  const initialValues = {
    passangerInfo  : [
      {
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        passangerType : 'adult',
        passangerTypeName : '',
        seat : '',
        fee : '0',
        saveDetailStatus : "",
      },
    ],
    extraInfo : [
      {
        from:"Delhi",
        to:"Rajkot",
        date: "January 15, 2024",
        mealBaggageInfo : [
          {
            baggage: "",
            meals: "",
          }
        ]
      }
    ]
  }
  const validationSchema = Yup.object().shape({
    passangerInfo: Yup.array().of(
      Yup.object().shape({
        title: Yup.string()
          .required("Title is required"),
        firstName: Yup.string()
          .required("First name is required"),
        lastName: Yup.string()
          .required("Last name is required"),
        dateOfBirth: Yup.string()
          .required("date of birth is required")    
      })
    )
    // .test(
    //     'uniqueEmail',
    //     "Email already used please use anothor email",
    //     (value) => {
    //         if (!value) return true;
    //         const unique = value.filter((v, i, a) => a.findIndex((t) => (t.email === v.email)) === i);
    //         return unique.length === value.length;
    //     }
    // ),
  });
  const nameForm = React.useRef(null)
  const [reInitialValues, setReInitialValues] = React.useState(initialValues);
  const [showModal, setShowModal] = useState(false);
  const [flightMapInfo, setFlightMapInfo] = React.useState();
  const [passangerInfo,setPassangerInfo] = React.useState();
  const [flightMapIndex,setFlightMapIndex] = React.useState(0);

  const handleClose = () => setShowModal(false);
  
  //const handleShow = () => setShowModal(true);

  let BASE_URL = '';
  if(process.env.REACT_APP_SERVER_ENV==='Local'){
      BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
  }else if(process.env.REACT_APP_SERVER_ENV==='Live'){
      BASE_URL = process.env.REACT_APP_LIVE_API_URL;
  }

  let amount=5000
  const checkoutHandler = async (amount) => {

  let getapiurl=`${BASE_URL}api/payment/getkey`
  let checkoutapiurl=`${BASE_URL}api/payment/checkout`

  const { data: { data } } = await axios.get(getapiurl)
  // console.log('######################',checkoutapiurl)
  const { data: { order } } = await axios.post(checkoutapiurl,{amount})

  // console.log('#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',order)

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
  const [baseFarePrice, setBaseFarePrice] = React.useState(0);
  const [taxesFee, setTaxesFee] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [totalFee, setTotalFee] = React.useState(0);
  const [totalSeats,setTotalSeats] = React.useState();
  // React.useEffect(() => {
  //   let timerid;

  //   if (runtimer) {
  //     setcountdown(60 * 5);
  //     timerid = setInterval(() => {
  //       setcountdown((countdown) => countdown - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(timerid);
  //   }

  //   return () => clearInterval(timerid);
  // }, [runtimer]);

  // React.useEffect(() => {
  //   if (countdown < 0 && runtimer) {
  //     console.log("expired");
  //     setruntimer(false);
  //     setcountdown(0);
  //   }
  // }, [countdown, runtimer]);
  
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
          const result =  response.data.data;
          console.log("result",result);
          // Code for bagger and meal information
          var extraInfo = [];
          result.listOfFlight && result.listOfFlight.forEach((flightDetail, index) => {
            var tmp={
              from:"",
              to:"",
              date:"",
              flightName:"",
              flightNumber:"",
              flightCode:"",
              flightLogo:"",
              mealBaggageInfo:"",
              seats : "No Seat Selected",
              baggageList : [],
              mealList:[]
            };
            tmp.from          = flightDetail.departureAirportInformation.city;
            tmp.to            = flightDetail.arrivalAirportInformation.city;
            tmp.date          = flightDetail.departureDate;
            tmp.flightName    = flightDetail.flightDescription.name;
            tmp.flightNumber  = flightDetail.flightNumber;
            tmp.flightCode    = flightDetail.flightCode;
            tmp.flightLogo    = flightDetail.flightLogo;
            tmp.seats         = ""; 
            tmp.baggageList   = flightDetail.ssrInfo.BAGGAGE ? flightDetail.ssrInfo.BAGGAGE : [];
            tmp.mealList      = flightDetail.ssrInfo.MEAL ? flightDetail.ssrInfo.MEAL : [];
            var mealBaggageInfo = [];
            for (var i=0; i < result.seasionDetail.paxInfo.ADULT; i++) {
              const tmp1 =  {
                memberName : `Adult ${i+1}`,
                baggage: "",
                meals: "",
              }
              mealBaggageInfo.push(tmp1);
            }
            for (var i=0; i < result.seasionDetail.paxInfo.INFANT; i++) {
              const tmp1 =  {
                memberName : `INFANT ${i+1}`,
                baggage: "",
                meals: "",
              }
              mealBaggageInfo.push(tmp1);
            }
            tmp.mealBaggageInfo = mealBaggageInfo;
            extraInfo.push(tmp)
          });
          console.log("extraInfo",extraInfo);
          let passangerInfo = [];
          // For Adult
          for (var i=0; i < result.seasionDetail.paxInfo.ADULT; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passangerType : 'adult',
              passangerTypeName : `ADULT ${i+1}`,
              seat : '',
              fee : '0',
              saveDetailStatus :"",
            }
            passangerInfo.push(tmp)
          }
          // For Childern
          for (var i=0; i < result.seasionDetail.paxInfo.CHILD; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passangerType : 'children',
              passangerTypeName : `CHILDREN ${i+1}`,
              seat : '',
              fee : '0',
              saveDetailStatus :"",
            }
            passangerInfo.push(tmp)
          }
          // For Infants
          for (var i=0; i < result.seasionDetail.paxInfo.INFANT; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passangerType : 'infant',
              passangerTypeName : `INFANT ${i+1}`,
              seat : '',
              fee : '0',
              saveDetailStatus :"",
            }
            passangerInfo.push(tmp)
          }
          reInitialValues.passangerInfo = passangerInfo;
          reInitialValues.extraInfo = extraInfo;
          setPassangerInfo(passangerInfo);
          setReInitialValues(reInitialValues);
          setBookingReviewData(result);
          setBaseFarePrice(result?.fareDetail?.baseFare);
          setTaxesFee(result?.fareDetail?.taxesAndFees);
          setTotal(result?.fareDetail?.payAmount);
        }else{
          toast.error('Something went wrong');
        }
    }).catch((e) => {
        console.log(e);
        toast.error('Something went wrong');
    });
  };

  

  const openSeatMapModel = (flightMapInfo,index) => {
    setShowModal(true);
    setFlightMapInfo(flightMapInfo);
    setFlightMapIndex(index);
  }

  const proceedForSeat = (totalSeats,totalFee,passangerInfoModel)=>{
    //setTotalSeats(totalSeats);
    reInitialValues.extraInfo[flightMapIndex].seats = totalSeats;
    setReInitialValues(reInitialValues);
    setShowModal(false);
  }

  const handleOnSubmit = async (values, { resetForm }) => {
    console.log(values);
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
                  fareDetail={bookingReviewData.fareDetail}
                />
              }

              <div className="page-header">
                  <h4 className="my-auto">Passenger Details</h4>
                  <div className=''>
                      <button type='button' className='btn btn-danger re-butoon'>Clear</button>
                      <button type='button' className='btn btn-danger'>Import</button>
                  </div>
              </div>
              <Formik
                initialValues={reInitialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
                enableReinitialize={true}
              >
                {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                  <Form ref={nameForm}>
                    <div className='flight-item-list'>
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                      <FieldArray
                        name="passangerInfo"
                        render={arrayHelpers => {
                          const passangerInfo = values.passangerInfo;
                          console.log("passangerInfo",passangerInfo);
                          return (
                            <div>
                                {
                                passangerInfo && passangerInfo.length > 0 
                                ? passangerInfo.map((user, index) => (
                                    <div className="accordion-item mb-3">
                                      <h2 className="accordion-header error" id={`flush-headingOne${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`}>
                                            {
                                              values.passangerInfo[index].passangerType==='adult' &&
                                              'Adult 1 (12 + yrs)'
                                            }
                                            {
                                              values.passangerInfo[index].passangerType==='children' &&
                                              'Children 1 (12 - yrs)'
                                            }
                                            {
                                              values.passangerInfo[index].passangerType==='infant' &&
                                              'Infant 1 (0 + 2yrs)'
                                            }
                                        </button>
                                      </h2>
                                      <div id={`flush-collapseOne${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne${index}`} data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            
                                            <div className="row gy-4">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                    <label for="input-label" className="form-label">Title*</label> 
                                                    <select 
                                                      className="form-select" 
                                                      aria-label="Default select example"
                                                      id={`passangerInfo.${index}.title`}
                                                      name={`passangerInfo.${index}.title`}
                                                      onChange={handleChange}
                                                      value={values.passangerInfo[index].title}
                                                    >
                                                      <option selected="">Select</option>
                                                      <option value="1">Mr.</option>
                                                      <option value="2">Mrs.</option>
                                                      <option value="3">Ms.</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                  <label for="input-label" className="form-label">First Name*</label>
                                                  <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="input-label"
                                                    name={`passangerInfo.${index}.firstName`}
                                                    onChange={handleChange}
                                                    value={values.passangerInfo[index].firstName}
                                                  />
                                                </div>
                                                
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                  <label for="input-placeholder" className="form-label">Last Name*</label>
                                                  <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="input-label"
                                                    name={`passangerInfo.${index}.lastName`}
                                                    onChange={handleChange}
                                                    value={values.passangerInfo[index].lastName} 
                                                  />
                                                </div>
                                                {
                                                  values.passangerInfo[index].passangerType==='infant' &&
                                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                      <label for="input-placeholder" className="form-label">DOB</label>
                                                      <input 
                                                        type="date" 
                                                        className="form-control"
                                                        id="input-label"
                                                        name={`passangerInfo.${index}.dateOfBith`}
                                                        onChange={handleChange}
                                                        value={values.passangerInfo[index].dateOfBirth}
                                                      />
                                                    </div>
                                                }
                                            </div>
                                            <div className='accordion-footer mt-3'>
                                                <input 
                                                  type='checkbox' 
                                                  id={`passangerInfo.${index}.saveDetailStatus`}
                                                  name={`passangerInfo.${index}.saveDetailStatus`}
                                                  onChange={handleChange}
                                                  value={values.passangerInfo[index].saveDetailStatus}
                                                /> 
                                                <label for={`passangerInfo.${index}.saveDetailStatus`}> Save Passenger Details  </label>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                : null}
                            </div>
                            
                          );
                        }}
                      />

                      <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Add Baggage, Meal & Other Services to Your Travel
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                            <FieldArray
                              name="extraInfo"
                              render={arrayHelpers => {
                                const extraInfo = values.extraInfo;
                                console.log("extraInfo1",extraInfo);
                                return (
                                  <div>
                                    {
                                      extraInfo && extraInfo.length > 0 
                                      ? extraInfo.map((extra, index) => (
                                        <div className='mb-4'>
                                          <p className="bagNmeal-flightInfo-positionHandle mb-4">
                                              <b className="bagNmeal-cityInfo-positionHandle">
                                                <span>{extra.from}</span>
                                                <span className="ars-arright bagNmeal-arrowright-positionHandle">→</span> 
                                                <span>{extra.to}</span>
                                              </b>
                                              <span className="graycolor bagNmeal-dateInfo-positionHandle fw-normal muted"> on {extra.date}</span>
                                          </p>
                                          {
                                            extra.mealBaggageInfo && extra.mealBaggageInfo.length !== 0 && extra.mealBaggageInfo.map((mealBaggage, index) => (
                                              <div className='row mb-4'>
                                                  <div className='col-xl-2'>
                                                    <h6 className='mt-4'>{mealBaggage.memberName}</h6>
                                                  </div>

                                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                      <label for="input-label" className="form-label">Baggage Information </label> 
                                                      <select 
                                                        className="form-select" 
                                                        aria-label="Default select example"
                                                      >
                                                        <option value="">--Select Baggage--</option>
                                                        {
                                                          extra.baggageList && extra.baggageList.length > 0 && extra.baggageList.map((baggageInfo, index) => (
                                                            <option value={baggageInfo.code}>{`${baggageInfo.desc} (${baggageInfo.amount})`}</option>
                                                          ))
                                                        }
                                                      </select>
                                                  </div>

                                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                      <label for="input-label" className="form-label">Select Meal </label>
                                                      <select 
                                                        className="form-select" 
                                                        aria-label="Default select example"
                                                      >
                                                        <option value="">--Meal Preferences--</option>
                                                        {
                                                          extra.mealList && extra.mealList.length > 0 && extra.mealList.map((mealInfo, index) => (
                                                            <option value={mealInfo.code}>{`${mealInfo.desc} (${mealInfo.code})`}</option>
                                                          ))
                                                        }  
                                                      </select>
                                                  </div>
                                              </div>
                                            ))
                                          } 
                                        </div> 
                                      ))
                                      : null
                                    }
                                  </div>
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Select Seats (Optional)
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                              <div className='gy-3 row'>
                                {
                                  values.extraInfo && values.extraInfo.length > 0 && values.extraInfo.map((extra, index) => (
                                    <div className='col-12'>
                                      <div className='row align-items-center'>  
                                        <div className='col-md-4'>
                                            <p className="bagNmeal-flightInfo-positionHandle mb-0">
                                                <b className="bagNmeal-cityInfo-positionHandle">
                                                  <span>{extra.from}</span>
                                                  <span className="ars-arright bagNmeal-arrowright-positionHandle">→</span> 
                                                  <span>{extra.to}</span>
                                                </b>
                                                <span className="graycolor bagNmeal-dateInfo-positionHandle fw-normal muted"> on {extra.date}</span>
                                            </p>
                                        </div>
                                        <div className='col-lg-4'>
                                            <p className='mb-0'>
                                              {extra.seats?extra.seats:"Seat Not Selected"}
                                            </p>
                                        </div>
                                        <div className="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                          <Button 
                                            className="btn-danger re-seat" 
                                            onClick={()=>openSeatMapModel(extra,index)}
                                          >Show Sheet Map</Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                }
                              </div>  
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="gstnumber">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gst-collapseOne" aria-expanded="false" aria-controls="gst-collapseOne">
                            GST Number for Business Travel (Optional)
                          </button>
                        </h2>
                        <div id="gst-collapseOne" className="accordion-collapse collapse" aria-labelledby="gstnumber" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">
                              
                              <div className="row gy-4">
                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label for="input-label" className="form-label">FRegistration Number</label>
                                      <input type="text" className="form-control" id="input-label" />
                                  </div>
                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label for="input-placeholder" className="form-label">Registered Company Name</label>
                                      <input type="text" className="form-control" id="input-label" />
                                  </div>
                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label for="input-placeholder" className="form-label">Registered Email</label>
                                      <input type="text" className="form-control" id="input-label" />
                                  </div>
                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label for="input-placeholder" className="form-label">Registered Phone</label>
                                      <input type="text" className="form-control" id="input-label" />
                                  </div>
                                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                      <label for="input-placeholder" className="form-label">Registered Address</label>
                                      <input type="text" className="form-control" id="input-label" />
                                  </div>
                              </div>
                              <div className='accordion-footer mt-3'>
                                  <input type='checkbox' id='gst-check' /> <label for='gst-check'> Save GST Details  </label>
                              </div>
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
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label for="input-label" className="form-label">Email*</label> 
                                    <input type="email" className="form-control" id="input-label" placeholder='demo@gmail.com' />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <label for="input-label" className="form-label">Phone*</label>
                                    <input type="text" className="form-control" id="input-label" placeholder='7845120369' />
                                </div>
                                <div className="form-check">
                                    <input className="me-2" type="radio" value="" id="checkebox-sm"  />
                                        <label className="" for="checkebox-sm">
                                            I have a GST Number
                                        </label>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='card-title d-flex justify-content-between'>
                                {/* <Button className='btn btn-danger' onClick={() => checkoutHandler(amount)}>5000 Pay Now</Button> */}
                                <Link  className='btn btn-danger'> Back </Link>
                                <Link to='/agentreview'  className='btn btn-danger'> Proceed To Review </Link>
                            </div>
                          </div>  
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>

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
                                <h6 className='float-end'>
                                  <i className="fa-solid fa-indian-rupee-sign"></i>{baseFarePrice}
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
                                  <i className="fa-solid fa-indian-rupee-sign"></i>{taxesFee}
                                </h6>
                              </div>
                            </div>

                            <hr></hr>
                            <div className='row d-flex'>
                              <div className="col">
                                <h6 className=''>Amount to Pay</h6>
                              </div>
                              <div className="col">
                                <h6 className='float-end'>
                                  <i className="fa-solid fa-indian-rupee-sign"></i>{total}
                                </h6>
                              </div>
                            </div>
                          <hr></hr>
                          <div className="graysmalltext text-danger mb-3"> <i className="fa-solid fa-circle-info"></i> You dont't have sufficient balance</div>
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

        </div>

        <div className="open-button text-center">
          Your session will expire in <p>{`${countdown}`} min</p>
        </div>
      </div>
    </div>
    {
      showModal && 
      <SeatMapModel
        showModal = {showModal}
        handleClose = {handleClose}
        proceedForSeat = {proceedForSeat}
        //handleClickSetPassanger = {handleClickSetPassanger}
        bookingId = {bookingReviewData?.seasionDetail?.bookingId}
        flightMapInfo = {flightMapInfo}
        flightMapIndex = {flightMapIndex}
        passangerInfo = {passangerInfo}
        //selectPassanger = {selectPassanger}
      />
    }
    </>
  )
}
