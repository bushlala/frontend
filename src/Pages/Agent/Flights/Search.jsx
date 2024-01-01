import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Formik } from "formik";
import * as Yup from "yup";
//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import auFlag from '../../../assets/images/au.svg'
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { Box, Grid, InputLabel, Link } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './search.css';

export default function AgentFlightSearch() {

    const initialValues = {
        "tripType": "1",
        "fromcitydesti": "DEL - NEW DELHI",
        "fromDestinationFlight": "DEL-India",
        "tocitydesti": "BOM - MUMBAI",
        "toDestinationFlight": "BOM-India",
        "journeyDateOne": "30-12-2023",
        "travellersshow": "1 Pax, Economy",
        "ADULT": "1",
        "CHILD": "1",
        "INFANT": "0",
        "PC": "Economy",
        "isDirectFlight": true,
        "isConnectingFlight": false,
        travellersClass : {
            adults:1,
            childrens:1,
            infants:1,
            prefferedClass:"",
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
            name : 1,
        },
        {
            name : 2,
        },
        {
            name : 3,
        },
        {
            name : 4,
        },
        {
            name : 6,
        },
        {
            name : 7,
        },
        {
            name : 8,
        },
        {
            name : 9,
        }
    ]

    const prefferedClass=[
        {
            name : "Economy Class",
            sortName : "EC"
        },
        {
            name : "PremiumEconomy Class",
            sortName : "PE"
        },
        {
            name : "Business Class",
            sortName : "BU"
        },
        {
            name : "PremiumBusiness Class",
            sortName : "PB"
        },
        {
            name : "First Class",
            sortName : "FI"
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
        fromcitydesti: Yup.string()
            .required("Title is required"),
            //.max(60, 'First name maximum length is 60'),
        tocitydesti: Yup.string()
            .required("First name is required")
    });
    const nameForm = React.useRef(null)
    const [reInitialValues, setReInitialValues] = React.useState(initialValues);
    const [tripType, setTripType] = React.useState(1);
    const [departureDate, setDepartureDate] = React.useState(new Date());
    const [minDate, setmMinDate] = React.useState(new Date());
    const [returnDate, setReturnDate] = React.useState();

    // const [travellersClass , setTravellersClass] = React.useState({
    //     adults:1,
    //     childrens:1,
    //     infants:1,
    //     prefferedClass:"",
    //     resultFareType:1,
    //     adults:1
    // });

    const handleChangeDepartureDate = (range) => {
        console.log("range",range);
        setDepartureDate(range);
        setReturnDate(range);
    }
    const changeTripType = async (tripType) => {
        console.log(tripType);
        setTripType(tripType);
    }

    const handleOnSubmit = async (values, { resetForm }) => {
        FlightSearchService.Search(values).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                
            }else{
                toast.error(response.data.message);
            }
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
        });
    };
    const [travellersModelShow, setTravellersModelShow] = React.useState(false);
    
    const onChangeTravellersShow = () => {
        if(travellersModelShow){
            setTravellersModelShow(false);
        }else{
            setTravellersModelShow(true);
        }
    }

    const handleChangeTravellersValue = (event,setFieldValue,fieldNamme) => {
        console.log("event",event.target.value);
        setFieldValue(fieldNamme,event.target.value);
    }

  return (
    <>
    
    <AgentLayout />
    
    <div className="main-content app-content p-0">
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
                                                        <select className='form-control' name='fromDestinationFlight'>
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
                                                        <select className='form-control' name='tocitydesti'>
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
                                                        className='form-control'
                                                        selected={departureDate}
                                                        //startDate={startDate}
                                                        minDate={minDate}
                                                        onChange={(date) => handleChangeDepartureDate(date)} 
                                                        />

                                                    </div>
                                                </Grid>
                                                {
                                                    tripType === 2 && <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>Return</InputLabel>
                                                        <DatePicker 
                                                            className='form-control'
                                                            name='journeyDateRound'
                                                            selected={returnDate}
                                                            minDate={departureDate}
                                                            onChange={(date) => setReturnDate(date)} 
                                                        />
                                                    </div>
                                                </Grid>

                                                }
                                                
                                                <Grid item className='col'>
                                                    <div className='form-group field-label'>
                                                        <InputLabel className=''>Travellers & Class</InputLabel>
                                                        <input className='form-control' name='travellersshow' id='travellersshow' type='text' value={values.travellersshow} onClick={()=>onChangeTravellersShow()}  />
                                                        {
                                                            travellersModelShow && 
                                                            <div className='travellersshow'>
                                                                <div className='d-flex justify-content-between'> 
                                                                    <h6>Travellers</h6>
                                                                    <i className='fa fa-times' onClick={()=>onChangeTravellersShow()}></i>    
                                                                </div>

                                                                <div className='mb-2'>
                                                                    <span className='small'>Adults</span>
                                                                    <div className='boxselectpax'>
                                                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio" 
                                                                                            class="btn-check" 
                                                                                            autocomplete="off" 
                                                                                            name="adults" 
                                                                                            id="adults"  
                                                                                            checked={values.travellersClass.adults===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.adults");
                                                                                            }} 
                                                                                        />
                                                                                        <label class="btn" for="btnradio3">{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>

                                                                <div className='mb-2'>
                                                                    <span className='small'>Children </span>
                                                                    <div className='boxselectpax'>
                                                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            <input type="radio" class="btn-check" name="childrens" id="childrens"  autocomplete="off" />
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio"
                                                                                            class="btn-check"
                                                                                            autocomplete="off"
                                                                                            name="travellersClass.childrens"
                                                                                            id="travellersClass.childrens"
                                                                                            checked={values.travellersClass.childrens===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.childrens");
                                                                                            }} 
                                                                                        />
                                                                                        <label class="btn" for="btnradio3">{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>

                                                                <div className='mb-2'>
                                                                    <span className='small'>Infants </span>
                                                                    <div className='boxselectpax'>
                                                                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                            {
                                                                                seatNumber && seatNumber.map((value, key) => (
                                                                                    <div key={key}>
                                                                                        <input 
                                                                                            type="radio"
                                                                                            class="btn-check"
                                                                                            autocomplete="off"
                                                                                            name="travellersClass.infants"
                                                                                            id="travellersClass.infants"
                                                                                            checked={values.travellersClass.infants===value.name? "checked": ""}
                                                                                            value={value.name}
                                                                                            onChange={(e) => {
                                                                                                handleChangeTravellersValue(e, setFieldValue,"travellersClass.infants");
                                                                                            }} 
                                                                                        />
                                                                                        <label class="btn" for="btnradio3">{value.name}</label>
                                                                                    </div>        
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>    
                                                                </div>

                                                                <div class="mb-2">
                                                                    <span class="small">Preffered Class</span>
                                                                    <select  
                                                                        class="form-select" 
                                                                        name='travellersClass.prefferedClass' 
                                                                        id='travellersClass.prefferedClass'
                                                                        value={values.travellersClass.prefferedClass}
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
                                                                <div class="mb-2">
                                                                    <span class="small">Result Fare Type</span>
                                                                    <select 
                                                                        class="form-select" 
                                                                        name='travellersClass.resultFareType' 
                                                                        id='travellersClass.resultFareType'
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
        </div>
    </div>                                

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
