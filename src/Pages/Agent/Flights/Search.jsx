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
        "isConnectingFlight": false
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
                                                    <div className='searchdestinationboxclass'>
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
                                                    </div>

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
                                                    <div className='searchdestinationboxclass'>
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
                                                    </div>
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
                                                    <input className='form-control' type='text' />
                                                    <div className='travellersshow'>
                                                        <div className='d-flex justify-content-between'> 
                                                            <h6>Travellers</h6>
                                                            <i className='fa fa-times'></i>    
                                                        </div>
                                                        <div className='mb-2'>
                                                            <span className='small'>Adults</span>
                                                            <div className='boxselectpax'>
                                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                                                    <label class="btn" for="btnradio1">1</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                                                    <label class="btn" for="btnradio2">2</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                                                    <label class="btn" for="btnradio3">3</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                                                    <label class="btn" for="btnradio4">4</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                                                                    <label class="btn" for="btnradio5">5</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                                                                    <label class="btn" for="btnradio6">6</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off" />
                                                                    <label class="btn" for="btnradio7">7</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off" />
                                                                    <label class="btn" for="btnradio8">8</label>

                                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio9" autocomplete="off" />
                                                                    <label class="btn" for="btnradio9">9</label>
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div className='mb-2'>
                                                            <span className='small'>Children </span>
                                                            <div className='boxselectpax'>
                                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio" id="Children1" autocomplete="off" />
                                                                    <label class="btn" for="Children1">1</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children2" autocomplete="off" />
                                                                    <label class="btn" for="Children2">2</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children3" autocomplete="off" />
                                                                    <label class="btn" for="Children3">3</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children4" autocomplete="off" />
                                                                    <label class="btn" for="Children4">4</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children5" autocomplete="off" />
                                                                    <label class="btn" for="Children5">5</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children6" autocomplete="off" />
                                                                    <label class="btn" for="Children6">6</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children7" autocomplete="off" />
                                                                    <label class="btn" for="Children7">7</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children8" autocomplete="off" />
                                                                    <label class="btn" for="Children8">8</label>

                                                                    <input type="radio" class="btn-check" name="Children" id="Children9" autocomplete="off" />
                                                                    <label class="btn" for="Children9">9</label>
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div className='mb-2'>
                                                            <span className='small'>Infants </span>
                                                            <div className='boxselectpax'>
                                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                    <input type="radio" class="btn-check" name="btnradio" id="Infants1" autocomplete="off" />
                                                                    <label class="btn" for="Infants1">1</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants2" autocomplete="off" />
                                                                    <label class="btn" for="Infants2">2</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants3" autocomplete="off" />
                                                                    <label class="btn" for="Infants3">3</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants4" autocomplete="off" />
                                                                    <label class="btn" for="Infants4">4</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants5" autocomplete="off" />
                                                                    <label class="btn" for="Infants5">5</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants6" autocomplete="off" />
                                                                    <label class="btn" for="Infants6">6</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants7" autocomplete="off" />
                                                                    <label class="btn" for="Infants7">7</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants8" autocomplete="off" />
                                                                    <label class="btn" for="Infants8">8</label>

                                                                    <input type="radio" class="btn-check" name="Infants" id="Infants9" autocomplete="off" />
                                                                    <label class="btn" for="Infants9">9</label>
                                                                </div>
                                                            </div>    
                                                        </div>
                                                        <div class="mb-2">
                                                            <span class="small">Preffered Class</span>
                                                            <select  class="form-select">
                                                                <option value="EC" selected="">Economy Class</option>
                                                                <option value="PE">PremiumEconomy Class</option>
                                                                <option value="BU">Business Class</option>
                                                                <option value="PB">PremiumBusiness Class</option>
                                                                <option value="FI">First Class</option>
                                                            </select>
                                                         </div>
                                                        <div class="mb-2">
                                                            <span class="small">Result Fare Type</span>
                                                            <select  class="form-select">
                                                                <option value="2" selected="">Regular Fare</option>
                                                                <option value="3">Student Fare</option>
                                                                <option value="4">senior citizen</option>
                                                            </select>
                                                         </div>

                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item className='col'>
                                                <div className='search-flights'> 
                                                   <button className='btn search-flights' type='submit'>SEARCH FLIGHTS</button>
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
