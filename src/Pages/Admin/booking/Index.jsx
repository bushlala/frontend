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
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


function createData(ID, User, Route, BookingDate, Amount) {
    return { ID, User, Route, BookingDate, Amount };
}
  
const rows = [
createData('#01', 'Johan', 'New York City - London', '19-12-23', '23560 INR',),
createData('#01', 'Johan', 'London - tokyo', '20-12-23', '25560 INR',),
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
                    <Typography variant='' className="page-title my-auto">Booking</Typography>
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

                <div className="row">
                    <div className="col-12 col-sm-12">
                        <div className="card">
                            <div className="card-header d-lg-flex">
                                <h3 className="card-title mb-lg-0 mb-3">Booking List</h3>
                                {/* <div className="tabs-menu1 ms-auto border-0 p-0">
                                    <ul className="nav panel-tabs product-sale">
                                        <li><button type="button" className="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/AdForm' style={{ color: 'white'}}>+ Add New Agent</Link></button></li>
                                    </ul>
                                </div> */}
                            </div>
                            <div className="card-body product-table">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-bordered">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>ID#</TableCell>
                                            <TableCell align="center">User</TableCell>
                                            <TableCell align="center">Route</TableCell>
                                            <TableCell align="center">Booking Date</TableCell>
                                            <TableCell align="center">Amount</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.ID} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.User} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Route} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.BookingDate} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.Amount} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> <Button variant="contained" color="success"> Active </Button> </Typography></TableCell>
                                                <TableCell align="center">
                                                    <Link to='/adedit' className="text-danger" data-bs-toggle="tooltip" data-bs-original-title="Edit"><DeleteOutlineOutlinedIcon /></Link>
                                                </TableCell>
                                            </TableRow>
                                        ))} 
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    </>
  )
}
