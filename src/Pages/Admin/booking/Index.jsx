import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';



function createData(name, calories, fat, carbs, protein, total, register ) {
    return { name, calories, fat, carbs, protein, total,  register };
}
  
  const rows = [
    createData('Demo', 'Johan Taylor', 'B2B', 'Indore, Madhaya Pradesh, India', '35600 INR2', '23560 INR', '30-08-2023'),
    createData('Demo', 'Johan Taylor', 'B2B', 'Indore, Madhaya Pradesh, India', '35600 INR2', '23560 INR', '30-08-2023'),
    createData('Demo', 'Johan Taylor', 'B2B', 'Indore, Madhaya Pradesh, India', '35600 INR2', '23560 INR', '30-08-2023'),
    createData('Demo', 'Johan Taylor', 'B2B', 'Indore, Madhaya Pradesh, India', '35600 INR2', '23560 INR', '30-08-2023'),
    createData('Demo', 'Johan Taylor', 'B2B', 'Indore, Madhaya Pradesh, India', '35600 INR2', '23560 INR', '30-08-2023'),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
  ];

  


export default function List() {
  return (
    <>
       <Header />
       <Sidebar />
       <div className="main-content app-content">
            <div className="container-fluid">

      {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                  <h1 className="page-title my-auto">Dashboard</h1>
                  <div>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}

                <div className="row">
                    <div className="col-12 col-sm-12">
                        <div className="card">
                            <div className="card-header d-lg-flex">
                                <h3 className="card-title mb-lg-0 mb-3">Agent List</h3>
                                <div className="tabs-menu1 ms-auto border-0 p-0">
                                    <ul className="nav panel-tabs product-sale">
                                        <li><button type="button" className="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/AdForm' style={{ color: 'white'}}>+ Add New Agent</Link></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body product-table">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-bordered">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Company</TableCell>
                                            <TableCell align="center">Agent</TableCell>
                                            <TableCell align="center">Agent Group</TableCell>
                                            <TableCell align="center">Location</TableCell>
                                            <TableCell align="center">Wallet</TableCell>
                                            <TableCell align="center">Total Sale</TableCell>
                                            <TableCell align="center">Status</TableCell>
                                            <TableCell align="center">Register</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.calories} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.fat} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.carbs} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.protein} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.total} </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> <Button variant="contained" color="success"> Active </Button> </Typography></TableCell>
                                                <TableCell align="center"><Typography variant="span" className="mb-0 fs-14"> {row.register} </Typography></TableCell>
                                                <TableCell align="center">
                                                    <Button variant="contained" color="success"> Balance Sheet </Button> 
                                                    <Link to='/adedit' className="btn text-primary btn-sm bg-danger ms-3" data-bs-toggle="tooltip" data-bs-original-title="Edit"><span className="fa fa-edit fs-14 text-white"></span></Link>
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
