import * as React from 'react';
import Header from '../Component/Home/Header'
import internetSecurity from '../assets/images/internet-security.png'
import { Box, Grid, FormControl, InputLabel, Input, InputAdornment, TextField, Link } from '@mui/material';

export default function index() {

  return (
    <>
      <Header />

      <div className='homeflightsearchouterbox'>
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
                                <input className='form-control' type='text' />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>To</InputLabel>
                                <input className='form-control' type='text' />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Departure</InputLabel>
                                <input className='form-control' type='text' />
                            </div>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Return</InputLabel>
                                <input className='form-control' type='text' />
                            </div>
                        </Grid> */}
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Travellers & Class</InputLabel>
                                <input className='form-control' type='text' />
                            </div>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>  
        <div className='search-flights'> <button className='btn search-flights'>SEARCH FLIGHTS</button> </div>
      </div>  

      <div className='lastsearchbox'>
            <div className='container'>
                 <div className='row'>
                        <div className='col-3'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div  className='d-flex justify-content-center align-items-center'>
                                        <div className=''>
                                            <img src={internetSecurity} />  
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
                                            <img src={internetSecurity} />  
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
                                            <img src={internetSecurity} />  
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
                                            <img src={internetSecurity} />  
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
      </div>

      <div className='copyright'>
          <div className='container'>
               <p>© 2023 All Rights Reserved.</p>
          </div>                  
      </div>
    </>
  )
}
