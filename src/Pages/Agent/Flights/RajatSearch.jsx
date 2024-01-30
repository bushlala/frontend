import React, { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { Form, Formik } from "formik";
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



function taskDate(dateMilli) {
    var d = (new Date(dateMilli) + '').split(' ');
    d[2] = d[2] + ',';

    return [d[0], d[1], d[2], d[3]].join(' ');
}

var datemilli = Date.parse('Sun May 11,2014');


export default function AgentFlightSearch() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    //console.log("userData",userData.data.token)
    const jwtToken = userData?.data?.token || " ";
    const [dates, setDates] = useState([]);
    const [departureDate, setDepartureDate] = useState(new Date());
    const [minDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState();
    const [loading, setLoading] = useState(false);
    const [citySwapArrowStatus, setCitySwapArrowStatus] = useState(true);
    const [cityList, setCityList] = useState([]);
    const [dropDown, setDropDown] = useState(false);
    const [fromSearch, setFromSearch] = useState("BLR - Bengaluru");
    const [searchTo, setSearchTo] = useState(" DEL - Delhi");
    const [dropToDown, setDropTODown] = useState(false);
    const [error, setError] = useState("");

    const [searchFromList, setSearchFromList] = useState(false);
    const [toCityList, setToCityList] = useState("");
    const [fromDestinationFlight, setFromDestinationFlight] = useState("");
    const [toDestinationFlight, setToDestinationFlight] = useState("");
    const [journeyDateOne, setJourneyDateOne] = useState(new Date());
    const [adult, setADULT] = useState("1");
    const [child, setChild] = useState("0");
    const [infant, setInfant] = useState("0");
    const [travellersArr, setTravellersArr] = useState();
    const [previllageForTicket, setPrevillageForTicket] = useState();
    const [dateList, setDateList] = useState([]);
    const [pc, setPC] = useState("Economy");
    const [fromError,setFromError]= useState("");
    const [toError,setToError]= useState("");
    let BASE_URL = '';
    if (process.env.REACT_APP_SERVER_ENV === 'Local') {
        BASE_URL = process.env.REACT_APP_LOCAL_API_URL;
    } else if (process.env.REACT_APP_SERVER_ENV === 'Live') {
        BASE_URL = process.env.REACT_APP_LIVE_API_URL;
    }


    const initialValues = {
        tripType: "1",
        fromCityDestination: "",
        fromDestinationFlight: "",
        toCityDestination: "",
        toDestinationFlight: "",
        journeyDateOne: departureDate,
        journeyDateRound: "",
        travellersShow: "1 Pax, Economy",
        ADULT: "1",
        CHILD: "0",
        INFANT: "0",
        PC: "Economy",
        isDirectFlight: false,
        isConnectingFlight: false,
        travellersClass: {
            adults: "1",
            childrens: "",
            infants: "",
            prefferedClass: "Economy",
            resultFareType: "",
        }
    }

    // const cityList = [
    //     {
    //         city : "DEL - NEW DELHI",
    //         destinationFlight : "DEL-India"
    //     },
    //     {
    //         city : "BOM - MUMBAI",
    //         destinationFlight : "BOM-India"
    //     }
    // ]

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
            name: "PremiumEconomy Class",
            sortName: "PremiumEconomy"
        },
        {
            name: "Business Class",
            sortName: "Business"
        },
        {
            name: "PremiumBusiness Class",
            sortName: "PremiumBusiness"
        },
        {
            name: "First Class",
            sortName: "First"
        },
    ]

    const resultFareType = [
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

    const handleChangeTravellersValue = (event, setFieldValue, values, fieldNamme) => {
        setPrevillageForTicket(event.target.value)
        setFieldValue(fieldNamme, event.target.value);
        if (fieldNamme === "travellersClass.prefferedClass"
            || fieldNamme === "travellersClass.adults"
            || fieldNamme === "travellersClass.childrens"
            || fieldNamme === "travellersClass.infants") {

            let seatCount = 0;
            let travellersShowArr = reInitialValues.travellersShow.split(',');
            if (fieldNamme === "travellersClass.prefferedClass") {
                travellersShowArr[1] = event.target.value;
            } else if (fieldNamme === "travellersClass.adults") {

                setFieldValue("travellersClass.adults", event.target.value);
                setFieldValue("ADULT", event.target.value);
                setADULT(event.target.value);

                let adultCount = parseInt(event.target.value);
                if (adultCount) {
                    seatCount += adultCount;
                }
                let childrenCount = parseInt(values.travellersClass.childrens);

                if (childrenCount) {
                    seatCount += childrenCount;
                    setChild(childrenCount);

                }
                let infantCount = parseInt(values.travellersClass.infants);
                if (infantCount) {
                    seatCount += infantCount;
                }


            } else if (fieldNamme === "travellersClass.childrens") {


                setFieldValue("travellersClass.childrens", event.target.value);
                setFieldValue("CHILD", event.target.value);
                setChild(event.target.value)
                let adultCount = parseInt(values.travellersClass.adults);
                if (adultCount) {
                    seatCount += adultCount;
                }

                let childrenCount = parseInt(event.target.value);
                if (childrenCount) {
                    seatCount += childrenCount;
                }
                let infantCount = parseInt(values.travellersClass.infants);
                if (infantCount) {
                    seatCount += infantCount;
                }
            } else if (fieldNamme === "travellersClass.infants") {
                setFieldValue("travellersClass.infants", event.target.value);
                setFieldValue("INFANT", event.target.value);
                setInfant(event.target.value);
                let adultCount = parseInt(values.travellersClass.adults);
                if (adultCount) {
                    seatCount += adultCount;
                }

                let childrenCount = parseInt(values.travellersClass.childrens);

                if (childrenCount) {
                    seatCount += childrenCount;
                }
                let infantCount = parseInt(event.target.value);
                if (infantCount) {
                    seatCount += infantCount;
                }
            }
            travellersShowArr[0] = seatCount + " Pax";
            setFieldValue("travellersShow", travellersShowArr[0] + "," + travellersShowArr[1]);
            setTravellersArr(travellersShowArr[0] + "," + travellersShowArr[1]);
            setPC(travellersShowArr[1]);
        }
    }

    const handleClickCitySwap = (from, to) => {
        // console.log()
        console.log(from, to)
        if (from && from) {
            if (citySwapArrowStatus) {
                setCitySwapArrowStatus(false);
            } else {
                setCitySwapArrowStatus(true);
            }
            setFromSearch(to);
            setSearchTo(from);
            // setFieldValue("fromCityDestination", toCityDestination);
            // setFieldValue("toCityDestination", fromCityDestination);
        }
    }

    const handleChangeDate = (date) => {
        setDateForHorizontal(date);
      
        const valuesss = {
            "tripType": tripType,
            "previllageForTicket": previllageForTicket == 3 ? "SENIOR_CITIZEN" : previllageForTicket == 2 ? "STUDENT" : "",
            "fromCityDestination": fromSearch,
            "fromDestinationFlight": fromDestinationFlight ? fromDestinationFlight : "",
            "toCityDestination": searchTo,
            "toDestinationFlight": toDestinationFlight ? toDestinationFlight : "",
            "journeyDateOne": Moment(date).format('DD-MM-YYYY'),
            "travellersshow": travellersArr,
            "ADULT": adult,
            "CHILD": child,
            "INFANT": infant,
            "PC": pc,
            "isDirectFlight": false,
            "isConnectingFlight": false,
            "preferredAirline": [],

        };
        setLoading(true);
        //return false;
        FlightSearchService.Search(valuesss).then(async (response) => {
            if (response.status === 200) {
                if (response.data.status) {
                    setTripList(response.data.data)
                } else {
                    toast.error(response.data.message.message);
                }
            } else {
                toast.error("Something went wrong");
            }
            setLoading(false);
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
            setLoading(false);
        });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setTravellersModelShow(false);

        if(!fromSearch){
            setFromError("city is Required");
        }
        if(!searchTo){
            setToError("city is Required");
        }
        const checkFromCityDestination = cityList.find(obj => {
            return obj.city === fromSearch;
        });

        // if (checkFromCityDestination) {
        //     setFromDestinationFlight(checkFromCityDestination.destinationFlight)

        // }

        // For To 
        const checkToCityDestination = cityList.find(obj => {
            return obj.city === searchTo;
        });
        let startDate;
        let endDate;
        if (journeyDateOne) {
            startDate = Moment(journeyDateOne).format('YYYY-MM-DD');
            endDate = Moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
            // journeyDateOne = Moment(journeyDateOne).format('DD-MM-YYYY')
            console.warn("startDate", startDate);
            var dates = [];
            const start = Moment(startDate);
            const end = Moment(endDate);
            while (!start.isSame(end)) {
                dates.push(start.format("DD-MM-YYYY"));
                start.add(1, 'day');
            }
            setDateList(dates);
            //    setReInitialValues(values);


        }

        const valuesss = {
            "tripType": tripType,
            "previllageForTicket": previllageForTicket == 3 ? "SENIOR_CITIZEN" : previllageForTicket == 2 ? "STUDENT" : "",
            "fromCityDestination": fromSearch,
            "fromDestinationFlight": fromDestinationFlight ? fromDestinationFlight : "",
            "toCityDestination": searchTo,
            "toDestinationFlight": toDestinationFlight ? toDestinationFlight : "",
            "journeyDateOne": Moment(journeyDateOne).format('DD-MM-YYYY'),
            "travellersshow": travellersArr,
            "ADULT": adult || '0',
            "CHILD": child || '0',
            "INFANT": infant || '0',
            "PC": pc,
            "isDirectFlight": false,
            "isConnectingFlight": false,
            "preferredAirline": [],

        };

        FlightSearchService.Search(valuesss).then(async (response) => {
            setLoading(true);
            if (response.status === 200) {

                if (response.data.status) {

                    setTripList(response.data.data)

                } else {
                   let errData = response?.data?.message || "Some thing went wrong. Please contact with admin Thank you!"
                
                    toast.error(errData);
                }
            } else {
                setTripList([]);
                toast.error("Something went wrong");
            }


            setLoading(false);
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
            setLoading(false);
        });


    };





    useEffect(() => {
        fetchAirportList();
        fetchAirportCity();
    }, [])

    const fetchAirportCity = (countryCode) => {
        const url = `${BASE_URL}api/airport/?search=${countryCode ? countryCode : ""}`;
        const headers = {
            Authorization: `Bearer ${jwtToken}`
        };

        axios.get(url, { headers })
            .then((response) => {
                setToCityList(response.data.data.rows);

            })
            .catch((error) => {
                setError(error);
            });
    }

    const fetchAirportList = (countryCode) => {
        const url = `${BASE_URL}api/airport/?search=${countryCode ? countryCode : ""}`;
        const headers = {
            Authorization: `Bearer ${jwtToken}`
        };

        axios.get(url, { headers })
            .then((response) => {
                setCityList(response.data.data.rows);
            })
            .catch((error) => {
                setError(error);
            });
    };
    const handleSelectedCity = (value) => {
        setSearchFromList(true);
        setFromSearch(value);
        setDropDown(false);
        fetchAirportList(value);
        if (value) {
            const checkFromCityDestination = cityList.find(obj => {
                return obj.city === value;
            });

            if (checkFromCityDestination) {
                setFromDestinationFlight(checkFromCityDestination.destinationFlight)

            }
        }
    };

    const handleSelectedToCity = (value) => {
        setSearchFromList(true);
        setSearchTo(value);
        setDropTODown(false);
        fetchAirportCity(value);
        if (value) {
            const checkFromCityDestination = toCityList.find(obj => {
                return obj.city === value;
            });

            if (checkFromCityDestination) {
                setToDestinationFlight(checkFromCityDestination.destinationFlight)

            }
        }

    }
    const handleToChange = (e) => {
        setToError("");
        if (dropDown === true) {
            setDropDown(false)
            setDropTODown(true);
        }
        fetchAirportCity(e.target.value);
        // setDropTODown(true);
        // setDropDown(false)
        if (searchTo) {
            setSearchTo("");
            setDropDown(false)
            fetchAirportCity();

        } else {
            setSearchTo(e.target.value);
            setDropDown(false)
            fetchAirportCity(e.target.value);
        }

        if (!searchFromList) {
            fetchAirportList(e.target.value);
            setSearchTo(e.target.value);
            setDropTODown(true);
            setDropDown(false)
        } else {
            setSearchFromList(false);
            setSearchTo("");
            setDropDown(false);
            fetchAirportList(e.target.value);
        }
    };

    const handleInputChange = (e) => {
        setFromError("");
        if (dropToDown === true) {
            setDropTODown(false)
            fetchAirportList(e.target.value);
            setDropDown(true);

        }
        if (fromSearch) {
            setFromSearch();
            fetchAirportList();
        } else {
            setFromSearch(e.target.value);
            fetchAirportList(e.target.value);
        }

        if (!searchFromList) {
            setFromSearch(e.target.value);
            setDropDown(true);
            fetchAirportList(e.target.value);
        } else {
            setSearchFromList(false);
            setFromSearch("");
            fetchAirportList(e.target.value);
        }
    };

const handleSwipCity =(value)=>{
    alert(value)
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
                                dateList={dateList}
                                // onSubmit={handleOnSubmit}
                                enableReinitialize={true}

                            >
                                {({ classes, errors, touched, values, handleChange, setFieldValue }) => (
                                    <Form ref={nameForm} >
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
                                                            <div className='form-group field-label'>
                                                                <InputLabel className=''>From</InputLabel>
                                                                <div className={`swapbtn ${citySwapArrowStatus ? 'down' : ''}`} onClick={() => handleClickCitySwap(fromSearch, searchTo)}>
                                                                    <i className="fa fa-exchange" aria-hidden="true"></i>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    //    autoComplete='off'
                                                                    className='form-control'
                                                                    value={fromSearch}  // Assuming you meant "search" instead of "serach"
                                                                    onChange={handleInputChange}// Change onClick to onChange
                                                                    autofocus
                                                                    onClick={handleInputChange}

                                                                />
                                                                {fromError &&<span style={{color:"red"}}>{fromError}</span>}
                                                                {dropDown == true && <div className='searchdestinationboxclass' style={{ height: "200px", overflow: "auto" }}>
                                                                    {cityList && cityList.map((value, key) => (
                                                                        <div className='list' key={key} >
                                                                            {value.destinationFlight}
                                                                            <div className='' style={{ color: "#666666", fontSize: "11px" }} onClick={() => handleSelectedCity(value.city)}>{value.city}</div>
                                                                            <img className='flag' src={auFlag} />
                                                                        </div>
                                                                    ))}

                                                                </div>}

                                                            </div>
                                                        </Grid>

                                                        <Grid item className='col'>
                                                            <div className='form-group field-label'>
                                                                <InputLabel className=''>To</InputLabel>
                                                                <input
                                                                    type="text"
                                                                    autoFocus={dropToDown}
                                                                    className='form-control'
                                                                    value={searchTo}  // Assuming you meant "search" instead of "serach"
                                                                    onChange={handleToChange}// Change onClick to onChange
                                                                    onClick={handleToChange}
                                                                />
                                                                {toError &&<span style={{color:"red"}}>{toError}</span>}
                                                                {dropToDown == true && <div className='searchdestinationboxclass' style={{ height: "200px", overflow: "auto" }}>
                                                                    {toCityList && toCityList.map((value, key) => (
                                                                        <div className='list ' key={key} >
                                                                            {value.destinationFlight}
                                                                            <div className='' style={{ color: "#666666", fontSize: "11px" }} onClick={() => handleSelectedToCity(value.city)}>{value.city}</div>
                                                                            <img className='flag' src={auFlag} />
                                                                        </div>
                                                                    ))}

                                                                </div>}

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
                                                                <input className='form-control' name='travellersShow' id='travellersShow' type='text' value={values.travellersShow} onClick={() => onChangeTravellersShow()} />
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
                                                                                    {
                                                                                        seatNunmberAdult && seatNunmberAdult.map((value, key) => (
                                                                                          
                                                                                            <div key={key}>
                                                                                             
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    className="btn-check"
                                                                                                    autoComplete="off"
                                                                                                    name="travellersClass.adults"
                                                                                                    id={`travellersClass.adults${key}`}
                                                                                                    checked={values.travellersClass.adults === value.name ? "checked" : ""}
                                                                                                    value={value.name}
                                                                                                    onChange={(e) => {
                                                                                                        handleChangeTravellersValue(e, setFieldValue, values, "travellersClass.adults");
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
                                                                                                    checked={values.travellersClass.childrens === value.name ? "checked" : ""}
                                                                                                    value={value.name}
                                                                                                    onChange={(e) => {
                                                                                                        handleChangeTravellersValue(e, setFieldValue, values, "travellersClass.childrens");
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
                                                                                                    checked={values.travellersClass.infants === value.name ? "checked" : ""}
                                                                                                    value={value.name}
                                                                                                    onChange={(e) => {
                                                                                                        handleChangeTravellersValue(e, setFieldValue, values, "travellersClass.infants");
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
                                                                                defaultValue={values.travellersClass.prefferedClass}
                                                                                onChange={(e) => {
                                                                                    handleChangeTravellersValue(e, setFieldValue, values, "travellersClass.prefferedClass");
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
                                                                                defaultValue={values.travellersClass.resultFareType}
                                                                                onChange={(e) => {
                                                                                    handleChangeTravellersValue(e, setFieldValue, values, "travellersClass.resultFareType");
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
                                                                            onClick={handleSubmit}
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
                    <div className='flighttopbarblk'>
                        <div className='container'>
                            <div className='d-flex'>
                                <div className='me-xl-5'>
                                    <div class="headtext">{fromSearch} </div>
                                    <div class="subtext">{fromDestinationFlight}</div>
                                </div>
                                <div className='me-xl-5'>
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                                <div className='me-xl-5'>
                                    <div class="headtext">{searchTo} </div>
                                    <div class="subtext"> {toDestinationFlight}</div>
                                </div>
                                <div className='me-xl-5'>
                                    <div class="headtext">Departure Date </div>
                                    <div class="subtext">{(taskDate(journeyDateOne))}</div>
                                </div>
                                <div className=''>
                                    <div class="headtext">Passengers & Class </div>
                                    <div class="subtext"> {adult} Adult , {pc}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        loading ? <TailSpin color="red" radius={"8px"} />
                            :
                            tripList && tripList.length != 0 &&
                            <div className='container'>
                                {/* <h1>Ganeshs</h1> */}
                                <FlightSearchList
                                    dateForHorizontal={dateForHorizontal}
                                    tripList={tripList}
                                    reInitialValues={reInitialValues}
                                    dateList={dateList}
                                    handleChangeDate={handleChangeDate}

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
