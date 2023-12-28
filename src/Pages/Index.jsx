import * as React from 'react';
import Header from '../Component/Home/Header'
import { Box, Grid, FormControl, InputLabel, Input, InputAdornment, TextField } from '@mui/material';

export default function index() {

  return (
    <>
      <Header />

      <div className='homeflightsearchouterbox'>
        <div className='container'>
            <h4 className='text-center text-white'>Book flights and explore the world with us.</h4>
            <Box className='card home-flightsear-card'>
                <Box className='card-body'>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>From</InputLabel>
                                <TextField className='form-control' type='text' />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>To</InputLabel>
                                <TextField className='form-control' type='text' />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Departure</InputLabel>
                                <TextField className='form-control' type='text' />
                            </div>
                        </Grid>
                        {/* <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Return</InputLabel>
                                <TextField className='form-control' type='text' />
                            </div>
                        </Grid> */}
                        <Grid item xs={3}>
                            <div className='form-group field-label'>
                                <InputLabel className=''>Travellers & Class</InputLabel>
                                <TextField className='form-control' type='text' />
                            </div>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </div>  
        <div className='search-flights'> <button className='btn search-flights'>SEARCH FLIGHTS</button> </div>
      </div>  
    </>
  )
}
