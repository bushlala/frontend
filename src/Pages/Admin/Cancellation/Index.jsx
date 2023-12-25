import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Header from '../../../Component/Header'
import Sidebar from '../../../Component/Admin/Sidebar'
import { Link } from 'react-router-dom'
import Box from '@mui/system/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


function createData(TravelDate, UseTravelDater, Type, TripName, Status, Travellers, Price) {
    return { TravelDate, UseTravelDater, Type, TripName, Status, Travellers, Price };
}
  
const rows = [
createData('17-12-2023', '23897', 'Flight', 'New york City - London', 'Confirmed', '2 adults', 'INR 452,80.00'),
createData('17-12-2023', '23897', 'Flight', 'New york City - London', 'Confirmed', '2 adults', 'INR 452,80.00'),
];

function handleClick(event) {
event.preventDefault();
console.info('You clicked a breadcrumb.');
}


export default function Index() {
  return (
    <>
       <Header />
       <Sidebar />
       <div className="main-content app-content">
            <div className="container-fluid">

      {/* <!-- PAGE-HEADER --> */}
                <Box component="" className="page-header">
                    <Typography variant='' className="page-title my-auto">Cancellation</Typography>
                    <Box>
                        <div role="presentation" onClick={handleClick}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                underline="hover"
                                color="inherit"
                                to="/">
                                Home
                                </Link>
                                <Typography color="text.primary">Booking</Typography>
                            </Breadcrumbs>
                        </div> 
                    </Box>
                </Box>
                
                {/* <!-- PAGE-HEADER END --> */}
                    <Grid spacing={5}>
                        <Grid mb={4} xl={12}>
                            <Card>
                                <Typography variant='h6' className='px-4 py-3'>
                                    Upcoming Trips
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Travel date</TableCell>
                                            <TableCell align="center">Trip ID</TableCell>
                                            <TableCell align="center">Type </TableCell>
                                            <TableCell align="center">Trip Name</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Travellers</TableCell>
                                            <TableCell align="center">Price</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.TravelDate} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.UseTravelDater} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Type} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.TripName} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Status} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Travellers} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Price} </Typography></TableCell>
                                            </TableRow>
                                        ))} 
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>   
                        </Grid> 

                        <Grid mb={4} xl={12}>
                            <Card>
                                <Typography variant='h6' className='px-4 py-3'>
                                 Completed Trips
                                </Typography>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Travel date</TableCell>
                                            <TableCell align="center">Trip ID</TableCell>
                                            <TableCell align="center">Type </TableCell>
                                            <TableCell align="center">Trip Name</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Travellers</TableCell>
                                            <TableCell align="center">Price</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.TravelDate} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.UseTravelDater} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Type} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.TripName} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Status} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Travellers} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Price} </Typography></TableCell>
                                            </TableRow>
                                        ))} 
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>   
                        </Grid>             
                                   
                    </Grid>    
            </div>
        </div>

    </>
  )
}
