import * as React from 'react';
import toast from 'react-hot-toast';
import { Form, Formik } from "formik";
import * as Yup from "yup";
//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import Header from '../../../Component/Layout/Agent/Header/Header';
import auFlag from '../../../assets/images/au.svg'
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { Box, Grid, InputLabel, Link } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './search.css';
import FlightSearchList from './Component/FlightSearchList';
import Moment from 'moment';
import { TailSpin } from "react-loader-spinner";

export default function AgentFlightSearch() {
    const [departureDate, setDepartureDate] = React.useState(new Date());
    const [minDate] = React.useState(new Date());
    const [returnDate, setReturnDate] = React.useState();
    const [loading, setLoading] = React.useState(false);


    const initialValues = {
        tripType: "1",
        fromCityDestination: "",
        fromDestinationFlight: "",
        toCityDestination: "",
        toDestinationFlight: "",
        journeyDateOne: departureDate,
        journeyDateRound:"",
        travellersShow: "1 Pax, Economy",
        ADULT: "1",
        CHILD: "0",
        INFANT: "0",
        PC: "Economy",
        isDirectFlight: true,
        isConnectingFlight: false,
        travellersClass : {
            adults:"1",
            childrens:"",
            infants:"",
            prefferedClass:"Economy",
            resultFareType:"",
        }
    }

    const cityList = [
        {
            city : "DEL - NEW DELHI",
            destinationFlight : "DEL-India"
        },
        {
            city : "BOM - MUMBAI",
            destinationFlight : "BOM-India"
        }
    ]

    const seatNumber = [
        {
            name : "1",
        },
        {
            name : "2",
        },
        {
            name : "3",
        },
        {
            name : "4",
        },
        {
            name : "6",
        },
        {
            name : "7",
        },
        {
            name : "8",
        },
        {
            name : "9",
        }
    ]

    const prefferedClass=[
        {
            name : "Economy Class",
            sortName : "Economy"
        },
        {
            name : "PremiumEconomy Class",
            sortName : "PremiumEconomy"
        },
        {
            name : "Business Class",
            sortName : "Business"
        },
        {
            name : "PremiumBusiness Class",
            sortName : "PremiumBusiness"
        },
        {
            name : "First Class",
            sortName : "First"
        },
    ]
    
    const resultFareType = [
        {
            name : "Regular Fare",
            sortName : "1"
        },
        {
            name : "Student Fare",
            sortName : "2"
        },
        {
            name : "Senior Citizen",
            sortName : "3"
        },
    ];

    const validationSchema = Yup.object().shape({
        fromCityDestination: Yup.string()
            .required("Title is required"),
            //.max(60, 'First name maximum length is 60'),
        toCityDestination: Yup.string()
            .required("First name is required")
    });

    const nameForm = React.useRef(null)
    const [reInitialValues, setReInitialValues] = React.useState(initialValues);
    const [tripType, setTripType] = React.useState(1);
    const [travellersModelShow, setTravellersModelShow] = React.useState(false);
    const [tripList, setTripList] = React.useState([]);
    

    const handleChangeDepartureDate = (range,setFieldValue) => {
        console.log("range",range);
        setDepartureDate(range);
        setReturnDate(range);
        setFieldValue("journeyDateOne",range);
    }

    const handleChangeReturnDate = (date,setFieldValue) => {
        //setReturnDate(date);
        setFieldValue("journeyDateRound",date);
    };

    const changeTripType = async (tripType) => {
        console.log(tripType);
        setTripType(tripType);
    }

    const onChangeTravellersShow = () => {
        if(travellersModelShow){
            setTravellersModelShow(false);
        }else{
            setTravellersModelShow(true);
        }
    }

    const handleChangeTravellersValue = (event,setFieldValue,fieldNamme) => {
        
        //console.log("fieldNamme",fieldNamme);
        //console.log("event",event.target.value);
        //console.log("initialValues",initialValues);
        setFieldValue(fieldNamme,event.target.value);
        if(fieldNamme === "travellersClass.prefferedClass" 
        || fieldNamme === "travellersClass.adults"
        || fieldNamme === "travellersClass.childrens"
        || fieldNamme === "travellersClass.infants"){
            console.log("reInitialValues",reInitialValues);
            let seatCount = 0;
            let travellersShowArr   =  reInitialValues.travellersShow.split(',');
            if(fieldNamme === "travellersClass.prefferedClass"){
                travellersShowArr[1]    =  event.target.value;
            }else if(fieldNamme === "travellersClass.adults"){
                reInitialValues.travellersClass.adults = event.target.value;
                reInitialValues.ADULT = event.target.value;
                setReInitialValues(reInitialValues);
            }else if(fieldNamme === "travellersClass.childrens") {
                reInitialValues.travellersClass.childrens = event.target.value;
                reInitialValues.CHILD = event.target.value;
                setReInitialValues(reInitialValues);
            }else if(fieldNamme === "travellersClass.infants") {
                reInitialValues.travellersClass.infants = event.target.value;
                reInitialValues.INFANT = event.target.value;
                setReInitialValues(reInitialValues);
            }
            let adultCount = parseInt(reInitialValues.travellersClass.adults);
            if(adultCount){
                seatCount+=adultCount;
            }
            //console.log("reInitialValues.travellersClass.childrens",reInitialValues.travellersClass.childrens);
            let childrenCount = parseInt(reInitialValues.travellersClass.childrens);
            //console.log("childrenCount",childrenCount);
            if(childrenCount){
                seatCount+=childrenCount;
            }
            let infantCount = parseInt(reInitialValues.travellersClass.infants);
            if(infantCount){
                seatCount+=infantCount;
            }
            travellersShowArr[0] = seatCount+" Pax";
            setReInitialValues(prevState => ({
                // Retain the existing values
                ...prevState,
                // update value
                travellersShow: travellersShowArr[0]+","+travellersShowArr[1],
            }))
        }
    }

    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("set form");
        // For Destinations 
        //setLoading(true);
        const checkFromCityDestination = cityList.find(obj => {
            return obj.city === values.fromCityDestination;
        });
        if(checkFromCityDestination){
            values.fromDestinationFlight = checkFromCityDestination.destinationFlight
        }

        // For To 
        const checkToCityDestination = cityList.find(obj => {
            return obj.city === values.toCityDestination;
        });
        if(checkToCityDestination){
            values.toDestinationFlight = checkToCityDestination.destinationFlight
        }
        if(values.journeyDateOne){
            values.journeyDateOne = Moment(values.journeyDateOne).format('DD-MM-YYYY')
        }
        
        console.log("values",values);
        //return false;
        FlightSearchService.Search(values).then(async (response) => {
            setLoading(false);
            console.log("loading",loading);
            //console.log("result",response);
            if(response.status === 200){
                if(response.data.status){
                    console.log("result",response.data.data);
                    setTripList(response.data.data)
                    
                }else{
                    toast.error(response.data.message);
                }
            }else{
                toast.error("Something went wrong");
            }
            
            // if(response.searchResult.tripInfos 
            //     && response.searchResult.tripInfos.ONWARD
            //     && response.searchResult.tripInfos.Length){
            //     console.log("response.searchResult.tripInfos.ONWARD",response.searchResult.tripInfos.ONWARD);
            //     setTripList(response.searchResult.tripInfos.ONWARD)
            // }
            // if(response.data.status){
            //     //console.log("response",response.data.data);
            //     var result = response.data.data;
            //     console.log("result",response.data);
                
            //     //setTripList(tripList)
                
            // }else{
            //     toast.error(response.data.message);
            // }
            setLoading(true);
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
            setLoading(false);
        });
    };

  return (
    <>
    
    <Header />
    
    <div className="main-content p-0">
        <div className="">
            <div className='agent-flight-search'>
                <div className='homeflightsearchouterbox'>
                    <Formik
                        initialValues={reInitialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleOnSubmit}
                        enableReinitialize={true}
                    >
                        {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                            <Form ref={nameForm}>
                                <div className='container'>
                                    <h4 className='text-center text-white'>Book flights and explore the world with us.</h4>
                                    <Box className='card home-flightsear-card'>
                                        <Box className='card-body'>
                                        
                                            <ul className="nav nav-pills One-Way-tab">
                                                <li className="nav-item">
                                                    <Link className={`nav-link ${tripType === 1 ? "active" : ""}`} aria-current="page" href="#" onClick={()=>changeTripType(1)}>One-Way</Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className={`nav-link ${tripType === 2 ? "active" : ""}`} href="#" onClick={()=>changeTripType(2)}>Round-Trip</Link>
                                                </li>
                                            </ul>

                                            <Grid container spacing={2}>
                                                
                                                <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>From</InputLabel> 
                                                        <div class="swapbtn down"><i class="fa fa-exchange" aria-hidden="true"></i></div>
                                                   
                                                        <select 
                                                            className='form-control' 
                                                            name='fromCityDestination'
                                                            id='fromCityDestination'
                                                            value={values.fromCityDestination}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="" >Select From City</option>
                                                            {
                                                                cityList && cityList.map((value, key) => (
                                                                    <option key={key} value={value.city} >{value.city}</option>
                                                                ))
                                                            }
                                                        </select>
                                                        {/* <div className='searchdestinationboxclass'>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                            <div className='list'>
                                                                DDN - Delta Downs, Australia
                                                                <div className='' style={{color:"#666666", fontSize:"11px"}}>Delta Downs</div>
                                                                <img className='flag' src={auFlag} />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </Grid>

                                                <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>To</InputLabel>
                                                        <select 
                                                            className='form-control'
                                                            name='toCityDestination'
                                                            id='toCityDestination'
                                                            value={values.toCityDestination}
                                                            onChange={handleChange}
                                                         >
                                                            <option value="" >Select To City</option>
                                                            {
                                                                cityList && cityList.map((value, key) => (
                                                                    <option key={key} value={value.city} >{value.city}</option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </Grid>

                                                <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>Departure</InputLabel>
                                                        <DatePicker 
                                                            className='form-control w-100'
                                                            selected={departureDate}
                                                            //dateFormat="DD/MM/YYYY"
                                                            //startDate={startDate}
                                                            minDate={minDate}
                                                            onChange={(date) => handleChangeDepartureDate(date,setFieldValue)} 
                                                        />
                                                    </div>
                                                </Grid>

                                                {
                                                    tripType === 2 && 
                                                    <Grid item className='col'>
                                                        <div className='form-group field-label'>
                                                            <InputLabel className=''>Return</InputLabel>
                                                            <DatePicker 
                                                                className='form-control'
                                                                name='journeyDateRound'
                                                                selected={returnDate}
                                                                minDate={departureDate}
                                                                onChange={(date) => handleChangeReturnDate(date,setFieldValue)} 
                                                            />
                                                        </div>
                                                    </Grid>
                                                }

                                                <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>Travellers & Class</InputLabel>
                                                        <input className='form-control' name='travellersShow' id='travellersShow' type='text' value={values.travellersShow} onClick={()=>onChangeTravellersShow()}  />
                                                        {
                                                            travellersModelShow && 
                                                            <div className='travellersshow'>
                                                                <div className='d-flex justify-content-between'> 
                                                                    <h6>Travellers</h6>
                                                                    <i className='fa fa-times cross' onClick={()=>onChangeTravellersShow()}></i>    
                                                                </div>
                                                                
                                                                <div className='mb-2'>
                                                                    <span className='small'>Adults</span>
                                                                    <div className='boxselectpax'>
                                                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio" 
                                                                                            className="btn-check" 
                                                                                            autoComplete="off" 
                                                                                            name="travellersClass.adults" 
                                                                                            id={`travellersClass.adults${key}`}
                                                                                            checked={values.travellersClass.adults===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.adults");
                                                                                            }} 
                                                                                        />
                                                                                        <label className="btn search-check-box" htmlFor={`travellersClass.adults${key}`}>{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>

                                                                <div className='mb-2'>
                                                                    <span className='small'>Children </span>
                                                                    <div className='boxselectpax'>
                                                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            {/* <input type="radio" className="btn-check" name="childrens" id="childrens"  autoComplete="off" /> */}
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio"
                                                                                            className="btn-check"
                                                                                            autoComplete="off"
                                                                                            name="travellersClass.childrens"
                                                                                            id={`travellersClass.childrens${key}`}
                                                                                            checked={values.travellersClass.childrens===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.childrens");
                                                                                            }} 
                                                                                        />
                                                                                        <label className="btn search-check-box" htmlFor={`travellersClass.childrens${key}`}>{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>
                                                                <div className='mb-2'>
                                                                    <span className='small'>Infants </span>
                                                                    <div className='boxselectpax'>
                                                                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio"
                                                                                            className="btn-check"
                                                                                            autoComplete="off"
                                                                                            name="travellersClass.infants"
                                                                                            id={`travellersClass.infants${key}`}
                                                                                            checked={values.travellersClass.infants===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.infants");
                                                                                            }} 
                                                                                        />
                                                                                        <label className="btn search-check-box" htmlFor={`travellersClass.infants${key}`}>{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="small">Preffered Class</span>
                                                                    <select  
                                                                        className="form-select" 
                                                                        name='travellersClass.prefferedClass' 
                                                                        id='travellersClass.prefferedClass'
                                                                        value={values.travellersClass.prefferedClass}
                                                                        defaultValue ={values.travellersClass.prefferedClass}
                                                                        onChange={(e) => {
                                                                            handleChangeTravellersValue(e, setFieldValue,"travellersClass.prefferedClass");
                                                                        }}
                                                                    >
                                                                        {
                                                                            prefferedClass && prefferedClass.map((value, key) => (
                                                                                <option 
                                                                                    key={key} 
                                                                                    value={value.sortName} 
                                                                                    
                                                                                >{value.name}</option>        
                                                                            ))
                                                                        }
                                                                    </select>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <span className="small">Result Fare Type</span>
                                                                    <select 
                                                                        className="form-select" 
                                                                        name='travellersClass.resultFareType' 
                                                                        id='travellersClass.resultFareType'
                                                                        value={values.travellersClass.resultFareType}
                                                                        defaultValue ={values.travellersClass.resultFareType}
                                                                        onChange={(e) => {
                                                                            handleChangeTravellersValue(e, setFieldValue,"travellersClass.resultFareType");
                                                                        }}
                                                                    >
                                                                        {
                                                                            resultFareType && resultFareType.map((value, key) => (
                                                                                <option 
                                                                                    key={key} 
                                                                                    value={value.sortName} 
                                                                                    selected=""
                                                                                >{value.name}</option>        
                                                                            ))
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        }
                                                        
                                                    </div>
                                                </Grid>
                                                <Grid item className='col'>
                                                    <div className='search-flights'> 
                                                    <button 
                                                            className='btn search-flights' 
                                                            type='submit'
                                                        >
                                                        SEARCH FLIGHTS</button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box> 
                                        {/* <div className='row'>
                                            <div className='col-2'>
                                                <div className='card'>
                                                    <div className='card-body'>
                                                        
                                                    </div>
                                                </div>      
                                            </div>   
                                        </div>    */}
                                </div>  
                                    
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>  
            {
                //console.log("loading",loading)
            // loading === true ? <TailSpin color="red" radius={"8px"} />
            // :
            <div className='container'>
                <FlightSearchList
                    tripList = {tripList}
                /> 
            </div>    
            }   
        </div>
    </div>
    {/* <FlightSearchList
        searchListData = "Test"
    />                                */}

        {/* <div className='lastsearchbox'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div  className='d-flex justify-content-center align-items-center'>
                                            <div className=''>
                                                <img src={internetSecurity}  alt=''/>  
                                            </div>
                                            <div className=''>
                                                <p className='mb-0'> Easy Fast and Secured Bookings.</p>
                                            </div>
                                        </div>    
                                    </div> 
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div  className='d-flex justify-content-center align-items-center'>
                                            <div className=''>
                                                <img src={internetSecurity} alt='' />  
                                            </div>
                                            <div className=''>
                                                <p className='mb-0'> Easy Fast and Secured Bookings.</p>
                                            </div>
                                        </div>    
                                    </div> 
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div  className='d-flex justify-content-center align-items-center'>
                                            <div className=''>
                                                <img src={internetSecurity} alt='' />  
                                            </div>
                                            <div className=''>
                                                <p className='mb-0'> Easy Fast and Secured Bookings.</p>
                                            </div>
                                        </div>    
                                    </div> 
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div  className='d-flex justify-content-center align-items-center'>
                                            <div className=''>
                                                <img src={internetSecurity} alt='' />  
                                            </div>
                                            <div className=''>
                                                <p className='mb-0'> Easy Fast and Secured Bookings.</p>
                                            </div>
                                        </div>    
                                    </div> 
                                </div>
                            </div>
                    </div>       
                </div>
        </div>   */}
    </>
  )
}
