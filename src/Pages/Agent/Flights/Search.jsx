import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import Header from '../../../Component/Layout/Agent/Header/SearchHeader';
import auFlag from '../../../assets/images/au.svg'
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { Alert, Box, Grid, InputLabel, Link } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './search.css';
import FlightSearchList from './Component/FlightSearchList';
import Moment from 'moment';
import { TailSpin } from "react-loader-spinner";
import axios from 'axios';
import Select from "react-select";
import Modal from 'react-bootstrap/Modal';



function taskDate(dateMilli) {
    var d = (new Date(dateMilli) + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}

var datemilli = Date.parse('Sun May 11,2014');


const AgentFlightSearch = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    //console.log("userData",userData.data.token)
    const jwtToken = userData?.data?.token || " ";
    let BASE_URL = '';
    if (process.env.REACT_APP_SERVER_ENV === 'Local') {
        BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
    } else if (process.env.REACT_APP_SERVER_ENV === 'Live') {
        BASE_URL = process.env.REACT_APP_LIVE_API_URL;
    }
    const [departureDate, setDepartureDate] = useState(new Date());
    const [minDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState();
    const [loading, setLoading] = useState(false);
    const [citySwapArrowStatus, setCitySwapArrowStatus] = useState(true);
    const [fromCityDestination, setFromCityDestination] = useState();
    const [toCityDestination, setToCityDestination] = useState();
    const [journeyDateOne, setJourneyDateOne] = useState(new Date());
    const [travellersArr, setTravellersArr] = useState("1 Pax, Economy");
    const [pc, setPc] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [errorMsg , setErrorMsg]= useState("");
    const handleIsClose = () => {
        setIsOpen(false);
    }

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#6c5ffc' : 'white', // Set red background for selected option
        }),
    };

    const initialValues = {
        tripType: "1",
        fromCityDestination: "BLR - India",
        previllageForTicket: "REGULAR",
        fromDestinationFlight:"BLR - Bengaluru",
        toCityDestination: "DEL - India",
        toDestinationFlight: "DEL - Delhi",
        journeyDateOne: departureDate,
        journeyDateRound: "",
        travellersShow: "1 Pax, ECONOMY",
        ADULT: "1",
        CHILD: "0",
        INFANT: "0",
        PC: "Economy",
        isDirectFlight: false,
        isConnectingFlight: true,

    }


    const seatNunmberAdult = [
        {
            name: "1",
        },
        {
            name: "2",
        },
        {
            name: "3",
        },
        {
            name: "4",
        },
        {
            name: "6",
        },
        {
            name: "7",
        },
        {
            name: "8",
        },
        {
            name: "9",
        }
    ]
    const seatNumber = [
        {
            name: "0",
        },
        {
            name: "1",
        },
        {
            name: "2",
        },
        {
            name: "3",
        },
        {
            name: "4",
        },
        {
            name: "6",
        },
        {
            name: "7",
        },
        {
            name: "8",
        },
        {
            name: "9",
        }
    ]



    const prefferedClass = [
        {
            name: "Economy Class",
            sortName: "Economy"
        },
        {
            name: "Premium Economy Class",
            sortName: "Premium Economy"
        },
        {
            name: "Business Class",
            sortName: "Business"
        },
        {
            name: "First Class",
            sortName: "First"
        },
    ]

    const resultFareType = [
        {
            name: "select options",
            sortName: "0"
        },
        {
            name: "Regular Fare",
            sortName: "1"
        },
        {
            name: "Student Fare",
            sortName: "2"
        },
        {
            name: "Senior Citizen",
            sortName: "3"
        },
    ];


    const handleInputChange =(inputValue)=>{
        fetchAirportList(inputValue)
    }
    const validationSchema = Yup.object().shape({
        fromCityDestination: Yup.string()
            .required("Form city is required"),
        //.max(60, 'First name maximum length is 60'),
        toCityDestination: Yup.string()
            .required("To city is required")
    });

    const nameForm = useRef(null)
    const [reInitialValues, setReInitialValues] = useState(initialValues);
    const [tripType, setTripType] = useState(1);
    const [travellersModelShow, setTravellersModelShow] = useState(false);
    const [tripList, setTripList] = useState([]);
    const [dateForHorizontal, setDateForHorizontal] = useState();
    const [cityList, setCityList] = useState([]);

    const handleChangeDepartureDate = (range, setFieldValue) => {
        setJourneyDateOne(range);
        setDepartureDate(range);
        setReturnDate(range);
        setFieldValue("journeyDateOne", range);
    }

    const handleChangeReturnDate = (date, setFieldValue) => {
        //setReturnDate(date);
        setFieldValue("journeyDateRound", date);
    };

    const changeTripType = async (tripType) => {
        //console.log(tripType);
        setTripType(tripType);
    }

    const onChangeTravellersShow = () => {
        if (travellersModelShow) {
            setTravellersModelShow(false);
        } else {
            setTravellersModelShow(true);
        }
    }

    const handleFareType = (event, setFieldValue, values, fieldNamme) => {
        let count = event.target.value;
        if (count === "2") {
           
            setFieldValue(fieldNamme, "STUDENT");
        } else if (count === "3") {
            setFieldValue(fieldNamme, "SENIOR_CITIZEN");
        }
        else {
            setFieldValue(fieldNamme, "REGULAR");
        }
        setTravellersArr(values.travellersShow[0] + " Pax" + ", " + values.PC);
       
    }

    const handlePrefferedClass = (event, setFieldValue, values) => {
        
        let result = event.target.value;
        setPc(result);
        if (result === "Economy") {
            setFieldValue("PC", "ECONOMY");
        }
        else if (result === "Premium Economy") {
            setFieldValue("PC", "PREMIUM ECONOMY");
        }
        else if (result === "Business") {
            setFieldValue("PC", "BUSINESS");
        }
        else if (result === "First") {
            setFieldValue("PC", "FIRST");
        }
        setFieldValue("travellersShow", values.travellersShow[0] + " Pax" + ", " + result.toUpperCase());
        setTravellersArr(values.travellersShow[0] + " Pax" + ", " + result);
     
  }

    const handleChangeTravellersValue = (event, setFieldValue, values, fieldNamme) => {
        setFieldValue("previllageForTicket", event.target.value);
        if (fieldNamme === "ADULT"
            || fieldNamme === "CHILD"
            || fieldNamme === "INFANT") {
            let seatCount = 0;
            if (fieldNamme === "ADULT") {
                setFieldValue("ADULT", event.target.value);
                let adultCount = parseInt(event.target.value);
                if (adultCount) {
                    seatCount += adultCount;
                }
                let childrenCount = parseInt(values.CHILD);
                if (childrenCount) {
                    seatCount += childrenCount;
                }
                let infantCount = parseInt(values.INFANT);
                if (infantCount) {
                    seatCount += infantCount;
                }
            } else if (fieldNamme === "CHILD") {
                setFieldValue("CHILD", event.target.value);
                let adultCount = parseInt(values.ADULT);
                if (adultCount) {
                    seatCount += adultCount;
                }

                let childrenCount = parseInt(event.target.value);
                if (childrenCount) {
                    seatCount += childrenCount;
                }
                let infantCount = parseInt(values.INFANT);
                if (infantCount) {
                    seatCount += infantCount;
                }
            } else if (fieldNamme === "INFANT") {
                setFieldValue("INFANT", event.target.value);
                let adultCount = parseInt(values.ADULT);
                if (adultCount) {
                    seatCount += adultCount;
                }
                let childrenCount = parseInt(values.CHILD);

                if (childrenCount) {
                    seatCount += childrenCount;
                }
                let infantCount = parseInt(event.target.value);
                if (infantCount) {
                    seatCount += infantCount;
                }
            }
            setFieldValue("travellersShow", seatCount + " Pax" + ", " + values.PC);
            setTravellersArr(seatCount + " Pax" + ", " + pc);
        }
    }
    const handleClickCitySwap = (fromCityDestination, toCityDestination, setFieldValue) => {
        setFromCityDestination(toCityDestination);
        setToCityDestination(fromCityDestination);

        if (fromCityDestination && toCityDestination) {
            if (citySwapArrowStatus) {
                setCitySwapArrowStatus(false);
            } else {
                setCitySwapArrowStatus(true);
            }
            setFieldValue('fromCityDestination', toCityDestination.value);
            setFieldValue('fromDestinationFlight', toCityDestination.label);
            setFieldValue("toCityDestination", fromCityDestination.value);
            setFieldValue("toCityDestinationFlight", fromCityDestination.label);
        }
    }


    const handleChangeDate = (date) => {
        reInitialValues.journeyDateOne = date;

        //    setReInitialValues(values);
        setDateForHorizontal(date);
        setLoading(true);
        //return false;
        FlightSearchService.Search(reInitialValues).then(async (response) => {
            if (response.status === 200) {
                if (response.data.status) {
                    setTripList(response.data.data)
                    setIsOpen(false)

                } else {
                    let errorMessage = response.data.message.message;
                    // toast.error(response.data.message.message);
                    setTripList([])
                    setIsOpen(true)
                    setErrorMsg(errorMessage);

                }
            } else {
                // toast.error(response.data.message);
               let errorMessage = response.data.message
                setIsOpen(true)
                setErrorMsg(errorMessage);

            }
            setLoading(false);
        }).catch((error) => {
            let errorMessage = error.message
         
            // toast.error('Something went wrong');
            setLoading(false);
            setIsOpen(true)
            setErrorMsg(errorMessage);
        });

    }

    useEffect(() => {
        fetchAirportList();

    }, [])

const handleOptionTOValues =(inputValue)=>{
    fetchAirportList(inputValue);
}

    const fetchAirportList = (value) => {
        const valuesss = {
            "search": value
        }
        FlightSearchService.AirPort(valuesss).then(async (response) => {
            if (response.status === 200) {
                let result = response.data.data.rows;
                setCityList(result);
                console.log("result",result)
                
            } else {
                setCityList([]);

            }
        }).catch((e) => {
            console.log(e);
        });

    };

   const handleOnSubmit = async (values, { resetForm }) => {
  
        setLoading(true);
        setTravellersModelShow(false);
       
        let startDate;
        let endDate;
        if (values.journeyDateOne) {
           
            startDate = Moment(values.journeyDateOne).format('YYYY-MM-DD');
            endDate = Moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
            values.journeyDateOne = Moment(values.journeyDateOne).format('DD-MM-YYYY')
            var dates = [];
            const start = Moment(startDate);
            const end = Moment(endDate);
            while (!start.isSame(end)) {
                dates.push(start.format("DD-MM-YYYY"));
                start.add(1, 'day');
            }
            values.dateArr = dates;
            setDateForHorizontal(values.journeyDateOne);
            setReInitialValues(values);
            
        }
        FlightSearchService.Search(values).then(async (response) => {
            setLoading(true);
            if (response.status === 200) {
             
                if (response.data.status === true) {
                    setTripList(response.data.data)
                    setIsOpen(false)
                  
                } else {
                    console.log("errorMessage", response.data)
                    let errorMessage = response.data.message ? response.data.message : "someting wrong"
                    // toast.error(response.data.message);
                    setIsOpen(true)
                    setErrorMsg(errorMessage);
                  }
            } else {
                let errorMessage = response.data.message;
                // toast.error(errorMessage);
                console.log("values6");
                setIsOpen(true)
                setErrorMsg(errorMessage);
            }
            setLoading(false);
        }).catch((error) => {
            let errorMessage = error.message
            // toast.error(errors);
            console.log("values7");
            setLoading(false);
            setIsOpen(true)
            setErrorMsg(errorMessage);
        });
    };

    //modify code 
    const optionFromValues = cityList.map((item) => ({
        value: item.destinationFlight,
        label: item.city,
        image: item.flagUrl
    }));

    const optionTOValues = cityList.map((item) => ({
        value: item.destinationFlight,
        label: item.city,
        image: item.flagUrl
    }));
  
    const handleChangeDestination = (selectedOptions, setFieldValue, fieldName) => {
        if (fieldName === "fromCityDestination") {
            setFromCityDestination(selectedOptions);
            setFieldValue('fromCityDestination', selectedOptions.value);
            setFieldValue('fromDestinationFlight', selectedOptions.label);
        } else {
            setToCityDestination(selectedOptions);
            setFieldValue('toCityDestination', selectedOptions.value);
            setFieldValue('toDestinationFlight', selectedOptions.label);
        }

    }
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
                                {({ classes, errors, touched, values, handleChange, setFieldValue }) => (
                                    <Form ref={nameForm}>
                                        <div className='container'>
                                            <h4 className='text-center text-white'>Book flights and explore the world with us.</h4>
                                            <Box className='card home-flightsear-card'>
                                                <Box className='card-body'>

                                                    <ul className="nav nav-pills One-Way-tab">
                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${tripType === 1 ? "active" : ""}`} aria-current="page" href="#" onClick={() => changeTripType(1)}>One-Way</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link className={`nav-link ${tripType === 2 ? "active" : ""}`} href="#" onClick={() => changeTripType(2)}>Round-Trip</Link>
                                                        </li>
                                                    </ul>

                                                    <Grid container spacing={2}>

                                                        <Grid item className='col'>
                                                            <div className='form-group field-label search-fild'>
                                                                <InputLabel className=''>From</InputLabel>
                                                                <div className={`swapbtn ${citySwapArrowStatus ? 'down' : ''}`} onClick={() => handleClickCitySwap(fromCityDestination, toCityDestination, setFieldValue)}>
                                                                    <i className="fa fa-exchange" aria-hidden="true"></i>
                                                                </div>

                                                                <Select
                                                                    className='form-control active'
                                                                    name='fromCityDestination'
                                                                    value={fromCityDestination}
                                                                    onChange={(e) => {
                                                                        handleChangeDestination(e, setFieldValue, "fromCityDestination");
                                                                    }}
                                                                    options={optionFromValues}
                                                                    styles={customStyles}
                                                                     maxLength={5}

                                                                    formatOptionLabel={(country, { context }) => (
                                                                        <div className="searchdestinationboxclass list d-flex ">
                                                                            <div className='search-text'>
                                                                                <div>
                                                                                    {context === "menu" && country.value}
                                                                                </div>
                                                                                {country.label}
                                                                            </div>
                                                                            {context === "menu" && <div className='search-img'><img className="flagimage" src={country.image} /></div>}
                                                                        </div>
                                                                    )}
                                                                    onInputChange={handleInputChange}
                                                                />
                                                                {
                                                                    errors.fromCityDestination && <Box component="span" sx={{ display: 'block', color: 'red' }}>{errors.fromCityDestination}</Box>
                                                                }
                                                            </div>
                                                        </Grid>

                                                        <Grid item className='col'>
                                                            <div className='form-group field-label search-fild'>
                                                                <InputLabel className=''>To</InputLabel>
                                                                <Select
                                                                    className='form-control'
                                                                    name='toCityDestination'
                                                                    value={toCityDestination}
                                                                    onChange={(e) => {
                                                                        handleChangeDestination(e, setFieldValue, "toCityDestination");
                                                                    }}
                                                                    options={optionTOValues}
                                                                    styles={customStyles}
                                                                    formatOptionLabel={(country, { context }) => (
                                                                        <div className="searchdestinationboxclass list d-flex ">
                                                                            <div className='search-text'>
                                                                                <div>
                                                                                    {context === "menu" && country.value}
                                                                                </div>
                                                                                {country.label}
                                                                            </div>
                                                                            {context === "menu" && <div><img className="flagimage" src={country.image} /></div>}
                                                                        </div>
                                                                    )}
                                                                    onInputChange={handleOptionTOValues}
                                                                />
                                                                {
                                                                    errors.toCityDestination && <Box component="span" sx={{ display: 'block', color: 'red' }}>{errors.toCityDestination}</Box>
                                                                }
                                                            </div>
                                                        </Grid>
                                                        <Grid item className='col'>
                                                            <div className='form-group field-label'>
                                                                <InputLabel className=''>Departure</InputLabel>
                                                                <DatePicker
                                                                    className='form-control w-100'
                                                                    selected={departureDate}
                                                                    dateFormat="dd-MM-yy"
                                                                    //dateFormat="DD/MM/YYYY"
                                                                    //startDate={startDate}
                                                                    minDate={minDate}
                                                                    onChange={(date) => handleChangeDepartureDate(date, setFieldValue)}
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
                                                                        onChange={(date) => handleChangeReturnDate(date, setFieldValue)}
                                                                    />
                                                                </div>
                                                            </Grid>
                                                        }

                                                        <Grid item className='col'>
                                                            <div className='form-group field-label'>
                                                                <InputLabel className=''>Travellers & Class</InputLabel>
                                                                <input className='form-control' name='travellersShow' id='travellersShow' type='text' value={travellersArr} onClick={() => onChangeTravellersShow()} />
                                                                {
                                                                    travellersModelShow &&
                                                                    <div className='travellersshow'>
                                                                        <div className='d-flex justify-content-between'>
                                                                            <h6>Travellers</h6>
                                                                            <i className='fa fa-times cross' onClick={() => onChangeTravellersShow()}></i>
                                                                        </div>

                                                                        <div className='mb-2'>
                                                                            <span className='small'>Adults</span>
                                                                            <div className='boxselectpax'>
                                                                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                                    {seatNunmberAdult && seatNunmberAdult.map((value, key) => (
                                                                                        <div key={key}>
                                                                                            <input
                                                                                                type="radio"
                                                                                                className="btn-check"
                                                                                                autoComplete="off"
                                                                                                name="ADULT"
                                                                                                id={`ADULT${key}`}
                                                                                                checked={values.ADULT === value.name ? "checked" : ""}
                                                                                                value={value.name}
                                                                                                onChange={(e) => {
                                                                                                    handleChangeTravellersValue(e, setFieldValue, values, "ADULT");
                                                                                                }}
                                                                                            />
                                                                                            <label className="btn search-check-box" htmlFor={`ADULT${key}`}>{value.name}</label>
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
                                                                                                    name="CHILD"
                                                                                                    id={`CHILD${key}`}
                                                                                                    checked={values.CHILD === value.name ? "checked" : ""}
                                                                                                    value={value.name}
                                                                                                    onChange={(e) => {
                                                                                                        handleChangeTravellersValue(e, setFieldValue, values, "CHILD");
                                                                                                    }}
                                                                                                />
                                                                                                <label className="btn search-check-box" htmlFor={`CHILD${key}`}>{value.name}</label>
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
                                                                                                    name="INFANT"
                                                                                                    id={`INFANT${key}`}
                                                                                                    checked={values.INFANT === value.name ? "checked" : ""}
                                                                                                    value={value.name}
                                                                                                    onChange={(e) => {
                                                                                                        handleChangeTravellersValue(e, setFieldValue, values, "INFANT");
                                                                                                    }}
                                                                                                />
                                                                                                <label className="btn search-check-box" htmlFor={`INFANT${key}`}>{value.name}</label>
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
                                                                                name='PC'
                                                                                id='PC'
                                                                                value={pc}
                                                                                onChange={(e) => {
                                                                                    handlePrefferedClass(e, setFieldValue, values);
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
                                                                                name='previllageForTicket'
                                                                                id='previllageForTicket'
                                                                                value={values.previllageForTicket}
                                                                                defaultValue={values.previllageForTicket}
                                                                                onChange={(e) => {
                                                                                    handleFareType(e, setFieldValue, values, "previllageForTicket");
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
                                                                {
                                                                    loading ?
                                                                        <button
                                                                            className='btn search-flights'
                                                                            type='button'
                                                                            disabled='disabled'
                                                                        >Please wait</button>

                                                                        :
                                                                        <button
                                                                            className='btn search-flights'
                                                                            type='submit'
                                                                            disabled={loading ? 'disabled' : ''}
                                                                        > SEARCH FLIGHTS</button>


                                                                }

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
                    {tripList&& tripList.length > 1 && <div className='flighttopbarblk'>
                        <div className='container'>
                            <div className='d-flex'>
                                <div className='me-xl-5'>
                                    <div class="headtext">{fromCityDestination && fromCityDestination.value} </div>
                                    <div class="subtext">{fromCityDestination && fromCityDestination.label}</div>
                                </div>
                                <div className='me-xl-5'>
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                                <div className='me-xl-5'>
                                    <div class="headtext">{toCityDestination && toCityDestination.value} </div>
                                    <div class="subtext"> {toCityDestination && toCityDestination.label}</div>
                                </div>
                                <div className='me-xl-5'>
                                    <div class="headtext">Departure Date </div>
                                    <div class="subtext">{(taskDate(journeyDateOne))}</div>
                                </div>
                                <div className=''>
                                    <div class="headtext">Passengers & Class </div>
                                    <div class="subtext"> {travellersArr}</div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {
                        loading ? <TailSpin color="red" radius={"8px"} />
                            :
                            tripList && tripList.length != 0 &&
                            <div className='container'>
                                {/* <h1>Ganeshs</h1> */}
                                <FlightSearchList
                                    dateForHorizontal={dateForHorizontal}
                                    tripList={tripList }
                                    reInitialValues={reInitialValues}
                                    handleChangeDate={handleChangeDate}
                                />
                            </div>
                    }
                </div>
                <Modal size="sm" show={isOpen} onHide={handleIsClose} centered>
                    <div className='modal-content'>
                        <div className="errmodal-header text-center">
                            <h2 className="errmodal-title w-100 fw-bold text-danger">Sorry!</h2>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">{errorMsg && errorMsg}</p>
                        </div>
                        <div className='errmodal-footer text-center'>
                            <button className="btn btn-danger btn-block w-25 mb-3" onClick={handleIsClose}>OK</button>
                        </div>
                    </div>
                </Modal>
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
export default AgentFlightSearch;