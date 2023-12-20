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
import Sidebar from '../../Component/Sidebar'
import { Link } from 'react-router-dom'


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
  ];

export default function Index() {
    
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
                                <h3 className="card-title mb-lg-0 mb-3">My Customer</h3>
                                <div className="tabs-menu1 ms-auto border-0 p-0">
                                    <ul className="nav panel-tabs product-sale">
                                        <li><button type="button" className="btn" style={{ backgroundColor: '#6c757d' }}><Link to='/agentform' style={{ color: 'white'}}>+ Add New Customer</Link></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body product-table">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-bordered">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Title (100g serving)</TableCell>
                                            <TableCell align="right">First Name	</TableCell>
                                            <TableCell align="right">Last Name	</TableCell>
                                            <TableCell align="right">Gender</TableCell>
                                            <TableCell align="right">DOB</TableCell>
                                            <TableCell align="right">Passport</TableCell>
                                            <TableCell align="right">Expriry</TableCell>
                                            <TableCell align="right">Update</TableCell>
                                            <TableCell align="right">Action</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>

                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.calories} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.fat} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.carbs} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.protein} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.protein} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.protein} </Typography></TableCell>
                                                <TableCell align="right"><Typography variant="span" className="mb-0 fs-14 fw-semibold"> {row.protein} </Typography></TableCell>
                                                <TableCell align="right">
                                                    <Typography variant="span" className="mb-0 fs-14 fw-semibold"> 
                                                    <Link to='/agentedit' className="btn text-primary btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Edit"><Typography variant="span" className="fa fa-edit fs-14"> </Typography> </Link>
                                                        <Link to='' className="btn text-danger btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><Typography variant="span"className="fa fa-trash fs-14"> </Typography> </Link>
                                                        <Link to='/agentview' className="btn text-dark btn-sm" data-bs-toggle="tooltip" data-bs-original-title="Delete"><Typography variant="span"className="fa-solid fa-eye"> </Typography> </Link>
                                                    </Typography>
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
