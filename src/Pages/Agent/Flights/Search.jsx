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

    const [dates, setDates] = useState([]);
    const [departureDate, setDepartureDate] = useState(new Date());
    const [minDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState();
    const [loading, setLoading] = useState(false);
    const [citySwapArrowStatus, setCitySwapArrowStatus] = useState(true);
    const [fromSearch, setFromSearch] = useState("BLR - Bengaluru");
    const [searchTo, setSearchTo] = useState("DEL - Delhi");
    const [error, setError] = useState("");
    const [fromDestinationFlight, setFromDestinationFlight] = useState("BLR - India");
    const [toDestinationFlight, setToDestinationFlight] = useState("DEL - India");
    const [journeyDateOne, setJourneyDateOne] = useState(new Date());
    const [adult, setADULT] = useState("1");
    const [child, setChild] = useState("0");
    const [infant, setInfant] = useState("0");
    const [travellersArr, setTravellersArr] = useState();
    const [previllageForTicket, setPrevillageForTicket] = useState();
    const [dateList, setDateList] = useState([]);
    const [pc, setPC] = useState("Economy");
    const [fromError, setFromError] = useState("");
    const [toError, setToError] = useState("");
    const [selectedNationality, setSelectedNationality] = useState({
        label: "BLR - Bengaluru"
    });
    const [selectedTo, setSelectedTO] = useState({label: "DEL - Delhi"});;

    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? '#6c5ffc' : 'white', // Set red background for selected option
        }),
      };
      
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

    const handleClickCitySwap = (from, to, setFieldValue) => {
        if (from && from) {
            if (citySwapArrowStatus) {
                setCitySwapArrowStatus(false);
            } else {
                setCitySwapArrowStatus(true);
            }
            setSelectedNationality(to);
            setSelectedTO(from);
            setFieldValue("fromCityDestination", from.label);
            setFieldValue("toCityDestination", to.label);
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
            "journeyDateOne": date,
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

        if (!fromSearch) {
            setFromError("city is Required");
        }
        if (!selectedTo) {
            setToError("city is Required");
        }

        let startDate;
        let endDate;
        if (journeyDateOne) {
            startDate = Moment(journeyDateOne).format('YYYY-MM-DD');
            endDate = Moment(startDate, "YYYY-MM-DD").add(7, 'days').format('YYYY-MM-DD');
            // journeyDateOne = Moment(journeyDateOne).format('DD-MM-YYYY')
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
                    let errData = response?.data?.message?.message || "Some thing went wrong. Please contact with admin Thank you!"
                    toast.error(errData);
                }
            } else {
                setTripList([]);
                toast.error("Something went wrong");
            }

            setLoading(false);
        }).catch((error) => {
            toast.error(error);
            setLoading(false);
        });


    };

   useEffect(() => {
        fetchAirportList();

    }, [])


    const fetchAirportList = (countryCode) => {
        const valuesss = {
            "search": countryCode
        }
        FlightSearchService.AirPort(valuesss).then(async (response) => {

            if (response.status === 200) {
                let result = response.data.data.rows;
                setCityList(result);
            } else {
                setCityList([]);

            }
        }).catch((e) => {
            console.log(e);
        });

    };

    const optionValues = cityList.map((item) => ({
        value: item.destinationFlight,
        label: item.city,
        image: item.flagUrl
    }));


    const handleSelectedOptions = (selectedOption) => {
        setFromError("");
        setSelectedNationality(selectedOption)
        setFromSearch(selectedOption.label)
        setFromDestinationFlight(selectedOption.value)
    }
    const handleSelectedTOOptions = (selectedOption) => {
        setToError("");
        setSelectedTO(selectedOption)
        setSearchTo(selectedOption.label)
        setToDestinationFlight(selectedOption.value)
    }
    const handleInputChange = (inputValue) => {
        // setSearchKey(inputValue);
        fetchAirportList(inputValue);
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
                                                            <div className='form-group field-label search-fild'>
                                                                <InputLabel className=''>From</InputLabel>
                                                                <div className={`swapbtn ${citySwapArrowStatus ? 'down' : ''}`} onClick={() => handleClickCitySwap(selectedNationality, selectedTo, setFieldValue)}>
                                                                    <i className="fa fa-exchange" aria-hidden="true"></i>
                                                                </div>
                                                                <Field
                                                                    as={Select}
                                                                    className='form-control active'
                                                                    name='fromCityDestination'
                                                                    value={selectedNationality}
                                                                    onChange={(selectedNationality)=>handleSelectedOptions(selectedNationality)}
                                                                    options={optionValues}
                                                                    styles={customStyles}
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
                                                                        // </div>

                                                                    )}
                                                                    onInputChange={handleInputChange}
                                                                />
                                                                {fromError && <span style={{ color: "red" }}>{fromError}</span>}

                                                            </div>
                                                        </Grid>

                                                        <Grid item className='col'>
                                                            <div className='form-group field-label search-fild'>
                                                                <InputLabel className=''>To</InputLabel>
                                                                <Field
                                                                    as={Select}
                                                                    className='form-control'
                                                                    name='toCityDestination'
                                                                    value={selectedTo}
                                                                    onChange={handleSelectedTOOptions}
                                                                    options={optionValues}
                                                                    styles={customStyles}
                                                                    formatOptionLabel={(country, { context }) => (
                                                                        <div className="searchdestinationboxclass list d-flex ">
                                                                                <div className='search-text'>
                                                                                    <div>
                                                                                        {context === "menu" &&    country.value}
                                                                                    </div>    
                                                                                    {country.label}
                                                                                </div>
                                                                                {context === "menu" && <div><img className="flagimage" src={country.image} /></div>}
                                                                            </div>
                                                                       
                                                                    )}
                                                                    onInputChange={handleInputChange}
                                                                />
                                                                {toError && <span style={{ color: "red" }}>{toError}</span>}
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
export default AgentFlightSearch;