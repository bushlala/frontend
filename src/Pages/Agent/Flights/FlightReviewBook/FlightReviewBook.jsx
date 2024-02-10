import React,{useState,useRef,useEffect} from 'react';
//import { Link } from 'react-router-dom';
import Header from '../../../../Component/Layout/Agent/Header/SearchHeader';
import {Modal, Button} from 'react-bootstrap';
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
import BookingReview from './Component/BookingReview';
import FareSummary from './Component/FareSummary';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
import { useSearchParams } from "react-router-dom";


export default function AgentFlightReviewBook() {
  const [errorMessage, setErrorMessage] = useState('');
  const seachQuery = useSearchParams()[0]
  const referenceNum = seachQuery.get("reference");
  const [confirmBookingData,setConfirmBookingData]= useState({})


  let initialValues = {
    isDomestic : true,
    bookingId : '',
    tripType : '',
    requestId : '',
    personalPhone : '',
    personalEmail : '',
    gstNumber : '',
    gstEmail : '',
    registeredName : '',
    mobile : '',
    address : '',
    isGst : '',
    paxInfo : {
      ADULT : '',
      CHILD : '',
      INFANT : '',
    },
    preferredFareType : '',
    flightStops : 1,
    listOfFlight : '',
    fareDetail : '',
    travellerInfo  : [
      {
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        passengerType : 'ADULT-1',
        passangerTypeName : '',
        //fee : '0',
        //saveDetailStatus : "",
        isSave : "",
        ssrMealInfos : [],
        ssrBaggageInfos : [],
        ssrSeatInfos : [],
        
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

  const nameForm = useRef(null)
  const navigate = useNavigate();
  const { ruleId } = useParams();
  const [bookingReviewData, setBookingReviewData] = useState();
  var [reInitialValues, setReInitialValues] = useState(initialValues);
  const [showModal, setShowModal] = useState(false);
  const [flightMapInfo, setFlightMapInfo] = useState();
  const [passangerInfo,setPassangerInfo] = useState();
  const [flightMapIndex,setFlightMapIndex] = useState(0);
  const [totalPrices, setTotalPrices] = useState({
    baseFarePrice : 0,
    taxesFee : 0,
    mealBaggageFee : 0,
    total : 0,
    seatPrice : 0,
  });
 
  const [activeStep,setActiveStep] = useState('first')
  const [allFlightSeats, setAllFlightSeats] = useState();
  // for timers
  const [countdown, setcountdown] = useState(60 * 5);
  //const [runtimer, setruntimer] = useState(true);

  const handleClose = () => setShowModal(false);
  
  //const handleShow = () => setShowModal(true);

  let BASE_URL = '';
  if(process.env.REACT_APP_SERVER_ENV==='Local'){
      BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
  }else if(process.env.REACT_APP_SERVER_ENV==='Live'){
      BASE_URL = process.env.REACT_APP_LIVE_API_URL;
  }

  //let amount=5000
  const checkoutHandler = async (bookingRequest) => {

    localStorage.setItem('bookingRequest', JSON.stringify(bookingRequest));
    const userData = JSON.parse(localStorage.getItem('userData'));
    
  
    let getapiurl=`${BASE_URL}api/payment/getkey`;
    let checkoutapiurl=`${BASE_URL}api/payment/checkout`;
    const amount = bookingRequest.amount;

  
    const { data: { data } } = await axios.get(getapiurl)

    const { data: { order } } = await axios.post(checkoutapiurl,{amount})
    console.log(bookingRequest.amount)

    const options = {
      key:data.RAZORPAY_API_KEY,
      amount: bookingRequest.amount,
      currency: "INR",
      name: "wizotrip booking",
      description: "Air Ticket Booking",
      image: "https://awsbizz.sgp1.cdn.digitaloceanspaces.com/wtl/wNOpEGI3mqLp8345L98sC6oII0OTsScUVEfjwegA.png",
      order_id: order.id,
     callback_url: `${BASE_URL}api/payment/paymentVerification/`,
        prefill: {
        name: userData?.data?.firstName+" "+userData?.data?.lastName,
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
    razor.on('payment.failed', function (response){
      alert("Payment Failed");
      let values ={
        bookingId: bookingRequest.bookingId,
        orderId: order.id, // Assuming order.id is available in the scope
        status: 2
      }
      FlightSearchService.UpdateTransactions(values).then(async (response) => {
         if (response.status === 200) {

            if (response.data.status === true) {
              console.log("response",response.data.data)
              alert(response.data.message)
              setTimeout(()=>{
                navigate("/Error")
              },200)

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
    
    Event ==="modal-close" ? alert("close"):alert("open"); 
  }

  // const handleAlert =()=>{
  //   alert("hhhhgh")
  // }
// const openModal =()=>{
//   if(className ==="modal-close" ? alert("close"):alert("open"))
//   razor.close();
// }


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

  useEffect(() => {
    if(ruleId){
      getBookingReviewData(ruleId);
    }
  }, [ruleId])
  
  const[layover,setLayover]=useState([]);

  const getBookingReviewData = async (ruleId) => {
    var requestData = {
      priceIds : [ruleId]
    }
    FlightSearchService.BookingReview(requestData).then(async (response) => {
        if(response.data.status){
          const result =  response.data.data;
          // Code for bagger and meal information
        
        setLayover(response.data.data.layover);
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
                memberName : `ADULT ${i+1}`,
                baggage: "",
                meals: "",
                seat : ""
              }
              mealBaggageInfo.push(tmp1);
            }
            for (var i=0; i < result.seasionDetail.paxInfo.INFANT; i++) {
              const tmp1 =  {
                memberName : `INFANT ${i+1}`,
                baggage: "",
                meals: "",
                seat : ""
              }
              mealBaggageInfo.push(tmp1);
            }
            tmp.mealBaggageInfo = mealBaggageInfo;
            extraInfo.push(tmp)
          });
         
          let travellerInfo = [];
          // For Adult
          for (var i=0; i < result.seasionDetail.paxInfo.ADULT; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passengerType : 'ADULT',
              passangerTypeName : `ADULT ${i+1}`,
              //seat : '',
              //fee : '0',
              // saveDetailStatus :"",
              isSave : "",
              ssrMealInfos: [],
              ssrBaggageInfos : [],
              ssrSeatInfos : [],
            }
            travellerInfo.push(tmp)
          }
          // For Childern
          for (var i=0; i < result.seasionDetail.paxInfo.CHILD; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passengerType : 'CHILD',
              passangerTypeName : `CHILD ${i+1}`,
              //seat : '',
              //fee : '0',
              //saveDetailStatus :"",
              isSave : "",
              ssrMealInfos: [],
              ssrBaggageInfos : [],
              ssrSeatInfos : [],
            }
            travellerInfo.push(tmp)
          }
          // For Infants
          for (var i=0; i < result.seasionDetail.paxInfo.INFANT; i++) {
            const tmp =  {
              title: "",
              firstName: "",
              lastName: "",
              dateOfBirth: "",
              passengerType : 'INFANT',
              passangerTypeName : `INFANT ${i+1}`,
              //seat : '',
              //fee : '0',
              //saveDetailStatus :"",
              isSave : "",
              ssrMealInfos: [],
              ssrBaggageInfos : [],
              ssrSeatInfos : [],
            }
            travellerInfo.push(tmp)
          }
       
          //console.log("result.fareDetail1",result.fareDetail);
          reInitialValues.travellerInfo = travellerInfo;
          reInitialValues.extraInfo = extraInfo;
          reInitialValues.isDomestic = result?.seasionDetail?.isDomestic;
          reInitialValues.bookingId = result?.seasionDetail?.bookingId;
          reInitialValues.requestId = result?.seasionDetail?.requestId;
          reInitialValues.paxInfo = result?.seasionDetail?.paxInfo;
          reInitialValues.preferredFareType = result?.seasionDetail?.preferredFareType;
          reInitialValues.tripType = 1; // How to get 
          reInitialValues.flightStops = 1; // How to get
          reInitialValues.listOfFlight = result.listOfFlight;
          reInitialValues.fareDetail = result?.fareDetail;
          reInitialValues.routeInfo = result?.routeInfo;
          setReInitialValues(reInitialValues);
          totalPrices.baseFarePrice = result?.fareDetail?.baseFare;
          totalPrices.taxesFee = result?.fareDetail?.taxesAndFees;
          totalPrices.total = result?.fareDetail?.payAmount;
          
          setPassangerInfo(travellerInfo);
          //console.log("travellerInfo",travellerInfo)
          setBookingReviewData(result);
        
          setTotalPrices(totalPrices);
        }else{
          toast.error('Something went wrong');
          //console.log("response", response.data)
        }
    }).catch((error) => {
        console.log(error);
        toast.error('Something went wrong');
        console.log("response", error.data)
    });
  };

  

  const openSeatMapModel = (flightMapInfo,index,values) => {
    setShowModal(true);
    setFlightMapInfo(flightMapInfo);
    setFlightMapIndex(index);
    setReInitialValues(values);
  }

  const proceedForSeat = (totalSeats,totalFee,passangerInfoModel)=>{
    // setTotalSeats(totalSeats);
    console.log("passangerInfoModel",totalSeats,totalFee,passangerInfoModel)
    reInitialValues.extraInfo[flightMapIndex].seats = totalSeats;
    //reInitialValues.travellerInfo = passangerInfoModel;
    setReInitialValues(reInitialValues);
    console.log("procces reInitialValues " ,reInitialValues);
    
    if(totalFee){
      console.log("totalFee",totalFee);
      setTotalPrices({ ...totalPrices,
        seatPrice: totalFee,
        total : parseInt(totalFee)+totalPrices.total
      });
    }
    
    setShowModal(false);

  }

  const handleClickStep = () => {
    if(activeStep === "first"){
      setActiveStep("second");
    }else if(activeStep === 'second'){
      setActiveStep("third");
    }
  }

  const handleChangeMealBaggageValue = (event,setFieldValue,values,fieldNamme,commonFieldName,indexKey,indexKey2) => {
    console.log("indexKey",indexKey);
    console.log("indexKey2",indexKey2);
    let extraPrice = 0;
    values.extraInfo.forEach((extra, extraIndex) => {
      const mealList = extra.mealList;
      const baggageList = extra.baggageList;
      extra.mealBaggageInfo.forEach((mealBaggage, mealBaggageIndex) => {
        if(indexKey !==extraIndex || indexKey2 !==mealBaggageIndex || commonFieldName !=="baggage"){
          if(mealBaggage.baggage){
            const baggageFound = baggageList.find(baggage => {
              return baggage.code === mealBaggage.baggage;
            });
            if(baggageFound){
              extraPrice+=baggageFound?.amount;
            }
          }
        }
        //console.log("indexKey2",indexKey2);
        if(indexKey !==extraIndex || indexKey2 !==mealBaggageIndex || commonFieldName !=="meal"){
          if(mealBaggage.meals){
            const mealFound = mealList.find(baggage => {
              return baggage.code === mealBaggage.meals;
            });
            if(mealFound){
              extraPrice+=mealFound?.amount;
            }
          }
        }
        
      });
    });
    console.log("extraPrice",extraPrice);
    if(commonFieldName === 'baggage'){
      const baggageList = reInitialValues.extraInfo[indexKey].baggageList;
      if(baggageList && baggageList.length !== 0){
    
        const baggageFound = baggageList.find(baggage => {
          return baggage.code === event.target.value;
        });
        if(baggageFound){
          setTotalPrices({ ...totalPrices,
            mealBaggageFee: extraPrice+baggageFound?.amount,
            total : extraPrice+baggageFound?.amount+totalPrices.baseFarePrice+totalPrices.taxesFee
          });
        }else{
          setTotalPrices({ ...totalPrices,
            mealBaggageFee: extraPrice,
            total : extraPrice+totalPrices.baseFarePrice+totalPrices.taxesFee
          });
        }
      }
    }

    if(commonFieldName === 'meal'){
      const mealList = reInitialValues.extraInfo[indexKey].mealList;
      if(mealList && mealList.length !== 0){
    
        const mealFound = mealList.find(meal => {
          return meal.code === event.target.value;
        });
        if(mealFound){
          setTotalPrices({ ...totalPrices, 
            mealBaggageFee: extraPrice+mealFound?.amount,
            total : extraPrice+mealFound?.amount+totalPrices.baseFarePrice+totalPrices.taxesFee 
          });
        }else{
          setTotalPrices({ ...totalPrices, 
            mealBaggageFee: extraPrice,
            total : extraPrice+totalPrices.baseFarePrice+totalPrices.taxesFee 
          });
        }
      }
    }
    setFieldValue(fieldNamme,event.target.value);
  }

  const handleOnSubmit = async (values, { resetForm }) => {
    
    let ssrMealInfos = [];
    let ssrBaggageInfos = [];
    let ssrSeatInfos = [];
    values.travellerInfo.forEach((passanger, passangerKey) => {
      values.extraInfo.forEach((extraInfo, extraInfoKey) => {
        //let flightFormTo = `${extraInfo.from} - ${extraInfo.to} :`;
        const ifFoundTraveller = extraInfo.mealBaggageInfo.find(mealBaggage => {
          return (mealBaggage.memberName == passanger.passangerTypeName)
        });
        const listOfMeals = extraInfo.mealList;
        const listOfBaggage = extraInfo.baggageList;
        // Here check traveller check
        if(ifFoundTraveller){
          // here check meal 
          const ifFoundMeals = listOfMeals.find(meal => {
            return (meal.code == ifFoundTraveller.meals)
          });
          if(ifFoundMeals){
            ssrMealInfos.push(ifFoundMeals);
          }

          // here check baggae 
          const ifFoundBaggage = listOfBaggage.find(baggage => {
            return (baggage.code == ifFoundTraveller.baggage)
          });
          if(ifFoundBaggage){
            ssrBaggageInfos.push(ifFoundBaggage);
          }

          if(ifFoundTraveller.seat){
            console.log("allFlightSeats",allFlightSeats);
            const flightSeats = allFlightSeats[extraInfoKey]
            const sInfo = flightSeats.sInfo;
            const ifFoundSeat = sInfo.find(seat => {
              return (seat.seatNo == ifFoundTraveller.seat)
            });
            if(ifFoundSeat){
              ssrSeatInfos.push(ifFoundSeat)
            }
          }
        }
      });
      passanger.ssrMealInfos = ssrMealInfos;
      passanger.ssrBaggageInfos = ssrBaggageInfos;
      passanger.ssrSeatInfos = ssrSeatInfos;
    });
    
  
    setReInitialValues(values);
    setActiveStep("third");
    console.log("totalprice", totalPrices)
    FlightSearchService.BookingAddPassenger(values).then(async (response) => {
      if(response.data.status){
        const result =  response.data.data;
        setConfirmBookingData(result);
      }else{
        toast.error('Something went wrong');
      }
    }).catch((e) => {
      console.log(e);
      toast.error('Something went wrong');
    });
  };

  
  const BookingCheckValidationOfBookingId = async () =>{
     const bookingCheckValidationOfBookingId = {
      bookingId : reInitialValues.bookingId,
    }
    const bookingRequest = {
      bookingId : reInitialValues.bookingId,
      amount : totalPrices.total,
      personalPhone : reInitialValues.personalPhone,
      personalEmail : reInitialValues.personalEmail,
      gstNumber : reInitialValues.gstNumber,
      gstEmail : reInitialValues.gstEmail,
      registeredName : reInitialValues.registeredName,
      mobile : reInitialValues.mobile,
      address : reInitialValues.address,
      isGst : reInitialValues.isGst,
      bookingId : reInitialValues.bookingId,
      travellerInfo : reInitialValues.travellerInfo
    }
    checkoutHandler(bookingRequest);
    return false;
    FlightSearchService.BookingCheckValidationOfBookingId(bookingCheckValidationOfBookingId).then(async (response) => {
      if(response.data.status){
        const result =  response.data.data;
        const bookingRequest = {
          bookingId : reInitialValues.bookingId,
          amount : totalPrices.total,
          personalPhone : reInitialValues.personalPhone,
          personalEmail : reInitialValues.personalEmail,
          gstNumber : reInitialValues.gstNumber,
          gstEmail : reInitialValues.gstEmail,
          registeredName : reInitialValues.registeredName,
          mobile : reInitialValues.mobile,
          address : reInitialValues.address,
          isGst : reInitialValues.isGst,
          bookingId : reInitialValues.bookingId,
          travellerInfo : reInitialValues.travellerInfo
        }
        checkoutHandler(bookingRequest);
        console.log("result",result);
      }else{
        toast.error('Something went wrong');
      }
    }).catch((e) => {
      console.log(e);
      toast.error('Something went wrong');
    });
  }
  

  return (
    <>
    <Header />
    <div className="main-content px-0 main-top-padding">
   
   <Tab.Container 
    id="left-tabs-example" 
    defaultActiveKey="first" 
    activeKey={activeStep}
    onSelect={(key) => setActiveStep(key)}
    className=""
  >
       <div className='apt-section'>
           <div className='container'>
               <Nav variant="pills" className="row bookingTop-row-positionHandle">
                 <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                   <Nav.Link eventKey="first" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>FIRST STEP</span></span>
                       <h4 class="apt-flightiti"><span>Flight Itinerary</span></h4></Nav.Link>
                 </Nav.Item>

                 <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                   <Nav.Link eventKey="second" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>SECOND STEP</span></span>
                   <h4 class="apt-flightiti"><span>Passenger Details</span></h4></Nav.Link>
                 </Nav.Item>

                 <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                   <Nav.Link eventKey="third" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>THIRD STEP</span></span>
                   <h4 class="apt-flightiti"><span>Review</span></h4></Nav.Link>
                 </Nav.Item>

                 <Nav.Item className='booking-top-btn no-padding col-sm-3'>
                   <Nav.Link eventKey="fourth" className='apt-common apt-firstep apt-active apt-firstep-positionHandle'><span class="graycolor"><span>FINISH STEP</span></span>
                   <h4 class="apt-flightiti"><span>Payments</span></h4></Nav.Link>
                 </Nav.Item>
               </Nav>
           </div>  
       </div>

       <Tab.Content>
           <Tab.Pane eventKey="first">
            <div className="flightreview mb-5">
              <div className="container">
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
                          layover ={bookingReviewData.layover}
                        />
                      }

                     <div class="card">
                        <div className='card-body d-flex justify-content-between'>
                              {/* <Link className='btn btn-danger'>Back</Link> */}
                              <Button type='button' className='btn btn-danger' onClick={() => handleClickStep()}>ADD PASSENGERS</Button>
                        </div>
                     </div>  

                    </div>
                    <FareSummary
                      totalPrices = {totalPrices}
                    />
                </div>
              </div>
            </div>
           </Tab.Pane>

           <Tab.Pane eventKey="second">
                <div className='flightreview'>
                      <div className='container'>
                          <div className='row'>
                              <div className='col-sm-9'>
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
                                          name="travellerInfo"
                                          render={arrayHelpers => {
                                            const travellerInfo = values.travellerInfo;
                                            return (
                                              <div>
                                                  {
                                                  travellerInfo && travellerInfo.length > 0 
                                                  ? travellerInfo.map((user, index) => (
                                                      <div className="accordion-item mb-3">
                                                        <h2 className="accordion-header" id={`flush-headingOne${index}`}>
                                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${index}`} aria-expanded="false" aria-controls={`flush-collapseOne${index}`}>
                                                              {
                                                                user.passengerType==='ADULT' &&
                                                                'Adult 1 (12 + yrs)'
                                                              }
                                                              {
                                                                user.passengerType==='CHILD' &&
                                                                'Children 1 (12 - yrs)'
                                                              }
                                                              {
                                                                user.passengerType==='INFANT' &&
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
                                                                        id={`travellerInfo.${index}.title`}
                                                                        name={`travellerInfo.${index}.title`}
                                                                        onChange={handleChange}
                                                                        value={values.travellerInfo[index].title}
                                                                      >
                                                                        <option selected="">Select</option>
                                                                        <option value="Mr">Mr.</option>
                                                                        <option value="Mrs">Mrs.</option>
                                                                        <option value="Ms">Ms.</option>
                                                                      </select>
                                                                  </div>

                                                                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                                    <label for="input-label" className="form-label">First Name*</label>
                                                                    <input 
                                                                      type="text" 
                                                                      className="form-control" 
                                                                      id={`travellerInfo.${index}.firstName`}
                                                                      name={`travellerInfo.${index}.firstName`}
                                                                      value={values.travellerInfo[index].firstName}
                                                                      onChange={handleChange}
                                                                      
                                                                    />
                                                                  </div>
                                                                  
                                                                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                                    <label for="input-placeholder" className="form-label">Last Name*</label>
                                                                    <input 
                                                                      type="text" 
                                                                      className="form-control" 
                                                                      id={`travellerInfo.${index}.lastName`}
                                                                      name={`travellerInfo.${index}.lastName`}
                                                                      value={values.travellerInfo[index].lastName}
                                                                      onChange={handleChange}
                                                                    />
                                                                  </div>
                                                                  {
                                                                    user.passengerType==='INFANT' &&
                                                                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                                                                        <label for="input-placeholder" className="form-label">DOB</label>
                                                                        <input 
                                                                          type="date" 
                                                                          className="form-control"
                                                                          id={`travellerInfo.${index}.dateOfBith`}
                                                                          name={`travellerInfo.${index}.dateOfBith`}
                                                                          value={values.travellerInfo[index].dateOfBirth}
                                                                          onChange={handleChange}
                                                                        />
                                                                      </div>
                                                                  }
                                                              </div>
                                                              <div className='accordion-footer mt-3'>
                                                                  <input 
                                                                    type='checkbox' 
                                                                    id={`travellerInfo.${index}.isSave`}
                                                                    name={`travellerInfo.${index}.isSave`}
                                                                    value={values.travellerInfo[index].isSave}
                                                                    onChange={handleChange}
                                                                    // onChange={handleAlert}
                                                                  /> 
                                                                  <label for={`travellerInfo.${index}.isSave`}> Save Passenger Details  </label>
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
                                                 
                                                  return (
                                                    <div>
                                                      {
                                                        extraInfo && extraInfo.length > 0 
                                                        ? extraInfo.map((extra, extraIndex) => (
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
                                                              extra.mealBaggageInfo && extra.mealBaggageInfo.length !== 0 && extra.mealBaggageInfo.map((mealBaggage, mealBaggageIndex) => (
                                                                <div className='row mb-4'>
                                                                    <div className='col-xl-2'>
                                                                      <h6 className='mt-4'>{mealBaggage.memberName}</h6>
                                                                    </div>

                                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                                        <label for="input-label" className="form-label">Baggage Information </label> 
                                                                        <select 
                                                                          className="form-select" 
                                                                          aria-label="Default select example"
                                                                          id={`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.baggage`}

                                                                          name={`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.baggage`}

                                                                          onChange={(e) => {
                                                                            handleChangeMealBaggageValue(e, setFieldValue,values,`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.baggage`,'baggage',extraIndex,mealBaggageIndex);
                                                                          }} 

                                                                          value={values.extraInfo[extraIndex].mealBaggageInfo[mealBaggageIndex].baggage}
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

                                                                          id={`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.meals`}

                                                                          name={`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.meals`}
                                                                          onChange={(e) => {
                                                                            handleChangeMealBaggageValue(e, setFieldValue,values,`extraInfo.${extraIndex}.mealBaggageInfo.${mealBaggageIndex}.meals`,'meal',extraIndex,mealBaggageIndex);
                                                                          }} 
                                                                          //onChange={handleChange}

                                                                          value={values.extraInfo[extraIndex].mealBaggageInfo[mealBaggageIndex].meal}
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
                                                             
                                                                {extra.seats? extra.seats:"Seat Not Selected"}
                                                              </p>
                                                          </div>
                                                          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                                            <Button 
                                                              className="btn-danger re-seat" 
                                                              onClick={()=>openSeatMapModel(extra,index,values)}
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
                                                        <label for="gstNumber" className="form-label">Registration Number</label>
                                                        <input 
                                                          type="text" 
                                                          className="form-control" 
                                                          id="gstNumber"
                                                          name="gstNumber"
                                                          value={values.gstNumber}
                                                          onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                        <label for="gstNumber" className="form-label">Registered Company Name</label>
                                                        <input 
                                                          type="text" 
                                                          className="form-control" 
                                                          id="registeredName"
                                                          name="registeredName"
                                                          value={values.registeredName}
                                                          onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                        <label for="gstEmail" className="form-label">Registered Email</label>
                                                        <input 
                                                          type="text" 
                                                          className="form-control" 
                                                          id="gstEmail"
                                                          name="gstEmail"
                                                          value={values.gstEmail}
                                                          onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                        <label for="mobile" className="form-label">Registered Phone</label>
                                                        <input 
                                                          type="text" 
                                                          className="form-control" 
                                                          id="mobile"
                                                          name="mobile"
                                                          value={values.mobile}
                                                          onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                        <label for="address" className="form-label">Registered Address</label>
                                                        <input 
                                                          type="text" 
                                                          className="form-control" 
                                                          id="address"
                                                          name="address"
                                                          value={values.address}
                                                          onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='accordion-footer mt-3'>
                                                    <input 
                                                      type='checkbox'
                                                      id="isSaveGST"
                                                      name="isSaveGST"
                                                      value={values.isSaveGST}
                                                      onChange={handleChange}
                                                    /> <label for='isSaveGST'> Save GST Details  </label>
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
                                                      <label for="personalEmail" className="form-label">Email*</label> 
                                                      <input 
                                                        type="email" 
                                                        className="form-control"  
                                                        placeholder='demo@gmail.com'
                                                        id="personalEmail"
                                                        name="personalEmail"
                                                        value={values.personalEmail}
                                                        onChange={handleChange}
                                                      />
                                                  </div>
                                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                      <label for="personalPhone" className="form-label">Phone*</label>
                                                      <input 
                                                        type="text"
                                                        className="form-control" 
                                                        placeholder='7845120369'
                                                        id="personalPhone"
                                                        name="personalPhone"
                                                        value={values.personalPhone}
                                                        onChange={handleChange}
                                                      />
                                                  </div>
                                                  <div className="form-check">
                                                      <input 
                                                        className="me-2" 
                                                        type="radio" 
                                                        id="isGst"
                                                        name="isGst"
                                                        value="true"
                                                        checked={values.isGst === 'true'}
                                                        onChange={handleChange}
                                                      />
                                                      <label className="" for="isGst">
                                                          I have a GST Number
                                                      </label>
                                                  </div>
                                              </div>
                                              <hr></hr>
                                              <div className='card-title d-flex justify-content-between'>
                                                  <Button type='button' className='btn btn-danger'>Back</Button>
                                                  <Button type='submit' className='btn btn-danger' >Proceed To Review </Button>
                                                 
                                                  {/* <Link to=''  className='btn btn-danger'> Proceed To Review </Link> */}
                                              </div>
                                            </div>  
                                        </div>
                                      </div>
                                    </Form>
                                  )}
                                </Formik>
                              </div>
                              <FareSummary
                                totalPrices = {totalPrices}
                              />
                          </div>

                          <div className="open-button text-center">
                            Your session will expire in <p>{`${countdown}`} min</p>
                          </div>

                      </div>
                </div>      
           </Tab.Pane>

           <Tab.Pane eventKey="third">
            {
              bookingReviewData &&
              bookingReviewData.listOfFlight &&
              bookingReviewData.listOfFlight.length !=0 &&
              <BookingReview
                seasionDetail = {bookingReviewData.seasionDetail}
                listOfFlight={bookingReviewData.listOfFlight}
                fareDetail={bookingReviewData.fareDetail}
                reInitialValues={reInitialValues}
                totalPrices = {totalPrices}
                layover={bookingReviewData.layover}
                BookingCheckValidationOfBookingId = {BookingCheckValidationOfBookingId}
              />
            }
             
           </Tab.Pane>

           <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
       </Tab.Content>
   </Tab.Container>

     
 </div>
    {
      showModal && 
      <SeatMapModel
        showModal = {showModal}
        handleClose = {handleClose}
        proceedForSeat = {proceedForSeat}
        bookingId = {bookingReviewData?.seasionDetail?.bookingId}
        flightMapInfo = {flightMapInfo}
        flightMapIndex = {flightMapIndex}

        //passangerInfo = {passangerInfo}
        //setPassangerInfo = {setPassangerInfo}
        reInitialValues = {reInitialValues}
        setReInitialValues = {setReInitialValues}
        setAllFlightSeats = {setAllFlightSeats}
        //selectPassanger = {selectPassanger}
      />
    }
    </>
  )
}