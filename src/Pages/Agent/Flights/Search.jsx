import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Formik } from "formik";
import * as Yup from "yup";
//import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import internetSecurity from '../../../assets/images/internet-security.png'
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import { Box, Grid, InputLabel, Link } from '@mui/material';
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
    const validationSchema = Yup.object().shape({
        fromcitydesti: Yup.string()
            .required("Title is required"),
            //.max(60, 'First name maximum length is 60'),
        tocitydesti: Yup.string()
            .required("First name is required")
    });
    // const initialValues = {
    //     "title":"",
    //     "firstName":"",
    //     "lastName":"",
    //     "gender":"male",
    //     "email":"",
    //     "mobileNumber":"",
    //     "passport": "",
    //     "dob":"",
    //     "passportExp":"",
    // }
    const nameForm = React.useRef(null)
    const [reInitialValues, setReInitialValues] = React.useState(initialValues);

    // const getSearchData = async (slug) => {
    //     //console.log("slug",slug);
    //     FlightSearchService.Search(oneWaySearchRequest).then(async (response) => {
    //         if(response.data.status){
    //             //console.log("response",response.data.data);
    //             var result = response.data.data;
                
    //         }else{
    //             toast.error(response.data.message);
    //         }
    //     }).catch((e) => {
    //         console.log(e);
    //         toast.error('Something went wrong');
    //     });
    // };

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
                                                <Link className="nav-link active" aria-current="page" href="#">One-Way</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" href="#">Round-Trip</Link>
                                            </li>
                                        </ul>  
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <div className='form-group field-label'>
                                                    <InputLabel className=''>From</InputLabel>
                                                    <input 
                                                    className='form-control' 
                                                    type='text' />
                                                </div>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <div className='form-group field-label'>
                                                    <InputLabel className=''>To</InputLabel>
                                                    <input className='form-control' type='text' />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div className='form-group field-label'>
                                                    <InputLabel className=''>Departure</InputLabel>
                                                    <input className='form-control' type='text' />
                                                </div>
                                            </Grid>
                                            {/* <Grid item xs={2}>
                                                <div className='form-group field-label'>
                                                    <InputLabel className=''>Return</InputLabel>
                                                    <input className='form-control' type='text' />
                                                </div>
                                            </Grid> */}
                                            <Grid item xs={2}>
                                                <div className='form-group field-label'>
                                                    <InputLabel className=''>Travellers & Class</InputLabel>
                                                    <input className='form-control' type='text' />
                                                </div>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <div className='search-flights'> 
                                                   <Link to={`*`}><button className='btn search-flights' type='submit'>SEARCH FLIGHTS</button></Link> 
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
